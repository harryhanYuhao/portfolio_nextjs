"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { markdownH2ToId } from "@/lib/utils";

function useHighlighted(id: string) {
  // const observer = useRef();
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeId, setActiveId] = useState("");
 
  useEffect(() => {
    const handleObserver = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };
 
    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "0% 0% -35% 0px",
    });
 
    const elements = document.querySelectorAll("h2");
    elements.forEach((elem) => observer.current!.observe(elem));
    return () => observer.current?.disconnect();
  }, []);
 
  return [activeId === id, setActiveId];
}

const ContentEntry = ({ children }: { children: any }) => {
  const id = `${markdownH2ToId(children[0])}` || "404";
  const [highlighted, setHighlighted] = useHighlighted(id);
  return (
    <div>
      <button
        className={`${highlighted ? "underline" : "no-underline"} w-full text-left`}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(id)!.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default ContentEntry;
