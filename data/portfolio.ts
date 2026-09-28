/* ------------------------------------------------------------------ *
 * All site copy lives here.
 *
 * Redaction policy: percentages, ratios and multipliers stay — they are
 * the point and they carry no secrets. Absolute currency figures tied to
 * an employer, client names, vendor names, colleague names and internal
 * service names are genericised.
 * ------------------------------------------------------------------ */

export const personalInfo = {
  name: "Vishal Pundhir",
  short: "Vishal",
  role: "Software Engineer",
  locus: "India · remote-friendly",
  school: "BITS Pilani '24",
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
  eyebrow: "Engineering dossier · rev. 2026.09",
  headline: "Writing the code was never the job.",
  lede: [
    "Engineering was always about solving the problem with the best tools the domain hands you. One of those tools now writes code. So the job stands where it always stood — understand what the customer actually needs, break it into parts that can be wrong on their own, find the edge that breaks it, design the system, and prove the number moved.",
    "AI is the multiplier. The judgment is the load-bearing part.",
  ],
  // deliberately not "Full-Stack Engineer" — the claim is the differentiator
  standfirst: "I turn business problems into systems that hold up in production — and then I prove they did.",
};

export const ledger = [
  { value: "2 yrs", label: "production ownership, inherited systems included" },
  { value: "1000+", label: "videos a month through a pipeline I own" },
  { value: "43%", label: "waste found in spend nobody was measuring" },
  { value: "125", label: "pages of engineering notes, written from my own sessions" },
];

/* ------------------------------ the hero resolve ------------------- */
/* A vague business ask visibly resolving into a spec. Real cases. */

export type Resolution = {
  ask: string;
  steps: { stamp: string; text: string }[];
};

export const resolutions: Resolution[] = [
  {
    ask: "The videos are costing us too much.",
    steps: [
      {
        stamp: "What they meant",
        text: "Not “buy fewer servers.” Four people were arguing about fleet size. Nobody owned the cost per unit — and the unit itself was wrong.",
      },
      {
        stamp: "The edge",
        text: "Cost per render is not cost per delivered video. We were billing 1.8 renders for every video that shipped.",
      },
      {
        stamp: "The design",
        text: "Write the idempotency guard before the dispatch, not after. A consumer cannot dedupe what the producer already enqueued twice.",
      },
      {
        stamp: "The number",
        text: "43% duplicate render rate, about 40% of the render bill — found in two hours of production logs, not in the spreadsheet everyone was quoting.",
      },
    ],
  },
  {
    ask: "The voiceover gets cut off mid-word.",
    steps: [
      {
        stamp: "What they meant",
        text: "The guard meant to keep scripts inside their slot was passing while the audio overran. So the guard was measuring the wrong thing.",
      },
      {
        stamp: "The edge",
        text: "“2025 BMW i7” is 5 text tokens and about 9 spoken words. A budget denominated in tokens cannot guard a constraint denominated in seconds.",
      },
      {
        stamp: "The design",
        text: "Stop estimating. Measure the rendered audio before upload and close the loop on the real number. A safety factor is a guess about your proxy's error; a measurement deletes the proxy.",
      },
      {
        stamp: "The number",
        text: "Segment fill 51% → 73%, at natural speaking pace. Cutoffs: zero.",
      },
    ],
  },
  {
    ask: "Stop paying a vendor to put our videos in front of buyers.",
    steps: [
      {
        stamp: "What they meant",
        text: "Own the whole path — from a render finishing, to valid XML on a CDN that somebody else's crawler polls on its own schedule.",
      },
      {
        stamp: "The edge",
        text: "Instinct says hook the price-change event. But at price-change time the new video does not exist yet. The hook belongs at render completion.",
      },
      {
        stamp: "The design",
        text: "The event carries the whole payload, so the consumer needs no database and no network into our data stores. Then render the document deterministically — never patch the artifact in place.",
      },
      {
        stamp: "The number",
        text: "Vendor dependency removed, feed freshness hourly → per-event, and recovery runs the same code path as normal operation — so replay cannot rot.",
      },
    ],
  },
];

/* ------------------------------ operating notes -------------------- */

export const principles = [
  {
    n: "01",
    title: "Start at the customer, not the ticket.",
    body: "A ticket tells you what somebody typed. The job is what they needed. Some of my best work has been refusing the framing in the request and going to the data instead.",
    evidence:
      "Four people argued fleet sizing for a week. The answer was in two hours of logs, and it was not fleet sizing.",
  },
  {
    n: "02",
    title: "Break it down until each piece can be wrong on its own.",
    body: "Decomposition is how you end up with a system you can debug. If a failure can only be described as “it broke”, it was never decomposed.",
    evidence:
      "One “flaky infrastructure” failure was really three: a missing flag, a leak that ratcheted, and randomised iteration order faking intermittency.",
  },
  {
    n: "03",
    title: "The edge case is the product.",
    body: "Happy paths ship themselves. What decides whether a system survives is the null field, the redelivered event, the ninth font, the retry that was already enqueued.",
    evidence:
      "One image with a null URL failed all 34 images of a job. The blast radius of a batch is a design decision, not an accident.",
  },
  {
    n: "04",
    title: "Measure in the unit the constraint cares about.",
    body: "A guard expressed in the wrong unit is not a guard. A number without provenance becomes a quoted fact. Which is why every result on this page ships with a “how measured” column.",
    evidence:
      "A hardcoded 15-minute constant was really 37 seconds — a 24× error that had already reached a customer-facing ETA and a cost model.",
  },
  {
    n: "05",
    title: "Design for the person reading the log at 2am.",
    body: "Errors that get swallowed, success logged unconditionally, a fallback chain that can never fail — these are the same bug wearing different clothes. Degrade to a visible failure, never a plausible one.",
    evidence:
      "Shipping the wrong dealer's logo is worse than shipping no logo. So the chain ends in a counted skip, and a fixture proves it still skips.",
  },
  {
    n: "06",
    title: "AI is leverage on the judgment, not a substitute for it.",
    body: "It reads more logs than I can, drafts three architectures so I argue with all three instead of defending the first, and forgets nothing. What it cannot do is decide which number is load-bearing, or say “my hypothesis was wrong.”",
    evidence:
      "My first pass at the cost analysis reached the wrong conclusion — by trusting the stale constant. The second pass challenged it. That difference is the entire job.",
  },
];

