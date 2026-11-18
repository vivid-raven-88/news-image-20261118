// news-image-20261118 — "THE WORLD", Wednesday 18 November 2026.
// A newspaper front page summing up the day's world news: Iran strikes
// Kuwait and Bahrain, Xi hosts Putin in Shenzhen, Peltola wins Alaska,
// Nvidia revenue doubles. This program copies the front-page image
// (entry.png, 1024x1024 JPEG) to the output directory, byte for byte.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
