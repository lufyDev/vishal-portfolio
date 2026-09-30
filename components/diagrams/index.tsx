/* ------------------------------------------------------------------ *
 * Schematics for the case files. Hand-placed, blueprint style.
 * Colours come from CSS vars so they invert with the theme.
 * ------------------------------------------------------------------ */

import { ReactNode } from "react";

const RULE = "var(--rule-strong)";
const INK = "var(--ink)";
const SOFT = "var(--ink-soft)";
const FAINT = "var(--ink-faint)";
const BLUE = "var(--blueprint)";
const VERM = "var(--vermilion)";

type Tone = "plain" | "blue" | "verm";

const toneStroke: Record<Tone, string> = { plain: RULE, blue: BLUE, verm: VERM };
const toneFill: Record<Tone, string> = {
  plain: "var(--paper)",
  blue: "var(--blueprint-wash)",
  verm: "var(--vermilion-wash)",
};

function Box({
  x,
  y,
  w,
  h = 46,
  lines,
  tone = "plain",
  dashed = false,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  lines: string[];
  tone?: Tone;
  dashed?: boolean;
}) {
  const start = y + h / 2 - ((lines.length - 1) * 12) / 2 + 4;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={toneFill[tone]}
        stroke={toneStroke[tone]}
        strokeWidth={1}
        strokeDasharray={dashed ? "4 3" : undefined}
      />
      {lines.map((l, i) => (
        <text
          key={i}
          x={x + w / 2}
          y={start + i * 12}
          textAnchor="middle"
          fontSize={i === 0 ? 10.5 : 9.5}
          fill={i === 0 ? INK : SOFT}
          fontFamily="var(--font-jetbrains-mono), monospace"
          letterSpacing={i === 0 ? "0.06em" : "0.02em"}
        >
          {l}
        </text>
      ))}
    </g>
  );
}

function Arrow({
  from,
  to,
  tone = "plain",
  dashed = false,
  label,
  labelAt = 0.5,
  labelDy = -7,
  bend,
}: {
  from: [number, number];
  to: [number, number];
  tone?: Tone;
  dashed?: boolean;
  label?: string;
  labelAt?: number;
  labelDy?: number;
  bend?: number;
}) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const stroke = toneStroke[tone];
  const head = tone === "verm" ? "url(#head-verm)" : tone === "blue" ? "url(#head-blue)" : "url(#head)";
  const d =
    bend === undefined
      ? `M ${x1} ${y1} L ${x2} ${y2}`
      : `M ${x1} ${y1} C ${x1} ${y1 + bend}, ${x2} ${y2 + bend}, ${x2} ${y2}`;
  const lx = x1 + (x2 - x1) * labelAt;
  const ly = y1 + (y2 - y1) * labelAt + (bend ?? 0) * 0.66;
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={1}
        strokeDasharray={dashed ? "4 3" : undefined}
        markerEnd={head}
      />
      {label && (
        <text
          x={lx}
          y={ly + labelDy}
          textAnchor="middle"
          fontSize={8.5}
          fill={tone === "verm" ? VERM : FAINT}
          fontFamily="var(--font-jetbrains-mono), monospace"
          letterSpacing="0.06em"
        >
          {label}
        </text>
      )}
    </g>
  );
}

function Note({
  x,
  y,
  children,
  tone = "faint",
  anchor = "start",
}: {
  x: number;
  y: number;
  children: string;
  tone?: "faint" | "verm" | "blue";
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={9}
      fill={tone === "verm" ? VERM : tone === "blue" ? BLUE : FAINT}
      fontFamily="var(--font-jetbrains-mono), monospace"
      letterSpacing="0.05em"
    >
      {children}
    </text>
  );
}

function Frame({
  h,
  children,
  w = 800,
}: {
  h: number;
  w?: number;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      style={{ width: "100%", minWidth: 640, height: "auto", display: "block" }}
    >
      <defs>
        <marker id="head" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={RULE} />
        </marker>
        <marker id="head-blue" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={BLUE} />
        </marker>
        <marker id="head-verm" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={VERM} />
        </marker>
      </defs>
      {children}
    </svg>
  );
}

/* ---------------------------- 01 · round robin --------------------- */

