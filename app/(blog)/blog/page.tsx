import React from "react";

import { fetchPostList } from "@/lib/data";

async function page() {
  const res = await fetchPostList();
  console.log(res);
  return (
    <div className="flex flex-row justify-center ">
      <div className="w-[100vw] text-center">
        {res ? (
          res.map((post, key) => {
            return (
              <div key={key} className="my-2 text-xl">
              <a href={`/blog/${post}`} className="underline">{post}</a>
              </div>);
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
