import { Baby, BookOpen, Pencil, Brain } from "lucide-react";
import { SectionWrap } from "@/components/Decor";

const programs = [
  {
    icon: Baby,
    title: "Toddler Program",
    age: "1.5 – 2.5 yrs",
    desc: "Sensory play, motor skills, and gentle introduction to social learning in a cozy nest environment.",
    color: "primary",
    emoji: "🧸",
  },
  {
    icon: BookOpen,
    title: "Nursery",
    age: "2.5 – 3.5 yrs",
    desc: "Storytelling, music, and creative arts that spark curiosity and grow language confidence.",
    color: "secondary",
    emoji: "📚",
  },
  {
    icon: Pencil,
    title: "LKG",
    age: "3.5 – 4.5 yrs",
    desc: "Phonics, numbers, and hands-on discovery to build foundational reading and writing skills.",
    color: "mint",
    emoji: "✏️",
  },
  {
    icon: Brain,
    title: "UKG",
    age: "4.5 – 5.5 yrs",
    desc: "School-readiness, problem solving, and confident expression through projects and play.",
    color: "lavender",
    emoji: "🧠",
  },
];

const colorMap: Record<string, { bg: string; ring: string; text: string }> = {
  primary: { bg: "bg-primary-soft", ring: "ring-primary/30", text: "text-primary" },
  secondary: { bg: "bg-secondary-soft", ring: "ring-secondary/40", text: "text-secondary-foreground" },
  mint: { bg: "bg-mint-soft", ring: "ring-mint/40", text: "text-mint-foreground" },
  lavender: { bg: "bg-lavender-soft", ring: "ring-lavender/40", text: "text-lavender-foreground" },
};

export const Programs = () => {
  return (
    <SectionWrap id="programs" className="bg-background">
      <div className="blob bg-primary-soft w-[400px] h-[400px] -top-20 -right-20" />
      <div className="blob bg-mint-soft w-[300px] h-[300px] -bottom-10 -left-10" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="pill bg-mint-soft text-mint-foreground mb-4">📚 Our Programs</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Programs for every{" "}
            <span className="bg-gradient-cta bg-clip-text text-transparent">tiny explorer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Age-appropriate curricula designed by experts to nurture every stage of early childhood.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => {
            const c = colorMap[p.color];
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative bg-card rounded-3xl p-7 shadow-card hover:shadow-lift hover:-translate-y-2 transition-all duration-500 border border-border/50"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`absolute -top-6 left-7 w-16 h-16 ${c.bg} ring-4 ${c.ring} rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500`}>
                  {p.emoji}
                </div>
                <div className="mt-10">
                  <div className={`text-xs font-bold uppercase tracking-wider ${c.text} mb-2`}>{p.age}</div>
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                    <Icon className="w-4 h-4" />
                    Learn more →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrap>
  );
};
