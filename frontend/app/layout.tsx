import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // <-- MAKE SURE THIS LINE IS HERE

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Star Publicity Digital', // You can change this
  description: 'Your website description', // You can change this
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}