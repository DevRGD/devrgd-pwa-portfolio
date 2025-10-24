'use client';

export default function BlogPage() {
  const posts = [
    {
      title: 'Optimizing React Apps for Performance',
      excerpt:
        'Learn how to boost performance in React apps using memoization, lazy loading, and efficient rendering techniques.',
      date: 'October 10, 2025',
    },
    {
      title: 'Mastering Tailwind CSS Design Systems',
      excerpt: 'Understand how to build scalable, themeable design systems with Tailwind 4 and CSS variables.',
      date: 'September 28, 2025',
    },
    {
      title: 'Deploying Node.js Apps with Docker',
      excerpt: 'A practical guide to containerizing Node.js apps for consistent deployments using Docker.',
      date: 'August 14, 2025',
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 bg-bg text-text-primary">
      <div className="absolute inset-0 -z-10 bg-tech-gradient opacity-15 blur-[100px]" />
      <div className="relative w-full max-w-4xl rounded-md border border-border/80 bg-surface/70 shadow-glow p-10 text-center backdrop-blur-lg">
        <h1 className="text-5xl font-extrabold text-primary mb-10">Blog</h1>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="p-6 rounded-md border border-border bg-bg/40 hover:bg-hover transition-all text-left"
            >
              <h2 className="text-2xl font-bold text-primary mb-1">{post.title}</h2>
              <p className="text-sm text-text-secondary mb-3">{post.date}</p>
              <p className="text-text-secondary">{post.excerpt}</p>
              <a href="#" className="text-primary hover:underline font-semibold mt-3 inline-block">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
