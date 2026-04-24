import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { MiniGames } from "@/components/sections/MiniGames";
import { Timeline } from "@/components/sections/Timeline";
import { Gallery } from "@/components/sections/Gallery";
import { Posters } from "@/components/sections/Posters";
import { Testimonials } from "@/components/sections/Testimonials";
import { Locations } from "@/components/sections/Locations";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Programs />
      <Timeline />
      <MiniGames />
      <Gallery />
      <Posters />
      <Testimonials />
      <Locations />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
