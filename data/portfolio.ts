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
  lede: "Event-driven backends, queues and pipelines — the parts that decide whether a product survives its own traffic.",
  kicker: "I move fast. I also care about getting it right.",
};

export const ledger = [
  { value: "2.3 yrs", label: "building and running systems in production" },
  { value: "1000+", label: "videos a month through the pipeline I own" },
];

export const experience = {
  stamp: "Right now",
  line: "Software engineer at an AI automotive company \u00b7 since June 2024",
  noteBefore: "I own the feature video presentation pipeline end to end. It turns a request into a finished, narrated video in ",
  highlight: "about three minutes",
  noteAfter: " \u2014 with nobody touching it.",
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

export type SkillGroup = { core?: boolean; stamp: string; lead: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    core: true,
    stamp: "Backend & APIs",
    lead: "Where most of my work lives.",
    items: ["Node.js", "Python", "Express", "NestJS", "FastAPI", "REST", "MongoDB", "MySQL"],
  },
  {
    core: true,
    stamp: "Queues & event-driven",
    lead: "Kafka, SQS, FIFO ordering, idempotency, retries, dead-letter queues.",
    items: ["Kafka", "SQS / FIFO", "SNS", "CDC events", "Round-robin dispatch", "Idempotent consumers"],
  },
  {
    core: true,
    stamp: "AI in production",
    lead: "Shipped in real workflows, not demos \u2014 and the same tools run my own day. I measure whether they actually earn their cost.",
    items: [
      "Structured outputs",
      "LangGraph",
      "Agent loops & critics",
      "RAG",
      "Tool calling",
      "MCP",
      "LLM-as-judge",
      "Evals & measurement",
      "Speech in / out",
      "Prompt versioning",
    ],
  },
  {
    stamp: "Cloud & infra",
    lead: "Deploying it, running it, and being the one paged for it.",
    items: ["AWS", "Lambda", "Step Functions", "ECS", "EC2", "S3", "CloudFront", "Nginx", "PM2"],
  },
  {
    stamp: "Frontend",
    lead: "Enough to own a product end to end.",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js / WebGL", "React Native"],
  },
  {
    stamp: "Monitoring",
    lead: "The one I care about most. A system you can't see into is a system you're guessing about \u2014 and every number on this page came from having built the thing that reports it.",
    items: [
      "Grafana",
      "CloudWatch",
      "ClickHouse",
      "Metabase",
      "Loki",
      "Structured logging",
      "Alerting",
    ],
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
  period: "Class of 2024",
  note: "Pilani campus. Years of being surrounded by people who were better than me at something, which turned out to be the useful part.",
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
      "Videos get processed in the order they arrive. One big dealer uploaded a hundred at once, so the next customer in line — with a single video — waited about an hour instead of three minutes. And you cannot reorder a line once everyone is already standing in it.",
    decomposition: [
      {
        label: "More machines move the wait, they don't share it",
        text: "In a first-come-first-served line, the hundred-and-first video is still hundred-and-first. You'd pay more and the small dealer would still wait.",
      },
      {
        label: "The priority setting was a dead end",
        edge: true,
        text: "The video service lets you mark a job urgent. Every job was already marked the same, so it quietly fell back to oldest-first. A priority system with one priority is just a queue with extra steps.",
      },
      {
        label: "The video people complained about took a different route",
        edge: true,
        text: "Videos go down one of two paths, and this one skipped the AI step entirely — so every fix aimed at that step would have changed nothing for it. I only found that by following the actual stuck video instead of reasoning about the general case.",
      },
      {
        label: "So don't fill the line in the first place",
        edge: true,
        text: "Hold the work on our side and send a few at a time, taking turns between dealers. A short line is the only line you can still reorder.",
      },
    ],
    diagram: "round-robin",
    diagramCaption:
      "The waiting list is ours, so we decide the order. The queue stays short on purpose.",
    decisions: [
      {
        chose: "Keep a waiting list on our side and release a few per dealer at a time, taking turns.",
        insteadOf: "Reordering the queue, or using the video service's priority setting.",
        because:
          "You cannot reorder a queue that's already full. And the priority setting has two values, both already spoken for.",
      },
      {
        chose: "Fix the slower of the two stages first.",
        insteadOf: "The AI stage, which everyone assumed was the problem.",
        because:
          "The stuck video never touches the AI stage. And rendering is about four times slower than work arrives, so it's the only place a lasting pile-up can form.",
      },
      {
        chose: "Don't change how a video reports its status.",
        because: "Dashboards and customer APIs read that status. Making the queue fair shouldn't break someone's report.",
      },
    ],
    metrics: [
      {
        metric: "time to process one video",
        before: "~3 min",
        after: "unchanged",
        how: "this was never the slow part",
      },
      {
        metric: "a small dealer's wait behind a 100-video upload",
        before: "~62 min",
        after: "~3 min",
        how: "worked out from measured speeds at both stages",
      },
      {
        metric: "how fast the AI stage really runs",
        before: "quoted as ~60 an hour",
        after: "~360–480 an hour",
        how: "I corrected my own number — the old one was one worker's rate read as the total",
      },
      {
        metric: "status",
        before: "—",
        after: "built, switched off in production",
        how: "said plainly — it sits behind a flag",
      },
    ],
    reflection:
      "My first plan fixed the AI stage, because that's the obvious place to look. It would not have helped the one video that caused the complaint. I also quoted that stage's speed about six times too low for weeks, because I read one worker's rate as the total — and corrected it in the same thread once I measured properly.",
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
      "Each slot in the video is a fixed number of seconds. An AI writes the line, a text-to-speech voice reads it out. The check meant to keep lines short enough kept passing while the audio kept getting chopped mid-word. And when a line came in too short, the slot just sat in silence — which nobody had even called a bug.",
    decomposition: [
      {
        label: "The check counted words, the slot measures seconds",
        edge: true,
        text: "“2025 BMW i7 looks stunning” is five words on the page but about nine when spoken. Those two numbers were never going to line up.",
      },
      {
        label: "Never ask an AI for an exact count",
        edge: true,
        text: "Give it a target it can't hit and you get a confident wrong answer, not an error. All 12 prompts moved to “at most”, with a way out if the line still doesn't fit.",
      },
      {
        label: "Too short is a bug too",
        edge: true,
        text: "Everyone was watching for cut-offs, so nothing was watching for a line that ended early and left silence. Fitting a slot means using the room you were given, not just staying under the limit.",
      },
      {
        label: "Picked a real target instead of inventing one",
        text: "A hand-made video fills 97% of its slots. That's the number that made 51% look bad and 73% look like real progress.",
      },
    ],
    diagram: "fit-loop",
    diagramCaption:
      "The guess is gone. The loop measures the real audio and corrects in both directions.",
    decisions: [
      {
        chose: "Measure how long the audio actually is before using it.",
        insteadOf: "A better guess, with a safety margin.",
        because:
          "A safety margin is a guess about how wrong your guess is. Measuring removes the guess. If you're tuning a margin, stop and go measure.",
      },
      {
        chose: "Correct in both directions — trim if it overruns, extend if it falls short.",
        insteadOf: "Only fixing the overrun people complained about.",
        because: "A half-empty slot is a worse video too. It just doesn't generate a ticket.",
      },
      {
        chose: "Leave the shared audio service completely alone.",
        because:
          "Other teams depend on it. Doing the work on my side of the line meant I couldn't break anyone else.",
      },
    ],
    metrics: [
      { metric: "how much of each slot gets used", before: "51%", after: "73%", how: "test renders, one template" },
      { metric: "lines cut off mid-word", before: "every time", after: "none", how: "same renders" },
      { metric: "slots left half-silent", before: "nobody was watching", after: "fixed automatically", how: "same renders" },
      {
        metric: "where the length came from",
        before: "guessed from word count",
        after: "measured from the audio file",
        how: "checked against a known-good tool first",
      },
    ],
    reflection:
      "I built the better guess first and only measured second. If I'd asked “can I just measure this?” on day one, the middle step would never have existed. And 73% against a 97% target isn't finished — what's left is writing better lines, not fitting them.",
    stack: ["Node.js", "OpenAI", "Text-to-speech", "Prompt design"],
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
      "The price is printed into the ad video itself, not laid over it. So when a dealer dropped a price, the ad kept showing the old number until a person noticed and remade it by hand. I built the path that hears the price change and rebuilds exactly that one video — in the usual three minutes, with nobody involved.",
    decomposition: [
      {
        label: "The same price change will arrive more than once",
        edge: true,
        text: "Five guards, cheapest first: the queue drops exact repeats within five minutes; one car is handled one at a time even across servers; skip if the car is sold; skip if the video already shows the right price; and if all of that fails, the rebuild overwrites the same file — so a repeat costs money but can't corrupt anything.",
      },
      {
        label: "A price change can arrive after the car is sold",
        edge: true,
        text: "So that is the very first check — before any lookup, any rebuild, any spend.",
      },
      {
        label: "Read the current price off the video, not from inventory",
        edge: true,
        text: "The question isn't “what does this car cost”, it's “what price is this video showing”. Only the second one tells you whether rebuilding is pointless. It also took a 4–5 second lookup out of the path.",
      },
      {
        label: "Don't wake the rest of the pipeline",
        edge: true,
        text: "The obvious way to rebuild a video is to reset its status — but something watches that field and restarts the entire pipeline when it changes. So I call the rebuild step directly instead.",
      },
    ],
    diagram: "price-retrigger",
    diagramCaption:
      "Guards run cheapest first. Two of the five are free — they come from the queue's own guarantees.",
    decisions: [
      {
        chose: "Trigger the rebuild from the price change itself.",
        insteadOf: "A scheduled job that re-checks every car's price.",
        because: "A schedule is either too slow to matter or wastes almost all its work. The event already says which car changed.",
      },
      {
        chose: "Write the new video to the same address as the old one.",
        because: "Then nothing downstream needs updating — no feed refresh, no cache to clear, no callback.",
      },
      {
        chose: "Write down which of the five guards actually cost me code.",
        because:
          "Two of them come free from how the queue already works. Worth knowing which of your protections you're genuinely maintaining.",
      },
    ],
    metrics: [
      {
        metric: "price change → updated ad",
        before: "by hand, whenever someone noticed",
        after: "automatic, ~3 min",
        how: "design",
      },
      { metric: "what gets rebuilt", before: "risk of re-running everything", after: "one ad video", how: "design" },
      {
        metric: "looking up the price",
        before: "an API call, 4–5 seconds",
        after: "read off the video's own data",
        how: "removed from the path entirely",
      },
      {
        metric: "guards against a repeated event",
        before: "—",
        after: "5, two of them free",
        how: "written out layer by layer",
      },
    ],
    reflection:
      "The choice I'd defend hardest is reading the price off the video rather than from inventory — it looks like the wrong source until you say the question out loud. What I'd do differently: I listed the five guards after building them. Doing it first would have shown me two were free.",
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
      "Videos from the newer pipeline finished without a preview image, so anything that needed one fell back to a logo or showed nothing. Now a single frame is pulled out of the finished video, at a moment each template chooses — as part of the render, not as a job someone has to remember to run.",
    decomposition: [
      {
        label: "The first frame is the worst frame",
        edge: true,
        text: "These videos often open on a title card or a half-drawn scene. So which second to grab became a per-template setting — the same creative always looks good at the same moment, and that's a design call, not a code one.",
      },
      {
        label: "Take it from the finished file, after the render",
        text: "Then the preview can never disagree with the video people actually see. It costs about a second of ffmpeg instead of a full frame render on the machine that's already the bottleneck.",
      },
      {
        label: "The two halves of the render share no memory",
        edge: true,
        text: "Setup runs on one machine; the real render finishes minutes later on another, and the step that collects the file knows nothing except the video's id. So the chosen moment is handed over in a tiny file, filed under that id.",
      },
      {
        label: "ffmpeg can succeed and write nothing",
        edge: true,
        text: "Ask for a frame past the end of the video and it exits happily with an empty file. So the check is file size, not exit code — and a timestamp past the end gets pulled back inside the video instead of giving up.",
      },
      {
        label: "One header decides whether it displays or downloads",
        edge: true,
        text: "Without an explicit image type the file downloads instead of showing, and the ad platform's fetch fails. The five-minute cache is deliberate too: the address stays the same across rebuilds, so a long cache would serve the old preview forever.",
      },
      {
        label: "It must never make a good render fail",
        text: "Every step is best-effort. If anything goes wrong there's simply no preview, and the field is left out rather than sent empty — so a failed retry can't wipe a preview an earlier one already saved.",
      },
    ],
    diagram: "thumbnail",
    diagramCaption:
      "Made from the delivered file, at a moment the template picks, handed between two passes that share nothing but an id.",
    decisions: [
      {
        chose: "Take the frame at a moment the template sets.",
        insteadOf: "Always the first frame, or always the middle.",
        because:
          "Which moment looks best is a design decision and it differs per template. Leaving the setting empty is also how the whole feature stays off for that template — no separate flag needed.",
      },
      {
        chose: "Hand the chosen moment between the two passes in its own small file.",
        insteadOf: "Reading it back out of the render config that's already uploaded.",
        because:
          "The value is sitting right there in that file, which is exactly why it's tempting. Its own file, filed under the video id, can't be reshaped by whatever else writes to the other one.",
      },
      {
        chose: "Load the video first, then seek to the moment.",
        insteadOf: "The faster seek.",
        because:
          "The fast one snaps to the nearest earlier keyframe and can hand back a visibly different frame than the template asked for. At the one-or-two-second marks templates use, doing it properly costs nothing.",
      },
      {
        chose: "Reuse the field name the old pipeline already fills.",
        because: "Both pipelines then write the same column through one contract, and nothing downstream needs a version check.",
      },
    ],
    metrics: [
      { metric: "videos with a real preview", before: "none on this pipeline", after: "every configured template", how: "—" },
      {
        metric: "what people saw instead",
        before: "a brand logo stand-in, or nothing",
        after: "a frame from the video itself",
        how: "—",
      },
      { metric: "which frame", before: "n/a", after: "chosen per template", how: "a setting, not code" },
      {
        metric: "cost to make one",
        before: "would need a full frame render",
        after: "~1s of ffmpeg, off the busiest machine",
        how: "design",
      },
      {
        metric: "if the preview fails",
        before: "—",
        after: "nothing — the video still succeeds",
        how: "best-effort at every step",
      },
      {
        metric: "how often it actually produces one",
        before: "—",
        after: "never measured",
        how: "the gap I'd close first: count previews against configured templates over a real week",
      },
    ],
    reflection:
      "Shipped and running with no incidents, but I never measured the success rate — how many configured renders actually produce a preview. I know exactly how to get that number, which makes not having it worse rather than better. The logo fallbacks that were covering for the missing previews should come out now too; a stand-in that's never removed quietly becomes the design.",
    stack: ["Node.js", "ffmpeg", "S3", "AWS render farm"],
  },

  {
    id: "05",
    badge: "personal",
    domain: "Agentic AI",
    ask: "Planning a group trip is all friction.",
    headline: "A planner that checks its own work",
    span: "2026",
    status: "Single-trip planner built · group side designed, not built",
    brief:
      "Six people want six different things. One wants museums, one wants to sleep in, one is counting every rupee — and somebody has to turn that into a day-by-day plan nobody hates. It looks like a job for a chat prompt and isn't, so I built it as an agent with tools, plus a critic that reads the plan before you ever see it.",
    decomposition: [
      {
        label: "One big prompt can't do this",
        edge: true,
        text: "Three reasons, in order. It can't know today's prices or what's actually open. The research for every destination won't fit in one prompt. And one call is one shot at the right answer — there's no second pass to catch its own mistake.",
      },
      {
        label: "So: an agent that fetches, then a critic that judges",
        text: "The planner pulls only what it needs, when it needs it. Then a separate pass reads the finished plan with fresh eyes and no attachment to it. Checking a plan is far easier than writing one.",
      },
      {
        label: "Cheap checks first, expensive ones after",
        edge: true,
        text: "Day count, missing fields, whether the budget adds up — those are plain code and cost nothing. The model only gets asked what rules can't express: is day two overpacked, does the pace match what they asked for, is this even the right season.",
      },
      {
        label: "A critic that keeps disagreeing can't run up the bill",
        edge: true,
        text: "The loop stops after three attempts. Without a ceiling, a critic that keeps rejecting and a planner that keeps rewriting will happily burn tokens all night.",
      },
      {
        label: "Two kinds of data, two different shelf lives",
        text: "What a city is like barely changes and can be cached. What a room costs tonight changes constantly and has to be live. Keeping them apart means a real booking service can slot in later without a rewrite.",
      },
      {
        label: "My best anecdote was really a bug",
        edge: true,
        text: "The critic once caught a three-day request that came back with two days — a great story until I realised counting days is something a plain rule does for free. That's exactly why the cheap checks now run first.",
      },
    ],
    diagram: "critic-loop",
    diagramCaption:
      "Generate, then verify with fresh eyes. The free checks run before the expensive one, and the loop is bounded.",
    decisions: [
      {
        chose: "An agent with tools, looping.",
        insteadOf: "One large prompt that returns the whole itinerary.",
        because:
          "Live data, context limits, and the fact that a single call has no way to catch its own mistake. All three point the same direction.",
      },
      {
        chose: "A critic that doesn't remember writing the plan.",
        insteadOf: "Asking the planner to check itself.",
        because:
          "Anything that just wrote an answer is the worst judge of it. A fresh reader has no stake in defending it.",
      },
      {
        chose: "Split cacheable knowledge from live prices at the design stage.",
        because:
          "Not all data goes stale at the same rate, so one cache setting can't be right for both. It also leaves a clean slot for a real booking API later.",
      },
    ],
    metrics: [
      {
        metric: "what's actually built",
        before: "—",
        after: "the single-trip planner, with the critic loop",
        how: "said plainly",
      },
      {
        metric: "the group side",
        before: "—",
        after: "designed, not built",
        how: "it's the reason the project exists, and it isn't done",
      },
      { metric: "retry ceiling", before: "unbounded by default", after: "3", how: "so a stuck loop can't run up a bill" },
      {
        metric: "does the critic earn its cost?",
        before: "—",
        after: "not measured here",
        how: "I built that measurement on a later project instead: how often the first draft fails, whether attempt two passes, and how often the critic rejects something that was fine",
      },
    ],
    reflection:
      "The honest line: the group-preference part is the reason I started this, and it's the part I haven't built. What exists is the single-trip planner underneath it. I also never measured whether the critic loop pays for itself here — I only worked out how to measure that on a later project, which makes it a gap I can name precisely rather than one I can wave at.",
    stack: ["LangGraph", "OpenAI", "RAG", "Tavily", "Next.js", "FastAPI", "AWS EC2"],
  },
];

