import type { Metadata } from "next";
import type { Taal } from "./teksten";

export const SITE_URL = "https://tomvanreijn.dev";

const SEO = {
  nl: {
    title: "Tom van Reijn | Saas en custom agents met Next.js",
    description:
      "Ik bouw saas en custom agents voor ondernemers, met Next.js, shadcn/ui, Neon en Vercel. Praat met mijn assistent en vraag wat ik voor jouw bedrijf kan bouwen.",
    locale: "nl_NL",
    pad: "/",
  },
  en: {
    title: "Tom van Reijn | SaaS and custom agents built with Next.js",
    description:
      "I build SaaS and custom agents for business owners, with Next.js, shadcn/ui, Neon and Vercel. Talk to my assistant and ask what I can build for your business.",
    locale: "en_US",
    pad: "/en",
  },
} as const;

export function metadataVoor(taal: Taal): Metadata {
  const s = SEO[taal];
  return {
    metadataBase: new URL(SITE_URL),
    title: s.title,
    description: s.description,
    alternates: {
      canonical: s.pad,
      languages: { nl: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: s.pad,
      siteName: "tomvanreijn.dev",
      title: s.title,
      description: s.description,
      locale: s.locale,
      alternateLocale: taal === "nl" ? "en_US" : "nl_NL",
    },
    twitter: { card: "summary", title: s.title, description: s.description },
    robots: { index: true, follow: true },
  };
}
