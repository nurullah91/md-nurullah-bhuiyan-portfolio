import React from "react";
import { Editor } from "@tiptap/react";

export const BlockOptionsButton = ({ editor }: { editor: Editor | null }) => {
  const options = [
    {
      label: "Bullet List",
      command: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Task List",
      command: () => editor?.chain().focus().toggleTaskList().run(),
    },
    {
      label: "Blockquote",
      command: () => editor?.chain().focus().toggleBlockquote().run(),
    },
    {
      label: "Image",
      command: () => {
        /* Add custom image upload logic */
      },
    },
  ];

  return (
    <div className="relative">
      <button className="text-xl p-2 rounded-full hover:bg-gray-200">+</button>
      <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded border">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={option.command}
            className="block w-full text-left text-sm p-2 hover:bg-gray-100"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
