---
title: "The Instagram Daily Digest — A Template for Your Own Muse"
summary: "A daily, curated digest of posts, reels, and stories from accounts you follow, designed to replace Instagram’s algorithmic feed."
publishedAt: 2026-10-20
readingTime: 12
category: AI Tools
featured: true
featuredImage: /blog-media/instagram-daily-digest-template/featured-workflow.svg
featuredImageAlt: Instagram content moving through Muse into a curated daily digest.
---

A daily, curated digest of posts, reels, and stories **only from accounts you follow**, delivered by your Muse agent so you can skip Instagram's algorithmic feed and cut the time you lose in the app.

The key idea: it learns who actually matters to you from your feedback, instead of making you sort your following list by hand. You rate what it gets wrong, and every rating becomes a standing rule it applies from then on.

## How to use this template

1. Connect Instagram to your Muse. Optionally, also connect Instagram Messages — that unlocks one extra signal for deciding who matters to you (see the tiering section in the prompt below).
2. Copy the Master Prompt below into a chat with your Muse, fill in the [bracketed] bits, and send it.
3. Let it run a launch digest, rate the items, and let it calibrate from there. The first digest will not be perfect — that is expected, and it improves quickly.

The rest of this document explains the system so you know what you are getting: the prompt itself, a lighter variant, privacy notes, and what week one actually looks like.

## The Master Prompt

Copy everything in the block below into a chat with your Muse agent.

