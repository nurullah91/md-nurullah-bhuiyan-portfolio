/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/AxiosInstance";

export const loginUser = async (userData: string) => {
  try {
    const { data } = await axiosInstance.post("/login", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.success) {
      const cookieStore = await cookies();
      cookieStore.set("accessToken", data?.token);

      return data;
    }
  } catch (error: any) {
    // Return the error message for notify user
    console.log(error.response.data);
    return {
      success: false,
      message: error?.response?.data?.message,
    };
  }
};

export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
};

export const getCurrentUser = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return decodedToken;
  }

  return decodedToken;
};

export const forgetPassword = async (userData: string) => {
  try {
    const { data } = await axiosInstance.post(
      "/auth/forget-password",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (data.success) {
      return data;
    }
  } catch (error: any) {
    return {
      success: false,
      message: error?.response?.data?.message,
    };
  }
};
