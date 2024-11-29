/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCreateSkills } from "@/hooks";
import { uploadImage } from "@/lib/uploadIMage";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const AddSkillsForm = () => {
  const [skillsType, setSkillsType] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    mutate: handleAddSkills,
    isPending,
    isError,
    isSuccess,
  } = useCreateSkills(skillsType);

  //   Form submit handler
  const handleSubmit = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const name = form.skills.value;
    const selectedSkillType = form.type.value;
    setSkillsType(selectedSkillType);
    // Image handling
    const imageInfo = form.logo;
    const image = imageInfo.files[0];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "portfolio");

    const imageUploadResponse = await uploadImage(formData);

    const icon = imageUploadResponse?.secure_url;

    try {
      const targetedData = {
        name,
        icon,
      };

      handleAddSkills(JSON.stringify(targetedData));
      setLoading(false);
      form.reset();
    } catch {
      toast.error("something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      toast.success("Skills added successfully");
    } else if (!isPending && isError) {
      toast.error("Failed to add skills");
    }
  }, [isPending, isSuccess, isError]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Skills name</label>
        <input
          className="block shadow-md rounded border border-blue-800 w-full mb-5 px-3 py-2"
          type="text"
          name="skills"
          required
        />

        <label>Skills type</label>
        <select
          className="block shadow-md rounded mb-5 mt-2 border w-full border-blue-800 px-3 py-2"
          name="type"
        >
          <option value="frontend">Front End</option>
          <option value="backend">Backend</option>
          <option value="others">Others</option>
        </select>

        <label>Skills logo</label>
        <input
          className="block bg-blue-200 rounded border border-blue-800"
          type="file"
          name="logo"
          required
        />

        <input
          className={`my-5 text-white px-5 py-2 rounded-md ${
            isPending || loading
              ? "cursor-not-allowed bg-gray-500"
              : "cursor-pointer bg-blue-600"
          }`}
          type="submit"
          value={isPending || loading ? "Loading..." : "Add Skills"}
          disabled={isPending || loading}
        />
      </form>
    </div>
  );
};

export default AddSkillsForm;