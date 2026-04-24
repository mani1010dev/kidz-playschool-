import { SectionWrap } from "@/components/Decor";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Balambigai M",
    text: "My son was here in day care for 3 years, he spent most of his childhood days here more than home! Nice people! Take care of children so well. Safe and secure environment.",
  },
  {
    name: "Radhish Thekkute",
    text: "Best place for kids to start the early days of learning. Have best teaching and non-teaching staff. Pays special attention to all children equally. Have lot of fun and learning activities.",
  },
  {
    name: "Shikha Goyal",
    text: "Kidz playschool is the best school in Velachery. She joined in Nursery, and in these 3 years, she learnt a lot not only academic wise but moral values also. We still miss her teachers!",
  },
  {
    name: "Farheen Md",
    text: "I would like to recommend this playschool to everyone. When my daughter joined this school she was like a mimosa plant, and the day she exited she was confident and improved in her communication skills.",
  },
  {
    name: "Kavitha Moorthy",
    text: "My son is in kidz play school since last year. The teaching and non-teaching staffs are kind and good enough to take care of the kids. The curriculum they follow is extremely satisfactory.",
  },
  {
    name: "Selvi Ganesan",
    text: "The school is the best choice for kiddos who want to learn creatively. They have nice infrastructure and good teachers. My daughter became bold, courageous, and communicative too.",
  },
];

export const Testimonials = () => {
  return (
    <SectionWrap id="testimonials" className="bg-background">
      <div className="blob bg-lavender-soft w-[400px] h-[400px] top-10 right-0" />
      <div className="blob bg-primary-soft w-[300px] h-[300px] bottom-10 left-0" />

      <div className="container relative max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="pill bg-lavender-soft text-lavender-foreground mb-4">💖 Loved by parents</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stories from our <span className="bg-gradient-cta bg-clip-text text-transparent">family</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="break-inside-avoid relative flex flex-col bg-[#FDF9F3] rounded-2xl p-7 shadow-sm hover:shadow-md transition-all border border-[#F0E6D8]"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-[#C8A153] text-[#C8A153]" />
                ))}
              </div>

              <p className="text-[#5A4F45] leading-relaxed mb-8 italic text-base">"{r.text}"</p>

              <div className="mt-auto">
                <div className="font-display font-bold text-[1.15rem] text-[#2A2015]">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
};
