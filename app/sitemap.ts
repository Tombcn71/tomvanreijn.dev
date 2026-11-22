import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();
  const talen = { en: SITE_URL, nl: `${SITE_URL}/nl` };
  return [
    { url: SITE_URL, lastModified: nu, alternates: { languages: talen } },
    { url: `${SITE_URL}/nl`, lastModified: nu, alternates: { languages: talen } },
  ];
}
