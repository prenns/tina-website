"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText({ words }) {
  return (
      <Typewriter
        words={words}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
 
  );
}