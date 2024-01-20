"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

import Logo from "../ui/Logo";
import { BarIcon, CrossIcon } from "@/app/ui/icons";
import SocialLinks from "./SocialLinks";
import Menu from "../ui/Menu";

const navigations = [
  {
    title: "Harry's Portfolio",
    href: "/",
  },
  {
    title: "Bio",
    href: "/bio",
  },
  // {
  //   title: "Contact",
  //   href: "/contact",
  // },
  {
    title: "Works",
    href: "/works",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavBarFixed, setIsNavBarFixed] = useState(false);
  const changeNavBarFixed = () => {
    if (typeof window === "undefined") return;
    if (window.scrollY > 0) {
      setIsNavBarFixed(true);
    } else {
      setIsNavBarFixed(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavBarFixed);
  }

  const pathname = usePathname();
  return (
    <div
      className={`flex lg:justify-center items-center sticky top-0 transition-all z-50 ${
        isNavBarFixed ? "mb-[16px] bg-gray-300 h-[72px]" : "pt-[16px] h-[96px]"
      }`}
    >
      {/* left nav: navigation links */}
      <div className="max-lg:w-[25%] max-lg:order-first lg:flex-none lg:p-6 lg:w-[50%] lg:pl-[3%] lg:pr-[7%]">
        <div className="hidden lg:flex justify-around xl:pr-30 xl:pl-10">
          {navigations.map((nav) => {
            return (
              <Link key={nav.title} href={nav.href} className={` relative group text-xl`}>
                {nav.title}
                {/*this is underline animation*/}
                <span
                  className={clsx(
                    "inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300",
                    { "w-full h-[1.8px]": nav.href === pathname },
                    { "w-0 h-[1.2px]": nav.href !== pathname },
                  )}
                >
                  &nbsp;
                </span>
              </Link>
            );
          })}
        </div>
        <div className="lg:hidden flex justify-center items-center relative">
          <button
            className="z-10"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {!isMenuOpen && <BarIcon className="size-7"></BarIcon>}
            {isMenuOpen && <CrossIcon className="size-7"></CrossIcon>}
          </button>
          {isMenuOpen && (
            <Menu
              className="z-0 absolute top-8"
              links={navigations}
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </div>
      <div className="flex-none p-6 w-[50%] lg:w-[50%] lg:pl-[7%] lg:pr-[3%]">
        <div className="flex justify-around items-center pl-30 xl:pl-30 xl:pr-10">
          <SocialLinks />
        </div>
      </div>
      <div className=" pl-0 max-lg:w-[25%] lg:absolute lg:left-[50%] lg:translate-x-[-50%]">
        <motion.div
          className="rounded-full"
          whileHover={{
            scale: 1.15,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <Logo />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
