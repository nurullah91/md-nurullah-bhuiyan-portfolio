import envConfig from "@/config/envConfig";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const cookiesStore = await cookies();

      cookiesStore.delete("accessToken");

      redirect("/login");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
