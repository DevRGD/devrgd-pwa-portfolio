'use client';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiGithub, SiLinkedin } from 'react-icons/si';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 bg-bg text-text-primary">
      <div className="absolute inset-0 -z-10 bg-tech-gradient opacity-15 blur-[100px]"></div>

      <div className="relative flex w-full max-w-2xl flex-col items-center gap-8 p-8 md:p-10 rounded-md border border-border/80 bg-surface/70 shadow-glow text-center backdrop-blur-lg">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight">Gautam Das</h1>

        <p className="text-lg md:text-xl text-text-secondary max-w-md leading-relaxed">
          Full-Stack
          <span className="text-primary font-semibold font-mono bg-border/20 px-2 py-1 rounded-md">MERN Developer</span>
          crafting scalable, clean, and modern web experiences.
        </p>

        <div className="flex gap-8 text-4xl text-text-secondary mt-4">
          <SiMongodb className="hover:text-primary transition-all hover:scale-110" title="MongoDB" />
          <SiExpress className="hover:text-primary transition-all hover:scale-110" title="Express.js" />
          <SiReact className="hover:text-primary transition-all hover:scale-110" title="React" />
          <SiNodedotjs className="hover:text-primary transition-all hover:scale-110" title="Node.js" />
        </div>

        <button className="mt-8 bg-primary text-text-primary hover:bg-accent px-8 py-3 rounded-md font-semibold text-lg shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-100">
          View My Projects
        </button>

        <div className="flex gap-6 mt-6 text-2xl text-text-secondary">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors hover:scale-110"
          >
            <SiGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors hover:scale-110"
          >
            <SiLinkedin />
          </a>
        </div>
      </div>
    </main>
  );
}
