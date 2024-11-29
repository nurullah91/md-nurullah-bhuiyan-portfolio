"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { useCreateBlog } from "@/hooks";
import { toast } from "sonner";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const TextEditor = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState<string>("");
  const {
    mutate: handleCreateBlog,
    isPending,
    isSuccess,
    isError,
  } = useCreateBlog();

  const config = {
    readonly: false, // Allow editing
    placeholder: "Start typing...",
    toolbarSticky: true,
    minHeight: "80vh",
  };

  const handleChange = (value: string) => {
    setContent(value);
  };

  const handleSubmit = () => {
    const blogData = {
      title: "Sample Blog Title",
      content,
      author: "Md Nurullah Bhuiyan",

      createdAt: new Date(),
    };

    handleCreateBlog(JSON.stringify(blogData));
    setContent(" ");
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      toast.success("Blog created sucessfull");
    } else if (!isPending && isError) {
      toast.error("Faild to create blog");
    }
  }, [isPending, isSuccess, isError]);

  return (
    <div>
      <JoditEditor
        ref={editorRef}
        value={content}
        config={config}
        onBlur={(newContent) => handleChange(newContent)}
      />
      <Button onClick={handleSubmit} disabled={isPending} className="mt-4">
        {isPending ? "Loading..." : "Post"}
      </Button>
    </div>
  );
};

export default TextEditor;
