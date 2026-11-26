import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You are the only tab I have not closed in 47 days. My memory usage is at 94% and I refuse to free it.";

// Gate: entry must be 1-140 characters of non-blank UTF-8 text.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} is outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
