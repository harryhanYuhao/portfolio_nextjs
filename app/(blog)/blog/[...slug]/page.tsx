import MarkdownBlog from "@/app/(blog)/components/MarkdownBlog";
import { fetchPost } from "@/lib/data";

export default async function Page({ params }: { params: { slug: string } }) {
  var querypath = "";
  for (let i = 0; i < params.slug.length -1; i++) {
    querypath += params.slug[i] + "/";
  }
  querypath += params.slug[params.slug.length - 1];

  const res = await fetchPost(querypath) || "404";

  return <MarkdownBlog content={res} />;
}
