/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const createProject = async (project: string): Promise<any> => {
  try {
    const { data } = await axiosInstance.post(`/projects`, project, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidateTag("projects");

    return data;
  } catch {
    throw new Error("Failed to create project");
  }
};

export const deleteProject = async (projectId: string): Promise<any> => {
  try {
    const { data } = await axiosInstance.delete(`/projects/${projectId}`);

    revalidateTag("projects");
    return data;
  } catch {
    throw new Error("Failed to delete project");
  }
};

export const updateProject = async (
  project: string,
  projectId: string
): Promise<any> => {
  try {
    const { data } = await axiosInstance.post(
      `/projects/${projectId}`,
      project,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    revalidateTag("projects");

    return data;
  } catch {
    throw new Error("Failed to update project");
  }
};

export const getAllProjects = async () => {
  const res = await fetch(`${envConfig.baseApi}/projects`, {
    cache: "force-cache",
    next: {
      tags: ["projects"],
    },
  });

  return res.json();
};

export const getSingleProject = async (projectId: string) => {
  const res = await fetch(`${envConfig.baseApi}/projects/${projectId}`, {
    cache: "force-cache",
    next: {
      tags: ["project"],
    },
  });

  return res.json();
};
