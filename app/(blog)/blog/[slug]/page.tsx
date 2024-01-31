import Markdown from "markdown-to-jsx";

import "@/app/(blog)/blog.css";
import Code from "@/app/(blog)/components/Code";

export default function Page({ params }: { params: { slug: string } }) {
  const fs = require("fs");
  const filePath = `content/${params.slug}`;
  var str;
  try {
    str = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    str =
      "# 404: Page Not Found\n\nSorry, but the page you were trying to view does not exist.\n\nIt looks like this was the result of either:\n\n- a mistyped address\n- an out-of-date link\n\n[Go back to home page](/blog)";
  }
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
          {str}
        </Markdown>
      </div>
    </div>
  );
}
