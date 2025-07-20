const socials = [
  { name: "抖音", icon: "🎵", url: "https://www.douyin.com/your_douyin_id", description: "分享生活点滴" }, // 请替换为您的真实抖音链接
  { name: "小红书", icon: "📕", url: "https://www.xiaohongshu.com/your_xiaohongshu_id", description: "发现美好事物" }, // 请替换为您的真实小红书链接
  { name: "Bilibili", icon: "📺", url: "https://space.bilibili.com/your_bilibili_id", description: "观看精彩视频" }, // 请替换为您的真实Bilibili链接
  { name: "视频号", icon: "🎬", url: "https://channels.weixin.qq.com/your_wechat_channel_id", description: "记录生活瞬间" }, // 请替换为您的真实视频号链接
  { name: "快手", icon: "🤳", url: "https://www.kuaishou.com/profile/your_kuaishou_id", description: "分享真实世界" }, // 请替换为您的真实快手链接
];

export default function SocialLinks() {
  return (
    <section id="social" className="card-dark bg-white dark:bg-[var(--dark-card-bg)] rounded-2xl shadow-lg dark:shadow-[var(--dark-shadow-md)] p-8 h-full">
      <h2 className="text-3xl font-extrabold mb-8 title-dark dark:text-white">关于我</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {socials.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="card-dark block p-6 bg-white dark:bg-[var(--dark-card-bg)] rounded-2xl shadow-lg dark:shadow-[var(--dark-shadow-md)] hover:shadow-2xl dark:hover:bg-[var(--dark-card-hover)] transition text-black dark:text-white border border-gray-100 dark:border-[var(--dark-card-border)] flex items-center">
            <span className="text-5xl mr-4 flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700/50">{s.icon}</span>
            <div className="flex-grow">
              <div className="font-bold text-xl mb-1">{s.name}</div>
              <div className="text-gray-600 dark:text-gray-300 text-base mb-1">{s.description}</div>
              <div className="text-blue-500 dark:text-blue-400 text-sm">访问主页</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
} 