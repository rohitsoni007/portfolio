import { copyFileSync, existsSync } from "fs";
import { resolve } from "path";

// Copy index.html to 404.html for GitHub Pages
const buildDir = resolve(process.cwd(), "build/client");

// Check if index.html exists directly in buildDir
if (existsSync(resolve(buildDir, "index.html"))) {
  copyFileSync(resolve(buildDir, "index.html"), resolve(buildDir, "404.html"));
} else {
  // Check if index.html exists in portfolio subdirectory
  const portfolioDir = resolve(buildDir, "portfolio");
  if (existsSync(resolve(portfolioDir, "index.html"))) {
    copyFileSync(
      resolve(portfolioDir, "index.html"),
      resolve(buildDir, "404.html")
    );
  } else {
    console.error("Could not find index.html in build directories");
    process.exit(1);
  }
}

console.log("404.html copied successfully!");
