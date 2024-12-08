"use client";

import contactAnimation from "@/assets/74701-contact-us-animation.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ContactAnimation() {
  return (
    <div className="w-full lg:w-1/2">
      <Lottie animationData={contactAnimation} loop={true} />
    </div>
  );
}