function RoundRobin() {
  const big = Array.from({ length: 11 });
  return (
    <Frame h={300}>
      <Note x={0} y={12} tone="verm">
        BEFORE — one long line, first come first served
      </Note>
      <Note x={800} y={12} anchor="end">
        one video normally takes about 3 minutes end to end
      </Note>

      <Box x={0} y={26} w={130} h={44} lines={["BIG DEALER", "sends 100 at once"]} />
      <Arrow from={[130, 48]} to={[166, 48]} />
      {big.map((_, i) => (
        <rect
          key={i}
          x={170 + i * 21}
          y={34}
          width={17}
          height={28}
          fill="var(--vermilion-wash)"
          stroke={VERM}
          strokeWidth={1}
        />
      ))}
      <Note x={404} y={52}>… 100 …</Note>
      <rect
        x={452}
        y={34}
        width={17}
        height={28}
        fill="var(--blueprint-wash)"
        stroke={BLUE}
        strokeWidth={1}
      />
      <Note x={476} y={52} tone="blue">small dealer — 101st</Note>

      <Arrow from={[620, 48]} to={[664, 48]} />
      <Box x={666} y={26} w={134} h={44} lines={["ONE MACHINE", "37s each"]} />
      <Note x={800} y={84} anchor="end" tone="verm">
        the small dealer waits about 62 minutes
      </Note>

      <path d="M 0 106 L 800 106" stroke={RULE} strokeDasharray="3 4" strokeWidth={1} fill="none" />

      <Note x={0} y={126} tone="blue">
        AFTER — we keep the work and hand it over a few at a time
      </Note>

      <Box
        x={0}
        y={142}
        w={214}
        h={56}
        lines={["OUR WAITING LIST", "big dealer ×95  ·  small ×1"]}
        tone="blue"
      />
      <Arrow from={[214, 170]} to={[262, 170]} label="take turns" labelDy={40} tone="blue" />

      <Box x={264} y={148} w={228} h={44} lines={["QUEUE, KEPT SHORT", "about 5 at a time"]} tone="blue" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={266 + i * 42}
          y={206}
          width={30}
          height={22}
          fill={i === 1 ? "var(--blueprint-wash)" : "var(--vermilion-wash)"}
          stroke={i === 1 ? BLUE : VERM}
          strokeWidth={1}
        />
      ))}
      <Note x={266} y={248} tone="blue">
        big, small, big, big, big — then round again
      </Note>

      <Arrow from={[492, 170]} to={[540, 170]} tone="blue" />
      <Box x={542} y={148} w={134} h={44} lines={["ONE MACHINE", "same 37s each"]} />
      <Note x={800} y={216} anchor="end" tone="blue">
        the small dealer now waits about 3 minutes
      </Note>
      <Note x={800} y={232} anchor="end">
        same machine, same speed — only the order changed
      </Note>

      <path d="M 0 266 L 800 266" stroke={RULE} strokeDasharray="3 4" strokeWidth={1} fill="none" />
      <Note x={0} y={286}>
        You cannot reorder a queue you have already filled. So do not fill it.
      </Note>
    </Frame>
  );
}

/* ---------------------------- 02 · the fit loop -------------------- */

function FitLoop() {
  return (
    <Frame h={272}>
      <Box x={0} y={26} w={120} h={44} lines={["SLOT", "fixed 2.8s"]} tone="blue" />

      {/* the deleted estimator */}
      <g>
        <Box x={0} y={112} w={188} h={44} lines={["GUESS from word count", "5 written ≠ 9 spoken"]} dashed />
        <path d="M 4 116 L 184 152 M 184 116 L 4 152" stroke={VERM} strokeWidth={1.2} />
        <Note x={0} y={172} tone="verm">removed — it measured the wrong thing</Note>
      </g>

      <Arrow from={[120, 48]} to={[214, 48]} label="budget" />
      <Box x={216} y={26} w={134} h={44} lines={["AI WRITES IT", "“at most N words”"]} />
      <Arrow from={[350, 48]} to={[400, 48]} />
      <Box x={402} y={26} w={110} h={44} lines={["READ ALOUD", "normal speed"]} />
      <Arrow from={[512, 48]} to={[562, 48]} />
      <Box x={564} y={26} w={110} h={44} lines={["AUDIO FILE"]} />
      <Arrow from={[674, 48]} to={[712, 48]} />
      <Box x={714} y={26} w={86} h={44} lines={["MEASURE IT", "real length"]} tone="verm" />

      {/* compare + loop back */}
      <Arrow from={[757, 70]} to={[757, 100]} tone="verm" />
      <Box x={648} y={102} w={152} h={44} lines={["DOES IT FIT?", "within 0.06s"]} tone="verm" />
      <Arrow
        from={[648, 124]}
        to={[283, 72]}
        tone="verm"
        dashed
        bend={78}
        label="too long → shorten  ·  too short → lengthen"
        labelAt={0.5}
        labelDy={16}
      />

      <Arrow from={[724, 146]} to={[724, 186]} label="fits" labelDy={-2} labelAt={0.5} />
      <Box x={648} y={188} w={152} h={40} lines={["RENDER"]} />

      <path d="M 0 238 L 800 238" stroke={RULE} strokeDasharray="3 4" strokeWidth={1} fill="none" />
      <Note x={0} y={258}>
        A safety margin is just a guess about your guess. Measuring removes it.
      </Note>
      <Note x={800} y={258} anchor="end">0.06s = the smallest chunk an MP3 has</Note>
    </Frame>
  );
}


