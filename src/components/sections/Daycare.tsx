import { SectionWrap } from "@/components/Decor";
import { Clock, Home, Heart, Smile, Star } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Home-like Environment",
    desc: "A warm and safe space where children feel comfortable and cared for.",
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Play-based Learning",
    desc: "Meaningful activities that promote learning through creativity and social play.",
    color: "mint",
  },
  {
    icon: Smile,
    title: "Attentive Staff",
    desc: "Caring professionals dedicated to your child's happiness and growth.",
    color: "lavender",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary-soft text-primary",
  secondary: "bg-secondary-soft text-secondary-foreground",
  mint: "bg-mint-soft text-mint-foreground",
  lavender: "bg-lavender-soft text-lavender-foreground",
};

export const Daycare = () => {
  return (
    <SectionWrap id="daycare" className="bg-gradient-warm">
      <div className="blob bg-sunny-soft w-[400px] h-[400px] top-0 left-0" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-white/50 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-card">
                <img
                  src="/gallery/photo-3.jpeg"
                  alt="Cozy daycare environment"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sunny flex items-center justify-center text-sunny-foreground">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Operating Hours</p>
                      <p className="text-xl font-bold">9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating decor */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white shadow-lift flex items-center justify-center animate-bounce-soft">
                <Star className="w-10 h-10 text-sunny fill-sunny" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <span className="pill bg-white text-secondary font-bold shadow-sm">🌼 Daycare Services</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                A second home for your <span className="text-secondary">little one</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer a safe, caring, and nurturing daycare facility designed to support both children and working parents. We provide personalized care to ensure every child's comfort, happiness, and growth.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${colorMap[f.color]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <f.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold">{f.title}</h4>
                    <p className="text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-lg font-medium italic text-muted-foreground border-l-4 border-secondary/30 pl-4">
                "Children are given a warm, home-like environment where they can play, learn, rest, and grow together under the guidance of caring and attentive staff."
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrap>
  );
};