/* ------------------------------ projects --------------------------- *
 * Things built outside work. Same rules as the rest of this file:
 * plain English, nothing claimed that isn't in the repo. Links are
 * checked — a dead URL on a portfolio is worse than no URL.
 * ------------------------------------------------------------------ */

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "repo" | "internal";
};

export type Project = {
  n: string;
  name: string;
  tagline: string;
  span: string;
  state: "live" | "private";
  stateLabel: string;
  summary: string;
  note: string;
  shot: string;
  shotAlt: string;
  stack: string[];
  links: ProjectLink[];
};

export const projectsIntro = {
  stamp: "Projects",
  title: "Built on my own time.",
  lede: "Nobody asked for any of these. Each one started with something I wanted to understand, so the interesting part is usually one decision rather than the whole thing — that's the line marked ◆ on each card.",
};

export const projects: Project[] = [
  {
    n: "01",
    name: "ItineraryAI",
    tagline: "Agentic trip planner",
    span: "2026",
    state: "live",
    stateLabel: "Live",
    summary:
      "Say where you're going and for how long, and you get a day-by-day plan back. An agent pulls what it needs as it needs it — places, stays, current prices — and then a separate critic reads the finished plan with fresh eyes before you ever see it.",
    note:
      "The critic loop stops after three attempts. Without a ceiling, a critic that keeps rejecting and a planner that keeps rewriting will happily burn tokens all night.",
    shot: "itineraryai",
    shotAlt: "The ItineraryAI landing page \u2014 \u201cWhere group trip plans finally leave the group chat\u201d over a night sky, with a Plan Your Trip button.",
    stack: ["LangGraph", "OpenAI", "FastAPI", "ChromaDB", "Next.js", "Express", "MongoDB", "Railway"],
    links: [
      { label: "itineraryai.in", href: "https://www.itineraryai.in", kind: "live" },
      { label: "Web repo", href: "https://github.com/lufyDev/itenaryAI", kind: "repo" },
      { label: "Agent repo", href: "https://github.com/lufyDev/itenary_ai", kind: "repo" },
      { label: "Full case file", href: "#work", kind: "internal" },
    ],
  },

  {
    n: "02",
    name: "Urban Update",
    tagline: "Newsroom CMS and the site it feeds",
    span: "2026",
    state: "live",
    stateLabel: "Live",
    summary:
      "A publishing tool for a city-affairs magazine and the public site that reads from it. Reporters draft and submit, editors assign and publish, admins run the place — three roles, three dashboards, one set of articles underneath. Media uploads and per-article numbers are part of it.",
    note:
      "Request and response shapes live in a shared contracts package the API and the front end both import. The two sides can disagree at build time, which is the only time it's cheap.",
    shot: "urban-update",
    shotAlt: "The Urban Update home page \u2014 the masthead, a news navigation bar, and the Featured Stories list.",
    stack: ["NestJS", "Next.js", "MongoDB", "Turborepo", "pnpm", "Tailwind", "Quill", "Chart.js"],
    links: [{ label: "urbanupdate.in", href: "https://urbanupdate.in/", kind: "live" }],
  },

  {
    n: "03",
    name: "mini-claude",
    tagline: "A coding agent, built from scratch",
    span: "2026",
    state: "live",
    stateLabel: "Live",
    summary:
      "A small version of the AI coding assistants everyone now has open all day, built to find out how they actually work. Give it a task and it reads files, writes them, and runs commands until it's done. The page shows every step live — what it's weighing up, which tool it reached for, what came back, and what the turn cost.",
    note:
      "It's public, so the shell it runs commands in works off a list of what's allowed rather than a list of what's banned. A list of dangerous commands is one you are permanently one entry short on.",
    shot: "mini-claude",
    shotAlt:
      "The mini-claude web UI — a prompt to write and run a primes script, followed by the agent's reasoning, three tool calls, the answer, and the token cost for the turn.",
    stack: ["Python", "FastAPI", "SSE", "OpenAI Responses API", "Docker", "Railway"],
    links: [
      {
        label: "Try it live",
        href: "https://mini-claude-production-002f.up.railway.app",
        kind: "live",
      },
      { label: "Repo", href: "https://github.com/lufyDev/mini-claude", kind: "repo" },
    ],
  },

];

export const leverage = {
  kicker: "Writing code was never the job.",
  title: "I use AI to multiply what I can do.",
  lede: "Engineering was always about solving the problem with the best tools your domain hands you. One of those tools now writes code. So I use it every day — to read more logs than I could, to draft three designs instead of defending my first idea, to try every path through a piece of test data. What it doesn't do is decide which number matters, or notice that the number everyone quotes has no source, or own it at 2am. That part is still the job.",
};

/* ------------------------------ about ------------------------------ */

export const about = {
  stamp: "About",
  text: "I build AI products end to end — pipeline, backend, frontend, and keeping them running once they are live. Outside work I build tech for the everyday problems I notice around me. Learning by doing is what keeps making me better at the part that matters: working out what the real problem is.",
};

export const offTheClock = [
  {
    stamp: "Off the clock",
    text: "Guitar and singing. Filmmaking. Football — playing, not watching.",
  },
];

/* ------------------------------ contact --------------------------- */

export const contact = {
  title: "Say hello.",
  lede: "Happy to talk about engineering, business problems, music, or football. If you're hiring: I want to own something real, with users and a number attached to it.",
};
