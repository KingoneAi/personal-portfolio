import { notFound } from "next/navigation";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import MdxLayout from "@/components/MdxLayout";
import matter from 'gray-matter';
import Header from "@/components/Header";
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const files = readdirSync(path.join(process.cwd(), "content/portfolio"));
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/portfolio", `${slug}.mdx`);
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
        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote 
            source={content} 
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </MdxLayout>
    </>
  );
} 