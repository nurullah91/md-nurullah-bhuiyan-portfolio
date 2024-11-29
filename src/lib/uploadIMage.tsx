"use server";

import envConfig from "@/config/envConfig";
import axios from "axios";
import { toast } from "sonner";

export const uploadImage = async (formData: FormData) => {
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${envConfig.imageUploadCloudName}/image/upload`,
      formData
    );

    return response.data;
  } catch {
    toast.error("Upload failed");
  }
};
