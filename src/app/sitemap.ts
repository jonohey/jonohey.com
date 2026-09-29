import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/music", priority: 0.9 },
    { path: "/research", priority: 0.7 },
    { path: "/contact", priority: 0.5 },
    { path: "/bibliography", priority: 0.3 },
    {
      path: "/files/Hey_Thesis_Effective_Framing_in_Design_Teams_2008.pdf",
      priority: 0.6,
    },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
