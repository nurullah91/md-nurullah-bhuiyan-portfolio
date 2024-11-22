/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser } from "@/services/Auth";
import { createBlog, deleteBlog, updateBlog } from "@/services/blogs";
import {
  createExperience,
  deleteExperience,
  updateExperience,
} from "@/services/experiences";
import {
  createProject,
  deleteProject,
  updateProject,
} from "@/services/projects";
import { createSkill, deleteSkill } from "@/services/skills";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLoginUser = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["USER_SIGNIN"],
    mutationFn: async (userData: string) => await loginUser(userData),
  });
};

export const useCreateSkills = (skillsType: string) => {
  return useMutation<any, Error, string>({
    mutationKey: ["CREATE_SKILLS"],
    mutationFn: async (skillsData) => await createSkill(skillsData, skillsType),

    onSuccess: () => {
      toast.success("Skills created successfully");
    },

    onError: () => {
      toast.error("Failed to create skills");
    },
  });
};

export const useCreateProject = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["CREATE_PROJECT"],
    mutationFn: async (projectData) => await createProject(projectData),

    onSuccess: () => {
      toast.success("Project created successfully");
    },

    onError: () => {
      toast.error("Failed to create project");
    },
  });
};

export const useCreateBlog = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["CREATE_BLOG"],
    mutationFn: async (blogData) => await createBlog(blogData),

    onSuccess: () => {
      toast.success("Blog created successfully");
    },

    onError: () => {
      toast.error("Failed to create blog");
    },
  });
};

export const useCreateExperience = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["CREATE_EXPERIENCE"],
    mutationFn: async (experienceData) =>
      await createExperience(experienceData),

    onSuccess: () => {
      toast.success("Experience created successfully");
    },

    onError: () => {
      toast.error("Failed to create experience");
    },
  });
};

export const useUpdateProject = (projectId: string) => {
  return useMutation<any, Error, string>({
    mutationKey: ["UPDATE_PROJECT"],
    mutationFn: async (projectData) =>
      await updateProject(projectData, projectId),

    onSuccess: () => {
      toast.success("Project updated successfully");
    },

    onError: () => {
      toast.error("Failed to update project");
    },
  });
};

export const useUpdateBlog = (blogId: string) => {
  return useMutation<any, Error, string>({
    mutationKey: ["UPDATE_BLOG"],
    mutationFn: async (blogData) => await updateBlog(blogData, blogId),

    onSuccess: () => {
      toast.success("Blog updated successfully");
    },

    onError: () => {
      toast.error("Failed to update blog");
    },
  });
};

export const useUpdateExperience = (experienceId: string) => {
  return useMutation<any, Error, string>({
    mutationKey: ["UPDATE_EXPERIENCE"],
    mutationFn: async (experienceData) =>
      await updateExperience(experienceData, experienceId),

    onSuccess: () => {
      toast.success("Experience updated successfully");
    },

    onError: () => {
      toast.error("Failed to update experience");
    },
  });
};

export const useDeleteSkills = (skillType: string) => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_SKILLS"],
    mutationFn: async (skillId) => await deleteSkill(skillType, skillId),

    onSuccess: () => {
      toast.success("Skills deleted successfully");
    },

    onError: () => {
      toast.error("Failed to delete skills");
    },
  });
};

export const useDeleteProject = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_PROJECT"],
    mutationFn: async (projectId) => await deleteProject(projectId),

    onSuccess: () => {
      toast.success("Project deleted successfully");
    },

    onError: () => {
      toast.error("Failed to delete Project");
    },
  });
};
export const useDeleteBlog = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_BLOG"],
    mutationFn: async (blogId) => await deleteBlog(blogId),

    onSuccess: () => {
      toast.success("Blog deleted successfully");
    },

    onError: () => {
      toast.error("Failed to delete Blog");
    },
  });
};

export const useDeleteExperience = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_EXPERIENCE"],
    mutationFn: async (experienceId) => await deleteExperience(experienceId),

    onSuccess: () => {
      toast.success("Experience deleted successfully");
    },

    onError: () => {
      toast.error("Failed to delete Experience");
    },
  });
};
