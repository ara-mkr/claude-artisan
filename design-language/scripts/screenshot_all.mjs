// Screenshots every assets/component-examples/*.html to assets/readme-assets/<slug>.png
// Usage: node scripts/screenshot_all.mjs
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const htmlDir = path.join(root, 'assets/component-examples');
const outDir = path.join(root, 'assets/readme-assets');

const files = fs.readdirSync(htmlDir).filter(f => f.endsWith('.html')).sort();

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });

let ok = 0, fail = 0;
for (const file of files) {
  const slug = file.replace(/\.html$/, '');
  const outPath = path.join(outDir, `${slug}.png`);
  const fileUrl = 'file://' + path.join(htmlDir, file);
  try {
    await page.goto(fileUrl, { waitUntil: 'networkidle' });
    await page.screenshot({ path: outPath, fullPage: true });
    ok++;
    console.log(`OK   ${slug}`);
  } catch (err) {
    fail++;
    console.log(`FAIL ${slug}: ${err.message}`);
  }
}

await browser.close();
console.log(`\nDone. ${ok} succeeded, ${fail} failed, ${files.length} total.`);
