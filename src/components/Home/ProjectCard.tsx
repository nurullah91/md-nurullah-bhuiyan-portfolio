"use client";
import { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { TProject } from "@/types";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ item }: { item: TProject }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);

  return (
    <>
      <div
        data-aos="zoom-in-right"
        className="w-full h-full relative transition duration-500 z-0"
      >
        <Image
          height={230}
          width={400}
          className=" w-full h-56 rounded-md "
          src={item.imageUrl}
          alt="Project Image"
        />

        <div className="absolute top-0  bg-black h-full w-full px-6 py-3 bg-opacity-80 lg:opacity-0 hover:opacity-100 transition-opacity duration-500 rounded">
          {item.title && <h2 className="text-3xl">{item.title}</h2>}
          <div className="">
            {item.live && (
              <div className="flex items-center mt-3">
                <BiWorld className="text-3xl mr-2"></BiWorld>
                <a
                  className="underline"
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live site
                </a>
              </div>
            )}

            {item.frontendCode && (
              <div className="flex items-center my-3">
                <FaGithub className="text-3xl mr-2"></FaGithub>
                <a
                  className="underline"
                  href={item.frontendCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend Code
                </a>
              </div>
            )}

            {item.backendCode && (
              <div className="flex items-center">
                <FaGithub className="text-3xl mr-2"></FaGithub>
                <a
                  className="underline"
                  href={item.backendCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Code
                </a>
              </div>
            )}
            <button
              onClick={() => setShowModal(true)}
              className="bg-white px-3 py-1 text-black mt-2 rounded"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <ProjectModal project={item} onClose={handleOnClose}></ProjectModal>
      )}
    </>
  );
};

export default ProjectCard;