/* ------------------------------ case files ------------------------- */

export type CaseFile = {
  id: string;
  badge: "work" | "personal";
  domain: string;
  ask: string;
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
    domain: "Cost · measurement · influence",
    ask: "The videos are costing us too much.",
    span: "2026-08",
    status: "Findings landed · fix scoped",
    brief:
      "Two large dealer accounts pushed a video pipeline into turnaround trouble. A thread formed around it: my manager wanted priority for a customer, infrastructure quoted +40% to raise the render fleet ceiling, the CTO asked whether we were breaching SLA and whether the concurrency could be serverless. Four people, four framings — and the whole debate was about fleet size and cost. Neither original author of the pipeline was on the team any more, and nobody owned the number everyone was arguing about.",
    decomposition: [
      {
        label: "Refused the framing",
        text: "Went to a 2h06m window of production render logs — 95 submits, 97 render jobs — rather than arguing from the cost sheet everyone was quoting.",
      },
      {
        label: "Killed the load-bearing assumption first",
        text: "The code carried a 10-minute per-message constant and the cost sheet said 15 minutes. Real submit time was 37 seconds. A 24× error that had already reached a customer-facing ETA, a cost model, and this argument.",
      },
      {
        label: "Built a stage-capacity table",
        text: "Every stage expressed in one shared unit, so the debate had a basis. It showed the render farm was not the constraint for fresh work: the submitter box was 46.5% idle with 565 empty queue polls.",
      },
      {
        label: "Counted distinct ids — and found what nobody had",
        text: "95 submits resolved to 54 distinct videos; 97 render jobs to 55. 31 videos rendered more than once. One rendered five times.",
      },
      {
        label: "Spacing was the tell",
        edge: true,
        text: "Nine duplicate pairs fired 35–71 seconds apart against a measured 37-second submit cycle. One cycle apart means both copies were already enqueued — so the producer is at fault, and no amount of consumer retry logic explains it.",
      },
      {
        label: "Disproved my own hypothesis",
        edge: true,
        text: "I expected price-change retriggers. Transition counts by source queue came back 30, 11, and a zero exactly where retriggers would have had to appear. Every repeat came from the quality-check path instead. My proposed action was right; my mechanism was wrong, and the zero is what settled it.",
      },
      {
        label: "Then found the defect",
        text: "The save path dispatches to the queue before writing the in-progress status, so a second save passes the same guard. The block had been copied from a handler that carried implicit idempotency the copy never inherited.",
      },
    ],
    diagram: "dispatch-before-write",
    diagramCaption:
      "The window: two saves, one guard, both already enqueued before either status write lands.",
    decisions: [
      {
        chose:
          "Write the status guard before the dispatch — ideally as one conditional update, so there is no window at all.",
        insteadOf: "A status check on the consumer.",
        because:
          "Both copies were already enqueued, so consumer dedup cannot help. And a plain status guard would have broken two legitimate re-render paths.",
      },
      {
        chose: "Report cost per delivered video.",
        insteadOf: "Cost per render.",
        because:
          "The unit you quote becomes the unit the organisation plans against. Per render it looked fine; per delivered video it was 1.8× that.",
      },
      {
        chose: "A standing weekly cost-per-delivered-unit metric.",
        insteadOf: "A one-off analysis with a nice conclusion.",
        because:
          "The two-line code defect was not the real bug. The absence of the measurement was.",
      },
    ],
    metrics: [
      {
        metric: "duplicate render rate",
        before: "43%",
        after: "fix scoped — a 2-line reorder",
        how: "distinct render-job ids vs distinct video ids, 2h06m production window",
      },
      {
        metric: "renders billed per delivered video",
        before: "1.8",
        after: "target 1.0",
        how: "same window",
      },
      {
        metric: "share of render spend wasted",
        before: "~40%",
        after: "—",
        how: "duplicate count × per-render cost",
      },
      {
        metric: "assumed vs real submit time",
        before: "15 min",
        after: "37 s",
        how: "95 submits, timestamps paired across two log lines",
      },
      {
        metric: "submitter utilisation",
        before: "assumed saturated",
        after: "46.5%, 565 empty polls",
        how: "same window",
      },
      {
        metric: "videos needing a quality fix",
        before: "untracked",
        after: "57% — surfaced as an upstream signal",
        how: "queue-transition attribution",
      },
    ],
    reflection:
      "The duplicate rate had been running for months. No metric emitted it, and no log line ever named a video's render count — you cannot notice what you do not count. I would instrument cost per delivered unit before anyone asks for it. Two things I will say plainly: the first pass at this analysis reached the wrong conclusion by trusting the stale constant, and two of my own recommendations were withdrawn on contact with the data, in front of the same thread.",
    stack: ["Production log analysis", "SQS", "Node.js", "MongoDB", "ClickHouse / Metabase"],
  },

  {
    id: "02",
    badge: "work",
    domain: "LLMs in production · quality",
    ask: "The voiceover gets cut off mid-word.",
    span: "2026-07",
    status: "Shipped",
    brief:
      "Generated voiceovers on the video templates were being cut off mid-word. Each video segment has a fixed duration, an LLM writes the script, and text-to-speech renders it. The guard that was supposed to keep scripts inside their slot was passing while the audio overran — across templates and across vehicle makes, with no human reviewing every script.",
    decomposition: [
      {
        label: "The unit mismatch was the whole bug",
        edge: true,
        text: "“2025 BMW i7 looks stunning.” is 5 text tokens and about 9 spoken words: “twenty twenty-five” is three, “B-M-W” is three, “i-seven” is two. The budget was computed in tokens against a 2.8-second slot, so the guard passed while the speech overran.",
      },
      {
        label: "Three stacked failures, not one",
        text: "Token counting blind to speech expansion; budgets that were arithmetically impossible (“exactly N words” for a slot that could not hold N); and a retry loop that shipped over-length copy anyway after three attempts.",
      },
      {
        label: "An impossible constraint returns a confident answer, not an error",
        edge: true,
        text: "So all 12 script prompts were rewritten to use at-most ceilings with explicit counting rules, a drop-the-year directive, and an escape hatch. Never ask a model for an exact count — it cannot count, and it will not tell you so.",
      },
      {
        label: "Found stale constants while in there",
        text: "Words-per-minute was configured at 150/165 while the code assumed 130. Another number nobody had re-derived since it was written.",
      },
      {
        label: "Anchored “good” to a real reference",
        text: "A hand-made benchmark video hit 97% fill. That is what made 51% legible as bad and 73% as genuine progress, rather than inventing a threshold and defending it.",
      },
      {
        label: "Made the next occurrence diagnosable from data",
        text: "Required duration, actual measured duration and the exact prompt sent to the model, written per layer into a per-render log. No repro required.",
      },
    ],
    diagram: "fit-loop",
    diagramCaption:
      "Estimate deleted. The loop closes on a measured duration, one MP3 frame of tolerance.",
    decisions: [
      {
        chose:
          "Measure the rendered audio's real duration before upload — a frame-walking parser, validated against ffprobe.",
        insteadOf: "A better estimator with a safety factor on top.",
        because:
          "A safety factor is a guess about your proxy's error. A measurement deletes the proxy. When you find yourself tuning a safety factor, that is the signal to stop tuning and go measure.",
      },
      {
        chose: "Close the fit loop at 0.06s tolerance.",
        insteadOf: "Closing tighter.",
        because:
          "That is MP3 frame granularity. Closing tighter chases precision the format does not have.",
      },
      {
        chose: "Leave the shared legacy audio function completely untouched.",
        insteadOf: "Fixing duration measurement at the shared layer where it 'belongs'.",
        because:
          "Other flows depend on it. Measuring on my side of the boundary kept the blast radius at zero — recorded as a decision with its reasoning, not left implicit for the next person to guess at.",
      },
      {
        chose:
          "A quality pass on top of fit: shorten above a 1.15 required rate, lengthen below 0.7, with lengthen targets self-calibrating from measured pace.",
        because:
          "Fitting the slot is not the same as sounding right. And calibrating from measurement rather than from a constant is how the constant stops going stale.",
      },
    ],
    metrics: [
      {
        metric: "voiceover segment fill",
        before: "51%",
        after: "73%",
        how: "test renders, one template family",
      },
      { metric: "cutoffs", before: "reproducible", after: "zero", how: "same renders" },
      {
        metric: "speaking pace",
        before: "rate-boosted to fit",
        after: "all natural pace",
        how: "same renders",
      },
      {
        metric: "duration source",
        before: "estimated from token count",
        after: "measured from MP3 bytes, ±0.06s",
        how: "frame-walking parser, validated against ffprobe",
      },
      {
        metric: "reference point",
        before: "none",
        after: "97% fill (hand-made ideal)",
        how: "manual analysis of a benchmark video",
      },
      {
        metric: "per-layer observability",
        before: "none",
        after: "required vs actual duration + exact prompt",
        how: "per-render log",
      },
    ],
    reflection:
      "I shipped an improved estimator first and the measurement second. The prompt work genuinely needed doing, but had I asked “can I just measure this?” on day one, the intermediate step would have been unnecessary. And 73% against a 97% reference is not finished — the remaining gap is script quality, not fit, which is different work. I would rather say that than present 73% as the destination.",
    stack: ["OpenAI structured outputs", "Google TTS", "Node.js", "Prompt design", "MongoDB"],
  },

  {
    id: "03",
    badge: "work",
    domain: "System design · build vs buy",
    ask: "Stop paying a vendor to put our videos in front of buyers.",
    span: "2026-07",
    status: "Code complete · infra pending",
    brief:
      "A large dealer group was paying a third party to supply vehicle videos into an ad platform's inventory ads. The platform polls a catalog XML — vehicle id, price, landing page, image, video — and our own vertical ad videos needed to appear there instead. Replacing the vendor meant owning the path end to end: architecture, code, and the open product questions. The requirements were incomplete in the way that actually matters — nobody could tell me the shape of the upstream inventory data.",
    decomposition: [
      {
        label: "Wrote down all three architectures, with rejection reasons",
        text: "(1) An hourly job inside an existing service — couples the feed to a service I do not own. (2) An hourly full-regeneration function — no coupling, but an hour stale and wasteful. (3) Event-carried payloads into a stateless consumer — shipped. Recording the two rejections is the part that survives me leaving.",
      },
      {
        label: "The natural trigger point is wrong",
        edge: true,
        text: "Instinct says hook the price-change event. But at price-change time the new video does not exist yet. The hook belongs at render completion — which covers new and re-rendered videos with one code path instead of two.",
      },
      {
        label: "Reverse-engineered the platform's cache behaviour",
        edge: true,
        text: "It re-hosts assets and keys its cache on the URL string, so a re-render at a stable URL is invisible to it: no error, nothing in a log, the ad simply never updates. I worked that out from noticing the incumbent vendor appended a redundant-looking timestamp parameter. Redundant-looking details in a working system are usually load-bearing.",
      },
      {
        label: "Took a correction and rewrote against reality",
        text: "I had assumed one inventory endpoint. The correct one unwraps to a narrower object — price, sold, deleted and media metadata are siblings of the node it returns, so that endpoint never returns them. I dropped a short-circuit I had written on the false assumption.",
      },
      {
        label: "Rebuilt fixtures from the real response shape",
        edge: true,
        text: "Which is what found the actual bugs: price needed a third fallback to the only price field that endpoint has, or every listing would have skipped; and vehicle condition needed a fallback because the field I was reading is always empty on the live path, so new vehicles resolved to used. Found by running fixtures, not by inspection.",
      },
      {
        label: "Surfaced a blocking gap instead of defaulting past it",
        text: "There was no confirmed image source on the live path — every listing would have skipped. I documented it as an open blocking decision rather than quietly filling it with something plausible.",
      },
      {
        label: "Marked the stopgap in three places",
        text: "Code, design doc and wiki, each with the removal trigger — so a temporary rung could not silently become the design.",
      },
    ],
    diagram: "event-carried",
    diagramCaption:
      "The consumer holds no state: no database, no private network, no data-store credentials. Replay is the normal path.",
    decisions: [
      {
        chose: "Render the whole document deterministically, every time.",
        insteadOf: "Patching the XML in place.",
        because:
          "Object storage has no append, read-modify-write races under concurrent events, and one bad write corrupts every listing in the file. A keyed store plus a deterministic full render gives incremental behaviour with none of those properties. This is the one I would defend hardest.",
      },
      {
        chose:
          "A consumer with no database, no private network and no data-store credentials — the event carries the full payload.",
        because:
          "It runs on somebody else's polling schedule. That removes an entire class of operational dependency from the component I have the least control over.",
      },
      {
        chose: "Recovery as the same code path as normal operation — rebuild is replay.",
        insteadOf: "A separate recovery mode.",
        because:
          "A special mode rots, because it only runs when something is already on fire. This one covers bootstrap, lost events and stale sold entries.",
      },
      {
        chose:
          "An image fallback chain ending in an explicit counted skip, with the dealer logo defaulting to empty.",
        insteadOf: "A final default that always produces something.",
        because:
          "Shipping the wrong dealer's logo is worse than a clean skip. Two fixtures: one proving the fallback fires, one proving it still skips when there is genuinely nothing — because the usual bug is a chain that can never fail.",
      },
    ],
    metrics: [
      {
        metric: "video source for the feed",
        before: "third-party vendor",
        after: "in-house, code complete",
        how: "—",
      },
      {
        metric: "feed freshness",
        before: "hourly (designs 1–2)",
        after: "per event",
        how: "architecture",
      },
      {
        metric: "consumer data-store dependencies",
        before: "required in design 1",
        after: "zero",
        how: "the function has no database or private-network access",
      },
      {
        metric: "architectures evaluated",
        before: "—",
        after: "3, all recorded with rejection reasons",
        how: "design record",
      },
      {
        metric: "paths verified locally",
        before: "—",
        after: "upsert · sold-removal · no-image skip · idempotent replay",
        how: "fixture runs",
      },
      {
        metric: "bugs caught by real-shaped fixtures",
        before: "—",
        after: "2 (all-listings-skip on price; new resolving to used)",
        how: "local runs",
      },
      {
        metric: "live",
        before: "—",
        after: "no — infrastructure and account items pending",
        how: "stated, not rounded up",
      },
    ],
    reflection:
      "Honest status: code complete, not live. The remaining items were outside my control and I would rather say so than round it up. The part I would do differently is building fixtures from the real response shape on day one instead of from my assumption about it — every real bug in this project was found the moment I did. Also worth saying: I found live credentials committed in two repositories while working through config. Unrelated to my task, reported anyway.",
    stack: ["AWS Lambda", "SQS FIFO", "S3", "CloudFront", "Node.js", "XML feeds"],
  },

  {
    id: "04",
    badge: "work",
    domain: "Debugging · inherited systems",
    ask: "Renders fail at random. It's probably flaky infra.",
    span: "2026-08",
    status: "Rewritten · self-healing",
    brief:
      "Videos were failing on a managed render farm with a permission error during a font-install step — inside vendor-supplied code, on pooled Windows workers. Neither original author of the pipeline was on the team. Some failures did not reproduce on retry, so it was being treated as flaky infrastructure and retried. Python on Windows against GDI font APIs: not my language, not my operating system, not a system I built.",
    decomposition: [
      {
        label: "Corrected the location first",
        text: "Every path in the traceback was a Windows drive, which made it look like our submitter box. It was a render worker — different machine, different user, session directory somewhere else entirely. Getting that wrong would have wasted the whole investigation.",
      },
      {
        label: "The diagnostic hinge: eight fonts copied, the ninth failed",
        edge: true,
        text: "Into that exact directory. A directory-permissions or token problem fails the first one. So it was a per-file lock, not access control — and that single observation redirected everything away from IAM and Windows permissions, which is where this class of error normally leads.",
      },
      {
        label: "Read the vendor source",
        text: "The font registration call was made without the private-scope flag, so every font entered the system font table and stayed write-locked after the Python process exited. Workers are pooled across sessions — same instance, same user profile — so a font left behind by an earlier session makes the next session's unconditional copy fail.",
      },
      {
        label: "Found the ratchet",
        edge: true,
        text: "Which is what made this a production problem rather than a one-off. The install raises on first failure with no rollback, and because it runs on environment-enter, the environment never entered, so its exit cleanup never ran. Every font installed before the failing one leaked permanently. Each failure poisons the worker further for the next job, and a worker never recovers on its own.",
      },
      {
        label: "Explained the “flakiness” instead of accepting it",
        edge: true,
        text: "The installer iterates a set. String hashing is randomised per process, so install order differs every run — different failure point, different leaked set, and a retry can pass purely on a lucky order. The observation that “the reprocess didn't show the error” was fully explained by this, not by any real difference in the job.",
      },
      {
        label: "Found two more leak paths by reading, not reproducing",
        text: "Both make even a clean exit leak: teardown deletes the registry value first with no try/finally, so a name mismatch skips the unload and the file delete; and cleanup re-derives its list by rescanning a temp directory, so it silently no-ops whenever the attachments are already gone.",
      },
      {
        label: "Explained why this service was hit hardest",
        text: "Our template family carries pre-built font states per brand, and the submitter walks every layer of every composition — so all nine fonts ship and install on every render of that family, regardless of which brand state is actually active. Maximum collision surface.",
      },
    ],
    diagram: "ratchet",
    diagramCaption:
      "A failure that makes the next failure more likely. The fix makes leaks harmless rather than absent, so the fleet self-heals as workers cycle.",
    decisions: [
      {
        chose: "Make existing leaks harmless.",
        insteadOf: "Cleaning up every already-poisoned worker.",
        because:
          "The fleet then self-heals as workers cycle — cheaper than a migration, and lower risk than touching live workers.",
      },
      {
        chose: "Leave alone any font this session did not install.",
        because:
          "A 32-vCPU worker may be running concurrent sessions. A cleanup that reaches outside its own manifest becomes the next bug.",
      },
      {
        chose:
          "Deterministic install order, idempotent install, rollback on partial failure, manifest-driven cleanup carrying the exact registry name written at install.",
        insteadOf: "Rescanning a directory to work out what to remove.",
        because:
          "Idempotent setup or do not run on pooled machines. And a cleanup that re-derives its own input can silently no-op.",
      },
      {
        chose: "State the verification limit out loud.",
        because:
          "I checked by parsing only — the registry and native-library calls are Windows-only. Saying that is better than letting “fixed” imply “tested”.",
      },
    ],
    metrics: [
      {
        metric: "failure mode",
        before: "fatal and ratcheting — each failure poisoned the worker further",
        after: "leaks harmless; install tolerates present-and-locked",
        how: "source rewrite",
      },
      {
        metric: "install order",
        before: "nondeterministic (set iteration + hash randomisation)",
        after: "deterministic (sorted + basename dedupe)",
        how: "source",
      },
      { metric: "clean-exit leak paths", before: "2", after: "0", how: "source read" },
      { metric: "partial-failure rollback", before: "none", after: "present", how: "source" },
      {
        metric: "cleanup",
        before: "rescan-based, silently no-ops",
        after: "manifest-driven, exact registry name recorded",
        how: "source",
      },
      {
        metric: "worker failure rate",
        before: "unmeasured",
        after: "—",
        how: "the settling measurement I would still want: install failures per 100 jobs, before vs after. The job history has it.",
      },
    ],
    reflection:
      "I will flag my own gap: the before/after failure rate is unmeasured, and it is obtainable. Also, the vendor's script directory is not in version control — the submitter copies it from an install path — so this patch is machine-local and reverts on a reinstall or a new host. I recorded that landmine and offered to vendor the directory into the repo; it did not get done. The generalisable lesson is the one I keep reaching for: a failure that makes the next failure more likely is a different category of problem from a failure that repeats.",
    stack: ["Python", "Windows / GDI", "AWS managed render farm", "Vendor source", "Node.js"],
  },

  {
    id: "05",
    badge: "personal",
    domain: "Voice AI · real-time systems",
    ask: "Who answers the phone at 2am?",
    span: "2026-09 → ongoing",
    status: "M0 complete · M1 next",
    brief:
      "A home-services contractor — HVAC, plumbing — is on a roof at 2pm and asleep at 2am. The missed call goes to a competitor. I am building an inbound voice receptionist that triages, books, or escalates, deliberately on raw telephony media streams rather than a hosted agent platform, because the point is to own the pipeline instead of configuring one. Built in numbered checkpoints, each forcing one specific piece of the real-time stack.",
    decomposition: [
      {
        label: "Named the business metric before the technical one",
        text: "Latency is an input, not an output. The outputs are after-hours capture — the actual wedge — booking conversion at roughly 40% against a voicemail's zero, containment rate, emergency-detection recall, and cost per call against a human answering service.",
      },
      {
        label: "Emergency detection is a recall problem, not an accuracy problem",
        edge: true,
        text: "A gas smell classified as routine is the catastrophic failure mode. So accept false positives to drive false negatives toward zero — which is the opposite of what an accuracy metric would have optimised.",
      },
      {
        label: "The failure modes that cost real money are correctness, not prosody",
        edge: true,
        text: "Hallucinated availability. A double-booking from a race between two concurrent calls. A wrong address. A price quote that may be legally binding.",
      },
      {
        label: "Most of the engineering lives in the integration surface",
        text: "Idempotent tool calls, because a network retry must not double-create a job — and every field-service platform has its own API, data model and quirks.",
      },
      {
        label: "The acoustics are the real adversary",
        edge: true,
        text: "Job-site noise, speakerphone echo, poor cell signal, English/Spanish code-switching, callers who turn hostile once they clock it is not human, kids answering the phone, and emotional callers — no heat, winter, baby at home.",
      },
      {
        label: "Evaluation is the part I already know is hard",
        text: "Non-deterministic system, no ground truth, and “was that a good call?” is subjective. Regression testing means simulated callers, which is its own checkpoint rather than an afterthought.",
      },
    ],
    diagram: "voice-cascade",
    diagramCaption:
      "Cascaded on purpose: every stage leaves a transcript or a tool-call record, which is what makes a double-booking debuggable.",
    decisions: [
      {
        chose:
          "A cascaded pipeline — voice activity detection, speech recognition, turn detection, model with tools, speech synthesis.",
        insteadOf: "Speech-to-speech.",
        because:
          "The fatal failure mode is a double-booked slot, not awkward prosody, and debugging that needs a transcript and a tool-call log. Speech-to-speech buys lower latency and gives up the audit trail. A companion product would choose the other way.",
      },
      {
        chose:
          "A transport interface with two implementations: telephony, and browser microphone.",
        because:
          "The pipeline must not know it is on a phone. I develop 95% of the time against the browser — free, fast, no international call charges — and flip to telephony to validate.",
      },
      {
        chose: "Measure the model's time-to-first-token myself.",
        insteadOf: "Trusting vendor latency numbers.",
        because:
          "The budget is p50 under 800ms, and the endpointing wait is the single largest line item in it. A number I did not measure is a number I cannot spend.",
      },
      {
        chose:
          "On barge-in, truncate history to what the caller actually heard.",
        insteadOf: "Writing the full generated sentence to history.",
        because:
          "Otherwise the agent believes it said something the caller never heard, and every later turn reasons from a false transcript.",
      },
    ],
    metrics: [
      {
        metric: "status",
        before: "—",
        after: "M0 complete: architecture, component choices and a per-stage latency budget",
        how: "checkpoint log",
      },
      {
        metric: "latency target",
        before: "—",
        after: "p50 < 800ms, p95 < 1.5s, broken down per stage",
        how: "design, with 8 named levers",
      },
      {
        metric: "emergency detection target",
        before: "—",
        after: "~100% recall, false positives accepted",
        how: "design",
      },
      {
        metric: "prior art",
        before: "two working hosted prototypes",
        after: "going one layer lower on purpose",
        how: "earlier repo",
      },
      {
        metric: "running end to end",
        before: "—",
        after: "not yet — M1 is the live audio loop",
        how: "stated plainly",
      },
    ],
    reflection:
      "Built in checkpoints because “build a voice agent” is not a plan. Honest status: the design and the foundations are done, the pipeline is not running yet, and I am not going to describe a design as a product. The decision I am most confident about is the transport interface — the first version of anything like this gets built against whatever is cheapest to iterate on, and that should be a choice rather than an accident.",
    stack: [
      "Twilio Media Streams",
      "Deepgram",
      "Silero VAD",
      "Cartesia / ElevenLabs",
      "Node.js",
      "Next.js",
      "MongoDB",
    ],
  },

  {
    id: "06",
    badge: "personal",
    domain: "Evaluation · trusting a model",
    ask: "Fine — but do you trust the model's output?",
    span: "2026-08",
    status: "Delivered",
    brief:
      "A take-home: a voice-to-written-record flow for auto repair shops. A technician dictates what he found and what he did in one take; the system writes the formal cause and correction, under three seconds from record-done to draft on screen. Plus an evaluation engine that scores every generated record and improves the prompt over time with versioned snapshots. The framing that made it click: this is an evaluation problem wearing a web-app costume. The app took a day. The interesting work was all in trusting the scores.",
    decomposition: [
      {
        label: "Measured my own noise floor first, and it changed everything",
        edge: true,
        text: "How much does the metric move when nothing changes? My accept threshold was five times smaller than my own measurement error. Every improvement I would have celebrated was inside the noise. The single most valuable thing in the project.",
      },
      {
        label: "Sealed a holdout and scored it once",
        edge: true,
        text: "It caught me overfitting by hand: the best dev score of the whole project fell apart on unseen data, and I reverted it. Stratify, do not shuffle — and small holdouts are noisy by construction, which is itself a number you should know.",
      },
      {
        label: "The evaluator debugged itself",
        text: "Ran the deterministic checks against the twenty known-correct answers first. Anything they failed had to be my bug, not the model's. Found three.",
      },
      {
        label: "Automated prompt improvement plateaus — the gate is the real product",
        edge: true,
        text: "The improver only ever appended rules; the prompt grew 30% and latency followed, and it ignored an explicit length ceiling when told. Proposals from the model and from me pass through identical gates: the gate caught the model bloating three times, and caught me overfitting once.",
      },
      {
        label: "Using the app found a defect the metrics did not",
        edge: true,
        text: "It asked a technician a bundled, all-caps question, unreadable on a phone in a workshop. The composite score barely penalised it. I fixed it and promoted the fix while stating openly that the composite could not justify the promotion — the targeted metric then moved 16 points on holdout, and the output is plainly better for the person using it.",
      },
      {
        label: "I instrumented for latency and not for cost",
        edge: true,
        text: "There was a latency column and no token column, so spend was invisible while it accumulated — I found out from the provider's dashboard, not my own tooling. Fixed with per-run token accounting, a cheap-judge default, deterministic subsampling, a free re-score path against stored outputs, and a confirm-before-spending prompt.",
      },
    ],
    diagram: "eval-tiers",
    diagramCaption:
      "Two paths with opposite constraints, sharing only the prompt store and the records table. That is why the judge can be slow.",
    decisions: [
      {
        chose:
          "Two paths with opposite constraints, kept apart: the live path is latency-bound and cost-indifferent, the offline eval path is cost-bound and latency-indifferent.",
        because:
          "That separation is the reason the judge can be a slow, expensive model without a technician ever waiting for it. They share only the prompt store and the records table.",
      },
      {
        chose:
          "One structured-output call returning either the finished draft or the clarifying questions.",
        insteadOf: "A gate call to decide whether to ask, then a draft call.",
        because:
          "Two calls double latency inside a three-second budget, and they can contradict each other — the gate says there is enough information, then the writer discovers there is not.",
      },
      {
        chose: "Make a second question round impossible by construction.",
        insteadOf: "Instructing the model not to ask again.",
        because:
          "“What if the model ignores your instruction?” needs an answer that is not hope. When a Q&A round is present in the input the prompt must draft, and the client never renders a second question screen. There is nowhere for it to go.",
      },
      {
        chose:
          "Tier the checks cheapest-first: deterministic code, then a reference-free judge, then gold comparison.",
        because: "The judge was 83% of the bill.",
      },
      {
        chose: "Move the rules from gating input to judging output.",
        insteadOf: "Regex deciding when to ask a clarifying question.",
        because:
          "Real dictations are far too garbled for that — one transcript read “I suggest to play two electric pocket brake”, meaning replace two electric parking brake actuators. The rules did not die; they became the deterministic tier, where they work fine.",
      },
      {
        chose: "Streaming transcription.",
        insteadOf: "Upload-then-wait.",
        because:
          "Transcription overlaps with speech, so tapping stop costs about 200ms to finalise and the whole budget belongs to the model. Batch would have eaten 1–2 seconds before the model started.",
      },
    ],
    metrics: [
      {
        metric: "best prompt, dev → sealed holdout",
        before: "84.6 → —",
        after: "88.0 → 86.3",
        how: "holdout scored once, after the decision",
      },
      {
        metric: "prompts rejected by the gate",
        before: "—",
        after: "3 model proposals + 1 of my own",
        how: "no real gain / longer / slower; mine did not transfer",
      },
      {
        metric: "targeted metric on the usability fix",
        before: "72",
        after: "88",
        how: "holdout",
      },
      {
        metric: "live latency",
        before: "—",
        after: "p50 ~1.7s warm, inside a 3s budget",
        how: "instrumented per request",
      },
      {
        metric: "judge share of eval spend",
        before: "unmeasured",
        after: "83%",
        how: "per-run token accounting, added after I noticed it was missing",
      },
      {
        metric: "my own eval spend",
        before: "$5.16",
        after: "~$1 for the same runs, done right",
        how: "provider dashboard, then my own tooling",
      },
      {
        metric: "ask-behaviour agreement",
        before: "—",
        after: "~40–50% — and the judge's self-noise on that dimension is 20 points",
        how: "the metric was broken before the behaviour was",
      },
    ],
    reflection:
      "Three gaps I would state in any interview before being asked. The judge has never been validated against a human labeller — twenty gold rows are a proxy, not a truth. Ask-behaviour agreement sits around 40–50%, and since the judge's own self-noise there is twenty points, the metric was broken before the behaviour was. And the real fix in production is mining technician edits: every correction to a draft is a free human label, and that is the first thing I would build next.",
    stack: [
      "Next.js",
      "Deepgram streaming STT",
      "LLM-as-judge",
      "Structured outputs",
      "Prompt versioning",
      "Vercel",
    ],
  },
];

