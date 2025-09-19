import type { Config } from "@react-router/dev/config";

export default {
  // Disable SSR to make it a static SPA for GitHub Pages
  ssr: false,
  // Set the basename to match your GitHub Pages URL
  // basename: "/portfolio",
  // base: "/portfolio",
  // Config options...
  async prerender() {
    return ["/"];
  },
} satisfies Config;