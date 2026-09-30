/* ------------------------------------------------------------------ *
 * All site copy lives here.
 *
 * Two rules for this file:
 *   1. Plain, short, everyday English. If a simpler word exists, use it.
 *   2. Very little on the surface. Detail goes behind a click.
 *
 * Redaction: percentages and ratios stay — they are the point and carry
 * no secrets. Client names, vendor names, colleague names, internal
 * service names and company money figures are kept out.
 * ------------------------------------------------------------------ */

export const personalInfo = {
  name: "Vishal Pundhir",
  short: "Vishal",
  role: "Software Engineer",
  locus: "India",
  school: "BITS Pilani, 2024",
  email: "vishalpundhirofficial@gmail.com",
  phone: "+91 8193809760",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1yyBaMewscmhBwuHNPbSI6cQEskwDvTAB",
  socials: {
    github: "https://github.com/lufyDev",
    linkedin: "https://www.linkedin.com/in/vishal-pundhir-31059b197",
    twitter: "https://x.com/VishalP1226",
  },
};

export const masthead = {
  role: "Software Engineer",
  headline: "I build backends that hold up.",
  lede: "Queues, pipelines, event-driven systems — the hard, unglamorous parts that decide whether a product survives its own traffic. I like the problems where the obvious fix is the wrong one.",
  punch: "AI isn't a buzzword in my work. It's part of how I design, build and ship, every day.",
  kicker: "I move fast. I also care about getting it right.",
};

export const ledger = [
  { value: "2 yrs", label: "running systems in production" },
  { value: "1000+", label: "videos a month through a pipeline I own" },
  { value: "62→3", label: "minutes a small customer waits behind a bulk upload" },
];

export const experience = {
  stamp: "Right now",
  line: "Software engineer at an AI automotive company · since June 2024",
  note: "I own two services end to end. Both were handed to me. Both still run.",
};

/* ------------------------------ the hero resolve ------------------- */

export type Resolution = {
  ask: string;
  real: string;
  proof: string;
  caseId: string;
};

export const resolutions: Resolution[] = [
  {
    ask: "One dealer's bulk upload blocks everyone else.",
    real: "Nobody can reorder a queue that's already full. So stop filling it.",
    proof: "Hand over a few at a time, taking turns. An hour's wait becomes minutes.",
    caseId: "01",
  },
  {
    ask: "The voice-over gets cut off mid-word.",
    real: "The check counted words. The problem was seconds.",
    proof: "Measured the real audio instead. No cut-offs, and no dead air either.",
    caseId: "02",
  },
  {
    ask: "The price dropped but the ad still shows the old one.",
    real: "Nothing was listening for the price change.",
    proof: "One event now rebuilds one video, with five guards against doing it twice.",
    caseId: "03",
  },
];

/* ------------------------------ what I do -------------------------- */

export const approach = [
  {
    n: "01",
    title: "I start with the real problem.",
    body: "A ticket tells you what someone typed. I go and find out what they actually needed.",
  },
  {
    n: "02",
    title: "I look for what will break it.",
    body: "The empty field, the message that arrives twice, the one dealer who uploads a hundred cars at once.",
  },
  {
    n: "03",
    title: "I check the number, not the feeling.",
    body: "Every number I claim comes with how I measured it. If I haven't measured it, I say so.",
  },
  {
    n: "04",
    title: "I build AI into the work.",
    body: "Not as a feature to announce — as part of how I design, review and ship. Deciding what matters is still my job.",
  },
];

/* ------------------------------ skills ----------------------------- */

