import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aliserjik.ir/",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
