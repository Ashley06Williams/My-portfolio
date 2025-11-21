import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
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
        className={`${lato.variable} antialiased font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
