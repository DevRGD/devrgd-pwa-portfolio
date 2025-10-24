'use client';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiGit,
} from 'react-icons/si';

export default function SkillsPage() {
  const skills = [
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiReact, name: 'React' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiExpress, name: 'Express.js' },
    { icon: SiNodedotjs, name: 'Node.js' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiTailwindcss, name: 'Tailwind CSS' },
    { icon: SiDocker, name: 'Docker' },
    { icon: SiGit, name: 'Git & GitHub' },
  ];

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 bg-bg text-text-primary">
      <div className="absolute inset-0 -z-10 bg-tech-gradient opacity-15 blur-[100px]" />
      <div className="relative w-full max-w-4xl rounded-md border border-border/80 bg-surface/70 shadow-glow p-10 text-center backdrop-blur-lg">
        <h1 className="text-5xl font-extrabold text-primary mb-10">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform"
            >
              <Icon className="text-5xl text-text-secondary hover:text-primary transition-colors" />
              <span className="text-text-secondary font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