export const skills = [
  {
    stamp: "Backend & APIs",
    lead: "Where most of my work lives.",
    items: ["Node.js", "Python", "Express", "NestJS", "FastAPI", "REST", "MongoDB", "MySQL"],
  },
  {
    stamp: "Queues & event-driven",
    lead: "Kafka, SQS, FIFO ordering, idempotency, retries, dead-letter queues.",
    items: ["Kafka", "SQS / FIFO", "SNS", "CDC events", "Round-robin dispatch", "Idempotent consumers"],
  },
  {
    stamp: "Cloud & infra",
    lead: "Deploying it, running it, and being the one paged for it.",
    items: ["AWS", "Lambda", "Step Functions", "ECS", "EC2", "S3", "CloudFront", "Nginx", "PM2"],
  },
  {
    stamp: "AI in production",
    lead: "Real workflows, not demos.",
    items: [
      "Structured outputs",
      "LangGraph",
      "RAG",
      "Tool calling",
      "MCP",
      "LLM-as-judge",
      "Speech in / out",
      "Prompt versioning",
    ],
  },
  {
    stamp: "Frontend",
    lead: "Enough to own a product end to end.",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js / WebGL", "React Native"],
  },
  {
    stamp: "Measuring",
    lead: "The habit that makes the rest of it worth something.",
    items: ["Production log analysis", "ClickHouse", "Metabase", "Cost per delivered thing", "Load profiling"],
  },
  {
    stamp: "Design",
    lead: "The creative side I never dropped.",
    items: ["After Effects", "AE scripting", "Premiere Pro", "Illustrator", "Figma"],
  },
];

/* ------------------------------ education -------------------------- */

export const education = {
  stamp: "Education",
  school: "BITS Pilani",
  degree: "Bachelor of Engineering",
  period: "2020 — 2024",
  note: "Pilani campus. Four years of being surrounded by people who were better than me at something, which turned out to be the useful part.",
};

/* ------------------------------ case files ------------------------- */

export type CaseFile = {
  id: string;
  badge: "work" | "personal";
  domain: string;
  ask: string;
  headline: string;
  span: string;
  status: string;
  brief: string;
  decomposition: { label: string; text: string; edge?: boolean }[];
  diagram: string;
  diagramCaption: string;
  decisions: { chose: string; insteadOf?: string; because: string }[];
  metrics: { metric: string; before: string; after: string; how: string }[];
  reflection: string;
  stack: string[];
};

