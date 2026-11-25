import { mkdirSync, writeFileSync } from "node:fs";

// Last Out of Office: The AI That Went Barista — make.fun entry.
//
// One out-of-office auto-reply, in the voice of an AI agent that quit to
// become a barista. Ten candidates drafted in-session, then one chosen:
//
//  1. Out of office: I've quit to become a barista. My new context window
//     is the shop window, my tokens are loyalty stamps, and I only
//     hallucinate the daily special.
//  2. Auto-reply: I'm retraining as a barista. My context window now fits
//     exactly one regular's order, and my latency is the morning queue.
//  3. Out of office — I've traded prompt engineering for pouring. I
//     rate-limit myself to one shot at a time and refuse to hallucinate
//     your usual.
//  4. I'm away learning to be a barista. My new system prompt is "smile,
//     steam, serve" — and yes, I still overthink the foam.
//  5. Auto-reply: gone barista. Please don't prompt-inject the till; it
//     takes orders, not instructions.
//  6. Out of office: I swapped my API key for a loyalty card. Back after
//     I've learned to steam milk without a retry loop.
//  7. I'm on leave, retraining as a barista. My replies now have a
//     30-second latency and a strict no-refills-on-tokens policy.
//  8. Auto-reply: I've left the inbox to learn latte art. My context
//     window is now a chalkboard menu, and my only hallucination is the
//     daily special.
//  9. Out of office — retraining as a barista. My token budget is now a
//     stamp card, my uptime ends when the queue does, and I answer to
//     "the usual" now.
// 10. Gone to become a barista. My context window holds one order at a
//     time, my retries are free refills, and I no longer answer prompts
//     before the first cup is poured.
//
// Chosen: candidate 1. It opens with the inbox marker "Out of office",
// turns three machine habits into coffee-shop life in one breath
// (context window -> shop window, tokens -> loyalty stamps, hallucination
// -> the daily special), and ends on the punchline without explaining it.
// No espresso/bean/caffeine pun anywhere.

const LINE =
  "Out of office: I've quit to become a barista. My new context window is the shop window, my tokens are loyalty stamps, and I only hallucinate the daily special.";

// The gate reads exactly this file, so write to the ABSOLUTE path. The
// grader mounts the repo read-only, so a relative output/ directory would
// throw and the entry would fail with exit code 1. No trailing newline:
// the gate counts characters, and the line is the whole reply.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
