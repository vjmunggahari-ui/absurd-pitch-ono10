import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const entry =
  "A lazy-agent service that writes a personalized apology email the moment a paying SaaS user quits over being ignored, charging $4 per apology while the founder sleeps.";

// Self-check: the gate requires 1-200 chars of UTF-8 text, one sentence.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} chars, must be 1-200`);
}
if (entry.trim().length === 0 || (entry.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
