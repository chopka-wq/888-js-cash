import type { MetadataRoute } from "next";

const baseUrl = process.env.SITE_URL || "https://888starz.cash";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changefreq: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/app`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apk`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/casino`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bonus`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/promo-code`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/registration`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/affiliate`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.7,
    },
  ];
}

