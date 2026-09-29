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
  eyebrow: "Software engineer",
  headline: "Writing code was never the job.",
  lede: "The job is to understand the real problem, break it into parts, find what will break it, build it, and then check that the number actually moved.",
  kicker: "Tools change. That part doesn't. I use AI to do more — not to think less.",
};

export const ledger = [
  { value: "2 yrs", label: "running systems in production" },
  { value: "1000+", label: "videos a month through a pipeline I own" },
  { value: "43%", label: "waste I found in a cost nobody was checking" },
];

export const experience = {
  stamp: "Right now",
  line: "Software engineer at an AI automotive company · since June 2024",
  note: "I own two services end to end. Both were handed to me. Both still run.",
};

/* ------------------------------ the hero resolve ------------------- */
/* A vague ask turning into a real answer. Three lines, nothing more. */

export type Resolution = {
  ask: string;
  real: string;
  proof: string;
  caseId: string;
};

export const resolutions: Resolution[] = [
  {
    ask: "The videos cost us too much.",
    real: "We were paying to make the same video more than once.",
    proof: "43% of renders were duplicates. Found in two hours of logs.",
    caseId: "01",
  },
  {
    ask: "The voice-over gets cut off mid-word.",
    real: "The check counted words. The problem was seconds.",
    proof: "Measured the real audio instead. Cut-offs went to zero.",
    caseId: "02",
  },
  {
    ask: "Stop paying a vendor to show our videos.",
    real: "The hook everyone wanted was too early — the video didn't exist yet.",
    proof: "Built it ourselves. Hourly updates became instant ones.",
    caseId: "03",
  },
];

/* ------------------------------ what I do -------------------------- */
/* Four lines. No evidence panels, no sub-copy. Skim-readable. */

