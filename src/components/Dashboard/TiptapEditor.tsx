"use client";

import React, { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Blockquote from "@tiptap/extension-blockquote";
import { uploadImage } from "@/lib/uploadIMage"; // Make sure this works correctly
import { TiptapEditorWithMenu } from "./TiptapEditorWithMenu";
import { BlockOptionsButton } from "./BlockOptionsButton";

const TiptapEditor = ({ onSave }: { onSave: (content: object) => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure the component is mounted before initializing
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      ListItem,
      Blockquote,
      Link,
      Image.configure({
        // Use the handleImageUpload function here
        allowBase64: false,
        onDrop: async ({ event }) => {
          const file = event.dataTransfer?.files[0];
          if (file) await handleImageUpload(file);
        },
      }),
    ],
  });

  if (!isMounted || !editor) {
    return null; // Avoid rendering EditorContent until initialization is complete
  }

  // **Handle Image Upload**
  const handleImageUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "portfolio");

      const uploadResponse = await uploadImage(formData);

      if (uploadResponse?.url) {
        editor.chain().focus().setImage({ src: uploadResponse.url }).run();
      }
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  // **Handle Save**
  const handleSave = () => {
    const content = editor.getJSON(); // Get the editor content as JSON
    onSave(content); // Pass it to the onSave prop
  };

  return (
    <div className="relative">
      <EditorContent
        editor={editor}
        className="prose lg:prose-xl p-4 border rounded shadow-md focus:outline-none"
      />
      <TiptapEditorWithMenu editor={editor} />
      <BlockOptionsButton editor={editor} />
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleSave}
        >
          Save Blog
        </button>
      </div>
    </div>
  );
};

export default TiptapEditor;
