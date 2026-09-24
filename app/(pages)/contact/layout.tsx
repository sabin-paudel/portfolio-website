import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sabin Paudel for freelance frontend work, React and Next.js projects, collaborations, or just to connect. Based in Pokhara, Nepal.",
  alternates: {
    canonical: "https://sabinpaudel.com.np/contact",
  },
  openGraph: {
    title: "Contact Sabin Paudel — Let's Work Together",
    description:
      "Get in touch with Sabin Paudel for freelance frontend work, React and Next.js projects, collaborations, or just to connect. Based in Pokhara, Nepal.",
    url: "https://sabinpaudel.com.np/contact",
  },
  twitter: {
    title: "Contact Sabin Paudel — Let's Work Together",
    description:
      "Get in touch with Sabin Paudel for freelance frontend work, React and Next.js projects, collaborations, or just to connect. Based in Pokhara, Nepal.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
