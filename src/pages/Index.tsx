
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
        <meta name="description" content="Transformez votre service client avec Celsai, la plateforme d'IA avancée qui intègre chatbot intelligent, base de connaissances et automatisation des résolutions. Réduisez vos coûts et améliorez la satisfaction client." />
        <meta name="keywords" content="service client IA, chatbot intelligent, automation service client, expérience client, satisfaction client, support IA, Celsai" />
        <link rel="canonical" href="https://www.celsai.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Celsai - Solution d'IA pour Service Client | Chatbot Intelligent et Automatisation" />
        <meta property="og:description" content="Transformez votre service client avec Celsai, la plateforme d'IA avancée qui intègre chatbot intelligent, base de connaissances et automatisation des résolutions." />
        <meta property="og:url" content="https://www.celsai.com/" />
        <meta property="og:image" content="/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Celsai - Solution d'IA pour Service Client | Chatbot Intelligent et Automatisation" />
        <meta name="twitter:description" content="Transformez votre service client avec Celsai, la plateforme d'IA avancée qui intègre chatbot intelligent, base de connaissances et automatisation des résolutions." />
        <meta name="twitter:image" content="/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Celsai",
            "url": "https://www.celsai.com",
            "logo": "/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png",
            "description": "Solutions d'IA pour service client avec chatbot intelligent et automatisation des résolutions",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "24 rue du Gouverneur Général Eboue",
              "addressLocality": "Issy-les-Moulineaux",
              "postalCode": "92130",
              "addressCountry": "FR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33 6 05 53 35 46",
              "contactType": "customer service",
              "email": "contact@celsai.com",
              "availableLanguage": ["French", "English"]
            }
          }
        `}</script>
      </Helmet>
      <Header />
      <main>
        <Hero />
        <ChatbotDemo />
        <Features />
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
