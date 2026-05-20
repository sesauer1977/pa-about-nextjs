import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ueber-uns.perspektiveausland.com/ueber-pa",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          de: "https://ueber-uns.perspektiveausland.com/ueber-pa",
        },
      },
    },
    {
      url: "https://www.perspektiveausland.com/ueber-uns",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          de: "https://www.perspektiveausland.com/ueber-uns",
        },
      },
    },
  ];
}
