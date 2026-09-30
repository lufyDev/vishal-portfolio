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
  headline: "I turn business problems into working systems.",
  sub: "And then I make sure they keep working.",
  lede: "Queues, pipelines, event-driven systems — the hard, unglamorous parts that decide whether a product survives its own traffic. I like the problems where the obvious fix is the wrong one.",
  kicker: "I move fast. I also care about getting it right.",
};

export const ledger = [
  { value: "3 min", label: "from request to a finished video. Start to end, no human touches it." },
  { value: "1000+", label: "videos a month through the pipeline I own" },
  { value: "2 yrs", label: "running it in production" },
  {
    value: "62 → 3",
    label:
      "minutes. A recent fix: processing time when bulk uploads piled up behind each other in a FIFO queue.",
  },
];

export const experience = {
  stamp: "Right now",
  line: "Software engineer at an AI automotive company · since June 2024",
  note: "I own the feature video presentation pipeline end to end. It was handed to me. It still runs — and it turns a request into a finished, narrated video in about three minutes without anyone touching it.",
};

/* ------------------------------ how I work ------------------------- */
/* The actual sequence, in order. Not a values list. */

export const approach = [
  {
    n: "01",
    title: "The problem, and what the customer actually needs",
    body: "A ticket tells you what someone typed. I go find out what they were trying to do — which is often a different problem with a different answer.",
  },
  {
    n: "02",
    title: "Break it into parts that can each be wrong",
    body: "If a failure can only be described as \u201cit broke\u201d, it was never broken down. Each piece should be able to fail on its own, visibly.",
  },
  {
    n: "03",
    title: "Find the edge cases before a customer does",
    body: "The empty field. The message that arrives twice. The one dealer who uploads a hundred cars at once. These decide whether it survives.",
  },
  {
    n: "04",
    title: "Design the system — then prove the number moved",
    body: "Pick the architecture, write down what it was chosen over, ship it, and measure it. Every number I claim comes with how I measured it.",
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
    status: "Built \u00b7 behind a flag",
    brief:
      "A video normally takes about three minutes to process. But one large dealer sends a hundred at once, and everything from every other dealer lines up behind them \u2014 so a small dealer's single video sat for about an hour. The queue was first-in-first-out, and once a hundred jobs are in it nobody can change the order.",
    decomposition: [
      {
        label: "More machines move the wait, they don't share it",
        text: "With a first-in-first-out queue the hundred-and-first video is still hundred-and-first. You'd pay more for the same unfairness.",
      },
      {
        label: "Everything having the same priority is the same as no priority",
        edge: true,
        text: "The render service lets you set a priority number. Every job was already on the same value, so it fell through to oldest-first. A priority system that was FIFO wearing a different name.",
      },
      {
        label: "The video that caused the complaint skipped the queue we were about to fix",
        edge: true,
        text: "It was a template that needs no AI step, so it went straight to rendering. Every fix aimed at the AI queue would have done nothing for it. I only found that by tracing the actual blocked video.",
      },
      {
        label: "You can't reorder a queue you've already filled \u2014 so don't fill it",
        edge: true,
        text: "Keep the work in a short waiting list on our side and hand over a few at a time, taking turns. A short queue is the only queue you can still control.",
      },
    ],
    diagram: "round-robin",
    diagramCaption:
      "The waiting list is ours, so we decide the order. The queue stays short on purpose.",
    decisions: [
      {
        chose: "Hold the work on our side and release a few at a time, taking turns between dealers.",
        insteadOf: "Sorting the queue, or using the render service's priority number.",
        because:
          "Once jobs are queued you cannot reorder them. And the priority number only gives you two buckets, which the review path already uses.",
      },
      {
        chose: "Fix the render queue first.",
        insteadOf: "The AI queue, which everyone assumed was the problem.",
        because:
          "The blocked video never touches AI. And rendering is about four times slower than AI feeds it, so that's the only place a lasting pile-up forms.",
      },
      {
        chose: "Leave the video's status changes exactly as they are.",
        because: "Dashboards and customer APIs read that status. Making things fair shouldn't break a report.",
      },
    ],
    metrics: [
      {
        metric: "normal processing time for one video",
        before: "~3 min",
        after: "unchanged",
        how: "this was never the slow part",
      },
      {
        metric: "small dealer's wait behind a 100-video upload",
        before: "~62 min",
        after: "~3 min",
        how: "worked out from measured speeds at both stages",
      },
      {
        metric: "AI throughput",
        before: "quoted as ~60 cars/hour",
        after: "~360\u2013480 cars/hour",
        how: "corrected \u2014 the old figure was one worker's rate read as the total",
      },
      {
        metric: "status",
        before: "\u2014",
        after: "built on a release branch, flag off",
        how: "said plainly \u2014 not yet switched on in production",
      },
    ],
    reflection:
      "My first plan fixed the AI queue, because that's the obvious place to look. It would not have helped the one video that caused the complaint. I also quoted an AI speed about six times too low for weeks, because I read one worker's rate as the total, and corrected it in front of the same thread once I measured properly.",
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
      "Each video segment has a fixed length. An AI writes a short script for it and a text-to-speech service reads it out. The check meant to keep scripts short enough kept passing while the audio kept getting cut off \u2014 and when a script came in short, the slot sat in silence, which nobody had even named as a bug.",
    decomposition: [
      {
        label: "The check was counting the wrong thing",
        edge: true,
        text: "\u201c2025 BMW i7 looks stunning\u201d is five words on the page but about nine when spoken. The budget was written in words against a slot measured in seconds.",
      },
      {
        label: "Never ask an AI for an exact count",
        edge: true,
        text: "Give it a target it can't hit and it returns a confident wrong answer, not an error. All 12 prompts moved to \u201cat most\u201d, with a way out if it still can't fit.",
      },
      {
        label: "Too short is a bug too",
        edge: true,
        text: "Everyone watched for cut-offs, so nothing watched for a script that finished early and left silence. Fitting means using the room you were given, not just staying under a limit.",
      },
      {
        label: "Picked a real target instead of inventing one",
        text: "A hand-made video filled 97% of its slots. That's what made 51% look bad and 73% look like real progress.",
      },
    ],
    diagram: "fit-loop",
    diagramCaption:
      "The guess is gone. The loop measures the real audio and corrects in both directions.",
    decisions: [
      {
        chose: "Measure the real length of the audio file before uploading it.",
        insteadOf: "A better guess with a safety margin.",
        because:
          "A safety margin is a guess about how wrong your guess is. Measuring removes the guess. If you're tuning a margin, stop and go measure.",
      },
      {
        chose: "Correct in both directions \u2014 shorten if it overruns, lengthen if it falls short.",
        insteadOf: "Only guarding the overrun people complained about.",
        because: "A half-empty slot is a worse video too, it just doesn't generate a ticket.",
      },
      {
        chose: "Leave the shared audio service alone completely.",
        because:
          "Other flows depend on it. Doing the work on my side meant I couldn't break anyone \u2014 recorded as a decision, not left unexplained.",
      },
    ],
    metrics: [
      { metric: "how much of the slot gets used", before: "51%", after: "73%", how: "test renders, one template" },
      { metric: "cut-offs", before: "every time", after: "zero", how: "same renders" },
      { metric: "slots left half-silent", before: "unwatched", after: "corrected automatically", how: "same renders" },
      {
        metric: "where the length came from",
        before: "guessed from word count",
        after: "measured from the audio file",
        how: "checked against a known-good tool first",
      },
    ],
    reflection:
      "I built a better guess first and only measured second. If I'd asked \u201ccan I just measure this?\u201d on day one, the middle step would have been unnecessary. And 73% against a 97% target isn't finished \u2014 what's left is script quality, not fitting.",
    stack: ["Node.js", "OpenAI", "Text-to-speech", "Prompt design"],
  },

  {
    id: "03",
    badge: "work",
    domain: "Event-driven",
    ask: "The price dropped but the ad still shows the old one.",
    headline: "One event now rebuilds one video, by itself",
    span: "2026",
    status: "Built & tested \u00b7 deploy pending",
    brief:
      "Our ad videos have the price printed into the video itself. When a dealer dropped a price, the ad kept showing the old number until someone noticed and re-made it by hand. I built the path that listens for a price change and rebuilds exactly that one video \u2014 in the usual three minutes, with nobody involved.",
    decomposition: [
      {
        label: "The same event will arrive more than once",
        edge: true,
        text: "Five guards, outside in: the queue drops exact repeats within five minutes; one car is handled one at a time even across servers; skip if the car is sold; skip if the price already matches; and if all that fails, the re-render writes the same file, so a repeat costs money but can't corrupt anything.",
      },
      {
        label: "A price event can arrive after the car is sold",
        edge: true,
        text: "So that's the very first check \u2014 before any lookup, any render, any spend.",
      },
      {
        label: "Read the current price from the video, not from inventory",
        edge: true,
        text: "The question isn't \u201cwhat is this car's price\u201d, it's \u201cwhat price is this video showing\u201d. Only the second one tells you whether a re-render is pointless. It also took a 4\u20135 second API call out of the path.",
      },
      {
        label: "Don't wake the rest of the pipeline",
        edge: true,
        text: "The obvious way to re-render is to set the video's status back \u2014 but that fires a database-change event and restarts everything. I call the render step directly instead.",
      },
    ],
    diagram: "price-retrigger",
    diagramCaption:
      "Guards run cheapest first. Two of the five are free \u2014 they come from the queue's own guarantees.",
    decisions: [
      {
        chose: "Hook the rebuild to the price event itself.",
        insteadOf: "A scheduled job that re-checks every car's price.",
        because: "A schedule is either too slow to matter or wastes almost all its work. The event says exactly which car changed.",
      },
      {
        chose: "Keep the same file path, so the link never changes.",
        because: "Nothing downstream needs updating \u2014 no feed refresh, no cache to clear, no callback.",
      },
      {
        chose: "Five guard layers, and write down which ones cost code.",
        because:
          "Two come free from the queue's ordering and de-duplication. Worth knowing which of your protections you're actually maintaining.",
      },
    ],
    metrics: [
      {
        metric: "price change \u2192 updated ad",
        before: "by hand, whenever someone noticed",
        after: "automatic, ~3 min per event",
        how: "design",
      },
      { metric: "what gets rebuilt", before: "risk of re-running everything", after: "one ad video", how: "design" },
      {
        metric: "price lookup",
        before: "an API call, 4\u20135 seconds",
        after: "read from the video's own data",
        how: "removed from the path entirely",
      },
      {
        metric: "guards against duplicate events",
        before: "\u2014",
        after: "5, two of them free",
        how: "written out layer by layer",
      },
    ],
    reflection:
      "The choice I'd defend hardest is reading the current price from the video rather than from inventory. It looks like the wrong source until you say the question out loud. What I'd do differently: I wrote out the five guard layers after building them. Doing that first would have shown me two were free.",
    stack: ["Node.js", "SQS FIFO", "SNS", "MySQL", "AWS"],
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
      "Videos from the newer pipeline finished without a preview image, so anything that needed one fell back to a logo or showed nothing. I added automatic thumbnails: one frame pulled out of the delivered video at a point each template chooses, generated as part of the render rather than as a job someone has to remember to run.",
    decomposition: [
      {
        label: "The first frame is the worst frame",
        edge: true,
        text: "A walkaround video often opens on an intro card or a half-drawn scene. So the moment to grab became a per-template setting \u2014 the same creative always looks good at the same point, and that's a design call, not a code one.",
      },
      {
        label: "Grab it from the delivered file, after the render",
        text: "That way the preview can never disagree with the video someone actually sees. It costs about a second of ffmpeg instead of a full frame render on the machine that's already the bottleneck.",
      },
      {
        label: "The two halves of the render don't share memory",
        edge: true,
        text: "Prep runs on one box; the real render finishes minutes later on another, and the step that picks up the output knows nothing but the video's id. So the chosen frame time is handed over through a small file in storage, keyed on that id.",
      },
      {
        label: "ffmpeg exits 0 having written nothing",
        edge: true,
        text: "If the timestamp lands past the end of the video it succeeds with an empty file. So the check is file size, not exit code \u2014 and a timestamp past the end clamps back inside the video instead of giving up.",
      },
      {
        label: "The content type is load-bearing",
        edge: true,
        text: "Without an explicit image type the file downloads instead of displaying, and the ad platform's fetch fails. The cache is five minutes on purpose too: the address stays the same across re-renders, so a long cache would serve the old preview forever.",
      },
      {
        label: "It must never make a good render fail",
        text: "Every step is best-effort. If anything goes wrong there's simply no preview, and the field is left out rather than sent empty \u2014 so a failed re-run can't wipe a preview an earlier one already saved.",
      },
    ],
    diagram: "thumbnail",
    diagramCaption:
      "Made from the delivered file, at a moment the template picks, handed between two passes that share nothing but an id.",
    decisions: [
      {
        chose: "Take the frame at a time the template sets.",
        insteadOf: "Always the first frame, or the middle.",
        because:
          "Which moment looks best is a design decision and it differs per template. Leaving the setting off is also how the whole feature stays switched off for that template \u2014 no separate flag.",
      },
      {
        chose: "Hand the frame time between passes through its own small file.",
        insteadOf: "Reading it back out of the render config that's already uploaded.",
        because:
          "The value is sitting right there in that config, which is exactly why it's tempting. A dedicated object keyed on the video id can't be reshaped by whatever else writes that config.",
      },
      {
        chose: "Seek after loading the file, not before.",
        insteadOf: "The faster seek.",
        because:
          "The fast one snaps to the nearest earlier keyframe and can hand back a visibly different frame than the template asked for. At the one-or-two-second marks templates use, the extra decode costs nothing.",
      },
      {
        chose: "Reuse the field name the old pipeline already emits.",
        because: "Both pipelines then write the same column through one contract, and nothing downstream needs a version branch.",
      },
    ],
    metrics: [
      { metric: "videos with a real preview", before: "none on this pipeline", after: "every configured template", how: "\u2014" },
      {
        metric: "what downstream showed instead",
        before: "a brand logo stand-in, or nothing",
        after: "a frame from the video itself",
        how: "\u2014",
      },
      { metric: "which frame", before: "n/a", after: "chosen per template", how: "a config value, not code" },
      {
        metric: "cost to generate",
        before: "would need a full frame render",
        after: "~1s of ffmpeg, off the bottleneck box",
        how: "design",
      },
      {
        metric: "effect on a failed thumbnail",
        before: "\u2014",
        after: "none \u2014 the render still succeeds",
        how: "best-effort at every step",
      },
      {
        metric: "how often it actually produces one",
        before: "\u2014",
        after: "never measured",
        how: "the gap I'd close first: count previews against configured templates over a real render window",
      },
    ],
    reflection:
      "Shipped and running with no incidents, but I never measured the success rate \u2014 how many configured renders actually produce a preview. I know the method to get it, which makes not having it worse rather than better. The fallbacks that were covering for the missing previews should also come out now; a stand-in that's never removed becomes the design.",
    stack: ["Node.js", "ffmpeg", "S3", "AWS render farm"],
  },
];

export const leverage = {
  kicker: "Writing code was never the job.",
  title: "I use AI to multiply what I can do.",
  lede: "Engineering was always about solving the problem with the best tools your domain hands you. One of those tools now writes code. So I use it every day — and I'm precise about where it helps and where it doesn't.",
  handOver: {
    stamp: "What I hand to it",
    items: [
      "Reading two hours of logs and counting things across every line",
      "Drafting three designs, so I argue with all three instead of defending my first idea",
      "Building test data from a real response and trying every path through it",
      "Boilerplate, and the fourth copy of a pattern I already chose",
    ],
  },
  staysMine: {
    stamp: "What stays mine",
    items: [
      "Deciding which number actually matters — and pushing back when the question is wrong",
      "Noticing that the number everyone quotes has no source",
      "Choosing what not to fix, and what to make harmless instead of perfect",
      "Being the one who owns it at 2am",
    ],
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
