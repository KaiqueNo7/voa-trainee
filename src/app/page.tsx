import Cta from "@/components/cta";
import Header from "@/components/header";

import AboutVoaTrainee from "@/components/sections/AboutVoaTrainee";
import FaqSection from "@/components/sections/FaqSection";
import FinalContactSection from "@/components/sections/FinalContactSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MentorshipAudience from "@/components/sections/MentorshipAudience";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VoaTraineeJourney from "@/components/sections/VoaTraineeJourney";
import WhatsappCommunity from "@/components/sections/WhatsappCommunity";

export default function Home() {
  return (
    <main>
      <section id="inicio" className="min-h-screen bg-first-section rounded-b-4xl">
        <Header />
        <HeroSection />
      </section>
      <AboutVoaTrainee />
      <TestimonialsSection />
      <VoaTraineeJourney />
      <MentorshipAudience />
      <FaqSection />
      <WhatsappCommunity />
      <FinalContactSection />
      <Footer />
    </main>
  );
}
