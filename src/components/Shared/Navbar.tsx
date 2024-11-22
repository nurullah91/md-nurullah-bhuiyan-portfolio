"use client";

import { useState, useEffect } from "react";
import { BiUser, BiCode } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("intro"); // State for active link

  useEffect(() => {
    const handleScroll = () => {
      // Get all section elements safely
      const homeSection = document.getElementById("intro");
      const aboutSection = document.getElementById("about");
      const skillsSection = document.getElementById("skills");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");

      // Ensure all sections exist to avoid runtime errors
      if (
        !homeSection ||
        !aboutSection ||
        !skillsSection ||
        !projectsSection ||
        !contactSection
      ) {
        console.error("One or more sections are missing in the DOM.");
        return;
      }

      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setActiveLink("intro");
      } else if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < skillsSection.offsetTop
      ) {
        setActiveLink("about");
      } else if (
        scrollPosition >= skillsSection.offsetTop &&
        scrollPosition < projectsSection.offsetTop
      ) {
        setActiveLink("skills");
      } else if (
        scrollPosition >= projectsSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setActiveLink("projects");
      } else if (scrollPosition >= contactSection.offsetTop) {
        setActiveLink("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once after mount

  return (
    <div className="fixed z-10 bottom-0 md:block md:w-auto w-full md:mx-0 flex text-3xl bg-slate-500 md:bottom-32 bg-opacity-50 md:py-12 md:px-4 p-3 font-bold text-white space-x-10 md:space-x-0 md:space-y-16 md:rounded-tr-full md:rounded-br-full">
      <a
        className={`block ${
          activeLink === "intro" ? "bg-cyan-700 p-1 rounded-md" : ""
        }`}
        href="#intro"
      >
        <HiHome className="text-3xl" />
      </a>
      <a
        className={`block ${
          activeLink === "about" ? "bg-cyan-700 p-1 rounded-md" : ""
        }`}
        href="#about"
      >
        <BiUser className="text-3xl" />
      </a>
      <a
        className={`block ${
          activeLink === "skills" ? "bg-cyan-700 p-1 rounded-md" : ""
        }`}
        href="#skills"
      >
        <GiSkills className="text-3xl" />
      </a>
      <a
        className={`block ${
          activeLink === "projects" ? "bg-cyan-700 p-1 rounded-md" : ""
        }`}
        href="#projects"
      >
        <BiCode className="text-3xl" />
      </a>
      <a
        className={`block ${
          activeLink === "contact" ? "bg-cyan-700 p-1 rounded-md" : ""
        }`}
        href="#contact"
      >
        <MdOutlineContactPhone className="text-3xl" />
      </a>
    </div>
  );
};

export default Navbar;
