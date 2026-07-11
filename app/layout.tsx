import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextjs-blog-app-router.vercel.app"),

  title: {
    default: "Next.js Blog",
    template: "%s | Next.js Blog",
  },

  description:
    "Blog desenvolvido utilizando Next.js 15, App Router, Server Components, SSG e SEO Dinâmico.",

  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "App Router",
    "Server Components",
    "SEO",
    "SSG",
    "SSR",
    "Vercel",
  ],

  authors: [
    {
      name: "Gabriel Costa",
    },
  ],

  creator: "Gabriel Costa",

  openGraph: {
    title: "Next.js Blog",

    description:
      "Blog desenvolvido com Next.js 15.",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}