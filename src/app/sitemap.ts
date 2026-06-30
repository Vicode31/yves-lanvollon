import { soins } from "@/data/soins";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.hypnose-saintbrieuc.fr";

  // Simulation d'articles dynamiques (à remplacer par un fetch depuis une API ou BDD)
  const posts = [
    { slug: "hypnose-definition-saint-brieuc", lastModified: "2024-01-27" },
    { slug: "hypnose-volonte-saint-brieuc", lastModified: "2024-03-03" },
    { slug: "sevrage-tabac-saint-brieuc", lastModified: "2024-06-15" },
    { slug: "hypnose-spectacle-saint-brieuc", lastModified: "2024-09-20" },
    { slug: "hypnose-stress-saint-brieuc", lastModified: "2025-01-07" },
    { slug: "hypnose-tabac-saint-brieuc", lastModified: "2025-07-21" },
    { slug: "deuil-amoureux-hypnose-saint-brieuc", lastModified: "2026-03-21" },
    { slug: "crise-angoisse-hypnose-saint-brieuc", lastModified: "2026-05-08" },
    { slug: "sucre-hypnose-saint-brieuc", lastModified: "2026-06-08" },
    { slug: "insomnie-hypnose-saint-brieuc", lastModified: "2026-06-07" },
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
