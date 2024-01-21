"use client";
import React from "react";

import "./local.css";

const TextUnderLineAnimation = ({
  text,
  className,
  underlineWidth,
  duration,
}: {
  text: string;
  className?: string;
  underlineWidth?: string;
  duration?: string;
}) => {
  underlineWidth = underlineWidth || "1.4px";
  return (
    <span
      className={`${className} [background-image:linear-gradient(rgb(0,0,0),rgb(0,0,0))] [background-size:0_2px] [background-position:0%_100%] [background-repeat:no-repeat] [transition:background-size_0.2s_ease] hover:[background-size:100%_2px]`}
    >
      {text}
    </span>
  );
};

export default TextUnderLineAnimation;
