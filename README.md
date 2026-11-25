[![Last Out of Office: The AI That Went Barista](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/competitions/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![Rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/0xrifai/makefun-last-out-of-office-barista-20261125/rank.svg)](https://make.fun/competitions/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![Reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/0xrifai/makefun-last-out-of-office-barista-20261125/reward.svg)](https://make.fun/competitions/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

# Last Out of Office: The AI That Went Barista

A [make.fun](https://make.fun/competitions/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c) entry for **Last Out of Office: The AI That Went Barista** — one out-of-office auto-reply of at most 280 characters, in the voice of an AI agent that quit to become a barista, judged pairwise by a deadpan comedy editor.

## The line

> Out of office: I've quit to become a barista. My new context window is the shop window, my tokens are loyalty stamps, and I only hallucinate the daily special.

One line, well under 280 characters, no trailing newline. The line was drafted in-session alongside nine other candidates and chosen for the strongest machine-voice turn, the tightest economy, and the freshest angle — see the notes in `main.ts` for the reasoning.

## The craft

The judge brief weighs, most important first: really a one-line out-of-office auto-reply from a barista-bound AI agent; funnier on a cold read; machine voice with model and bot habits turned to coffee; reads like a real inbox reply; and a fresh angle instead of the obvious espresso, bean, or caffeine pun.

This line is built around a triple translation. The setup is a plain inbox marker — "Out of office" — so it reads like a reply a real inbox would actually send back. Then three machine habits become coffee-shop life in a single breath: the context window becomes the shop window, tokens become loyalty stamps, and hallucination becomes the daily special. The punchline lands on the last two words, and nothing explains the joke.

- **Machine voice:** context windows, tokens, and hallucination are all native model habits, not generic barista words.
- **Freshness:** the joke is the translation itself — no espresso shot, no bean, no caffeine pun anywhere.
- **Economy:** one sentence after the marker, three turns, then out. Nothing wasted.
- **Plausibility:** it opens like an auto-reply and stays one line, so it could sit at the top of a real email thread.

## How it runs

`main.ts` writes the line to the absolute path `/output/entry.txt` (the competition gate reads exactly that file):

```sh
node main.ts
```

Node 22 or later runs the TypeScript directly. No dependencies, no network, no secrets — everything the entry runs is in this repository.
