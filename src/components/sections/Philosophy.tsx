import { SectionWrap } from "@/components/Decor";
import { 
  Sparkles, 
  Brain, 
  Smile, 
  Heart, 
  ShieldCheck, 
  Languages, 
  Calculator, 
  Palette, 
  Activity, 
  Music, 
  Users, 
  User, 
  Leaf,
  Target,
  Lightbulb
} from "lucide-react";

const intelligences = [
  {
    icon: Languages,
    title: "Linguistic",
    desc: "Language & communication",
    color: "primary",
  },
  {
    icon: Calculator,
    title: "Logical–Mathematical",
    desc: "Thinking & problem-solving",
    color: "secondary",
  },
  {
    icon: Palette,
    title: "Visual–Spatial",
    desc: "Creativity & imagination",
    color: "mint",
  },
  {
    icon: Activity,
    title: "Bodily–Kinesthetic",
    desc: "Movement & activity",
    color: "lavender",
  },
  {
    icon: Music,
    title: "Musical",
    desc: "Rhythm & sound",
    color: "sunny",
  },
  {
    icon: Users,
    title: "Interpersonal",
    desc: "Social skills & teamwork",
    color: "primary",
  },
  {
    icon: User,
    title: "Intrapersonal",
    desc: "Self-awareness",
    color: "secondary",
  },
  {
    icon: Leaf,
    title: "Naturalistic",
    desc: "Connection with nature",
    color: "mint",
  },
];

const missionPoints = [
  {
    icon: Sparkles,
    text: "To recognize that every child is unique and learns differently.",
  },
  {
    icon: Brain,
    text: "To nurture children based on the Eight Multiple Intelligences Theory, helping them explore their natural abilities.",
  },
  {
    icon: Smile,
    text: "To provide a play-based, safe, and stimulating environment that encourages curiosity and creativity.",
  },
  {
    icon: Heart,
    text: "To support holistic development—social, emotional, physical, and cognitive.",
  },
  {
    icon: ShieldCheck,
    text: "To help children grow together with confidence, respect, and happiness.",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary-soft text-primary",
  secondary: "bg-secondary-soft text-secondary-foreground",
  mint: "bg-mint-soft text-mint-foreground",
  lavender: "bg-lavender-soft text-lavender-foreground",
  sunny: "bg-sunny-soft text-sunny-foreground",
};

export const Philosophy = () => {
  return (
    <SectionWrap id="philosophy" className="bg-white/50">
      <div className="blob bg-primary-soft w-[500px] h-[500px] -top-40 -left-20" />
      <div className="blob bg-lavender-soft w-[400px] h-[400px] -bottom-20 -right-20" />

      <div className="container relative">
        {/* Vision & Mission Row */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="pill bg-primary-soft text-primary mb-4">
                <Target className="w-4 h-4" /> Our Vision
              </span>
              <h2 className="text-4xl font-bold mb-6">Joyful & Inclusive Learning</h2>
              <div className="relative p-8 rounded-[2.5rem] bg-gradient-cool shadow-card border border-white/50 group overflow-hidden transition-all hover:shadow-lift">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-20 h-20" />
                </div>
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-foreground/90">
                  "To create a joyful and inclusive environment where children play, grow, learn, and grow together, while discovering their unique strengths through the Eight Multiple Intelligences."
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="pill bg-mint-soft text-mint-foreground mb-4">
              <Sparkles className="w-4 h-4" /> Our Mission
            </span>
            <h2 className="text-4xl font-bold mb-8">Nurturing Uniqueness</h2>
            <div className="space-y-6">
              {missionPoints.map((point, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <point.icon className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors leading-snug">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="pill bg-sunny-soft text-sunny-foreground mb-4">
            <Lightbulb className="w-4 h-4" /> Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Eight Multiple Intelligences</h2>
          <p className="text-muted-foreground text-lg">
            We focus on developing each child’s potential by recognizing and nurturing their natural abilities across these eight key dimensions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {intelligences.map((item, i) => (
            <div
              key={item.title}
              className="group bg-card p-8 rounded-3xl shadow-card border border-border/50 hover:shadow-lift hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${colorMap[item.color]} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
};
