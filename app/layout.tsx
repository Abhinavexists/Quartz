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
  title: "Quartz",
  description: "New way to capture Idea",
  icons: [
    {
      media: "(prefers-color-scheme: dark)",
      url: "/favicon-dark.ico",
      href: "/favicon-dark.ico", 
    },
    {
      media: "(prefers-color-scheme: light)",
      url: "/favicon-light.ico",
      href: "/favicon-light.ico", 
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
