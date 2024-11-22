/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const createExperience = async (experience: string): Promise<any> => {
  try {
    const { data } = await axiosInstance.post(`/experience`, experience, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidateTag("experience");

    return data;
  } catch {
    throw new Error("Failed to create experience");
  }
};

export const deleteExperience = async (experienceId: string): Promise<any> => {
  try {
    const { data } = await axiosInstance.delete(`/experience/${experienceId}`);

    revalidateTag("experience");
    return data;
  } catch {
    throw new Error("Failed to delete experience");
  }
};

export const updateExperience = async (
  experience: string,
  experienceId: string
): Promise<any> => {
  try {
    const { data } = await axiosInstance.post(
      `/experience/${experienceId}`,
      experience,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    revalidateTag("experience");

    return data;
  } catch {
    throw new Error("Failed to update experience");
  }
};

export const getAllExperiences = async () => {
  const res = await fetch(`${envConfig.baseApi}/experience`, {
    cache: "force-cache",
    next: {
      tags: ["experience"],
    },
  });

  return res.json();
};

export const getSingleExperiences = async (experienceId: string) => {
  const res = await fetch(`${envConfig.baseApi}/experience/${experienceId}`, {
    cache: "force-cache",
    next: {
      tags: ["experience"],
    },
  });

  return res.json();
};
