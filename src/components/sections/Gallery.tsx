import { SectionWrap } from "@/components/Decor";

const items = [
  { src: "/gallery/photo-2.jpeg", label: "Block play", className: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/photo-13.jpeg", label: "Art & crafts" },
  { src: "/gallery/photo-14.jpeg", label: "Storytime" },
  { src: "/gallery/photo-15.jpeg", label: "Outdoor play", className: "md:col-span-2" },
  { src: "/gallery/WhatsApp%20Image%202026-04-23%20at%205.53.03%20PM.jpeg", label: "Snack time" },
  { src: "/gallery/WhatsApp%20Image%202026-04-23%20at%205.55.13%20PM.jpeg", label: "Music & dance" },
];

export const Gallery = () => {
  return (
    <SectionWrap id="gallery" className="bg-gradient-warm">
      <div className="blob bg-mint-soft w-[400px] h-[400px] -top-20 right-0" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="pill bg-white/80 text-secondary-foreground mb-4">📸 Moments</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A peek into our <span className="bg-gradient-cta bg-clip-text text-transparent">happy classroom</span>
          </h2>
          <p className="text-muted-foreground text-lg">Real smiles, real learning, real every day.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl shadow-card hover:shadow-lift transition-all ${it.className ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
};
