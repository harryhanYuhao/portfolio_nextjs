"use client";
import React from "react";
import content from "./content";

export default function Timeline() {
  return content.map((item: any, index: any) => (
    <>
      <div key={index} className="hidden lg:flex flex-col justify-center items-center w-full py-5">
        <div className="w-[50%]">
          <div className="flex justify-between items-center">
            <span className="text-3xl font-semibold">
              {item.titleLink ? (
                <a className="underline decoration-dotted" href={item.titleLink} target="_blank">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </span>
            <span className="text-right text-xl font-normal">{item.time}</span>
          </div>
          <h3 className="text-xl italic text-gray-500">{item.subtitle}</h3>
          <p className="text-lg">{item.summary}</p>
        </div>
      </div>

      {/* for mobile view */}
      <div key={index} className="lg:hidden flex flex-col justify-center items-center w-full py-5">
        <div className="w-[75%]">
          <div className="flex justify-between items-center">
            <span className="text-3xl font-semibold">
              {item.titleLink ? (
                <a className="underline decoration-dotted" href={item.titleLink} target="_blank">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </span>
          </div>
          <span className="text-right text-xl font-normal">{item.time}</span>
          <h3 className="text-xl italic text-gray-500">{item.subtitle}</h3>
          <p className="text-lg">{item.summary}</p>
        </div>
      </div>
    </>
  ));
}
