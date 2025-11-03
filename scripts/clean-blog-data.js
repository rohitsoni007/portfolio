import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDataPath = path.join(path.dirname(__dirname), 'app', 'lib', 'blog-data.ts');

if (fs.existsSync(blogDataPath)) {
  fs.unlinkSync(blogDataPath);
  console.log('✅ Blog data file cleaned');
} else {
  console.log('ℹ️  No blog data file to clean');
}