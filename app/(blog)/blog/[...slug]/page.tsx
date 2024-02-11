import { fetchPost } from "@/lib/data";
import MarkdownBlog from "@/app/(blog)/components/MarkdownBlog";
import ToC from "@/app/(blog)/components/ToC";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

function getQueryPath(slug: string) {
  var querypath = "";
  for (let i = 0; i < slug.length - 1; i++) {
    querypath += slug[i] + "/";
  }
  querypath += slug[slug.length - 1];
  return querypath;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const title = getQueryPath(params.slug)
    .replace(".md", "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: title,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  var querypath = getQueryPath(params.slug);
  const res = (await fetchPost(querypath)) || "404";

  return (
    <>
      <div className="w-full flex justify-center overflow-none">
        <div className="sticky top-[100px] bg-slate-300 w-[300px] bottom-12 h-[20vh]">
          <ToC content={res} />
        </div>
        <div className="max-w-[800px]">
          <MarkdownBlog content={res} />
        </div>
      </div>
    </>
  );
}
