'use client';

import { useState, useEffect } from "react";
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
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </Link>
      </div>
    </header>
  );
}