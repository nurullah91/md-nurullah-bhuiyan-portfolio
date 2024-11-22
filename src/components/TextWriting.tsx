"use client";

import { Typewriter } from "react-simple-typewriter";
export interface ITextWritingProps {
  texts: string[];
}
export default function TextWriting({ texts }: ITextWritingProps) {
  return (
    <Typewriter
      words={texts}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
}
