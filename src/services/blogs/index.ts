/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const createBlog = async (blog: string): Promise<any> => {
  try {
    const { data } = await axiosInstance.post(`/blogs`, blog, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidateTag("blogs");

    return data;
  } catch {
    throw new Error("Failed to create blog");
  }
};

export const deleteBlog = async (blogId: string): Promise<any> => {
  try {
    const { data } = await axiosInstance.delete(`/blogs/${blogId}`);

    revalidateTag("blogs");
    return data;
  } catch {
    throw new Error("Failed to delete blog");
  }
};

export const updateBlog = async (
  blog: string,
  blogId: string
): Promise<any> => {
  try {
    const { data } = await axiosInstance.post(`/blogs/${blogId}`, blog, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidateTag("blogs");

    return data;
  } catch {
    throw new Error("Failed to update blog");
  }
};

export const getAllBlogs = async () => {
  const res = await fetch(`${envConfig.baseApi}/blogs`, {
    cache: "force-cache",
    next: {
      tags: ["blogs"],
    },
  });

  return res.json();
};

export const getSingleBlog = async (blogId: string) => {
  const res = await fetch(`${envConfig.baseApi}/blogs/${blogId}`, {
    cache: "force-cache",
    next: {
      tags: ["blog"],
    },
  });

  return res.json();
};
