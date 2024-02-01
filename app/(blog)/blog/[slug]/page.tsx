import Markdown from "markdown-to-jsx";

import "@/app/(blog)/blog.css";
import Code from "@/app/(blog)/components/Code";

import { blogMap }  from "@/app/(blog)/blog/page"

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex justify-center w-full">
      <div className="text-left mx-[10vw]">
        <Markdown
          options={{
            overrides: {
              code: {
                component: Code,
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
          {blogMap.get(params.slug).content || "404"}
        </Markdown>
      </div>
    </div>
  );
}
