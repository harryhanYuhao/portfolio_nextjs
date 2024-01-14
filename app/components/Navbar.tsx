"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Logo from "../ui/Logo";
import { WechatIcon, LinkedinIcon, GithubIcon } from "@/app/ui/icons";
import SocialLinks from "./SocialLinks";

const navigations = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  // {
  //   title: "Contact",
  //   href: "/contact",
  // },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex lg:justify-center pt-2 items-center">
      <div className="pl-[25%] lg:pl-0 lg:absolute lg:left-[50%] lg:translate-x-[-50%]">
        <Logo />
      </div>
      {/* left nav: navigation links */}
      <div className="flex-none p-6 lg:w-[50%] lg:pl-[3%] lg:pr-[7%]">
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
      </div>
      <div className="flex-none p-6 w-[50%] lg:w-[50%] lg:pl-[7%] lg:pr-[3%]">
        <div className="flex justify-around items-center pl-30 xl:pl-30 xl:pr-10">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
