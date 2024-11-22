/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const createSkill = async (
  skill: string,
  skillType: string
): Promise<any> => {
  try {
    const { data } = await axiosInstance.post(`/skills/${skillType}`, skill, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidateTag("skills");

    return data;
  } catch {
    throw new Error("Failed to create skill");
  }
};

export const deleteSkill = async (
  skillType: string,
  skillId: string
): Promise<any> => {
  try {
    const { data } = await axiosInstance.delete(
      `/skills/${skillType}/${skillId}`
    );

    revalidateTag("skills");
    return data;
  } catch {
    throw new Error("Failed to update skill");
  }
};

export const getAllSkills = async (skillType: string) => {
  const res = await fetch(`${envConfig.baseApi}/skills/${skillType}`, {
    cache: "force-cache",
    next: {
      tags: ["skills"],
    },
  });

  return res.json();
};
