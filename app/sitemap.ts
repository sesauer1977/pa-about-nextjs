import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://perspektiveausland.com/ueber-uns",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          de: "https://perspektiveausland.com/ueber-uns",
        },
      },
    },
  ];
}
