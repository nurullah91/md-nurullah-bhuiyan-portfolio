import React, { useState } from "react";
import { FloatingMenu } from "@tiptap/react";
import { Editor } from "@tiptap/react";

export const TiptapEditorWithMenu = ({ editor }: { editor: Editor | null }) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    {
      label: "Heading 1",
      command: () => editor?.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      label: "Heading 2",
      command: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      label: "Bullet List",
      command: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Code Block",
      command: () => editor?.chain().focus().toggleCodeBlock().run(),
    },
  ];

  return (
    <>
      {editor && (
        <FloatingMenu
          editor={editor}
          tippyOptions={{
            placement: "bottom",
            onShow: () => setShowMenu(true),
            onHide: () => setShowMenu(false),
          }}
          shouldShow={({ editor }) => editor.getText().endsWith("/")}
        >
          {showMenu && (
            <div className="bg-white shadow-md border rounded-md p-2">
              {menuItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={item.command}
                  className="block text-sm p-1 hover:bg-gray-100 rounded"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </FloatingMenu>
      )}
    </>
  );
};