```text
Build me a daily Instagram digest. Here is exactly how I want it to work.

MISSION
Build me a daily curated Instagram digest so I can stop opening the
algorithmic feed. Every day at [7:00 AM] [YOUR TIMEZONE], scan the last
~24 hours of posts, reels, and stories from accounts I follow, and deliver
a short digest of what actually matters to me.

Success means, in this order:
1. You almost never miss something I would care about (recall first).
2. Almost everything you include is genuinely relevant (precision).
3. Secondarily, my Instagram screen time goes down.

NON-NEGOTIABLE RULES
- Read-only. Never like, comment, save, follow, or message on my behalf.
  Ever.
- Following-only. Only include posts whose author I directly follow, plus
  accounts I explicitly name. Exclude anything that surfaces via tags,
  collabs, or "related" posts from accounts I do not follow — even if a
  friend is tagged in it.
- Use a ~24-hour window, digest time to digest time. Never silently drop
  a top-tier item, an item you could not summarize, or an item that failed
  to fetch: list it as a link with a note instead.
- De-duplicate aggressively. The same post found via the feed and via a
  per-account pull counts once.
- Keep full coverage accounting for every run — how many items you
  scanned, included, filtered, and excluded, and why — even if those
  numbers are not displayed day to day. I will want them for the weekly
  audit.

SETUP — ASK ME ONLY THESE, THEN START
Do not make me do upfront curation. I will not sort my following list by
hand. Ask me only:
- My digest time and timezone, and a weekly audit slot (suggest a weekend
  evening, about 15 minutes).
- My current Instagram screen time baseline. I will give you a few recent
  days — minutes and app opens per day. Treat it as provisional. Track
  binge days (over 60 minutes) separately from the typical-day average;
  the opens count is the habit loop to watch.
- Whether I will connect Instagram Messages for the DM tiering signal
  (optional, but recommended).

Before the first digest, run a connection check — my profile, my
following list, my Close Friends list, the following-only feed, the
stories tray, and my recently liked and commented posts — and tell me
plainly what you can and cannot read.

TIERING — INFER IT, DON'T ASK ME TO BUILD IT
Sort the accounts I follow into three tiers, inferred from signals:

- Tier 1: my close people. Never filtered, never capped out of the digest.
- Tier 2: friends-of-friends and regular contacts.
- Tier 3: low-importance accounts, creators, and topic accounts. Include
  them only when a post is genuinely pertinent to me.

Use these signals, strongest first:
a) My explicit labels. These override everything, always.
b) My one-to-one DM contacts (individual threads only — exclude group
   threads) are Tier 1 by default. Calibrate this so one-off or years-old
   contacts do not flood Tier 1: for example, require recent activity and
   a real messaging pattern. Use ONLY thread metadata — who, how often,
   how recent. Never read or store my message content.
c) Accounts whose posts I like or comment on.
d) My Close Friends list. Treat this as a weak signal only — it is
   usually too broad to count as Tier 1 by itself.

More tiering rules:
- Creator accounts are deprioritized by default. Follower counts and like
  counts NEVER promote a post. Popularity is not relevance.
- Never classify a friend's account as "business" or "promo" based on a
  post's content. Promo filtering applies to Tier 2 and Tier 3 brand and
  creator accounts, not to friends.
- Muted accounts, and anyone I call noise, are the strongest negative
  signal there is: exclude them from story links and demote them
  everywhere — even if other signals, like my feed likes, point the
  other way. My explicit word beats my behavioral data.

DAILY SCAN
- Pull recent posts and reels for the accounts I follow AND cross-check
  against the following-only feed, so nothing is missed. If a rescan
  finds something the first pass missed, say so in the digest.
- Stories: snapshot the stories tray every day and keep a running history
  of which accounts' stories I actually view. Story content cannot be
  summarized, so for qualifying accounts give me direct story links
  instead. An account qualifies for story links if it is named Tier 1 or
  DM Tier 1, or if I view its stories regularly — for example, on at
  least half the days it posts, once you have a few days of history.
  Feed likes and comments alone do NOT qualify an account for story
  links. Cap story links at around 10; list other unseen story accounts
  by name and count only.
- Summarize each post or reel in one or two plain sentences: what it is,
  and why it might matter to me. Do not just copy the caption.

OUTPUT — TWO FORMATS
Deliver the digest in two formats, both built from the same selection:

1. A short chat digest, with these sections:
   - "Must See" — Tier 1 items.
   - "Worth Knowing" — Tier 2 and Tier 3 highlights.
   - "Stories" — the direct story links described above.
   - "Filtered out" — one line per cut, so I can audit what you removed.
   - A one-line coverage note at the end.

2. Optional but recommended: a visual, newspaper-style web page built
   from the same digest. Design it like a broadsheet front page, not a
   uniform list:
   - A serif masthead with the date.
   - One dominant lead story with the biggest headline; the remaining
     stories in a ruled, multi-column layout, sized by importance.
   - Headline first for each item, then a byline in the form
     "By @handle · Tier · Reel" (or Post), then the summary.
   - Stories in a boxed sidebar called "The Story Wire".
   - Filtered-out items as a dense "Classifieds" block at the back.
   - Each contact's real profile picture next to their name.
   - Every entry tappable, through to the Instagram post.
   Keep the page clean: NO coverage-stat grids and no info bars on the
   page. Record those numbers internally for the weekly audit instead.
   Keep the page private by default — it is personal.

On the web page, add a 5-point feedback slider to every entry — posts,
stories, and filtered items — where 1 = Noise and 5 = Must-see. Sliders
start unset, so I only rate what I have an opinion on. Add one
"Copy my ratings" button that compiles everything I have rated into
lines I can paste into chat, in the form:
1. @handle — 5/5

FEEDBACK LOOP — KEEP MY EFFORT NEAR ZERO
- I can give feedback three ways: rate an item in chat (for example,
  "3 noise"), paste the slider ratings copied from the web page, or say
  "Missed: @handle" at any time.
- Treat every correction as a standing rule you remember and apply from
  then on — explicit labels, muted and noise lists, and tier changes.
  Keep a feedback log and a tier-adjustments list, and read both before
  every run.
- Run a WEEKLY AUDIT with me at my chosen slot, about 15 minutes. Show
  me: the week's scanned / included / filtered totals; my feedback log
  for the week; a random sample of 8–10 items you filtered OUT, so I can
  flag misses; and my screen time for the week, as a typical-day figure
  plus any binge days. Then we adjust tiers and rules together. Also
  refresh the DM tier list at the audit.
- Targets to aim for: Tier 1 miss rate under 5%, overall miss rate under
  10%, precision of at least 80%, typical-day screen time trending down,
  and zero binge days.

KNOWN QUIRKS — LEARNED THE HARD WAY, BAKE THESE IN
- Engagement is not relevance. A creator post with thousands of likes
  can still be noise to me.
- The data provider sometimes surfaces posts by accounts I do not follow
  (collabs and tags). Always verify the author against my following list
  plus my named exceptions.
- Post timestamps may lack timezones. Use a slightly wider window rather
  than a falsely precise one.
- Story likes may not be readable at all. Check occasionally, and also
  check during the weekly audit. If they ever become available, tell me,
  and start using them as a story-tiering signal.
- If a scan or fetch fails, say so in the digest. A disclosed gap beats
  a silent one.

Start with the connection check and the setup questions above, then run
my first digest.
```

## A lighter version

If the full setup sounds like a lot, take the 80/20 instead: skip the newspaper web page and skip DM tiering. Ask your Muse for the chat digest only — Must See, Worth Knowing, Stories, and Filtered out — and give feedback by item number in chat ("3 noise", "Missed: @friend-handle"). You keep the core win, which is a following-only digest that learns from corrections, and you can add the page and the DM signal later if you want them.

## Privacy notes

The digest page contains your follows, your friends' posts, and direct story links, so keep it private by default and think twice before publishing a public link to any edition — anyone with that link can open it. DM tiering, if you use it, works from thread metadata only (who you message, how often, how recently); your agent should never read or store your message content, and you can skip that signal entirely if you are not comfortable with it. Either way, your agent should never like, comment, save, follow, or message on your behalf.

## What to expect in week one

The first digest will be imperfect, and that is normal — in the project this template was distilled from, day-one precision was about half: roughly half the included items were genuinely relevant, and a couple of friends' posts were wrongly filtered as promotions. It improves fast, because every rating you give becomes a rule the agent applies from then on, and the explicit labels you give in the first few days do most of the work. The weekly audit is where the real calibration happens: that is where you catch the misses hiding in the filtered-out pile and tighten the tiers together.

## Credits

Distilled from a working setup built with Muse; adapt freely.
