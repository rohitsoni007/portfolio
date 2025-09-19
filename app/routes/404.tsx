import type { Route } from "./+types/404";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page Not Found" },
    { name: "description", content: "The requested page could not be found." },
  ];
}

export default function NotFound() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>404</h1>
      <p>The requested page could not be found.</p>
      <a href="/" className="text-blue-600 hover:underline">
        Go back to home
      </a>
    </main>
  );
}