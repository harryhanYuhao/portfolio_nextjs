import MarkdownBlog from "@/app/(blog)/components/MarkdownBlog";
import { fetchPost } from "@/lib/data";

export default async function Page({ params }: { params: { slug: string } }) {

  const res = await fetchPost(params.slug) || "404";

  return <MarkdownBlog content={res} />;
}
