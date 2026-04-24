import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarHeart, Sparkles } from "lucide-react";
import { FloatingShapes } from "./FloatingShapes";
import heroImg from "@/assets/hero-kids.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero pb-24 pt-36 md:pt-44">
      <FloatingShapes />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Ages 1.5 – 6 years
          </span>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Where Little
            <br />
            Minds <span className="bg-gradient-warm bg-clip-text text-transparent">Grow & Shine</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            A safe, nurturing learning home where curious kids discover, play, and bloom into confident little explorers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 shadow-soft">
              <a href="#contact">
                Enroll Now <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 bg-background/70 px-7 backdrop-blur">
              <a href="#contact">
                <CalendarHeart className="mr-1 h-4 w-4" /> Book a Visit
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-8">
            <Stat value="500+" label="Happy Kids" />
            <Stat value="15+" label="Years Caring" />
            <Stat value="98%" label="Parent Trust" />
          </div>
        </div>

        <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-cool blur-3xl opacity-60" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white/80 shadow-card">
            <img
              src={heroImg}
              alt="Happy preschool children laughing together"
              className="h-full w-full object-cover"
              width={1280}
              height={960}
            />
          </div>

          {/* Floating badge cards */}
          <div className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-card animate-float">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-mint">
              <span className="text-lg">🌱</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Curriculum</p>
              <p className="text-sm font-bold">Play-based</p>
            </div>
          </div>
          <div className="absolute -right-4 bottom-12 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-card animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-lavender">
              <span className="text-lg">⭐</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Certified</p>
              <p className="text-sm font-bold">Safe & Loved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
