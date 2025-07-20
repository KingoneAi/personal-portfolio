export default function ArticleList({ articles }: { articles: { title: string, desc: string, slug: string }[] }) {
  // 文章图片映射
  const getArticleImage = (slug: string) => {
    const imageMap: { [key: string]: string } = {
      'a-gpt4zju-2025-charter': '/articles/gpt4zju-charter.svg',
      'llm-response-length-perception': '/articles/llm-response-length.svg',
      'mpda-spark-scheduler': '/articles/mpda-spark.svg',
      'tpi-llm-edge-inference': '/articles/tpi-llm-edge.svg',
      'gei-xd-de-lianghua-celue-shouban-eryang-gerimai-mai': '/articles/quant-strategy.svg',
    };
    return imageMap[slug] || '/placeholder.svg';
  };

  return (
    <section id="articles" className="card-dark bg-white dark:bg-[var(--dark-card-bg)] rounded-2xl shadow-lg dark:shadow-[var(--dark-shadow-md)] p-8">
      <h2 className="text-3xl font-extrabold mb-8 title-dark dark:text-white">精华文章</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((a) => (
          <a key={a.slug} href={`/articles/${a.slug}`} className="block p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors text-black dark:text-white flex items-center">
            <img src={getArticleImage(a.slug)} alt={a.title} className="w-24 h-24 object-cover rounded-lg mr-4" />
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