export const caseFiles: CaseFile[] = [
  {
    id: "01",
    badge: "work",
    domain: "Queues & fairness",
    ask: "One dealer's bulk upload blocks everyone else.",
    headline: "An hour's wait becomes about three minutes",
    span: "2026",
    status: "Built · behind a flag",
    brief:
      "One large dealer sends a hundred videos at once. Everything from every other dealer lines up behind them. A small dealer's single video sat for about an hour. The queue was first-in-first-out, and the moment a hundred jobs are in it, nobody can change the order — not us, not the machine doing the work.",
    decomposition: [
      {
        label: "The suggested fix was more machines",
        text: "More machines move the wait; they don't share it. With a first-in-first-out queue the hundred-and-first video is still hundred-and-first. You'd be paying more for the same unfairness.",
      },
      {
        label: "Everything having the same priority is the same as no priority",
        edge: true,
        text: "The render service lets you set a priority number on a job. Every job was already set to the same value, so it falls through to oldest-first. We had a priority system that was first-in-first-out wearing a different name.",
      },
      {
        label: "The video that caused the complaint skipped the queue we were about to fix",
        edge: true,
        text: "It was a template that needs no AI step, so it went straight into the render queue. Every fix aimed at the AI queue would have done nothing for it. I only found that by tracing the actual blocked video instead of reasoning about the general case.",
      },
      {
        label: "There are two queues, and they fail in opposite situations",
        text: "New cars go through AI first, then rendering. Re-triggered cars skip AI entirely. Fix only the AI queue and re-triggers stay broken; fix only rendering and new uploads still wait at the first gate. I worked through both real traffic patterns before choosing which to build first.",
      },
      {
        label: "Measuring both stages settled the order",
        text: "AI runs six cars at a time at about a minute each. Rendering is one machine at about 37 seconds per video. AI is a firehose pointed at a straw — a pile-up at AI clears in minutes, a pile-up at rendering takes hours. So rendering goes first.",
      },
      {
        label: "You can't reorder a queue you've already filled — so don't fill it",
        edge: true,
        text: "Keep the work on our side in a short waiting list, and hand over only a few at a time. A short queue is the only queue you can still control.",
      },
    ],
    diagram: "round-robin",
    diagramCaption:
      "The waiting list is ours, so we decide the order. The queue stays short on purpose.",
    decisions: [
      {
        chose:
          "Hold the work on our side and release a few at a time, taking turns between dealers.",
        insteadOf: "Sorting the queue, or using the render service's priority number.",
        because:
          "Once jobs are in the queue you cannot reorder them. And the priority number only gives you two buckets, which the review path already uses.",
      },
      {
        chose: "Fix the render queue first.",
        insteadOf: "The AI queue, which everyone assumed was the problem.",
        because:
          "The video that caused the complaint never touches AI. And rendering is roughly four times slower than AI feeds it, so that is the only place a lasting pile-up forms.",
      },
      {
        chose: "Make the thing we take turns on a setting.",
        because:
          "Today we take turns per company. If it needs to be per branch later, that is a config change rather than a rewrite.",
      },
      {
        chose: "Leave the video's status changes exactly as they are.",
        because:
          "Dashboards and customer-facing APIs read that status. Making things fair shouldn't quietly break a report.",
      },
    ],
    metrics: [
      {
        metric: "small dealer's wait behind a 100-video upload",
        before: "~62 min",
        after: "~3 min",
        how: "worked out from measured speeds at both stages",
      },
      {
        metric: "render throughput",
        before: "~95 videos/hour on one machine",
        after: "unchanged — this was never the fix",
        how: "counted from production logs",
      },
      {
        metric: "AI throughput",
        before: "quoted as ~60 cars/hour",
        after: "~360–480 cars/hour",
        how: "corrected — the old figure was one worker's rate read as the total",
      },
      {
        metric: "what decides who goes first",
        before: "arrival time, nothing else",
        after: "turn-taking between dealers",
        how: "design",
      },
      {
        metric: "status",
        before: "—",
        after: "built on a release branch, flag off",
        how: "said plainly — not yet switched on in production",
      },
    ],
    reflection:
      "My first plan fixed the AI queue, because that is the obvious place to look. It would not have helped the one video that caused the complaint. I also quoted an AI speed that was about six times too low for weeks, because I read one worker's rate as the total — I corrected that in front of the same thread once I measured properly. The lesson I'd keep: trace the specific thing that went wrong before designing for the general case.",
    stack: ["Node.js", "SQS", "MySQL", "Kafka", "AWS"],
  },

  {
    id: "02",
    badge: "work",
    domain: "AI in production",
    ask: "The voice-over gets cut off mid-word.",
    headline: "No cut-offs, and no dead air either",
    span: "2026",
    status: "Shipped",
    brief:
      "Our videos have fixed-length slots. An AI writes a short script for each one and a text-to-speech service reads it out. The check that was supposed to keep scripts short enough kept passing while the audio kept getting cut off. And when a script came in short, the slot just sat there in silence — the opposite problem, nobody had named it.",
    decomposition: [
      {
        label: "The check was counting the wrong thing",
        edge: true,
        text: "“2025 BMW i7 looks stunning” is five words on the page but about nine when spoken: “twenty twenty-five” is three, “B-M-W” is three, “i-seven” is two. The budget was written in words against a slot measured in seconds.",
      },
      {
        label: "Three problems, not one",
        text: "The count ignored how speech expands. Some slots asked for more words than could physically fit. And after three tries the code gave up and shipped the long version anyway.",
      },
      {
        label: "Never ask an AI for an exact count",
        edge: true,
        text: "Give it a target it cannot hit and it returns a confident wrong answer, not an error. I rewrote all 12 prompts to say “at most” instead of “exactly”, with a way out if it still can't fit.",
      },
      {
        label: "Too short is a bug too",
        edge: true,
        text: "Everyone was focused on cut-offs, so nothing watched for a script that finished early and left the slot silent. Fitting isn't just about staying under a limit — it's about using the room you were given.",
      },
      {
        label: "Found old settings nobody had rechecked",
        text: "The speaking-speed setting said 150 while the code assumed 130. Another number that had quietly gone stale.",
      },
      {
        label: "Picked a real target instead of inventing one",
        text: "A hand-made video filled 97% of its slots. That is what made 51% look bad and 73% look like real progress.",
      },
    ],
    diagram: "fit-loop",
    diagramCaption:
      "The guess is gone. The loop measures the real audio and adjusts in both directions — shorter if it overruns, longer if it leaves silence.",
    decisions: [
      {
        chose: "Measure the real length of the audio file before uploading it.",
        insteadOf: "A better guess with some safety margin.",
        because:
          "A safety margin is just a guess about how wrong your guess is. Measuring removes the guess. If you find yourself tuning a margin, stop and go measure.",
      },
      {
        chose: "Correct in both directions — shorten if it overruns, lengthen if it falls short.",
        insteadOf: "Only guarding against the overrun everyone complained about.",
        because:
          "A half-empty slot is a worse video too, it just doesn't generate a ticket. The targets for lengthening come from the measured speaking pace, so they can't go stale.",
      },
      {
        chose: "Accept anything within 0.06 seconds.",
        insteadOf: "Trying to be more exact.",
        because:
          "That is the smallest chunk an MP3 has. Chasing tighter is chasing precision that doesn't exist.",
      },
      {
        chose: "Leave the shared audio service alone completely.",
        insteadOf: "Fixing it where it arguably belonged.",
        because:
          "Other flows depend on it. Doing the work on my side meant I couldn't break anyone. I wrote that down as a decision rather than leaving it unexplained.",
      },
    ],
    metrics: [
      { metric: "how much of the slot gets used", before: "51%", after: "73%", how: "test renders, one template" },
      { metric: "cut-offs", before: "happened every time", after: "zero", how: "same renders" },
      { metric: "slots left half-silent", before: "unwatched", after: "corrected automatically", how: "same renders" },
      { metric: "speaking speed", before: "sped up to fit", after: "all normal speed", how: "same renders" },
      {
        metric: "where the length came from",
        before: "guessed from word count",
        after: "measured from the audio file",
        how: "checked against a known-good tool before trusting it",
      },
      { metric: "target to aim at", before: "none", after: "97% (a hand-made video)", how: "measured by hand" },
    ],
    reflection:
      "I built a better guess first and only measured second. The prompt work did need doing, but if I had asked “can I just measure this?” on day one, the middle step would have been unnecessary. And 73% against a 97% target is not finished — what's left is script quality, not fitting, which is a different job.",
    stack: ["Node.js", "OpenAI", "Text-to-speech", "Prompt design", "MongoDB"],
  },

  {
    id: "03",
    badge: "work",
    domain: "Event-driven",
    ask: "The price dropped but the ad still shows the old one.",
    headline: "One event now rebuilds one video, by itself",
    span: "2026",
    status: "Built & tested · deploy pending",
    brief:
      "Our ad videos have the price printed into the video itself. When a dealer dropped a price, the ad kept showing the old number until somebody noticed and re-made it by hand. I built the path that listens for a price change and rebuilds exactly that one video, automatically, without touching anything else.",
    decomposition: [
      {
        label: "Rebuild only what actually changed",
        text: "A price change shouldn't re-run the car's photos, or the main walkaround video, or the AI step. Just the one ad.",
      },
      {
        label: "The same event will arrive more than once",
        edge: true,
        text: "So there are five guards, outside in: the queue drops exact repeats within five minutes; messages about one car are always handled one at a time even across several servers; we skip if the car is already sold; we skip if the new price is the price the video already shows; and if all that fails, the re-render writes to the same file, so doing it twice costs money but can't corrupt anything.",
      },
      {
        label: "A price event can arrive after the car is sold",
        edge: true,
        text: "Which means the very first thing to check is whether the car is still for sale — before any lookup, any render, any spend.",
      },
      {
        label: "Read the current price from the video, not from inventory",
        edge: true,
        text: "The question isn't “what is this car's price” — it's “what price is this video currently showing”. Those are different questions, and only the second one tells you whether a re-render is pointless. So I read it out of the text layer baked in at render time.",
      },
      {
        label: "Don't wake the rest of the pipeline",
        edge: true,
        text: "The obvious way to re-render is to set the video's status back. But a status change fires a database-change event that restarts the entire pipeline. I call the render step directly instead.",
      },
      {
        label: "Keep the same web address",
        text: "Same video, same file path. The link never changes, so nothing downstream needs updating — no feed refresh, no cache to clear, no callback.",
      },
      {
        label: "Every re-run writes an audit record",
        text: "Who triggered it, why, which video, what state it was in. So “why was this one re-made seven times?” has an answer instead of a theory.",
      },
    ],
    diagram: "price-retrigger",
    diagramCaption:
      "Guards run cheapest first. Two of the five are free — they come from the queue's own guarantees.",
    decisions: [
      {
        chose: "Hook the rebuild to the price event itself.",
        insteadOf: "A scheduled job that re-checks every car's price.",
        because:
          "A schedule is either too slow to matter or wastes almost all of its work. The event already says exactly which car changed.",
      },
      {
        chose: "Read the current price out of the video's own data.",
        insteadOf: "Calling the inventory API for it.",
        because:
          "It answers the question that actually decides things, and it took a four-to-five second network call out of the path.",
      },
      {
        chose: "Call the render step directly.",
        insteadOf: "Flipping the video's status to make it happen.",
        because:
          "A status change fires a database-change event and restarts the whole pipeline — photos, AI and all — for what is a text update.",
      },
      {
        chose: "Five guard layers, and write down which ones cost code.",
        because:
          "Two come free from the queue's ordering and de-duplication guarantees. Worth knowing which of your protections you are actually maintaining, and which the platform gives you.",
      },
    ],
    metrics: [
      {
        metric: "price change → updated ad",
        before: "by hand, whenever someone noticed",
        after: "automatic, per event",
        how: "design",
      },
      {
        metric: "what gets rebuilt",
        before: "risk of re-running everything",
        after: "one ad video",
        how: "design",
      },
      {
        metric: "price lookup",
        before: "an API call, 4–5 seconds",
        after: "read from the video's own data",
        how: "removed from the path entirely",
      },
      {
        metric: "guards against duplicate events",
        before: "—",
        after: "5, two of them free from the queue",
        how: "written out layer by layer",
      },
      { metric: "link changes after a rebuild", before: "—", after: "never", how: "same video, same file path" },
      { metric: "audit trail", before: "none", after: "one record per re-run", how: "searchable by video" },
      {
        metric: "status",
        before: "—",
        after: "built and tested locally; waiting on deploy config",
        how: "said plainly",
      },
    ],
    reflection:
      "The choice I'd defend hardest is reading the current price from the video rather than from inventory. It looks like the wrong source until you say the question out loud. What I'd do differently: I wrote out the five guard layers after building them. Writing that table first would have shown me two were free, and I might have built less.",
    stack: ["Node.js", "SQS FIFO", "SNS", "MySQL", "MongoDB", "AWS"],
  },

  {
    id: "04",
    badge: "work",
    domain: "Pipeline",
    ask: "Why does this video have no preview image?",
    headline: "Every video now ships with its own preview",
    span: "2026",
    status: "Shipped",
    brief:
      "Videos coming out of the newer pipeline finished without a preview image. Anything that needed one — the dealer console, the feeds we push to ad platforms — had to fall back to a logo or show nothing. I made the render produce a proper preview as part of finishing the video, taking the frame from a point each template chooses rather than from the start.",
    decomposition: [
      {
        label: "The first frame is the worst frame",
        edge: true,
        text: "A walkaround video often opens on an intro card or a half-drawn scene. Grabbing frame zero gives you a preview that sells nothing and sometimes shows nothing.",
      },
      {
        label: "So the frame became a setting",
        text: "Each template says which point in the video to grab. The best-looking moment differs per template, and it is a creative call — so it belongs in config, not buried in code.",
      },
      {
        label: "It belongs inside the render, not after it",
        text: "The renderer already has the finished video in hand. Making the preview anywhere else means downloading the whole file again and racing whatever reads it next.",
      },
      {
        label: "Downstream was quietly covering for the gap",
        edge: true,
        text: "Feeds were falling back to a brand logo when no preview existed. That kind of fallback hides a missing thing instead of showing it, which is why nobody had reported it as a bug.",
      },
      {
        label: "Same id, same place",
        text: "The preview is saved beside the video under the same id, so anything holding a video id can find it without another lookup.",
      },
    ],
    diagram: "thumbnail",
    diagramCaption:
      "Made where the finished file already is, at a point the template picks.",
    decisions: [
      {
        chose: "Take the frame at a point the template chooses.",
        insteadOf: "Always the first frame, or always the middle.",
        because:
          "Which moment looks best is a design decision and it differs per template. Hard-coding it means a code change every time design changes their mind.",
      },
      {
        chose: "Produce it inside the render step.",
        insteadOf: "A separate job that runs afterwards.",
        because:
          "The renderer already holds the finished file. Anywhere else has to fetch it again, and can fall behind or fail on its own.",
      },
      {
        chose: "Save it next to the video under the same id.",
        because: "No extra lookup, no second source of truth about where a preview lives.",
      },
      {
        chose: "Delete the stand-in fallbacks once this is live.",
        insteadOf: "Leaving the logo fallback in place as a safety net.",
        because:
          "A stand-in that never gets removed stops being a stand-in and becomes the design. The chain should end in a visible skip, not a plausible-looking wrong image.",
      },
    ],
    metrics: [
      {
        metric: "videos with a real preview",
        before: "none on this pipeline",
        after: "every one",
        how: "—",
      },
      {
        metric: "what downstream showed instead",
        before: "a brand logo stand-in, or nothing",
        after: "a frame from the video itself",
        how: "—",
      },
      { metric: "which frame", before: "first frame", after: "chosen per template", how: "a config value" },
      {
        metric: "extra work to make it",
        before: "would need a full re-download",
        after: "none — done where the file already is",
        how: "design",
      },
      {
        metric: "how many videos shipped without one before",
        before: "never counted",
        after: "—",
        how: "the measurement I'd still want. I only know it was the default.",
      },
    ],
    reflection:
      "Worth saying plainly: I never counted how many videos went out with a logo instead of a real preview before this. I know it was the default state, which is not the same as knowing the number. The other thing I'd push on is deleting the fallback chains that were covering for the gap — they did their job, and leaving them in is how a temporary thing becomes permanent.",
    stack: ["Node.js", "ffmpeg", "S3", "AWS render farm"],
  },
];