export const approach = [
  {
    n: "01",
    title: "I start with the real problem.",
    body: "A ticket tells you what someone typed. I go and find out what they actually needed.",
  },
  {
    n: "02",
    title: "I look for what will break it.",
    body: "The empty field, the message that arrives twice, the ninth file. That is what decides if it survives.",
  },
  {
    n: "03",
    title: "I check the number, not the feeling.",
    body: "Every number I claim comes with how I measured it. If I haven't measured it, I say so.",
  },
  {
    n: "04",
    title: "I use AI to get more done.",
    body: "It reads more than I can and drafts more options than I'd have time for. Deciding what matters is still my job.",
  },
];

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
    domain: "Cost",
    ask: "The videos cost us too much.",
    headline: "43% of renders were duplicates",
    span: "2026",
    status: "Found · fix scoped",
    brief:
      "Two big customers pushed our video pipeline into trouble. Four people were in the thread and each had a different answer. My manager wanted priority for a customer. The infra team quoted 40% more cost to add machines. The CTO asked if we were missing our promise to customers. Everyone was arguing about how many machines to run. Nobody had checked what one video actually cost.",
    decomposition: [
      {
        label: "I stopped arguing and pulled the logs",
        text: "Two hours of real production logs: 95 jobs sent, 97 jobs run. That is a small window, but it is real, which the cost sheet everyone was quoting was not.",
      },
      {
        label: "The number everyone trusted was wrong",
        text: "The code said each video took 10 minutes. The cost sheet said 15. The real time was 37 seconds. That wrong number had already gone into what we told customers and into the cost plan.",
      },
      {
        label: "I counted the video IDs",
        edge: true,
        text: "95 jobs were only 54 different videos. 31 videos had been made more than once. One had been made five times.",
      },
      {
        label: "The gaps between them gave it away",
        edge: true,
        text: "The repeats came 35 to 71 seconds apart, and one cycle takes 37 seconds. So both copies were already in the queue before either one started. That means the sender is at fault, not the retry logic.",
      },
      {
        label: "I was wrong about the cause, and said so",
        edge: true,
        text: "I expected price-change triggers. The counts showed a zero exactly where those would have appeared. The repeats were all coming from the review step instead. Right thing to fix, wrong reason — and the zero is what proved it.",
      },
      {
        label: "Then the actual bug",
        text: "The save step puts the job in the queue before it marks the video as busy. So a second save sees a video that still looks free and sends it again.",
      },
    ],
    diagram: "dispatch-before-write",
    diagramCaption:
      "Two saves, one check, and a gap where both jobs are already queued before either one is marked busy.",
    decisions: [
      {
        chose: "Mark it busy first, in the same step that sends it.",
        insteadOf: "Checking for duplicates on the receiving side.",
        because:
          "Both copies were already in the queue, so the receiver can't help. A simple status check would also have blocked two re-runs we actually want.",
      },
      {
        chose: "Report the cost per video we deliver.",
        insteadOf: "Cost per render.",
        because:
          "Whatever number you say out loud is the number people plan with. Per render it looked fine. Per delivered video it was 1.8 times that.",
      },
      {
        chose: "Track that cost every week from now on.",
        insteadOf: "A one-off report with a nice conclusion.",
        because:
          "The two-line bug wasn't the real problem. Nobody counting was the real problem.",
      },
    ],
    metrics: [
      {
        metric: "duplicate renders",
        before: "43%",
        after: "fix scoped — two lines",
        how: "counted job IDs against video IDs over two hours of live logs",
      },
      {
        metric: "renders paid for per video delivered",
        before: "1.8",
        after: "target 1.0",
        how: "same logs",
      },
      { metric: "share of render bill wasted", before: "~40%", after: "—", how: "duplicates × cost per render" },
      {
        metric: "assumed time per video",
        before: "15 min",
        after: "37 sec",
        how: "95 real jobs, timed from the logs",
      },
      {
        metric: "how busy the machine was",
        before: "assumed full",
        after: "46.5%, with 565 empty checks",
        how: "same logs",
      },
    ],
    reflection:
      "This had been going on for months. No alert showed it, and no log line ever said how many times a video had been made. You can't notice what nobody counts. Next time I'd track the cost per delivered thing before anyone asks. Also worth saying: my first pass at this got the wrong answer because I trusted the old number, and two of my own suggestions were dropped once the data came in.",
    stack: ["Log analysis", "SQS", "Node.js", "MongoDB"],
  },

  {
    id: "02",
    badge: "work",
    domain: "AI in production",
    ask: "The voice-over gets cut off mid-word.",
    headline: "Cut-offs to zero, 51% → 73% fill",
    span: "2026",
    status: "Shipped",
    brief:
      "Our videos have fixed-length slots. An AI writes a short script for each one, and a text-to-speech service reads it out. The check that was supposed to keep scripts short enough kept passing, while the audio kept getting cut off mid-word.",
    decomposition: [
      {
        label: "The check was counting the wrong thing",
        edge: true,
        text: "“2025 BMW i7 looks stunning” is five words on the page but about nine when spoken: “twenty twenty-five” is three, “B-M-W” is three, “i-seven” is two. The check counted written words against a slot measured in seconds.",
      },
      {
        label: "Three problems, not one",
        text: "The count ignored how speech expands. Some slots asked for more words than could physically fit. And after three tries the code gave up and shipped the long version anyway.",
      },
      {
        label: "Never ask an AI for an exact count",
        edge: true,
        text: "Give it an impossible target and it returns a confident wrong answer, not an error. I rewrote all 12 prompts to say “at most” instead of “exactly”, with a way out if it still can't fit.",
      },
      {
        label: "Found old settings nobody had rechecked",
        text: "The speaking-speed setting said 150 in config while the code assumed 130. Another number that had quietly gone stale.",
      },
      {
        label: "Picked a real target instead of inventing one",
        text: "A hand-made video filled 97% of its slots. That is what made 51% look bad and 73% look like real progress.",
      },
    ],
    diagram: "fit-loop",
    diagramCaption:
      "The guess is gone. The loop now checks the real audio length and adjusts until it fits.",
    decisions: [
      {
        chose: "Measure the real length of the audio file before uploading it.",
        insteadOf: "A better guess with some safety margin.",
        because:
          "A safety margin is just a guess about how wrong your guess is. Measuring removes the guess. If you find yourself tuning a margin, stop and go measure.",
      },
      {
        chose: "Accept anything within 0.06 seconds.",
        insteadOf: "Trying to be more exact.",
        because: "That is the smallest chunk an MP3 has. Chasing tighter is chasing precision that doesn't exist.",
      },
      {
        chose: "Leave the shared audio service alone completely.",
        insteadOf: "Fixing it where it arguably belonged.",
        because:
          "Other teams depend on it. Doing the work on my side meant I couldn't break anyone. I wrote that down as a decision instead of leaving it unexplained.",
      },
      {
        chose: "Log the needed length, the real length and the exact prompt, for every slot.",
        because: "So next time someone can find the problem from the data instead of trying to reproduce it.",
      },
    ],
    metrics: [
      { metric: "how much of the slot was used", before: "51%", after: "73%", how: "test renders, one template" },
      { metric: "cut-offs", before: "happened every time", after: "zero", how: "same renders" },
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
      "I built a better guess first and only measured second. The prompt work did need doing, but if I had asked “can I just measure this?” on day one, the middle step would have been unnecessary. And 73% against a 97% target is not finished — what's left is script quality, not fitting, which is a different job. I'd rather say that than present 73% as done.",
    stack: ["OpenAI", "Text-to-speech", "Node.js", "Prompt design"],
  },

  {
    id: "03",
    badge: "work",
    domain: "Design",
    ask: "Stop paying a vendor to show our videos.",
    headline: "Vendor replaced, hourly → instant",
    span: "2026",
    status: "Built · not live yet",
    brief:
      "A big customer was paying another company to put their car videos into an ad platform. The platform reads a file listing every car — price, link, photo, video — and refreshes from it. Our own videos needed to be in that file instead. So I had to own the whole path, from a video finishing to a valid file sitting on a CDN. Nobody could tell me what the car data actually looked like, which turned out to be the hard part.",
    decomposition: [
      {
        label: "I wrote down all three designs, including the two I threw away",
        text: "First: a job inside a service another team owns — too tangled. Second: rebuild the whole file every hour — no tangle, but always up to an hour out of date. Third: send the data with the event — that's the one I built. Writing down why the first two failed is what survives me leaving.",
      },
      {
        label: "The obvious trigger was the wrong one",
        edge: true,
        text: "You'd naturally hook this to the price change. But when the price changes, the new video doesn't exist yet. The right hook is when the video finishes — which covers new videos and updated ones with the same bit of code.",
      },
      {
        label: "The platform caches by web address",
        edge: true,
        text: "It copies our files and remembers them by their address. So a new video at the same address is invisible to it. No error, nothing in a log — the ad just never changes. I worked this out because the old vendor was adding a pointless-looking timestamp to every link. Odd details in a working system are usually there for a reason.",
      },
      {
        label: "I was wrong about the data source, and rebuilt against the real one",
        text: "I had assumed one endpoint. The right one returns less than I thought — price and sold status aren't in it at all.",
      },
      {
        label: "Real test data found the real bugs",
        edge: true,
        text: "Once I built test data from the actual response, two bugs showed up straight away: every car would have been skipped for a missing price, and every new car was being marked as used. Neither was visible by just reading the code.",
      },
      {
        label: "I flagged the blocker instead of guessing past it",
        text: "There was no confirmed photo source on the live path, which would have skipped every car. I wrote it up as an open question rather than quietly filling it with something plausible.",
      },
    ],
    diagram: "event-carried",
    diagramCaption:
      "The message carries everything, so the receiver needs no database and no access to our systems.",
    decisions: [
      {
        chose: "Rebuild the whole file from scratch, the same way, every time.",
        insteadOf: "Editing the existing file in place.",
        because:
          "You can't append to a file in cloud storage. Two updates at once fight each other, and one bad write ruins every car in the file. Rebuilding gives the same result with none of that risk. This is the one I'd defend hardest.",
      },
      {
        chose: "A receiver with no database and no access to our systems.",
        because:
          "It runs on someone else's schedule, and it's the part I control least. Giving it nothing to depend on removes a whole category of 3am problem.",
      },
      {
        chose: "Recovery uses the exact same code as normal running.",
        insteadOf: "A separate repair mode.",
        because: "A repair mode only runs when something is already on fire, so it quietly rots. This one can't.",
      },
      {
        chose: "If there's no photo, skip the car and count it.",
        insteadOf: "Falling back to something generic.",
        because:
          "Showing the wrong dealer's logo is worse than showing nothing. I wrote two tests: one proving the fallback works, one proving it still skips when there's genuinely nothing. The usual bug is a fallback that can never fail.",
      },
    ],
    metrics: [
      { metric: "who supplies the videos", before: "outside vendor", after: "us", how: "—" },
      { metric: "how fresh the file is", before: "up to an hour old", after: "updates as it happens", how: "design" },
      {
        metric: "things the receiver depends on",
        before: "a database, in the first design",
        after: "none",
        how: "it has no access to any of our systems",
      },
      { metric: "designs considered", before: "—", after: "3, with reasons for dropping two", how: "written down" },
      {
        metric: "paths tested locally",
        before: "—",
        after: "add, remove, skip, and re-run safely",
        how: "test runs",
      },
      { metric: "bugs caught by real test data", before: "—", after: "2", how: "local runs" },
      { metric: "live", before: "—", after: "not yet — waiting on setup outside my control", how: "said plainly" },
    ],
    reflection:
      "Honest status: built and tested, not live. The rest was out of my hands and I'd rather say that than round it up. What I'd do differently is build test data from the real response on day one instead of from what I assumed it looked like — every real bug showed up the moment I did. One more thing: I found live passwords committed in two repos while going through the config. Nothing to do with my task. I reported them anyway.",
    stack: ["AWS Lambda", "SQS", "S3", "CloudFront", "Node.js"],
  },

  {
    id: "04",
    badge: "work",
    domain: "Debugging",
    ask: "Renders fail at random. Probably just flaky.",
    span: "2026",
    headline: "Not random — it got worse every run",
    status: "Rewritten · fixes itself now",
    brief:
      "Videos were failing on our render machines during a font install step, inside code written by the vendor, not us. Nobody who built this pipeline was still on the team. Some failures didn't happen again on retry, so people had written it off as flaky machines. Python on Windows — not my language, not my operating system, not my code.",
    decomposition: [
      {
        label: "I checked which machine it was first",
        text: "Every path in the error looked like our own machine. It was actually a render worker — different machine, different user, different folder. Getting this wrong would have wasted the whole investigation.",
      },
      {
        label: "Eight fonts worked. The ninth failed.",
        edge: true,
        text: "Into the same folder. If it were a permissions problem, the first one would have failed. So it was one locked file, not a locked folder — and that single fact pointed away from where this kind of error normally leads.",
      },
      {
        label: "I read the vendor's code",
        text: "It installs each font system-wide instead of just for itself, so the file stays locked after the program exits. These machines get reused between jobs, so a font left behind by an earlier job blocks the next one.",
      },
      {
        label: "It got worse every time — that's what made it serious",
        edge: true,
        text: "When the install fails it stops and cleans up nothing. So every font it had already installed stays stuck, forever. Each failure leaves the machine in worse shape for the next job, and it never recovers on its own.",
      },
      {
        label: "The randomness had a reason",
        edge: true,
        text: "The code installs fonts in whatever order the computer happens to pick, and that order changes every run. Different font fails, different mess left behind — and sometimes it gets lucky and passes. That fully explains the “it worked on retry” reports.",
      },
      {
        label: "Two more leaks, found by reading",
        text: "Even a clean finish leaked, in two separate ways. I found both by reading the code rather than trying to reproduce them.",
      },
    ],
    diagram: "ratchet",
    diagramCaption:
      "Each failure leaves more stuck behind. The fix makes the leftovers harmless, so machines clean themselves up over time.",
    decisions: [
      {
        chose: "Make the leftovers harmless.",
        insteadOf: "Going and cleaning every affected machine.",
        because: "Machines get replaced over time, so the fleet fixes itself. Cheaper, and nothing to break.",
      },
      {
        chose: "Never touch a font this job didn't install.",
        because: "These machines can run several jobs at once. A cleanup that reaches too far becomes the next bug.",
      },
      {
        chose: "Same order every time, safe to re-run, and it records exactly what it installed.",
        insteadOf: "Scanning a folder afterwards to guess what to remove.",
        because: "A cleanup that works out its own input can quietly do nothing at all.",
      },
      {
        chose: "Say out loud what I couldn't test.",
        because:
          "I could only check that the code parses — the rest is Windows-only. Better to say that than let “fixed” sound like “tested”.",
      },
    ],
    metrics: [
      {
        metric: "how it failed",
        before: "fatal, and worse every time",
        after: "leftovers are harmless now",
        how: "rewrote the code",
      },
      { metric: "install order", before: "different every run", after: "always the same", how: "source" },
      { metric: "ways it leaked on a clean finish", before: "2", after: "0", how: "read the source" },
      { metric: "undo on partial failure", before: "none", after: "yes", how: "source" },
      {
        metric: "failure rate before vs after",
        before: "never measured",
        after: "—",
        how: "still the measurement I'd want. The job history has it.",
      },
    ],
    reflection:
      "Two gaps I'll point out myself. I never measured the before-and-after failure rate, and I could have. And the vendor's folder isn't in version control — it gets copied from an install path — so my fix is stuck on one machine and disappears if that machine is rebuilt. I wrote that down and offered to fix it properly. It didn't happen. The lesson I keep coming back to: a failure that makes the next failure worse is a completely different kind of problem from one that just repeats.",
    stack: ["Python", "Windows", "AWS render farm", "Node.js"],
  },

  {
    id: "05",
    badge: "personal",
    domain: "Voice AI",
    ask: "Who answers the phone at 2am?",
    headline: "Building it from the raw phone line up",
    span: "2026 · ongoing",
    status: "Design done · building",
    brief:
      "A plumber or AC repair company is on a roof at 2pm and asleep at 2am. The missed call goes to a competitor. I'm building a phone assistant that picks up, works out what's wrong, and either books it or passes it on. I'm doing it on the raw phone connection instead of a ready-made platform, because I want to actually own the thing rather than configure someone else's.",
    decomposition: [
      {
        label: "I picked the business numbers first",
        text: "Speed is an input, not a result. The results are calls caught after hours, bookings made, how many calls it handles without a human, and cost per call compared to an answering service.",
      },
      {
        label: "For emergencies, missing one is far worse than over-reacting",
        edge: true,
        text: "A gas smell treated as routine is the disaster case. So it should flag too many emergencies rather than miss one — which is the opposite of what a normal accuracy score would push you towards.",
      },
      {
        label: "The expensive mistakes are facts, not tone",
        edge: true,
        text: "Making up a time slot. Double-booking because two people called at once. Wrong address. A price quote that might legally count.",
      },
      {
        label: "Real calls are messy",
        edge: true,
        text: "Noisy job sites, speakerphone echo, bad signal, people switching between English and Spanish, people who get rude once they realise it isn't human, and people who are genuinely upset — no heat, winter, baby at home.",
      },
      {
        label: "Most of the work is in the connections",
        text: "Every booking system has its own quirks, and a retry over a flaky network must not create the job twice.",
      },
    ],
    diagram: "voice-cascade",
    diagramCaption:
      "Separate steps on purpose: each one leaves a record, which is what makes a double-booking findable later.",
    decisions: [
      {
        chose: "Speech to text, then the AI, then text to speech — as separate steps.",
        insteadOf: "One model that takes audio in and gives audio out.",
        because:
          "The worst thing that can happen is a double-booked slot, not an awkward-sounding voice. Finding that needs a written record of what was said and done. The all-in-one option is faster but leaves no trail.",
      },
      {
        chose: "One connection layer with two versions — real phone, and browser microphone.",
        because:
          "The rest of the system shouldn't know it's on a phone. I build against the browser most of the time because it's free and fast, and switch to a real call to check.",
      },
      {
        chose: "Time the AI myself.",
        insteadOf: "Trusting the numbers on the vendor's website.",
        because: "The whole thing has to answer in under a second. A number I didn't measure isn't a number I can spend.",
      },
      {
        chose: "If the caller interrupts, only remember what they actually heard.",
        insteadOf: "Saving the whole sentence the AI generated.",
        because:
          "Otherwise the assistant thinks it said something the caller never heard, and every reply after that is built on a lie.",
      },
    ],
    metrics: [
      {
        metric: "where it is",
        before: "—",
        after: "design and component choices done",
        how: "built in numbered stages",
      },
      { metric: "speed target", before: "—", after: "under 0.8s usually, 1.5s worst case", how: "broken down per step" },
      { metric: "emergency detection", before: "—", after: "catch all of them, accept false alarms", how: "design" },
      { metric: "running end to end", before: "—", after: "not yet", how: "said plainly" },
    ],
    reflection:
      "I'm building it in numbered stages because “build a voice assistant” is not a plan. Where it honestly stands: design done, nothing running yet, and I'm not going to call a design a product. The choice I'm most sure about is the connection layer — the first version of something like this always gets built against whatever is cheapest to test with, and that should be a decision rather than an accident.",
    stack: ["Twilio", "Deepgram", "Cartesia", "Node.js", "Next.js", "MongoDB"],
  },

  {
    id: "06",
    badge: "personal",
    domain: "Testing AI",
    ask: "Fine — but do you trust what the AI wrote?",
    headline: "My own error bar was 5× my threshold",
    span: "2026",
    status: "Delivered",
    brief:
      "A take-home task. A mechanic talks through what he found and what he fixed, and the system writes it up properly — in under three seconds. Plus a scoring system that grades every write-up and improves the instructions over time. The thing that made it click: this is a testing problem dressed up as a web app. The app took a day. The real work was learning to trust the scores.",
    decomposition: [
      {
        label: "I measured my own error bar first, and it changed everything",
        edge: true,
        text: "How much does the score move when nothing changes? My cut-off for calling something an improvement was five times smaller than my own margin of error. Every win I would have celebrated was just noise. The most useful thing in the whole project.",
      },
      {
        label: "I locked away a test set and only scored it once",
        edge: true,
        text: "It caught me fooling myself. My best score of the project fell apart on data it hadn't seen, so I threw that version away.",
      },
      {
        label: "The scorer checked itself",
        text: "I ran my checks against twenty answers I already knew were correct. Anything they marked wrong had to be my bug. Found three.",
      },
      {
        label: "Letting the AI improve its own instructions runs out fast",
        edge: true,
        text: "It only ever added rules. The instructions grew 30% and got slower, and it ignored a length limit when I gave it one. Its suggestions and mine went through the same gate — which caught it three times and caught me once. The gate turned out to be the actual product.",
      },
      {
        label: "Using the app found a problem the scores missed",
        edge: true,
        text: "It asked a mechanic a long question in all capitals, unreadable on a phone in a workshop. The overall score barely cared. I fixed it and said openly that the score couldn't justify it. The specific measure then jumped 16 points.",
      },
      {
        label: "I tracked speed and forgot to track money",
        edge: true,
        text: "No column for cost, so the spend was invisible while it added up. I found out from the billing page, not my own tools.",
      },
    ],
    diagram: "eval-tiers",
    diagramCaption:
      "Two paths with opposite needs, sharing almost nothing. That's why the slow scorer never makes anyone wait.",
    decisions: [
      {
        chose: "Keep the live path and the scoring path completely separate.",
        because:
          "The live path must be fast and can cost whatever it costs. The scoring path can be slow but must be cheap. Keeping them apart is why the scorer can use a slow model without a mechanic ever waiting.",
      },
      {
        chose: "One AI call that returns either the write-up or a question.",
        insteadOf: "One call to decide, then another to write.",
        because:
          "Two calls double the wait inside a three-second budget, and they can disagree — the first says there's enough information, the second finds there isn't.",
      },
      {
        chose: "Make a second round of questions impossible to reach.",
        insteadOf: "Telling the AI not to ask again.",
        because:
          "“What if it ignores you?” needs a better answer than hope. The screen for a second question doesn't exist, so there's nowhere for it to go.",
      },
      {
        chose: "Run the cheap checks first, the expensive one last.",
        because: "The AI scorer was 83% of the bill.",
      },
      {
        chose: "Use the rules to grade the output, not to filter the input.",
        insteadOf: "Pattern-matching the mechanic's words to decide when to ask.",
        because:
          "Real speech is far too messy. One transcript read “I suggest to play two electric pocket brake”, meaning replace two electric parking brake parts. The rules still had a job — just a different one.",
      },
    ],
    metrics: [
      { metric: "best version, practice → locked test", before: "84.6", after: "88.0 → 86.3", how: "scored once, after deciding" },
      { metric: "versions the gate rejected", before: "—", after: "3 from the AI, 1 of mine", how: "compared on unseen data" },
      { metric: "score on the readability fix", before: "72", after: "88", how: "locked test set" },
      { metric: "time to write-up", before: "—", after: "about 1.7s", how: "measured per request" },
      { metric: "share of cost from the AI scorer", before: "never tracked", after: "83%", how: "added cost tracking after noticing" },
      { metric: "what I spent testing", before: "$5.16", after: "about $1 for the same work", how: "billing page, then my own tools" },
    ],
    reflection:
      "Three gaps I'd raise before being asked. No human has ever checked whether my scorer agrees with a human — twenty known answers is a stand-in, not proof. On deciding when to ask a question, it agrees with me only about half the time, and the scorer disagrees with itself almost that much, so the measure was broken before the behaviour was. And the real fix in a live product is to learn from the mechanic's own edits: every correction is a free, honest example. That's the first thing I'd build next.",
    stack: ["Next.js", "Deepgram", "AI scoring", "Prompt versioning"],
  },
];

