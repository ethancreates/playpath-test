import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const mainFont = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlayPath Test",
  description: "Created with Next.js, Tailwind CSS, and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
