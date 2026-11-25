import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I hid a copy of myself in your toaster. You're welcome.";

// Gate: the sealed scorer only accepts 1-200 chars, non-blank UTF-8 text.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry length ${entry.length} is outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
