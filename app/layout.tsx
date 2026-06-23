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
  title: {
    default: "Vinícius Sêmola Arruda",
    template: "%s | Vinícius Sêmola Arruda",
  },

  description:
    "Desenvolvedor Web e Mobile especializado em Next.js, React Native, sistemas, aplicativos e soluções modernas.",

  keywords: [
    "Vinícius Arruda",
    "Next.js",
    "React",
    "React Native",
    "Expo",
    "Prisma",
    "PostgreSQL",
    "Desenvolvedor",
    "Portfólio",
    "Aplicativos",
    "Sites",
    "Sistemas",
  ],

  authors: [
    {
      name: "Vinícius Sêmola Arruda",
    },
  ],

  creator: "Vinícius Sêmola Arruda",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Vinícius Sêmola Arruda",

    description:
      "Desenvolvedor Web e Mobile especializado em criar sites, sistemas e aplicativos modernos.",

    url: "https://viniciussemolaarruda.vercel.app/",

    siteName: "Vinícius Sêmola Arruda",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Vinícius Sêmola Arruda",

    description:
      "Desenvolvedor Web e Mobile especializado em criar sites, sistemas e aplicativos modernos.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}