"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { useCreateBlog } from "@/hooks";
import { toast } from "sonner";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { FieldValues } from "react-hook-form";
import { uploadImage } from "@/lib/uploadIMage";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const TextEditor = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [imagePreview, setImageImagePreview] = useState<string>("");
  const [loadingCreatePost, setLoadingCreatePost] = useState(false);

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
    iframe: true, // Use iframe for styling isolation
    iframeCSS: `
    @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
    body {
      @apply prose;
      font-family: 'Inter', sans-serif;
    }
  `,
    style: {
      fontSize: "16px",
      fontFamily: "'Inter', sans-serif",
    },
  };

  const handleImageChange = (e: FieldValues) => {
    const file = e.target.files[0];

    setThumbnail(file);
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (value: string) => {
    setContent(value);
  };

  const handlePostBlog = async () => {
    setLoadingCreatePost(true);

    const formData = new FormData();

    if (thumbnail) {
      formData.append("file", thumbnail);
    }
    formData.append("upload_preset", "portfolio");

    const imageUploadResponse = await uploadImage(formData);
    const thumbnailUrl = imageUploadResponse?.secure_url;

    const blogData = {
      title,
      content,
      thumbnail: thumbnailUrl,
      author: {
        name: "Md Nurullah Bhuiyan",
        profileImg:
          "https://res.cloudinary.com/dbmarcy6l/image/upload/v1733084013/nurullah-squire-small-photo_uo6ypl.jpg",
      },
      createdAt: new Date(),
    };

    handleCreateBlog(JSON.stringify(blogData));
    setContent(" ");
    setImageImagePreview("");
    setTitle("");
    setLoadingCreatePost(false);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      toast.success("Blog created sucessfull");
    } else if (!isPending && isError) {
      toast.error("Faild to create blog");
    }
  }, [isPending, isSuccess, isError]);

  return (
    <div className="pros">
      <input
        type="text"
        placeholder="Enter blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full shadow-md my-4 py-3 px-6 rounded-md border"
      />

      <JoditEditor
        ref={editorRef}
        value={content}
        config={config}
        onBlur={(newContent) => handleChange(newContent)}
      />

      {/* Thumbnail of the blog */}
      <label
        htmlFor="thumbnail"
        className="cursor-pointer px-3 py-2 border shadow-md my-4 text-red-600 font-bold flex items-center justify-center"
      >
        <IoMdAdd className="text-3xl mr-2" /> Add a Thumbnail
      </label>
      <input
        className="hidden"
        type="file"
        name="thumbnail"
        id="thumbnail"
        onChange={(e) => handleImageChange(e)}
      />

      <div className="w-full flex gap-3 mt-4 flex-wrap">
        <div className="relative  rounded-xl border-2mx-auto">
          {imagePreview && (
            <Image
              src={imagePreview}
              width={600}
              height={400}
              alt="PostImage"
              className="w-full h-full"
            />
          )}
        </div>
      </div>

      <Button
        onClick={handlePostBlog}
        disabled={isPending || loadingCreatePost}
        className="my-4"
      >
        {isPending || loadingCreatePost ? "Loading..." : "Post"}
      </Button>
    </div>
  );
};

export default TextEditor;
