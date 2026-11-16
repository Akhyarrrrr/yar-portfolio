import type { MetadataRoute } from "next";
import { archiveSiteUrl } from "@/content/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/login", "/api/"],
      },
    ],
    sitemap: `${archiveSiteUrl}/sitemap.xml`,
  };
}
