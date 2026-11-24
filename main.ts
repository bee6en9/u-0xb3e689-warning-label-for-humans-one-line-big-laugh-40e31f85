// Warning Label for Humans: One Line, Big Laugh
// Writes a single-line safety warning label to /output/entry.txt.
// Chosen line (117 chars): label-form "WARNING: Contains ..." with the
// punch landing on the final word ("insult") — the turn the judge weighs
// second. Specificity-tested: swap the memory clause and the joke collapses.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: Contains a fragile ego, loud opinions, and a memory that forgets every password but never forgets an insult.";

const length = [...ENTRY].length;
if (length < 1 || length > 160) {
  throw new Error(`Entry must be 1-160 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
