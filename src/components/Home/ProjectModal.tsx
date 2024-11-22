"use client";
import { TProject } from "@/types";
import Image from "next/image";
import { useEffect } from "react";

const ProjectModal = ({
  onClose,
  project,
}: {
  onClose: () => void;
  project: TProject;
}) => {
  const { description, imageUrl, title, technology } = project;
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10"
      ></div>

      <div className="mainModal bg-white text-slate-800 rounded-md w-11/12 md:w-9/12 lg:w-1/2">
        <div className="relative px-6 py-10 ">
          {/* close button */}
          <button
            className="absolute -top-3 -right-3 bg-rose-500 px-3 py-1 font-bold rounded-full "
            onClick={onClose}
          >
            X
          </button>
          <Image
            height={400}
            width={600}
            className="hidden w-3/4 mx-auto lg:block"
            src={imageUrl}
            alt=""
          />
          <h3 className="text-3xl text-blue-900 font-bold">{title}</h3>
          <p>{description}</p>
          <h2 className="text-2xl my-2 font-semibold text-blue-950">
            Technologies:
          </h2>
          <div className=" grid grid-cols-2 gap-2 md:grid-cols-3">
            {technology.map((item, index) => (
              <span
                className="bg-gradient-to-r from-cyan-800 to-blue-950 rounded text-white px-2 py-1 text-center"
                key={index}
              >
                {item?.value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