/* ------------------------------ the leverage thesis ---------------- */

export const leverage = {
  title: "AI is the multiplier. The judgment is the load-bearing part.",
  lede: [
    "Engineering was always about solving the problem with the best tools your domain hands you. A slide rule, a compiler, a profiler — and now a model that reads more logs in a minute than I read in a day. I would be a worse engineer for refusing it, and a replaceable one for outsourcing the thinking to it.",
    "So here is the split, plainly, because I would rather you read it than infer it.",
  ],
  handOver: {
    stamp: "What I hand over",
    items: [
      "Reading two hours of production logs and counting distinct ids across every line of them",
      "Drafting three architectures, so I argue with all three instead of defending the first one I thought of",
      "Building fixtures from a real response shape, then exercising every fallback rung including the skip",
      "Turning each working session into a written page, so a finding survives the week it was found in",
      "Boilerplate, migrations, and the fourth implementation of a pattern I already chose",
    ],
  },
  staysMine: {
    stamp: "What stays mine",
    items: [
      "Deciding which number is load-bearing — and refusing the framing when the question itself is wrong",
      "Noticing that the constant everybody quotes has no provenance",
      "Choosing what not to fix, and what to make harmless instead of correct",
      "Saying “my hypothesis was wrong” out loud, in the thread, when the data says so",
      "Being the one who owns it at 2am",
    ],
  },
  guardrail: {
    stamp: "On the record",
    text: "The analysis that found a 43% duplicate-render rate was done with tooling assistance, and the first pass at it reached the wrong conclusion — by trusting a stale constant. What is genuinely mine: refusing the cost-sheet framing, supplying the production evidence, challenging the assumption that inverted the answer, the attribution call, and the plan. The judgment is the contribution, and it survives the follow-up question. Claiming the mechanics would not, so I don't.",
  },
  system: {
    stamp: "The system I built for myself",
    text: "A knowledge base that every working session writes into — 125 pages across two wikis. Bugs with root causes, decisions with the alternatives I rejected and why, concepts with where I hit them and what they cost, stories with a measured-impact table and an honesty guardrail on what not to overclaim. Forty-two sessions filed so far. It is the reason this page can show a “how measured” column instead of adjectives.",
  },
};

