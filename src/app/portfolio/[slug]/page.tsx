import { notFound } from "next/navigation";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import MdxLayout from "@/components/MdxLayout";
import matter from 'gray-matter';
import Header from "@/components/Header";
// @ts-expect-error: MDX files import
import MDXContent from "content/portfolio/[slug].mdx";

export async function generateStaticParams() {
  const files = readdirSync(path.join(process.cwd(), "content/portfolio"));
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export default async function PortfolioDetail({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content/portfolio", `${params.slug}.mdx`);
  let source = "";
  try {
    source = readFileSync(filePath, "utf8");
  } catch {
    notFound();
  }
  const { data, content } = matter(source);
  return (
    <>
      <Header />
      <MdxLayout title={data.title}>
        {content}
      </MdxLayout>
    </>
  );
} 