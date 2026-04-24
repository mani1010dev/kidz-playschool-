import { useState } from "react";
import { SectionWrap } from "@/components/Decor";
import { Sun, Sunrise, Sunset, Moon } from "lucide-react";

const schedule = [
  { time: "8:30 AM", emoji: "🌞", title: "Welcome & Free Play", desc: "Warm greetings and open play to settle in.", color: "primary" },
  { time: "10:00 AM", emoji: "🧸", title: "Play Time", desc: "Sensory bins, blocks, and imaginative play stations.", color: "secondary" },
  { time: "11:00 AM", emoji: "📚", title: "Learning Circle", desc: "Phonics, numbers, and storytime with our teachers.", color: "mint" },
  { time: "12:30 PM", emoji: "🍱", title: "Snack Time", desc: "Healthy meals served family-style with friends.", color: "sunny" },
  { time: "1:30 PM", emoji: "😴", title: "Nap Time", desc: "Cozy quiet rest with soft music and dim lights.", color: "lavender" },
  { time: "3:00 PM", emoji: "🎨", title: "Creative Hour", desc: "Art, music, and movement to wrap up the day.", color: "primary" },
];

const colorMap: Record<string, { bg: string; dot: string; text: string }> = {
  primary: { bg: "bg-primary-soft", dot: "bg-primary", text: "text-primary" },
  secondary: { bg: "bg-secondary-soft", dot: "bg-secondary", text: "text-secondary-foreground" },
  mint: { bg: "bg-mint-soft", dot: "bg-mint", text: "text-mint-foreground" },
  sunny: { bg: "bg-sunny-soft", dot: "bg-sunny", text: "text-sunny-foreground" },
  lavender: { bg: "bg-lavender-soft", dot: "bg-lavender", text: "text-lavender-foreground" },
};

export const Timeline = () => {
  const [active, setActive] = useState(0);

  return (
    <SectionWrap id="timeline" className="bg-background">
      <div className="blob bg-secondary-soft w-[400px] h-[400px] top-10 -left-20" />
      <div className="blob bg-primary-soft w-[300px] h-[300px] bottom-20 -right-10" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="pill bg-sunny-soft text-sunny-foreground mb-4">
            <Sun className="w-4 h-4" /> Every hour, a new little adventure
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Daily activities <span className="bg-gradient-cta bg-clip-text text-transparent">that delight</span>
          </h2>
          <p className="text-muted-foreground text-lg">A balanced rhythm of play, learning, rest, and creativity.</p>
        </div>

        {/* Day icons strip */}
        <div className="hidden md:flex justify-center gap-12 mb-12 text-muted-foreground">
          <div className="flex items-center gap-2"><Sunrise className="w-5 h-5" /> Morning</div>
          <div className="flex items-center gap-2"><Sun className="w-5 h-5" /> Midday</div>
          <div className="flex items-center gap-2"><Sunset className="w-5 h-5" /> Afternoon</div>
          <div className="flex items-center gap-2"><Moon className="w-5 h-5" /> Wind-down</div>
        </div>

        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-soft via-secondary-soft to-lavender-soft md:-translate-x-1/2 rounded-full" />

          <div className="space-y-8">
            {schedule.map((s, i) => {
              const c = colorMap[s.color];
              const isActive = active === i;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={s.title}
                  className={`relative flex items-start ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  {/* Dot */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${c.dot} ring-4 ring-background z-10 transition-all ${isActive ? "scale-125 shadow-soft" : ""}`} />

                  {/* Card */}
                  <div className={`ml-20 md:ml-0 md:w-[44%] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div
                      className={`group cursor-pointer rounded-3xl p-6 transition-all duration-500 ${
                        isActive
                          ? `${c.bg} shadow-lift -translate-y-1`
                          : "bg-card shadow-card hover:shadow-soft"
                      }`}
                    >
                      <div className={`flex items-center gap-3 mb-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className={`text-4xl transition-transform ${isActive ? "scale-125 animate-bounce-soft" : ""}`}>
                          {s.emoji}
                        </div>
                        <div className={`text-xs font-bold uppercase tracking-wider ${c.text}`}>{s.time}</div>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrap>
  );
};
