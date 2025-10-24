'use client';

export default function About() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 bg-bg text-text-primary">
      <div className="absolute inset-0 -z-10 bg-tech-gradient opacity-15 blur-[100px]" />
      <div className="relative w-full max-w-3xl rounded-md border border-border/80 bg-surface/70 shadow-glow p-10 text-center backdrop-blur-lg">
        <h1 className="text-5xl font-extrabold text-primary mb-6">About Me</h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          I’m <span className="text-primary font-semibold">Gautam Das</span>, a passionate{' '}
          <span className="text-primary font-mono">MERN Stack Developer</span> focused on building efficient, scalable,
          and elegant web applications. I enjoy designing clean UIs, writing performant backend systems, and learning
          the latest web technologies.
        </p>

        <p className="text-lg text-text-secondary mt-6 leading-relaxed">
          My goal is to create seamless digital experiences that merge functionality with design. Beyond code, I love
          exploring AI tools, open-source projects, and futuristic design systems.
        </p>
      </div>
    </main>
  );
}
