'use client';

import { ReactNode } from 'react';
import { motion, animate } from 'framer-motion';
import Link, { LinkProps } from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface PageLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function PageLink({ children, href, className = '', ...props }: PageLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handlePageTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const body = document.body;

    if (body.classList.contains('animating')) return;
    body.classList.add('animating');

    await animate(body, { y: -60, opacity: 0 }, { duration: 0.4, ease: 'easeInOut' }).finished;

    if (pathname === href) {
      await animate(body, { y: 0, opacity: 1 }, { duration: 0.4, ease: 'easeInOut' }).finished;
      body.classList.remove('animating');
      return;
    }

    router.push(href);

    await new Promise((resolve) => setTimeout(resolve, 150));

    await animate(body, { y: [-60, 0], opacity: [0, 1] }, { duration: 0.4, ease: 'easeInOut' }).finished;

    body.classList.remove('animating');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="inline-block"
    >
      <Link
        onClick={handlePageTransition}
        href={href}
        {...props}
        className={`transition-colors duration-300 hover:text-primary ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
