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
            h1: {
              component: "h1",
              props: {
                className: "markdown_h1",
              },
            },
            h2: {
              component: "h2",
              props: {
                className: "scroll-mt-16 markdown_h2",
              },
            },
            h3: {
              component: "h3",
              props: {
                className: "markdown_h3",
              },
            },
            h4: {
              component: "h4",
              props: {
                className: "markdown_h4",
              },
            },
            h5: {
              component: "h5",
              props: {
                className: "markdown_h5",
              },
            },
            p: {
              component: "div",
              props: {
                className: "markdown_p",
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
