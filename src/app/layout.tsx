import type { Metadata } from "next";
import { Roboto_Mono, Nunito_Sans, Pirata_One } from "next/font/google";
import "./globals.css";

// Setting up fonts
const sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = Pirata_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-mono",
});

// Metadata for the website
export const metadata: Metadata = {
  title: "Mage's Tea | Game Development Studio",
  description:
    "Mage’s Tea is a game development studio that creates magical games for players of all ages. Our games are designed to be fun, engaging, and accessible to everyone. Whether you’re a casual gamer or a hardcore player, we have something for you.",
  //metadataBase: new URL(""),
  keywords: [
    "Games",
    "Mage's Tea",
    "Game Development",
    "Studio",
    "Game Studio",
    "Game Design",
    "Game Art",
    "Game Programming",
    "Game Development Studio",
    "Game Development Company",
    "Game Development Services",
    "Game Development Agency",
    "Game Development Firm",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "/favicon.ico",
      url: "/favicon.ico",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Mage's Tea | Game Development Studio",
    description:
      "Mage’s Tea is a game development studio that creates magical games for players of all ages. Our games are designed to be fun, engaging, and accessible to everyone. Whether you’re a casual gamer or a hardcore player, we have something for you.",
    url: "",
    siteName: "Mage's Tea",
    images: [
      {
        url: "", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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
