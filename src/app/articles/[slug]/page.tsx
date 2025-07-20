import { notFound } from "next/navigation";
import { readFileSync, readdirSync } from "fs";
import path from "path";
import MdxLayout from "@/components/MdxLayout";
import matter from 'gray-matter';
import Header from "@/components/Header";
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { ComponentProps } from 'react';




export async function generateStaticParams() {
  const files = readdirSync(path.join(process.cwd(), "content/articles"));
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

const components = {
  h1: (props: ComponentProps<'h1'>) => <h1 className="text-3xl font-bold mb-4 text-center" {...props} />,
  h2: (props: ComponentProps<'h2'>) => <h2 className="text-2xl font-semibold mb-3 mt-6" {...props} />,
  h3: (props: ComponentProps<'h3'>) => <h3 className="text-xl font-medium mb-2 mt-4" {...props} />,
  p: (props: ComponentProps<'p'>) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: ComponentProps<'ul'>) => <ul className="list-disc pl-6 mb-4 space-y-1" {...props} />,
  li: (props: ComponentProps<'li'>) => <li className="leading-relaxed" {...props} />,
  code: (props: ComponentProps<'code'>) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  table: (props: ComponentProps<'table'>) => (
    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 my-6" {...props} />
  ),
  thead: (props: ComponentProps<'thead'>) => <thead className="bg-gray-50 dark:bg-gray-800" {...props} />,
  tbody: (props: ComponentProps<'tbody'>) => <tbody {...props} />,
  tr: (props: ComponentProps<'tr'>) => <tr className="border-b border-gray-200 dark:border-gray-700" {...props} />,
  th: (props: ComponentProps<'th'>) => (
    <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600" {...props} />
  ),
  td: (props: ComponentProps<'td'>) => (
    <td className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600" {...props} />
  ),
  // 自定义容器组件
  div: (props: ComponentProps<'div'>) => {
    // 检查是否是tip容器
    if (props.className && props.className.includes('tip-container')) {
      return (
        <div className="bg-gray-100 dark:bg-gray-800 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg" {...props}>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              {props.children}
            </div>
          </div>
        </div>
      );
    }
    return <div {...props} />;
  },
};

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/articles", `${slug}.mdx`);
  let source = "";
  try {
    source = readFileSync(filePath, "utf8");
  } catch {
    notFound();
  }
  const { data, content } = matter(source);
  
  const [freePart] = content.split("{/* PAID */}");

  return (
    <>
      <Header />
      <MdxLayout title={data.title}>
        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote 
            source={freePart} 
            components={components}
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
