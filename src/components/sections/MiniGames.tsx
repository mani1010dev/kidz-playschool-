import { useState } from "react";
import { SectionWrap } from "@/components/Decor";
import { Button } from "@/components/ui/button";
import { RotateCcw, Sparkles } from "lucide-react";

/* ---------- Color matching game ---------- */
const COLORS = [
  { name: "Red", hex: "#F87171" },
  { name: "Blue", hex: "#60A5FA" },
  { name: "Yellow", hex: "#FBBF24" },
  { name: "Green", hex: "#4ADE80" },
];

const ColorMatch = () => {
  const [target, setTarget] = useState(COLORS[0]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"" | "yes" | "no">("");

  const next = () => setTarget(COLORS[Math.floor(Math.random() * COLORS.length)]);

  const click = (c: typeof COLORS[0]) => {
    if (c.name === target.name) {
      setScore(score + 1);
      setFeedback("yes");
      setTimeout(() => { setFeedback(""); next(); }, 600);
    } else {
      setFeedback("no");
      setTimeout(() => setFeedback(""), 500);
    }
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">Tap the color:</p>
        <div className="text-3xl font-bold font-display" style={{ color: target.hex }}>{target.name}</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {COLORS.map((c) => (
          <button
            key={c.name}
            onClick={() => click(c)}
            className="aspect-square rounded-2xl shadow-soft hover:scale-105 active:scale-95 transition-transform"
            style={{ backgroundColor: c.hex }}
            aria-label={c.name}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold">Score: {score} ⭐</span>
        <span className={`font-bold transition-opacity ${feedback ? "opacity-100" : "opacity-0"}`}>
          {feedback === "yes" ? "🎉 Yay!" : "Try again 💪"}
        </span>
      </div>
    </div>
  );
};

/* ---------- Counting game ---------- */
const CountGame = () => {
  const [count, setCount] = useState(() => Math.floor(Math.random() * 6) + 2);
  const [pick, setPick] = useState<number | null>(null);
  const options = Array.from({ length: 4 }, (_, i) => count + i - 1).filter((n) => n > 0).slice(0, 4);

  const reset = () => {
    setCount(Math.floor(Math.random() * 6) + 2);
    setPick(null);
  };

  return (
    <div className="space-y-5">
      <p className="text-sm text-muted-foreground text-center">How many apples? 🍎</p>
      <div className="flex flex-wrap justify-center gap-2 min-h-[100px] items-center bg-mint-soft/40 rounded-2xl p-4">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className="text-3xl animate-pop" style={{ animationDelay: `${i * 60}ms` }}>🍎</span>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {options.map((n) => (
          <button
            key={n}
            onClick={() => setPick(n)}
            className={`py-3 rounded-xl font-bold text-lg transition-all ${
              pick === n
                ? n === count
                  ? "bg-mint text-mint-foreground scale-110 shadow-soft"
                  : "bg-secondary text-secondary-foreground"
                : "bg-white shadow-soft hover:bg-primary-soft"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold">
          {pick === count ? "🎉 Correct!" : pick !== null ? "Oops, try again" : "Pick the number"}
        </span>
        <Button variant="ghost" size="sm" onClick={reset}>
          <RotateCcw className="w-4 h-4" /> New
        </Button>
      </div>
    </div>
  );
};

/* ---------- Drag & drop shapes ---------- */
const SHAPES = [
  { id: "circle", emoji: "⭕", name: "Circle" },
  { id: "square", emoji: "🟦", name: "Square" },
  { id: "triangle", emoji: "🔺", name: "Triangle" },
];

const ShapeDrop = () => {
  const [matched, setMatched] = useState<Record<string, boolean>>({});
  const [dragging, setDragging] = useState<string | null>(null);

  const onDrop = (slot: string) => {
    if (dragging === slot) {
      setMatched({ ...matched, [slot]: true });
    }
    setDragging(null);
  };

  const reset = () => setMatched({});
  const allDone = Object.keys(matched).length === SHAPES.length;

  return (
    <div className="space-y-5">
      <p className="text-sm text-muted-foreground text-center">Drag each shape to its home:</p>
      <div className="grid grid-cols-3 gap-2">
        {SHAPES.map((s) => (
          <div
            key={s.id}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop(s.id)}
            className={`aspect-square rounded-2xl border-2 border-dashed flex items-center justify-center text-3xl transition-all ${
              matched[s.id]
                ? "bg-mint-soft border-mint scale-105"
                : "border-border bg-white/60"
            }`}
          >
            {matched[s.id] ? s.emoji : <span className="text-xs text-muted-foreground font-semibold">{s.name}</span>}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 min-h-[64px] items-center">
        {SHAPES.filter((s) => !matched[s.id]).map((s) => (
          <div
            key={s.id}
            draggable
            onDragStart={() => setDragging(s.id)}
            onClick={() => setMatched({ ...matched, [s.id]: true })}
            className="text-4xl cursor-grab active:cursor-grabbing hover:scale-110 transition-transform select-none"
            title={s.name}
          >
            {s.emoji}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold">{allDone ? "🌟 You did it!" : "Tap or drag to match"}</span>
        <Button variant="ghost" size="sm" onClick={reset}>
          <RotateCcw className="w-4 h-4" /> Reset
        </Button>
      </div>
    </div>
  );
};

/* ---------- Section ---------- */
const games = [
  { title: "Color Match", emoji: "🎨", color: "primary", comp: <ColorMatch /> },
  { title: "Count the Fruits", emoji: "🍎", color: "secondary", comp: <CountGame /> },
  { title: "Shape Sorter", emoji: "🔺", color: "lavender", comp: <ShapeDrop /> },
];

const colorMap: Record<string, string> = {
  primary: "from-primary-soft to-primary/10",
  secondary: "from-secondary-soft to-secondary/10",
  lavender: "from-lavender-soft to-lavender/10",
};

export const MiniGames = () => {
  return (
    <SectionWrap id="games" className="bg-gradient-cool">
      <div className="blob bg-sunny-soft w-[400px] h-[400px] top-20 right-0" />
      <div className="blob bg-lavender-soft w-[300px] h-[300px] bottom-0 left-0" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="pill bg-white/80 text-lavender-foreground mb-4">
            <Sparkles className="w-4 h-4" /> Play & Learn
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fun mini-games for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">curious minds</span>
          </h2>
          <p className="text-muted-foreground text-lg">Try a quick sample of how we make learning irresistible.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {games.map((g) => (
            <div
              key={g.title}
              className={`bg-gradient-to-br ${colorMap[g.color]} rounded-3xl p-6 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all`}
            >
              <div className="bg-white rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center text-2xl">{g.emoji}</div>
                  <h3 className="text-xl font-bold">{g.title}</h3>
                </div>
                {g.comp}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
};