/* ---------------------------- 03 · price retrigger ----------------- */

function PriceRetrigger() {
  const guards = [
    { t: "1", label: "SAME MESSAGE", sub: "within 5 min", free: true },
    { t: "2", label: "ONE CAR AT A TIME", sub: "across servers", free: true },
    { t: "3", label: "ALREADY SOLD?", sub: "skip", free: false },
    { t: "4", label: "SAME PRICE?", sub: "skip", free: false },
  ];
  return (
    <Frame h={300}>
      <Note x={0} y={12}>
        Guards run cheapest first. The first two cost no code at all.
      </Note>

      <Box x={0} y={28} w={128} h={46} lines={["PRICE CHANGES", "one event"]} tone="verm" />
      <Arrow from={[128, 51]} to={[164, 51]} />

      {guards.map((g, i) => {
        const x = 166 + i * 160;
        return (
          <g key={g.t}>
            <Box
              x={x}
              y={28}
              w={144}
              h={46}
              lines={[g.label, g.sub]}
              tone={g.free ? "blue" : "plain"}
              dashed={g.free}
            />
            {i < guards.length - 1 && <Arrow from={[x + 144, 51]} to={[x + 158, 51]} />}
            <Note x={x + 72} y={90} anchor="middle" tone={g.free ? "blue" : "faint"}>
              {g.free ? "free — from the queue" : "our check"}
            </Note>
          </g>
        );
      })}

      <Arrow from={[738, 74]} to={[738, 118]} />
      <Note x={800} y={112} anchor="end">survives all four</Note>

      <Box x={620} y={120} w={180} h={46} lines={["FIND THAT ONE AD", "read price from the video"]} />
      <Note x={800} y={184} anchor="end" tone="verm">
        not from inventory — the question is
      </Note>
      <Note x={800} y={198} anchor="end" tone="verm">
        &quot;what price is this video showing?&quot;
      </Note>

      <Arrow from={[620, 143]} to={[520, 143]} />
      <Box x={340} y={120} w={178} h={46} lines={["RE-RENDER JUST IT", "call render directly"]} tone="verm" />
      <Note x={429} y={182} anchor="middle" tone="verm">
        not by flipping its status — that restarts everything
      </Note>

      <Arrow from={[340, 143]} to={[240, 143]} />
      <Box x={60} y={120} w={178} h={46} lines={["SAME FILE PATH", "link never changes"]} tone="blue" />
      <Note x={149} y={182} anchor="middle" tone="blue">
        nothing downstream needs updating
      </Note>

      <path d="M 0 214 L 800 214" stroke={RULE} strokeDasharray="3 4" strokeWidth={1} fill="none" />

      <Note x={0} y={234} tone="verm">Guard 5 — if all four fail</Note>
      <Box x={0} y={244} w={280} h={44} lines={["WRITES THE SAME FILE", "costs money, cannot corrupt"]} tone="verm" />
      <Note x={300} y={262}>
        Photos, walkaround video and the AI step are never touched.
      </Note>
      <Note x={300} y={278}>
        Every re-run writes one audit record, searchable by video.
      </Note>
    </Frame>
  );
}

/* ---------------------------- 04 · thumbnail ----------------------- */

