"use client";
import React from "react";

const TextUnderLineAnimation = ({
  text,
  className,
  underlineWidth = "1.2px",
  duration,
}: {
  text: string;
  className?: string;
  underlineWidth?: string;
  duration?: string;
}) => {
  return (
    <span className={`group relative ${className}`}>
      {text}
      <span
        className={`inline-block bg-black absolute left-0 h-[${underlineWidth}] -bottom-0.5 w-0 group-hover:w-full transition-[width] ease duration-500`}
      >
        &nbsp;
      </span>
    </span>
  );
};

export default TextUnderLineAnimation;