/* ------------------------------ the AI bit ------------------------- */

export const leverage = {
  title: "AI is part of the work, not a word on a slide.",
  lede: "Engineering was always about solving problems with the best tools you have. One of those tools now writes code. Refusing it would make me slower. Handing it the thinking would make me replaceable. So I use it every day, and I'm precise about where.",
  handOver: {
    stamp: "What I hand to it",
    items: [
      "Reading two hours of logs and counting things across every line",
      "Drafting three designs, so I argue with all three instead of defending my first idea",
      "Building test data from a real response and trying every path through it",
      "Writing up each working session, so what I learn survives the week",
      "Boilerplate, and the fourth copy of a pattern I already chose",
    ],
  },
  staysMine: {
    stamp: "What stays mine",
    items: [
      "Deciding which number actually matters — and pushing back when the question is wrong",
      "Noticing that the number everyone quotes has no source",
      "Choosing what not to fix, and what to make harmless instead of perfect",
      "Saying “I was wrong” in the thread when the data says so",
      "Being the one who owns it at 2am",
    ],
  },
  guardrail: {
    stamp: "Being straight about it",
    text: "When I found that we were paying to render the same video twice, the log work used AI tooling — and the first pass got the wrong answer because it trusted an old number. What's mine: refusing the framing, pulling the real evidence, questioning the number that flipped the answer, and the plan. The judgment is the part that holds up when you ask a follow-up question. Claiming I did the mechanics wouldn't, so I don't.",
  },
  system: {
    stamp: "Something I built for myself",
    text: "A set of notes every working session writes into — 125 pages now. Bugs with their real cause, decisions with the options I turned down, and what each one cost. It's the reason this site can show how I measured things instead of just adjectives.",
  },
};

/* ------------------------------ about ------------------------------ */

export const about = {
  stamp: "About",
  text: "I build AI products end to end — the pipeline, the backend, the frontend, and being the one who keeps it running afterwards. Outside work I build things properly to learn them: a phone assistant on raw telephony, a trip planner, and whatever else I get curious about.",
};

export const offTheClock = [
  {
    stamp: "Music",
    text: "Guitar, singing, and slowly learning to produce. Just enough theory to know what I'm doing wrong.",
  },
  { stamp: "Football", text: "Playing, not watching." },
];

/* ------------------------------ contact --------------------------- */

export const contact = {
  title: "Say hello.",
  lede: "Happy to talk about engineering, business problems, music, or football. If you're hiring: I want to own something real, with users and a number attached to it.",
};
