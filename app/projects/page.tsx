'use client';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Portfolio Website',
      desc: 'A sleek, responsive portfolio built with Next.js and Tailwind CSS.',
      tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
      link: '#',
    },
    {
      title: 'Chat App',
      desc: 'Real-time chat application with Socket.io and Express backend.',
      tech: ['React', 'Node.js', 'Socket.io'],
      link: '#',
    },
    {
      title: 'Task Manager API',
      desc: 'Scalable REST API for task management with JWT authentication.',
      tech: ['Express', 'MongoDB', 'JWT'],
      link: '#',
    },
  ];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 bg-bg text-text-primary">
      <div className="absolute inset-0 -z-10 bg-tech-gradient opacity-15 blur-[100px]" />
      <div className="relative w-full max-w-5xl rounded-md border border-border/80 bg-surface/70 shadow-glow p-10 text-center backdrop-blur-lg">
        <h1 className="text-5xl font-extrabold text-primary mb-10">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-md border border-border bg-bg/40 hover:bg-hover transition-all text-left"
            >
              <h2 className="text-2xl font-bold text-primary mb-2">{p.title}</h2>
              <p className="text-text-secondary mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-sm font-mono bg-border/30 text-text-secondary px-2 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
