import type { MetadataRoute } from "next";
import { site } from "@/src/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: site.url ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    ...(site.url && { sitemap: `${site.url}/sitemap.xml` }),
  };
}