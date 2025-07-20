import React from 'react';

interface MdxLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const MdxLayout: React.FC<MdxLayoutProps> = ({ children, title }) => {
  return (
    <div className="prose dark:prose-invert prose-sm md:prose-base lg:prose-lg max-w-5xl mx-auto py-8 px-4
      prose-headings:font-bold prose-h1:text-center
      prose-a:text-blue-600 hover:prose-a:text-blue-500
      prose-img:rounded-lg prose-img:shadow-md
      dark:prose-invert dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300
      prose-code:bg-gray-100 prose-code:p-1 prose-code:rounded dark:prose-code:bg-gray-800">
      {title && <h1 className="text-center text-4xl font-extrabold mb-8 dark:text-white">{title}</h1>}
      {children}
    </div>
  );
};

export default MdxLayout;
