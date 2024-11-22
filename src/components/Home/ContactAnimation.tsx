"use client";

import Lottie from "lottie-react";
import contactAnimation from "@/assets/74701-contact-us-animation.json";

export default function ContactAnimation() {
  return (
    <div>
      <Lottie animationData={contactAnimation} loop={true} />
    </div>
  );
}