function Thumbnail() {
  return (
    <Frame h={272}>
      <Note x={0} y={12} tone="verm">BEFORE — the video finishes, and that is all</Note>

      <Box x={0} y={28} w={150} h={44} lines={["RENDER FINISHES", "video only"]} />
      <Arrow from={[150, 50]} to={[192, 50]} />
      <Box x={194} y={28} w={160} h={44} lines={["NO PREVIEW", "nothing saved"]} tone="verm" dashed />
      <Arrow from={[354, 50]} to={[396, 50]} />
      <Box x={398} y={28} w={186} h={44} lines={["DOWNSTREAM GUESSES", "falls back to a logo"]} tone="verm" />
      <Note x={800} y={86} anchor="end" tone="verm">
        the fallback hides the gap, so nobody reports it
      </Note>

      <path d="M 0 92 L 800 92" stroke={RULE} strokeDasharray="3 4" strokeWidth={1} fill="none" />

      <Note x={0} y={112} tone="blue">AFTER — the preview is made where the file already is</Note>

      <Box x={0} y={128} w={150} h={46} lines={["TEMPLATE SAYS", "grab at this moment"]} tone="blue" />
      <Arrow from={[75, 174]} to={[75, 206]} tone="blue" />
      <Note x={0} y={226}>a config value, not</Note>
      <Note x={0} y={240}>a line of code</Note>

      <Arrow from={[150, 151]} to={[192, 151]} tone="blue" />
      <Box x={194} y={128} w={170} h={46} lines={["RENDER FINISHES", "file already in hand"]} />
      <Arrow from={[364, 151]} to={[406, 151]} />
      <Box x={408} y={128} w={170} h={46} lines={["GRAB THE FRAME", "no re-download"]} tone="blue" />
      <Arrow from={[578, 151]} to={[620, 151]} />
      <Box x={622} y={128} w={178} h={46} lines={["SAVED BESIDE IT", "same id, same place"]} tone="blue" />

      <Note x={800} y={198} anchor="end" tone="blue">
        anything holding a video id can find the preview
      </Note>
      <Note x={800} y={214} anchor="end">
        first frame is usually an intro card — which sells nothing
      </Note>

      <path d="M 0 252 L 800 252" stroke={RULE} strokeDasharray="3 4" strokeWidth={1} fill="none" />
      <Note x={0} y={268}>
        The logo fallbacks that were covering for this should now be deleted, not kept.
      </Note>
    </Frame>
  );
}

/* ---------------------------- 05 · critic loop --------------------- */

function CriticLoop() {
  return (
    <Frame h={296}>
      <Note x={0} y={12}>
        Writing is hard, checking is easy — so something with fresh eyes does the checking.
      </Note>

      <Box x={0} y={30} w={150} h={50} lines={["SIX PEOPLE,", "six different wants"]} tone="verm" />
      <Arrow from={[150, 55]} to={[194, 55]} />

      <Box x={196} y={30} w={162} h={50} lines={["PLANNER", "pulls what it needs"]} tone="blue" />
      <Arrow from={[277, 80]} to={[277, 114]} />
      <Note x={268} y={97} anchor="end">a draft plan</Note>

      {/* the cheap checks first */}
      <Box x={196} y={116} w={162} h={50} lines={["PLAIN CODE CHECKS", "days \u00b7 fields \u00b7 budget"]} />
      <Note x={186} y={136} anchor="end">free, so</Note>
      <Note x={186} y={150} anchor="end">they run first</Note>

      <Arrow from={[358, 141]} to={[402, 141]} />
      <Box x={404} y={116} w={172} h={50} lines={["THE CRITIC", "fresh eyes, no ego"]} tone="verm" />
      <Note x={490} y={182} anchor="middle" tone="verm">
        only asked what rules cannot express
      </Note>
      <Note x={490} y={196} anchor="middle">
        pacing · is day two overpacked · right season
      </Note>

      {/* pass */}
      <Arrow from={[576, 141]} to={[624, 141]} label="passes" labelDy={-6} />
      <Box x={626} y={116} w={174} h={50} lines={["THE ITINERARY"]} tone="blue" />

      {/* fail, bounded — routed around the boxes rather than through them */}
      <path
        d="M 490 114 L 490 104 L 277 104 L 277 84"
        fill="none"
        stroke={VERM}
        strokeWidth={1}
        strokeDasharray="4 3"
        markerEnd="url(#head-verm)"
      />
      <Note x={383} y={97} anchor="middle" tone="verm">
        fails — rewrite, at most 3 times
      </Note>

      <path d="M 0 224 L 800 224" stroke={RULE} strokeDasharray="3 4" strokeWidth={1} fill="none" />

      <Note x={0} y={244} tone="blue">Two kinds of data, two shelf lives</Note>
      <Box x={0} y={254} w={230} h={40} lines={["WHAT A CITY IS LIKE", "barely changes \u2014 cached"]} tone="blue" />
      <Box x={244} y={254} w={230} h={40} lines={["WHAT A ROOM COSTS", "changes hourly \u2014 always live"]} tone="verm" />
      <Note x={492} y={270}>One cache setting cannot be right for both,</Note>
      <Note x={492} y={284}>and a real booking service slots into the second.</Note>
    </Frame>
  );
}

const registry: Record<string, () => ReactNode> = {
  "round-robin": RoundRobin,
  "fit-loop": FitLoop,
  "price-retrigger": PriceRetrigger,
  thumbnail: Thumbnail,
  "critic-loop": CriticLoop,
};

export default function Diagram({ name }: { name: string }) {
  const draw = registry[name];
  if (!draw) return null;
  return <>{draw()}</>;
}
