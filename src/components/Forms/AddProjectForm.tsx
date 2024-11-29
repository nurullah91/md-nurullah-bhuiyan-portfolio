/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCreateProject } from "@/hooks";
import { stringToArray } from "@/lib/stringToArray";
import { uploadImage } from "@/lib/uploadIMage";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AddProjectForm() {
  const [loading, setLoading] = useState(false);

  const {
    mutate: handleAddProject,
    isPending,
    isError,
    isSuccess,
  } = useCreateProject();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Enable loading state true
    setLoading(true);

    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const live = form.live.value;
    const frontendCode = form.frontend.value;
    const backendCode = form.backend.value;
    const technologyString = form.technology.value;

    const imageInfo = form.image;
    const image = imageInfo.files[0];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "portfolio");

    const imageUploadResponse = await uploadImage(formData);
    const projectImage = imageUploadResponse?.secure_url;

    try {
      const technology = stringToArray(technologyString);

      const targetedData = {
        title,
        description,
        imageUrl: projectImage,
        live,
        frontendCode,
        backendCode,
        technology,
      };

      handleAddProject(JSON.stringify(targetedData));
      setLoading(false);
      form.reset();
    } catch {
      toast.error("something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      toast.success("Project added successfully");
    } else if (!isPending && isError) {
      toast.error("Failed to add project");
    }
  }, [isPending, isSuccess, isError]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="block shadow-md rounded border border-blue-800 w-full mb-5 px-3 py-2"
          type="text"
          name="title"
          required
        />

        <label>Live link</label>
        <input
          className="block shadow-md rounded border border-blue-800 w-full mb-5 px-3 py-2"
          type="text"
          name="live"
          required
        />

        <label>Front end code</label>
        <input
          className="block shadow-md rounded border border-blue-800 w-full mb-5 px-3 py-2"
          type="text"
          name="frontend"
          required
        />

        <label>Back end code</label>
        <input
          className="block shadow-md rounded border border-blue-800 w-full mb-5 px-3 py-2"
          type="text"
          name="backend"
        />

        <label>Used Technology</label>

        <input
          className="block shadow-md rounded border border-blue-800 w-full mb-5 px-3 py-2"
          type="text"
          name="technology"
          placeholder="Separate technologies with comma(,)"
        />

        <label>Description</label>
        <textarea
          className="block mb-5 rounded border border-blue-800 w-full h-24 p-3"
          name="description"
          required
        />

        <label>Project image</label>
        <input
          className="block bg-blue-200 shadow-md rounded border border-blue-800"
          type="file"
          required
          name="image"
        />

        <input
          className={`my-5 text-white px-5 py-2 rounded-md ${
            isPending || loading
              ? "cursor-not-allowed bg-gray-500"
              : "cursor-pointer bg-blue-600"
          }`}
          type="submit"
          value={isPending || loading ? "Loading..." : "Add Project"}
          disabled={isPending || loading}
        />
      </form>
    </div>
  );
}
