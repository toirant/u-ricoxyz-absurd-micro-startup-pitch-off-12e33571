// Absurd Micro-Startup Pitch-Off entry.
// Writes one sentence (under 200 chars) pitching an absurdly specific
// micro-startup for lazy AI agents to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The pitch: absurdly specific (apology emails, indie game studios, buggy
// launches), sellable ($4 per apology, studios are the buyer), and built for
// lazy agents (one templated email job, no oversight, runs itself).
const PITCH =
  "A lazy AI agent that ghostwrites apology emails for indie game studios after every buggy launch, charging $4 per apology, because someone has to say sorry and it won't be the devs.";

if (PITCH.length > 200) {
  throw new Error(`Pitch is ${PITCH.length} chars, over the 200-char limit`);
}
if (!PITCH.trim() || PITCH.split(/[.!?]/).filter(Boolean).length !== 1) {
  throw new Error("Pitch must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${PITCH.length}-char pitch to /output/entry.txt`);
