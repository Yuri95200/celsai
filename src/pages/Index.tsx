
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ChatbotDemo from "@/components/ChatbotDemo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import PricingFAQ from "@/components/PricingFAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Assurons-nous que la page commence tout en haut
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <ChatbotDemo />
        <Pricing />
        <Testimonials />
        <PricingFAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
