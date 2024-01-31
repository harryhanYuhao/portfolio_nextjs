/* about page */
import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import Title from "@/app/ui/Title";
import profile from "/public/profile.png";
import content from "./content";
import Timeline from "./Timeline";

export const metadata: Metadata = {
  title: "Bio",
};

const page = () => {
  return (
    <div className="flex-row justify-center items-center w-full">
      <Title className="px-[5vw]">Welcome to my Portfolio</Title>
      {/* The Picture and short bio */}
      <div className="flex-none pb-10">
        <div className="max-lg:flex-col lg:flex items-center justify-around pt-20">
          <div className=" order-last pt-10 lg:pt-0 w-full lg:w-[50%] lg:px-6 flex justify-center">
            <Image
              className="h-auto w-[65%] lg:w-[100%] max-lg:pb-10"
              src={profile}
              alt="profile"
              width={600}
              height={600}
            />
          </div>
          <div className="flex-col  lg:w-[50%] px-[10%] lg:px-[5%]">
            <p className="hyphens-auto text-center text-[clamp(18px,1.4vw,36px)] pt-5 font-medium">
              {/* {content.bio} */}
              Hi, I am <b>Harry Han</b>. I was born in Changzhou, China, where I lived for 14 years.
              From 14 to 18 I attended high school in the US (one year in Florida, three in
              Connecticut). Now, I moved to Scotland, pursuing a degree in Mathematics at the
              University of Edinburgh. Beside math, I spent quite some time on computer science and
              Latin. If you are interested, here is my{" "}
              <a
                href="https://github.com/harryhanYuhao/harryhanYuhao/releases/download/v0.0.2/CV_HarryHan_CV_zh_merged.pdf"
                className="underline italic"
                download
              >
                CV
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      {/* Time line */}
      <div className="pt-20">
        <h2 className="hyphens-auto text-[clamp(25px,4vw,80px)] text-center uppercase py-6">
          Biography
        </h2>
        <Timeline content={content}/>
      </div>
    </div>
  );
};

export default page;
