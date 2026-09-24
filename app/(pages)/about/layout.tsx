import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sabin Paudel — a frontend developer from Pokhara, Nepal, with experience in React, Next.js, TypeScript, and modern web application development.",
  alternates: {
    canonical: "https://sabinpaudel.com.np/about",
  },
  openGraph: {
    title: "About Sabin Paudel — Frontend Developer",
    description:
      "Learn about Sabin Paudel — a frontend developer from Pokhara, Nepal, with experience in React, Next.js, TypeScript, and modern web application development.",
    url: "https://sabinpaudel.com.np/about",
  },
  twitter: {
    title: "About Sabin Paudel — Frontend Developer",
    description:
      "Learn about Sabin Paudel — a frontend developer from Pokhara, Nepal, with experience in React, Next.js, TypeScript, and modern web application development.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
