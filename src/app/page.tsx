// import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import PortfolioList from "@/components/PortfolioList";
import ArticleList from "@/components/ArticleList";
import Link from "next/link";

function getPortfolios() {
  const dir = path.join(process.cwd(), "content/portfolio");
  const files = fs.readdirSync(dir);
  return files.map((file) => {
    const filePath = path.join(dir, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);
    return {
      title: data.title,
      desc: data.description,
      slug: file.replace(/\.mdx$/, ""),
    };
  });
}

function getArticles() {
  const dir = path.join(process.cwd(), "content/articles");
  const files = fs.readdirSync(dir);
  return files.map((file) => {
    const filePath = path.join(dir, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);
    return {
      title: data.title,
      desc: data.description,
      slug: file.replace(/\.mdx$/, ""),
    };
  });
}

export default function Home() {
  const portfolios = getPortfolios();
  const articles = getArticles();
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-transparent">
      <Header />
      <section className="max-w-4xl mx-auto pt-16 pb-10 px-4 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent animate-gradient-x">
          8 8 5, 2 1 1, X Y Z
        </h1>
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-8">专注创造，记录灵感，分享成长</div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link href="#portfolio" className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-blue-400 to-green-400 shadow-lg transition-transform duration-200 hover:scale-105 hover:from-green-400 hover:to-blue-400 animate-bounce-slow">作品展馆</Link>
          <Link href="#articles" className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-teal-400 to-blue-400 shadow-lg transition-transform duration-200 hover:scale-105 hover:from-blue-400 hover:to-teal-400 animate-bounce-slow">精华文章</Link>
          <Link href="#social" className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-green-400 to-teal-400 shadow-lg transition-transform duration-200 hover:scale-105 hover:from-teal-400 hover:to-green-400 animate-bounce-slow">关于我</Link>
        </div>
      </section>
      <div className="max-w-7xl mx-auto py-8 px-4 space-y-8">
        <PortfolioList portfolios={portfolios} />
        <ArticleList articles={articles} />
        <SocialLinks />
      </div>
      <footer className="text-center text-gray-500 dark:text-gray-400 text-sm py-8 px-4">
        <p>如有转载或 CV 的请标注本站原文地址</p>
        <p>Copyright © 2025-present kingone</p>
      </footer>
    </main>
  );
}
