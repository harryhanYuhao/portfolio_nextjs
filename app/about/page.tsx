/* about page */
import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import Title from "../ui/Title";
import profile from "/public/profile.png";
import content from "./content";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <div className="flex-row justify-center items-center w-full">
      <Title>
        Hi, I am <span className="text-blue-500">Harry</span>
      </Title>
      <div className="flex-none">
        <div className="max-lg:flex-col lg:flex items-center justify-around pt-20">
          <div className="flex-col lg:w-[50%] px-[10%] lg:px-[5%]">
            <h2 className="text-3xl text-center uppercase"> Biography</h2>
            <p className="text-center text-lg pt-5 font-medium hyphens-auto">
              {/* {content.bio} */}
              Hi, I am <b>Harry Han</b>. I was born in Changzhou, China, attended Hamden Hall
              Country Day School in Connecticut, USA, and I am currently an undergraduate student at
              the University of Edinburgh pursuing the degree Master of Mathematics. Beside math, I
              spent quite some time on computer science.
            </p>
          </div>
          <div className="pt-10 lg:pt-0 lg:w-[50%] lg:px-6 flex justify-center relative">
            <Image
              className="h-auto  items-center"
              src={profile}
              alt="profile"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
