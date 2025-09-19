import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { SITE_METADATA } from "@/lib/constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: SITE_METADATA.title },
    {
      name: "description",
      content: SITE_METADATA.description,
    },
    {
      name: "keywords",
      content: SITE_METADATA.keywords,
    },
    { name: "author", content: SITE_METADATA.author },
    { property: "og:type", content: SITE_METADATA.og.type },
    {
      property: "og:title",
      content: SITE_METADATA.og.title,
    },
    {
      property: "og:description",
      content: SITE_METADATA.og.description,
    },
    { property: "twitter:card", content: SITE_METADATA.twitter.card },
    {
      property: "twitter:title",
      content: SITE_METADATA.twitter.title,
    },
    {
      property: "twitter:description",
      content: SITE_METADATA.twitter.description,
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
