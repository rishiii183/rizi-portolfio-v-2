export default function sitemap() {
  const baseUrl = "https://monxdev.vercel.app";

  const routes = [
    "",
    "/projects",
    "/blog",
    "/education",
    "/contact",
    "/designs",
    "/resume",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
