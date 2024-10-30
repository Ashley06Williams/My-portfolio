import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ashley's Portfolio",
  description: "Check out my custom built portfolio with NextJs",
  openGraph: {
    url: "https://codedbyash.co.za/",
    title: "Ashley's Portfolio",
    description:
      "Explore Ashley Williams' portfolio, showcasing responsive web development projects, skills, and more!",
    images: [
      {
        url: "/PortIco.png",
        width: 1200,
        height: 630,
        alt: "Coded by Ash Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
