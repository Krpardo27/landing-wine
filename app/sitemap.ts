import type { MetadataRoute } from "next";
import { site } from "@/src/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return site.url ? [{ url: site.url }] : [];
}