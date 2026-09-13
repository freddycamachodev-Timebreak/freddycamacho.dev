import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freddycamacho.dev"),

  title: {
    default: "Freddy Camacho | Software Engineer",
    template: "%s | Freddy Camacho",
  },

  description:
    "Software Engineer specializing in Java, Spring Boot, backend systems, cloud technologies, and modern web applications.",

  keywords: [
    "Freddy Camacho",
    "Software Engineer",
    "Backend Engineer",
    "Java Developer",
    "Spring Boot",
    "TypeScript",
    "Next.js",
    "AWS",
    "Full Stack Developer",
    "Software Developer Mexico",
  ],

  authors: [
    {
      name: "Freddy Camacho",
      url: "https://freddycamacho.dev",
    },
  ],

  creator: "Freddy Camacho",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://freddycamacho.dev",
    siteName: "Freddy Camacho",
    title: "Freddy Camacho | Software Engineer",
    description:
      "Software Engineer building reliable backend systems, cloud applications, and modern digital products.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Freddy Camacho | Software Engineer",
    description:
      "Software Engineer building reliable backend systems, cloud applications, and modern digital products.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}