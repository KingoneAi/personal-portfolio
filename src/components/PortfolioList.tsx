export default function PortfolioList({ portfolios }: { portfolios: { title: string, desc: string, slug: string }[] }) {
  return (
    <section id="portfolio" className="card-dark bg-white dark:bg-[var(--dark-card-bg)] rounded-2xl shadow-lg dark:shadow-[var(--dark-shadow-md)] p-8 h-full">
      <h2 className="text-3xl font-extrabold mb-8 title-dark dark:text-white">作品展馆</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolios.map((p) => (
          <a key={p.slug} href={`/portfolio/${p.slug}`} className="card-dark flex items-center p-6 bg-white dark:bg-[var(--dark-card-bg)] rounded-2xl shadow-lg dark:shadow-[var(--dark-shadow-md)] hover:shadow-2xl dark:hover:bg-[var(--dark-card-hover)] transition text-black dark:text-white border border-gray-100 dark:border-[var(--dark-card-border)]">
            <img src="/placeholder.svg" alt="Placeholder" className="w-24 h-24 object-cover rounded-lg mr-4" />
            <div className="flex-grow">
              <div className="font-bold text-xl mb-1">{p.title}</div>
              <div className="text-gray-600 dark:text-gray-300 text-base mb-1">{p.desc}</div>
              <div className="text-blue-500 dark:text-blue-400 text-sm">查看详情</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
} 