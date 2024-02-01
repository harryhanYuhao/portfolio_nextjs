import Markdown from "markdown-to-jsx";

import "@/app/(blog)/blog.css";
import MarkdownCodeBlock from "@/app/(blog)/components/MarkdownCodeBlock";


export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>{params.slug}</>
  );
}
