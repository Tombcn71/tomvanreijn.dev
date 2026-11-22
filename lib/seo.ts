import type { Metadata } from "next";
import type { Taal } from "./teksten";

export const SITE_URL = "https://tomvanreijn.dev";

const SEO = {
  nl: {
    title: "Tom van Reijn | Saas en custom agents",
    description:
      "Software en AI-assistenten die je elke dag gebruikt in je bedrijf.",
    locale: "nl_NL",
    pad: "/nl",
  },
  en: {
    title: "Tom van Reijn | SaaS and custom agents",
    description:
      "Software and AI assistants you use every day in your business.",
    locale: "en_US",
    pad: "/",
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
      languages: { en: "/", nl: "/nl", "x-default": "/" },
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
