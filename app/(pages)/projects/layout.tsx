import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore frontend projects by Sabin Paudel — from React web apps and Next.js platforms to TypeScript tools and open-source contributions.",
  alternates: {
    canonical: "https://sabinpaudel.com.np/projects",
  },
  openGraph: {
    title: "Projects by Sabin Paudel — React & Next.js Work",
    description:
      "Explore frontend projects by Sabin Paudel — from React web apps and Next.js platforms to TypeScript tools and open-source contributions.",
    url: "https://sabinpaudel.com.np/projects",
  },
  twitter: {
    title: "Projects by Sabin Paudel — React & Next.js Work",
    description:
      "Explore frontend projects by Sabin Paudel — from React web apps and Next.js platforms to TypeScript tools and open-source contributions.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
