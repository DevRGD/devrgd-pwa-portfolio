'use client';

import { useState } from 'react';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import PageLink from './PageLink';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-border/80 shadow-glow bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <PageLink href="/" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
          <span className="font-mono">&lt;/&gt;</span>
          <span className="hidden sm:inline">DevRGD</span>
        </PageLink>

        <div className="hidden md:flex items-center gap-8 text-text-secondary font-medium">
          {links.map((link) => (
            <PageLink key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </PageLink>
          ))}
          <ThemeToggleButton />
        </div>

        <button
          onClick={() => setOpen((p) => !p)}
          className="md:hidden p-2 rounded-md text-text-secondary hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface/90 backdrop-blur-lg border-t border-border/70"
          >
            <div className="flex flex-col items-center gap-4 py-4 text-text-secondary font-medium">
              {links.map((link) => (
                <PageLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </PageLink>
              ))}
              <ThemeToggleButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
