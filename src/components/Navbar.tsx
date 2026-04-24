import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Daycare", href: "#daycare" },
  { label: "Activities", href: "#timeline" },
  { label: "Play", href: "#games" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/60 bg-background/80 px-5 py-3 shadow-soft backdrop-blur-lg">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <img src="/logo.png" alt="Kidz playschool Logo" className="h-9 w-auto object-contain" />
          <span>
            Kidz <span className="text-primary">playschool</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden rounded-full md:inline-flex">
            <a href="#contact">Enroll Now</a>
          </Button>
          <button
             className="grid h-10 w-10 place-items-center border-none rounded-full bg-muted md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-border/60 bg-background/95 shadow-soft backdrop-blur-lg transition-all md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        )}
      >
        <div className="flex flex-col p-3">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-foreground/80 hover:bg-muted"
            >
              {n.label}
            </a>
          ))}
          <Button asChild className="mt-2 rounded-full">
            <a href="#contact" onClick={() => setOpen(false)}>Enroll Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
