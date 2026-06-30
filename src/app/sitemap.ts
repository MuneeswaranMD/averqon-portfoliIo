import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://averqon.com";

  const routes = [
    "",
    "/services",
    "/portfolio",
    "/case-studies",
    "/careers",
    "/blog",
    "/about",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : route === "/portfolio" ? 0.9 : route === "/services" || route === "/case-studies" ? 0.8 : 0.7,
  }));
}
