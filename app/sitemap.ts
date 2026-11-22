import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();
  const talen = { nl: SITE_URL, en: `${SITE_URL}/en` };
  return [
    { url: SITE_URL, lastModified: nu, alternates: { languages: talen } },
    { url: `${SITE_URL}/en`, lastModified: nu, alternates: { languages: talen } },
  ];
}
