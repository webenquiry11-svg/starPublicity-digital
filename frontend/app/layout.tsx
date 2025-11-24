import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

// Import Jost from Google Fonts
const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost", // CSS variable for Jost
});

export const metadata: Metadata = {
  title: "Star Publicity",
  description: "Redefining Results, Building Your Success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Add a <head> tag to import Clash Grotesk from its CDN */}
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,700,600,500&display=swap" rel="stylesheet" />
      </head>
      <body className={`${jost.variable}`}>{children}</body>
    </html>
  );
}