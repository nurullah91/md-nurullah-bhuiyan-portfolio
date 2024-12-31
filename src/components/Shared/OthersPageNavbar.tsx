"use client";

import { useState } from "react";
import Link from "next/link";

export default function OthersPageNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-slate-500/50 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <Link href="/">Portfolio</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-white">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/projects" className="hover:text-blue-600">
              Projects
            </Link>
            <Link href="/blogs" className="hover:text-blue-600">
              Blogs
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 tex-white">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-blue-600"
            >
              Projects
            </Link>
            <Link href="/blogs" className="hover:text-blue-600">
              Blogs
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
