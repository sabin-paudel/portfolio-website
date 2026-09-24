import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import SystemBar from "./components/layout/SystemBar";
import MouseGlow from "./components/layout/MouseGlow";
import ProgressBar from "./components/ui/ProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sabinpaudel.com.np"),
  title: {
    default: "Sabin Paudel — Frontend Developer | React & Next.js",
    template: "%s | Sabin Paudel",
  },
  description:
    "Sabin Paudel is a frontend developer from Pokhara, Nepal, specializing in React, Next.js, and TypeScript. Explore projects, skills, and get in touch.",
  keywords: [
    "Sabin Paudel",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "web development",
    "portfolio",
    "Pokhara Nepal",
  ],
  authors: [{ name: "Sabin Paudel", url: "https://sabinpaudel.com.np" }],
  creator: "Sabin Paudel",
  alternates: {
    canonical: "https://sabinpaudel.com.np",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sabinpaudel.com.np",
    siteName: "Sabin Paudel",
    title: "Sabin Paudel — Frontend Developer | React & Next.js",
    description:
      "Frontend developer from Pokhara, Nepal. Building fast, accessible web apps with React, Next.js, and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@paudelsabin",
    creator: "@paudelsabin",
    title: "Sabin Paudel — Frontend Developer | React & Next.js",
    description:
      "Frontend developer from Pokhara, Nepal. Building fast, accessible web apps with React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  document.documentElement.classList.add('dark');
                  if (theme === 'light') {
                    document.documentElement.classList.add('lamp-on');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div aria-hidden="true" className="lamp-beam" />
        <ProgressBar />
        <SystemBar />
        <MouseGlow />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
