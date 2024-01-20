"use client";
import { useState } from "react";

const ExpandableBox = ({
  title,
  subtitle,
  link,
  time,
  description,
  img,
  className,
}: {
  title: string;
  subtitle?: string;
  link?: string;
  time?: string;
  description?: string;
  img?: string;
  className?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <button
      key={title}
      className={`${className} border-dark border-2 rounded-md p-2 flex flex-col w-[50%] my-2 transition ease-in-out hover:h-[10vh]`}
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      <div className="flex justify-between w-full">
        <div>
          {title}: {subtitle}
        </div>
        <div>{time}</div>
      </div>
      <div className={`${isExpanded ? "max-h-0" : "max-h-96"} overflow-hidden`}>
        <div className="flex flex-col">
          <div className="flex justify-center">{description}</div>
        </div>
      </div>
    </button>
  );
};

export default ExpandableBox;
