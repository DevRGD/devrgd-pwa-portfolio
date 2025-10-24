import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeScript from '@/components/ThemeScript';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://devrgd.vercel.app/'),
  title: { default: 'DevRGD — MERN Developer Portfolio', template: '%s | DevRGD' },
  description:
    'Portfolio of DevRGD — Full-Stack MERN Developer crafting scalable, modern, and high-performance web applications.',
  keywords: [
    'DevRGD',
    'MERN Developer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'MongoDB',
    'Express',
    'TypeScript',
    'Next.js',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'DevRGD', url: 'https://devrgd.vercel.app/' }],
  creator: 'DevRGD',
  publisher: 'DevRGD',
  alternates: { canonical: 'https://devrgd.vercel.app/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devrgd.vercel.app/',
    title: 'DevRGD — MERN Developer Portfolio',
    description: 'Explore the work of DevRGD, a Full-Stack MERN Developer building clean and scalable web experiences.',
    siteName: 'DevRGD Portfolio',
    images: [
      {
        url: 'https://devrgd.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevRGD — MERN Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevRGD — MERN Developer Portfolio',
    description: 'Full-Stack MERN Developer creating scalable and modern web applications.',
    creator: '@devrgd',
    images: ['https://devrgd.vercel.app/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  category: 'Portfolio',
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png', shortcut: '/favicon.ico' },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="application-name" content="DevRGD Portfolio" />
        <meta name="author" content="DevRGD" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://devrgd.vercel.app/" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <ThemeScript />
        <SEOSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg text-text transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
