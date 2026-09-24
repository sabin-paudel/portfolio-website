import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: "https://sabinpaudel.com.np/sitemap.xml",
    host: "https://sabinpaudel.com.np",
  };
}
