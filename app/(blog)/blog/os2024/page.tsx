import fs from "fs";
import MarkdownBlog from "@/app/(blog)/components/MarkdownBlog";

const page = () => {
  const filePath = `public/content/os2024.md`;
  var str;
  try {
    str = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    str =
      "# 404: Page Not Found\n\nSorry, but the page you were trying to view does not exist.\n\nIt looks like this was the result of either:\n\n- a mistyped address\n- an out-of-date link\n\n[Go back to home page](/blog)";
  }

  return (
    <MarkdownBlog content={str} />
  );
};

export default page;
