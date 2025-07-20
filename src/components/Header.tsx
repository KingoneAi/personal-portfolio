'use client';

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Github } from 'lucide-react';
import Link from "next/link";

function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      aria-label="切换主题"
      className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white dark:bg-[var(--dark-bg-tertiary)] transition-colors shadow dark:shadow-[var(--dark-shadow-sm)] hover:bg-gray-100 dark:hover:bg-[var(--dark-bg-secondary)] ${className}`}
      onClick={() => setDark((v) => !v)}
    >
      {dark ? (
        <span className="text-xl">🌙</span>
      ) : (
        <span className="text-xl">☀️</span>
      )}
    </button>
  );
}

export default function Header() {
  return (
    <header className="w-full py-4 bg-white shadow dark:bg-[var(--dark-bg-primary)] dark:shadow-[var(--dark-shadow-sm)]">
      <div className="max-w-5xl mx-auto px-4 flex items-center">
        <Link href="/" className="text-3xl font-extrabold tracking-widest text-blue-600 dark:text-blue-400 select-none">885211</Link>
        <nav className="flex items-center gap-4 ml-auto">
          <Link href="#portfolio" className="px-4 py-2 text-lg font-semibold text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 rounded-full transition-colors">作品展馆</Link>
          <Link href="#articles" className="px-4 py-2 text-lg font-semibold text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 rounded-full transition-colors">精华文章</Link>
          <Link href="#social" className="px-4 py-2 text-lg font-semibold text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-200 rounded-full transition-colors">关于我</Link>
        </nav>
        <ThemeToggle className="ml-8" />
        <Link href="https://github.com/KingoneAi/personal-portfolio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white dark:bg-[var(--dark-bg-tertiary)] transition-colors shadow dark:shadow-[var(--dark-shadow-sm)] hover:bg-gray-100 dark:hover:bg-[var(--dark-bg-secondary)] ml-6">
          <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </Link>
      </div>
    </header>
  );
}