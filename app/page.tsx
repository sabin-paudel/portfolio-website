import Hero from "./components/sections/Hero";
import HomeSections from "./components/sections/HomeSections";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Sabin Paudel",
    jobTitle: "Frontend Developer",
    url: "https://sabinpaudel.com.np",
    image: "https://sabinpaudel.com.np/heroimage.png",
    description:
      "Frontend developer from Pokhara, Nepal, specializing in React, Next.js, and TypeScript.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pokhara",
      addressCountry: "NP",
    },
    sameAs: [
      "https://github.com/sabin-paudel",
      "https://www.linkedin.com/in/sabin-paudel10/",
      "https://instagram.com/sabinpaudel_",
      "https://facebook.com/paudelsabin10/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Frontend Development",
      "Web Development",
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <HomeSections />
    </>
  );
}
