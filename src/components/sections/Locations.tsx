import { SectionWrap } from "@/components/Decor";
import { MapPin, Phone, Clock } from "lucide-react";

const branches = [
  {
    name: "Main Campus",
    address: "4, Park Avenue 1st Street, Baby Nagar, Seshadripuram, Velachery, Chennai, Tamil Nadu 600042",
    phone: "09176111302",
    hours: "Mon–Fri · 8:30 AM – 4:30 PM",
    color: "primary",
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
  }
];

const colorMap: Record<string, string> = {
  primary: "bg-primary-soft text-primary",
  mint: "bg-mint-soft text-mint-foreground",
  secondary: "bg-secondary-soft text-secondary-foreground",
};

export const Locations = () => {
  return (
    <SectionWrap id="locations" className="bg-gradient-sky">
      <div className="blob bg-lavender-soft w-[400px] h-[400px] top-0 right-0" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="pill bg-white/80 text-primary mb-4">📍 Find Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">campus</span>
          </h2>
          <p className="text-muted-foreground text-lg">A welcoming campus, with a warm philosophy.</p>
        </div>

        <div className="grid md:grid-cols-1 max-w-sm mx-auto gap-6">
          {branches.map((b) => (
            <div
              key={b.name}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-1 transition-all border border-border/50"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={b.img} alt={b.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`absolute top-4 left-4 pill ${colorMap[b.color]} bg-white/90`}>
                  <MapPin className="w-3.5 h-3.5" /> Branch
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">{b.name}</h3>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span>{b.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" /> {b.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" /> {b.hours}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
};