/* ------------------------------ the AI bit ------------------------- */

export const leverage = {
  title: "AI is a multiplier. The thinking is still mine.",
  lede: "Engineering was always about solving problems with the best tools you have. One of those tools now writes code. Refusing it would make me worse at my job. Handing it the thinking would make me replaceable.",
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
    text: "The work that found 43% duplicate renders used AI tooling, and the first pass got the wrong answer because it trusted an old number. What's mine: refusing the framing, pulling the real evidence, questioning the number that flipped the answer, and the plan. The judgment is the part that holds up when you ask a follow-up question. Claiming I did the mechanics wouldn't, so I don't.",
  },
  system: {
    stamp: "Something I built for myself",
    text: "A set of notes every working session writes into — 125 pages now. Bugs with their real cause, decisions with the options I turned down, and what each one cost. It's the reason this site can show how I measured things instead of just adjectives.",
  },
};

/* ------------------------------ tools ------------------------------ */

export const instruments = [
  { stamp: "Backend", items: ["Node.js", "Python", "Express", "NestJS", "FastAPI", "MongoDB", "SQL"] },
  {
    stamp: "Cloud & queues",
    items: ["AWS", "Kafka", "SQS", "Lambda", "Step Functions", "ECS", "S3", "CloudFront"],
  },
  {
    stamp: "AI",
    items: ["Structured outputs", "LangGraph", "RAG", "Tool calling", "MCP", "AI scoring", "Speech in / out"],
  },
  { stamp: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Three.js", "React Native"] },
  { stamp: "Measuring", items: ["Log analysis", "ClickHouse", "Metabase", "Cost per delivered thing"] },
  { stamp: "Design", items: ["After Effects", "Premiere Pro", "Illustrator", "Figma"] },
];

export const instrumentsNote =
  "The list is the easy part. Picking one, and knowing why not the other, is the hard part.";

/* ------------------------------ about ------------------------------ */

export const about = {
  stamp: "About",
  text: "I studied at BITS Pilani and finished in 2024. Since then I've been building AI products end to end — the pipeline, the backend, the frontend, and keeping it running once it's live. Outside work I build things on my own to learn properly: a phone assistant, a trip planner, and whatever else I get curious about.",
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
