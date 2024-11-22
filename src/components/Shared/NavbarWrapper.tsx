"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Shared/Navbar"), {
  ssr: false,
});

const NavbarWrapper: React.FC = () => {
  return <Navbar />;
};

export default NavbarWrapper;
