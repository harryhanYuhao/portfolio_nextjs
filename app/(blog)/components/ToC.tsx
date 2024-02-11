import React from "react";
import Markdown from "markdown-to-jsx";
import ContentEntry from "./ContentEntry";
import Void from "./Void";
import TopButton from "./TopButton";


const ToC = ({ content }: { content: string }) => {
  return (
    <>
      <div>
      Table of Contents
      </div>
      <div>
        <TopButton />
      </div>
    <Markdown
      options={{
        overrides: {
          h1: {
            component: Void,
          },
          pre: {
            component: Void,
          },
          h2: {
            component: ContentEntry,
          },
          h3: {
            component: Void,
          },
          h4: {
            component: Void,
          },
          p: {
            component: Void,
          },
        },
      }}
    >
      {content || "404"}
    </Markdown>
    </>
  );
};

export default ToC;
