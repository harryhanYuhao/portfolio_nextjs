"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

// import { EmptyHeartIcon } from "@/app/ui/icons";
import { FullHeartIcon } from "@/app/ui/icons";
import { AnimatedHeartIcon } from "@/app/ui/icons";
import TextUnderLineAnimation from "../ui/TextUnderLineAnimation";

const Footer = () => {
  const [heartfull, setHeartfull] = useState(false);
  return (
    <footer className="w-full border-t-2 border-solid border-dark">
      <div className="flex py-8 items-center justify-around font-medium">
        <Link href="/bio">
          <TextUnderLineAnimation text="Harry's Portfolio" />
        </Link>
        <span className="hidden md:block">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className="flex items-center ">
          Build With{" "}
          <AnimatedHeartIcon className="px-1" size="1.2rem"/>
          <span className="hidden md:block">, Next.js, TailwindCSS, and Vercel</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
