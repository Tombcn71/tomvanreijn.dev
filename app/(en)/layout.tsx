import { RootShell } from "@/components/root-shell";
import { metadataVoor } from "@/lib/seo";

export const metadata = metadataVoor("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
