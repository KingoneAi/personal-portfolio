'use client';
import { useState } from "react";
import Image from "next/image";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold mb-3 mt-6" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-medium mb-2 mt-4" {...props} />,
  p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-1" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  code: (props: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  table: (props: any) => (
    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 my-6" {...props} />
  ),
  thead: (props: any) => <thead className="bg-gray-50 dark:bg-gray-800" {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr className="border-b border-gray-200 dark:border-gray-700" {...props} />,
  th: (props: any) => (
    <th className="px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600" {...props} />
  ),
  td: (props: any) => (
    <td className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600" {...props} />
  ),
  // 自定义容器组件
  div: (props: any) => {
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