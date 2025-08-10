import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ThemeProvider } from '../contexts/ThemeProvider';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Star Wars Character Search Application',
  description: 'Search and explore Star Wars characters',
  icons: {
    icon: '/icons8-star-wars.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
