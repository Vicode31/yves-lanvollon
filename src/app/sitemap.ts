import { soins } from "@/data/soins";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.hypnotherapeute-lanvollon-plouha.fr";

  // Articles disponibles dans src/app/blog/(articles).
  const posts = [
    { slug: "hypnose-definition-lanvollon", lastModified: "2024-01-27" },
    { slug: "hypnose-volonte-lanvollon", lastModified: "2024-03-03" },
    { slug: "sevrage-tabac-lanvollon", lastModified: "2024-06-15" },
    { slug: "hypnose-spectacle-lanvollon", lastModified: "2024-09-20" },
    { slug: "hypnose-stress-lanvollon", lastModified: "2025-01-07" },
    { slug: "hypnose-tabac-lanvollon", lastModified: "2025-07-21" },
    { slug: "deuil-amoureux-hypnose-lanvollon", lastModified: "2026-03-21" },
    { slug: "crise-angoisse-hypnose-lanvollon", lastModified: "2026-05-08" },
    {
      slug: "peur-de-lechec-et-si-lhypnose-changeait-votre-rapport-a-lerreur",
      lastModified: "2026-09-16",
    },
    { slug: "sucre-hypnose-lanvollon", lastModified: "2026-06-08" },
    { slug: "insomnie-hypnose-lanvollon", lastModified: "2026-06-07" },
    {
      slug: "pensees-envahissantes-et-si-lhypnose-pouvait-enfin-faire-silence",
      lastModified: "2026-08-28",
    },
    {
      slug: "lacher-prise-pourquoi-cest-si-difficile-et-comment-lhypnose-agit",
      lastModified: "2026-10-04",
    },
  ];

  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
  }));

  const soinsPages = soins.map((soin) => ({
    url: `${baseUrl}/soins/${soin.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...soinsPages, ...blogPages];
}
