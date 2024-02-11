import React from "react";

import { fetchPostList } from "@/lib/data";
import TextUnderLineAnimation from "@/app/ui/TextUnderLineAnimation";

function StringNicer(str: string) {
  var tmp = str.charAt(0).toUpperCase() + str.slice(1);
  return tmp.replace(".md", "").replace(/_/g, " ");
}

async function page() {
  const res = await fetchPostList();
  // res is an array of strings holding names of the markdown files
  return (
    <div>
      <div className="w-[100vw] text-center flex flex-col items-center justify-center">
        {res ? (
          res.map((post, key) => {
            return (
              <div key={key} className="w-[392px] text-left leading-8 text-lg">
                <a href={`/blog/${post}`} className="no-underline">
                  <TextUnderLineAnimation text={StringNicer(post)} />
                </a>
              </div>
            );
          })
        ) : (
          <a href="/blog/dice_uoe_setup.md" className="underline">
            Dice Set up for OS UoE
          </a>
        )}
      </div>
    </div>
  );
}

export default page;
