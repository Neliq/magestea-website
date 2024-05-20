import type { Metadata } from "next";
import { Roboto_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";

// Setting up fonts
const sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-primary-800">{children}</body>
    </html>
  );
}
