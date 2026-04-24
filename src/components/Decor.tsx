import { ReactNode } from "react";

export const FloatingBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="blob bg-primary-soft w-[420px] h-[420px] -top-20 -left-20 animate-float-slow" />
    <div className="blob bg-secondary-soft w-[360px] h-[360px] top-1/3 -right-24 animate-float" style={{ animationDelay: "1s" }} />
    <div className="blob bg-mint-soft w-[300px] h-[300px] bottom-10 left-1/4 animate-float-slow" style={{ animationDelay: "2s" }} />
    <div className="blob bg-lavender-soft w-[280px] h-[280px] top-10 right-1/3 animate-float" style={{ animationDelay: "0.5s" }} />
  </div>
);

export const Cloud = ({ className = "", delay = "0s", size = 120 }: { className?: string; delay?: string; size?: number }) => (
  <svg
    viewBox="0 0 200 100"
    width={size}
    height={size * 0.5}
    className={`absolute opacity-80 ${className}`}
    style={{ animation: `drift 80s linear infinite`, animationDelay: delay }}
    aria-hidden
  >
    <ellipse cx="60" cy="60" rx="40" ry="30" fill="white" />
    <ellipse cx="100" cy="50" rx="45" ry="35" fill="white" />
    <ellipse cx="140" cy="60" rx="38" ry="28" fill="white" />
    <ellipse cx="80" cy="70" rx="35" ry="22" fill="white" />
    <ellipse cx="120" cy="72" rx="38" ry="22" fill="white" />
  </svg>
);

export const SectionWrap = ({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) => (
  <section id={id} className={`relative py-20 md:py-28 overflow-hidden ${className}`}>
    {children}
  </section>
);

export const StarDecor = ({ className = "", color = "hsl(var(--sunny))" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden>
    <path d="M12 2l2.4 6.6L21 9.3l-5 4.6 1.4 6.8L12 17.3l-5.4 3.4L8 13.9 3 9.3l6.6-.7L12 2z" />
  </svg>
);
