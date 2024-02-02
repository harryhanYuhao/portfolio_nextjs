import React from "react";
import Markdown from "markdown-to-jsx";
import MarkdownCodeBlock from "@/app/(blog)/components/MarkdownCodeBlock";

import "@/app/(blog)/blog.css";

const MarkdownBlog = ({content}: {content: string}) => {
  return (
    <div className="flex justify-center w-full">
      <div className="text-left mx-[10vw] w-[80vw] lg:w-[60vw]">
        <Markdown
          options={{
            overrides: {
              pre: {
                component: MarkdownCodeBlock,
              },
              p: {
                component: "div",
                props: {
                  className: "md_paragraph",
                },
              },
            },
          }}
        >
          {content || "404"}
        </Markdown>
      </div>
    </div>
  );
};

export default MarkdownBlog;
