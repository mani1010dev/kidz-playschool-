import { SectionWrap } from "@/components/Decor";

const posters = [
  "/posters/poster-1.jpeg",
  "/posters/poster-2.jpeg",
  "/posters/poster-4.jpeg",
];

export const Posters = () => {
  return (
    <SectionWrap id="posters" className="bg-background">
      <div className="blob bg-sunny-soft w-[400px] h-[400px] top-10 -left-20" />
      <div className="blob bg-lavender-soft w-[300px] h-[300px] bottom-10 -right-10" />

      <div className="container relative max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="pill bg-mint-soft text-mint-foreground mb-4">🌟 Highlights</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-cta bg-clip-text text-transparent">Featured Posters</span>
          </h2>
          <p className="text-muted-foreground text-lg">Take a peek at our exciting school highlights and announcements.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {posters.map((src, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-3xl shadow-card hover:shadow-lift transition-all border border-border/50 bg-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={src}
                alt={`Poster ${i + 1}`}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
};
