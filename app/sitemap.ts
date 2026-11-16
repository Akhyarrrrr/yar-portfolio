import { getProjects } from "@/lib/content";
import { archiveSiteUrl } from "@/content/profile";

export default async function sitemap() {
  const projects = await getProjects();
  return projects
    .filter((p) => p.slug)
    .map((p) => ({
      url: `${archiveSiteUrl}/projects/${p.slug}`,
    }));
}
