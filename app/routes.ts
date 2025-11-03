import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog.$slug.tsx"),
  route("resume", "routes/resume.tsx"),
  route("*", "routes/404.tsx")
] satisfies RouteConfig;