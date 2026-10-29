import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ScrollStory } from "@/components/sections/ScrollStory";
import { Architecture } from "@/components/sections/Architecture";
import { Lifestyle } from "@/components/sections/Lifestyle";
import { Amenities } from "@/components/sections/Amenities";
import { Masterplan } from "@/components/sections/Masterplan";
import { FloorPlans } from "@/components/sections/FloorPlans";
import { Location } from "@/components/sections/Location";
import { ConstructionTimeline } from "@/components/sections/ConstructionTimeline";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookVisit } from "@/components/sections/BookVisit";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Concierge } from "@/components/sections/Concierge";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollStory />
        <Architecture />
        <Lifestyle />
        <Amenities />
        <Masterplan />
        <FloorPlans />
        <Location />
        <ConstructionTimeline />
        <Gallery />
        <Testimonials />
        <BookVisit />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Concierge />
      <WhatsAppButton />
    </>
  );
}
