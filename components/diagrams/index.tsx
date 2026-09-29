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

/* ---------------------------- 01 · the window ---------------------- */

function DispatchBeforeWrite() {
  return (
    <Frame h={286}>
      <Note x={0} y={12}>BEFORE — the check reads a status nothing has written yet</Note>

      <Box x={0} y={38} w={112} lines={["SAVE #1", "t = 0"]} />
      <Box x={0} y={150} w={112} lines={["SAVE #2", "t = +40s"]} />

      <Arrow from={[112, 61]} to={[168, 88]} />
      <Arrow from={[112, 173]} to={[168, 122]} />

      <Box x={170} y={82} w={124} h={46} lines={["IS IT FREE?", "check the status"]} />
      <Arrow from={[294, 105]} to={[344, 105]} label="passes twice" labelDy={-8} tone="verm" />
      <Box x={346} y={82} w={124} h={46} lines={["SEND IT", "to the queue"]} tone="verm" />
      <Arrow from={[470, 105]} to={[520, 105]} />
      <Box x={522} y={82} w={130} h={46} lines={["MARK IT", "busy"]} />

      <Arrow from={[652, 105]} to={[700, 105]} />
      <Box x={702} y={82} w={96} h={46} lines={["2 RENDERS", "1 video"]} tone="verm" />

      {/* the window bracket */}
      <path
        d="M 346 148 L 346 158 L 652 158 L 652 148"
        fill="none"
        stroke={VERM}
        strokeWidth={1}
      />
      <Note x={499} y={174} tone="verm" anchor="middle">
        the gap — both jobs are sent before either one is marked busy
      </Note>

      <path d="M 0 202 L 800 202" stroke={RULE} strokeDasharray="3 4" strokeWidth={1} fill="none" />

      <Note x={0} y={224} tone="blue">AFTER — mark and send in one step, so there is no gap</Note>
      <Box x={0} y={234} w={188} h={44} lines={["CLAIM IT", "mark busy + send, together"]} tone="blue" />
      <Arrow from={[188, 256]} to={[238, 256]} tone="blue" />
      <Box x={240} y={234} w={124} h={44} lines={["SEND IT"]} tone="blue" />
      <Note x={380} y={252} tone="blue">#2 finds it busy and stops.</Note>
      <Note x={380} y={266}>
        Checking at the other end can&apos;t help — both were already queued.
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

/* ---------------------------- 03 · event-carried ------------------- */

function EventCarried() {
  return (
    <Frame h={316}>
      <Note x={0} y={12}>
        Trigger when the video finishes, not when the price changes — at price-change
        time the new video does not exist yet.
      </Note>

      <Box x={0} y={30} w={130} h={46} lines={["VIDEO FINISHES", "the only trigger"]} tone="blue" />
      <Arrow from={[130, 53]} to={[186, 53]} label="full payload" />

      {/* stateless region */}
      <rect
        x={188}
        y={20}
        width={196}
        height={112}
        fill="none"
        stroke={VERM}
        strokeWidth={1}
        strokeDasharray="4 3"
      />
      <Note x={286} y={34} tone="verm" anchor="middle">no database, no passwords</Note>
      <Box x={202} y={44} w={168} h={46} lines={["RECEIVER", "updates one car"]} tone="verm" />
      <Note x={286} y={122} anchor="middle" tone="verm">
        the message carries everything
      </Note>

      <Arrow from={[384, 67]} to={[434, 67]} />
      <Box x={436} y={44} w={140} h={46} lines={["STORE", "one file per car"]} />
      <Arrow from={[576, 67]} to={[626, 67]} label="all cars" />
      <Box x={628} y={44} w={172} h={46} lines={["REBUILD WHOLE FILE", "never edited in place"]} tone="blue" />

      <Arrow from={[714, 90]} to={[714, 132]} />
      <Box x={628} y={134} w={172} h={44} lines={["CDN"]} />
      <Arrow from={[714, 178]} to={[714, 214]} label="checks on its own schedule" labelDy={-4} />
      <Box x={628} y={216} w={172} h={44} lines={["AD PLATFORM", "remembers files by address"]} dashed />
      <Note x={800} y={280} anchor="end" tone="verm">
        a new video at the same address is invisible to it
      </Note>

      {/* replay */}
      <Box x={0} y={216} w={182} h={44} lines={["REBUILD", "first run · lost · stale"]} tone="blue" />
      <Arrow from={[91, 216]} to={[91, 80]} tone="blue" label="re-run uses the same path" labelDy={-4} labelAt={0.6} />
      <Arrow from={[182, 238]} to={[236, 238]} tone="blue" />
      <Note x={244} y={235} tone="blue">no special repair mode, so it cannot rot</Note>
      <Note x={244} y={250}>
        Editing in place would clash, and one bad write
      </Note>
      <Note x={244} y={263}>
        would ruin every car in the file at once.
      </Note>

    </Frame>
  );
}

/* ---------------------------- 04 · the ratchet --------------------- */

function Ratchet() {
  const rows = [
    { label: "SESSION 1", ok: 8, note: "9th font locked → stops → 8 left stuck" },
    { label: "SESSION 2", ok: 5, note: "fails earlier → 5 more stuck" },
    { label: "SESSION 3", ok: 2, note: "machine basically unusable" },
  ];
  return (
    <Frame h={296}>
      <Note x={0} y={12} tone="verm">
        BEFORE — every failure makes the next one worse
      </Note>

      {rows.map((r, i) => {
        const y = 30 + i * 46;
        return (
          <g key={r.label}>
            <text
              x={0}
              y={y + 20}
              fontSize={10}
              fill={INK}
              fontFamily="var(--font-jetbrains-mono), monospace"
              letterSpacing="0.08em"
            >
              {r.label}
            </text>
            {Array.from({ length: 9 }).map((_, k) => (
              <rect
                key={k}
                x={84 + k * 22}
                y={y + 4}
                width={18}
                height={20}
                fill={k < r.ok ? "var(--blueprint-wash)" : "var(--vermilion-wash)"}
                stroke={k < r.ok ? BLUE : VERM}
                strokeWidth={1}
              />
            ))}
            <Note x={298} y={y + 19} tone="verm">
              {r.note}
            </Note>
          </g>
        );
      })}

      <Arrow from={[40, 32]} to={[40, 160]} tone="verm" />
      <Note x={0} y={186} tone="verm">
        It stopped before it started, so the cleanup step never ran.
      </Note>
      <Note x={0} y={200}>
        The install order changes every run, so a different font fails each time —
      </Note>
      <Note x={0} y={213}>
        which is exactly why people thought the machines were just flaky.
      </Note>

      <path d="M 0 224 L 800 224" stroke={RULE} strokeDasharray="3 4" strokeWidth={1} fill="none" />

      <Note x={0} y={244} tone="blue">AFTER — the leftovers are made harmless</Note>
      <Box x={0} y={254} w={150} h={38} lines={["SAME ORDER", "every single run"]} tone="blue" />
      <Arrow from={[150, 273]} to={[186, 273]} tone="blue" />
      <Box x={188} y={254} w={162} h={38} lines={["SAFE TO RE-RUN", "skips ones already there"]} tone="blue" />
      <Arrow from={[350, 273]} to={[386, 273]} tone="blue" />
      <Box x={388} y={254} w={158} h={38} lines={["CLEANS UP AFTER", "only what it installed"]} tone="blue" />
      <Arrow from={[546, 273]} to={[582, 273]} tone="blue" />
      <Box x={584} y={254} w={216} h={38} lines={["MACHINES FIX", "themselves over time"]} tone="blue" />
    </Frame>
  );
}

/* ---------------------------- 05 · voice cascade ------------------- */

function VoiceCascade() {
  const chain: { lines: string[]; tone?: Tone }[] = [
    { lines: ["HEARS SPEECH", "~1ms"] },
    { lines: ["SPEECH→TEXT", "as they talk"] },
    { lines: ["ARE THEY DONE?", "not just silence"] },
    { lines: ["AI + ACTIONS", "safe to retry"], tone: "blue" },
    { lines: ["TEXT→SPEECH", "starts in ~100ms"] },
  ];
  return (
    <Frame h={292}>
      <Note x={0} y={12}>
        Separate steps on purpose: each one leaves a record you can read later.
      </Note>

      <Box x={0} y={40} w={82} h={48} lines={["CALLER"]} />
      <Arrow from={[82, 64]} to={[94, 64]} />
      <Box x={96} y={40} w={92} h={48} lines={["CONNECTION", "phone |", "browser mic"]} tone="verm" />
      <Arrow from={[188, 64]} to={[200, 64]} />

      {chain.map((c, i) => {
        const bx = 204 + i * 122;
        return (
          <g key={c.lines[0]}>
            <Box x={bx} y={40} w={106} h={48} lines={c.lines} tone={c.tone} />
            {i < chain.length - 1 && <Arrow from={[bx + 106, 64]} to={[bx + 120, 64]} />}
          </g>
        );
      })}

      {/* audio returns to the caller */}
      <Arrow
        from={[745, 88]}
        to={[143, 88]}
        bend={58}
        label="speech back to the caller"
        labelDy={-6}
      />

      {/* barge-in */}
      <Box
        x={204}
        y={168}
        w={594}
        h={46}
        lines={[
          "IF THEY INTERRUPT: stop talking · drop the audio · cancel the AI",
          "and only remember what they actually heard, not what was said",
        ]}
        tone="verm"
      />
      <Arrow from={[41, 90]} to={[200, 186]} tone="verm" bend={26} label="interrupt" labelAt={0.42} labelDy={-6} />

      <Note x={0} y={236} tone="verm">one connection layer, two versions —</Note>
      <Note x={0} y={249}>the rest of it never knows it is a phone.</Note>

      <path d="M 0 262 L 800 262" stroke={RULE} strokeDasharray="3 4" strokeWidth={1} fill="none" />
      <Note x={0} y={282} tone="blue">
        target: under 0.8s usually, 1.5s at worst
      </Note>
      <Note x={800} y={282} anchor="end" tone="verm">
        emergencies: never miss one
      </Note>
    </Frame>
  );
}

/* ---------------------------- 06 · eval tiers ---------------------- */

function EvalTiers() {
  return (
    <Frame h={302}>
      <Note x={0} y={12} tone="blue">LIVE — must be fast, cost does not matter (3 seconds)</Note>
      <Box x={0} y={24} w={112} h={44} lines={["HE TALKS", "one take"]} />
      <Arrow from={[112, 46]} to={[150, 46]} />
      <Box x={152} y={24} w={150} h={44} lines={["SPEECH→TEXT", "as he talks"]} tone="blue" />
      <Arrow from={[302, 46]} to={[340, 46]} />
      <Box x={342} y={24} w={186} h={44} lines={["ONE AI CALL", "write-up OR a question"]} tone="blue" />
      <Arrow from={[528, 46]} to={[566, 46]} />
      <Box x={568} y={24} w={112} h={44} lines={["HE CHECKS IT"]} />
      <Arrow from={[680, 46]} to={[718, 46]} />
      <Box x={720} y={24} w={80} h={44} lines={["SAVE"]} />
      <Note x={435} y={84} anchor="middle">
        there is no screen for a second question, so it simply cannot happen
      </Note>

      {/* shared spine */}
      <Box x={252} y={106} w={140} h={38} lines={["PROMPT STORE"]} />
      <Box x={408} y={106} w={140} h={38} lines={["RECORDS TABLE"]} />
      <Arrow from={[435, 92]} to={[435, 104]} dashed />
      <Note x={0} y={130}>the only two things</Note>
      <Note x={0} y={143}>the paths share</Note>

      <Note x={0} y={180} tone="verm">SCORING — must be cheap, can be slow</Note>
      <Box x={0} y={192} w={150} h={44} lines={["STEP 1", "simple code checks"]} />
      <Arrow from={[150, 214]} to={[186, 214]} />
      <Box x={188} y={192} w={168} h={44} lines={["STEP 2", "an AI grades it"]} tone="verm" />
      <Arrow from={[356, 214]} to={[392, 214]} />
      <Box x={394} y={192} w={150} h={44} lines={["STEP 3", "compare to known answers"]} />
      <Arrow from={[544, 214]} to={[580, 214]} />
      <Box x={582} y={192} w={218} h={44} lines={["THE GATE", "keep or reject — AI and me alike"]} tone="blue" />
      <Note x={272} y={252} tone="verm">
        step 2 is 83% of the bill, so the cheap checks run first
      </Note>

      <path d="M 0 268 L 800 268" stroke={RULE} strokeDasharray="3 4" strokeWidth={1} fill="none" />
      <Note x={0} y={288}>
        I measured my own error bar first. My cut-off for calling something better
        had been 5 times smaller than that error.
      </Note>
    </Frame>
  );
}

const registry: Record<string, () => ReactNode> = {
  "dispatch-before-write": DispatchBeforeWrite,
  "fit-loop": FitLoop,
  "event-carried": EventCarried,
  ratchet: Ratchet,
  "voice-cascade": VoiceCascade,
  "eval-tiers": EvalTiers,
};

export default function Diagram({ name }: { name: string }) {
  const draw = registry[name];
  if (!draw) return null;
  return <>{draw()}</>;
}
