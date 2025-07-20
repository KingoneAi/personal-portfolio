export default function ArticleList({ articles }: { articles: { title: string, desc: string, slug: string }[] }) {
  return (
    <section id="articles" className="card-dark bg-white dark:bg-[var(--dark-card-bg)] rounded-2xl shadow-lg dark:shadow-[var(--dark-shadow-md)] p-8">
      <h2 className="text-3xl font-extrabold mb-8 title-dark dark:text-white">精华文章</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((a) => (
          <a key={a.slug} href={`/articles/${a.slug}`} className="block p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors text-black dark:text-white flex items-center">
            <img src="/placeholder.svg" alt="Placeholder" className="w-24 h-24 object-cover rounded-lg mr-4" />
            <div className="flex-grow">
              <div className="font-bold text-xl mb-1">{a.title}</div>
              <div className="text-gray-600 dark:text-gray-300 text-base mb-1">{a.desc}</div>
              <div className="text-blue-500 dark:text-blue-400 text-sm">阅读全文</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
} 