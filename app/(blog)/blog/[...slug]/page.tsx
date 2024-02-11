import MarkdownBlog from "@/app/(blog)/components/MarkdownBlog";
import { fetchPost } from "@/lib/data";
import ToC from "../../components/ToC";

export default async function Page({ params }: { params: { slug: string } }) {
  var querypath = "";
  for (let i = 0; i < params.slug.length - 1; i++) {
    querypath += params.slug[i] + "/";
  }
  querypath += params.slug[params.slug.length - 1];

  const res = (await fetchPost(querypath)) || "404";

  return (
    <>
      <div className="w-full flex justify-center overflow-none">
        <div className="sticky top-[100px] bg-slate-300 w-[300px] bottom-12 h-[20vh]">
          <ToC content={res}/>
        </div>
        <div className="max-w-[800px]">
          <MarkdownBlog content={res} />;
        </div>
      </div>
    </>
  );
}
