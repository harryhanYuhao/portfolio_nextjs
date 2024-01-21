"use client";
import React from "react";
import Link from "next/link";

// import { EmptyHeartIcon } from "@/app/ui/icons";
import { AnimatedHeartIcon } from "@/app/ui/icons";
import TextUnderLineAnimation from "../ui/TextUnderLineAnimation";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid ">
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
      <p className="text-center bg-[rgba(200,200,180,1)] font-bold [font-size:clamp(1rem,2vw,4rem)] text-black py-[2vh]">This Site is Under Active Construction </p>
    </footer>
  );
};

export default Footer;
