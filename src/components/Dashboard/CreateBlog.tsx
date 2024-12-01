"use client";
import { useCreateBlog } from "@/hooks";
import React, { useState } from "react";
import TiptapEditor from "./TiptapEditor";

const CreateBlog = () => {
  const createBlogMutation = useCreateBlog();
  const [title, setTitle] = useState<string>("");

  const handleSaveBlog = async (content: object) => {
    const blogData = {
      title,
      content,
      createdAt: new Date().toISOString(), // Add createdAt timestamp
    };

    try {
      await createBlogMutation.mutateAsync(JSON.stringify(blogData));
    } catch (error) {
      console.error("Failed to save blog:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TiptapEditor onSave={handleSaveBlog} />
    </div>
  );
};

export default CreateBlog;
