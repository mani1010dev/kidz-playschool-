import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarHeart, Sparkles } from "lucide-react";
import { Cloud, StarDecor } from "@/components/Decor";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero pb-24 pt-36 md:pt-44">
      {/* Animated clouds and decor */}
      <Cloud className="top-24 -left-20" size={140} delay="0s" />
      <Cloud className="top-44 -left-40" size={100} delay="-30s" />
      <Cloud className="top-72 -left-60" size={160} delay="-55s" />

      <div className="blob bg-primary-soft w-[500px] h-[500px] -top-40 -left-40 animate-float-slow absolute" />
      <div className="blob bg-secondary-soft w-[420px] h-[420px] -bottom-20 -right-20 animate-float absolute" />
      <div className="blob bg-lavender-soft w-[300px] h-[300px] top-1/2 left-1/3 opacity-40 animate-float-slow absolute" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="animate-fade-in-up">
          <h1 className="mt-5 font-display text-6xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Kidz <span className="bg-gradient-cta bg-clip-text text-transparent">playschool</span>
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground/80">
            Play, Learn and Grow Together!
          </h2>
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
        </div>

        <div className="relative animate-fade-in-up w-[85%] mx-auto md:w-4/5 lg:w-[70%] lg:ml-auto lg:mr-8" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-cool blur-3xl opacity-60" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white/80 shadow-card">
            <img
              src="/gallery/photo-3.jpeg"
              alt="Happy preschool children smiling"
              className="h-full w-full object-cover"
              width={1280}
              height={960}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


