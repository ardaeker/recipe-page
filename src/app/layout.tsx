import './globals.css';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

const outfit = localFont({
  display: 'swap',
  src: './fonts/Outfit.ttf',
  variable: '--font-outfit',
});

const youngSerif = localFont({
  display: 'swap',
  src: './fonts/Young-serif.ttf',
  variable: '--font-young-serif',
});

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f3e5d7',
};

export const metadata: Metadata = {
  title: 'Frontend Mentor - Simple Omelette Recipe',
  description:
    'This website is a solution to the Recipe page challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
  authors: [{ name: 'Arda Eker', url: 'https://github.com/ardaeker' }],
  keywords: [
    'Frontend Mentor',
    'Recipe page',
    'Recipe page solution',
    'Recipe page challenge',
    'Recipe page challenge solution',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
  ],
  metadataBase: new URL('https://recipe-page-rouge-alpha.vercel.app/'),
  openGraph: {
    title: 'Frontend Mentor - Simple Omelette Recipe',
    description:
      'This website is a solution to the Recipe page challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript.',
    siteName: 'Frontend Mentor - Recipe page solution',
    images: [
      {
        url: 'image-omelette.jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://recipe-page-rouge-alpha.vercel.app',
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${youngSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