/* ------------------------------ instruments ------------------------ */

export const instruments = [
  {
    stamp: "Systems & backend",
    items: ["Node.js", "Python", "Express", "NestJS", "FastAPI", "MongoDB", "SQL"],
  },
  {
    stamp: "Event-driven & cloud",
    items: [
      "Kafka",
      "SQS / SQS FIFO",
      "AWS Lambda",
      "Step Functions",
      "ECS",
      "S3",
      "EC2",
      "CloudFront",
      "Managed render farm",
    ],
  },
  {
    stamp: "AI in production",
    items: [
      "Structured outputs",
      "LangGraph",
      "RAG / ChromaDB",
      "Tool calling",
      "MCP",
      "LLM-as-judge harnesses",
      "STT / TTS pipelines",
    ],
  },
  {
    stamp: "Interfaces",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js / WebGL", "React Native"],
  },
  {
    stamp: "Measurement",
    items: [
      "Production log analysis",
      "ClickHouse / Metabase",
      "Stage-capacity tables",
      "Cost per delivered unit",
      "Eval noise floors",
    ],
  },
  {
    stamp: "Craft",
    items: ["After Effects + scripting", "Premiere Pro", "Illustrator", "Figma"],
  },
];

export const instrumentsNote =
  "The list is the cheap part. Which one, and why not the other, is the expensive part — and that is what the case files above are actually about.";

