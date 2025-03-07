
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
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
    
    // Force une seconde remontée après le chargement (pour corriger les problèmes sur mobile)
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Celsai - Solution d'IA pour Service Client | Chatbot Intelligent et Automatisation</title>
        <meta name="description" content="Transformez votre service client avec Celsai, la plateforme d'IA avancée qui intègre chatbot intelligent, base de connaissances et automatisation des résolutions." />
      </Helmet>
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
