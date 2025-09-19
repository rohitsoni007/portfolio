import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MERN & React Native Developer | Portfolio" },
    {
      name: "description",
      content:
        "Full-stack MERN developer specializing in React Native mobile apps, Node.js backends, and modern web development. View my portfolio and projects.",
    },
    {
      name: "keywords",
      content:
        "MERN developer, React Native, Node.js, MongoDB, Express, React, JavaScript, TypeScript, mobile development",
    },
    { name: "author", content: "MERN & React Native Developer" },
    { property: "og:type", content: "website" },
    {
      property: "og:title",
      content: "MERN & React Native Developer | Portfolio",
    },
    {
      property: "og:description",
      content:
        "Full-stack MERN developer specializing in React Native mobile apps and modern web development.",
    },
    { property: "twitter:card", content: "summary_large_image" },
    {
      property: "twitter:title",
      content: "MERN & React Native Developer | Portfolio",
    },
    {
      property: "twitter:description",
      content:
        "Full-stack MERN developer specializing in React Native mobile apps and modern web development.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