/* ------------------------------ off the clock ---------------------- */

export const offTheClock = [
  {
    stamp: "Music",
    text: "Guitar, singing, and a growing amount of producing. Enough theory to know what I am doing wrong, which turns out to be the same feeling as debugging.",
  },
  {
    stamp: "Football",
    text: "Playing, not watching. A Sunday match beats a Sunday fixture list.",
  },
  {
    stamp: "A folder of ideas",
    text: "A gamified algorithm visualiser that draws the recursion tree, the call stack and the memory at once. Game-like 3D property tours from splats. A chai-only delivery app I keep designing and have not built. A device you could leave a mind on.",
  },
  {
    stamp: "Writing things down",
    text: "The wiki habit started as interview prep and became the most useful engineering tool I own. Most of what is on this page came out of it.",
  },
];

/* ------------------------------ contact --------------------------- */

export const contact = {
  title: "Open to talk.",
  lede: "Engineering problems, business problems, music, or football — playing, not watching. If you are hiring: what I want is ownership of a system that has real users and a number attached to it.",
};

export const experience = {
  stamp: "Currently",
  role: "Software Engineer",
  company: "AI-powered automotive SaaS",
  period: "Jun 2024 — present",
  note: "Owning two services end to end, both inherited, both carrying a deprecating legacy flow. Pipelines, LLM workflows, render infrastructure, and the measurements that decide what gets built next.",
  education: {
    stamp: "Before that",
    line: "B.E., BITS Pilani — 2020 to 2024",
  },
};
