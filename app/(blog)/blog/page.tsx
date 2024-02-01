import React from "react";
import fs from "fs";

const blogMap = new Map<string, any>();

const filePath = `content/os2024.md`;
var str;
try {
  str = fs.readFileSync(filePath, "utf8");
} catch (err) {
  str =
    "# 404: Page Not Found\n\nSorry, but the page you were trying to view does not exist.\n\nIt looks like this was the result of either:\n\n- a mistyped address\n- an out-of-date link\n\n[Go back to home page](/blog)";
}
``
blogMap.set("os2024.md", {
  id: "blog1",
  title: "Blog 1",
  content: str,
});

const page = () => {
  return (
    <div className="flex flex-row justify-center ">
      <div className="w-[100vw] text-center">
        <a href="/blog/os2024.md" className="underline">
          Dice Set up for OS UoE
        </a>
      </div>
    </div>
  );
};

export { blogMap };
export default page;
