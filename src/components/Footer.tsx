import { Heart } from "lucide-react";

export const Footer = () => (
  <footer className="relative bg-foreground text-background pt-16 pb-8 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-12 bg-background">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full" aria-hidden>
        <path d="M0,0 C240,60 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="hsl(var(--foreground))" />
      </svg>
    </div>

    <div className="container relative pt-12">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.ico" alt="Kidz playschool Logo" className="h-11 w-auto object-contain" />
            <div>
              <div className="font-display font-bold text-xl">Kidz playschool</div>
            </div>
          </div>
          <p className="text-background/70 max-w-md leading-relaxed">
            Where curiosity meets care. Nurturing the next generation of curious, kind, and confident little humans.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><a href="#programs" className="hover:text-secondary transition-colors">Programs</a></li>
            <li><a href="#timeline" className="hover:text-secondary transition-colors">Daily Life</a></li>
            <li><a href="#gallery" className="hover:text-secondary transition-colors">Gallery</a></li>
            <li><a href="#locations" className="hover:text-secondary transition-colors">Locations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li>09176111302</li>
            <li>Mon–Fri · 8:30 AM – 4:30 PM</li>
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-background/60">
        <span>© {new Date().getFullYear()} Kidz playschool. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> for little learners
        </span>
      </div>
    </div>
  </footer>
);
