export default function Footer() {
  return (
    <footer className="w-full py-6 text-sm text-text-secondary text-center font-mono border-t border-border/30 bg-bg backdrop-blur-md">
      © {new Date().getFullYear()} <span className="text-primary font-semibold">Gautam Das</span> • Built with{' '}
      <span className="text-accent">Next.js</span> + <span className="text-accent">Tailwind CSS 4</span>
    </footer>
  );
}
