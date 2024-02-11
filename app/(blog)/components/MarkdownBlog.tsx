import React from "react";
import Markdown from "markdown-to-jsx";
import MarkdownCodeBlock from "@/app/(blog)/components/MarkdownCodeBlock";

import "@/app/(blog)/blog.css";

// expects markdown formatted as string
const MarkdownBlog = ({ content }: { content: string }) => {
  return (
    <div className="text-left">
      <Markdown
        options={{
          overrides: {
            pre: {
              component: MarkdownCodeBlock,
            },
            h2: {
              component: "h2",
              props: {
                className: "scroll-mt-16",
              },
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
  );
};

export default MarkdownBlog;
