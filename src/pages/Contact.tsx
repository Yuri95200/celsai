
import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/Contact";
import { Container } from "@/components/ui/container";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contactez Celsai | Experts en IA pour Service Client</title>
        <meta name="description" content="Entrez en contact avec notre équipe d'experts pour discuter de vos besoins en matière de service client IA et découvrir comment Celsai peut transformer votre expérience client." />
        <meta name="keywords" content="contact Celsai, service client IA, assistance IA, démo service client, support technique IA, Celsai" />
        <link rel="canonical" href="https://www.celsai.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contactez Celsai | Experts en IA pour Service Client" />
        <meta property="og:description" content="Entrez en contact avec notre équipe d'experts pour discuter de vos besoins en matière de service client IA." />
        <meta property="og:url" content="https://www.celsai.com/contact" />
        <meta property="og:image" content="/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contactez Celsai | Experts en IA pour Service Client" />
        <meta name="twitter:description" content="Entrez en contact avec notre équipe d'experts pour discuter de vos besoins en matière de service client IA." />
        <meta name="twitter:image" content="/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Celsai",
            "description": "Contactez notre équipe d'experts en IA pour service client",
            "mainEntity": {
              "@type": "Organization",
              "name": "Celsai",
              "telephone": "+33 6 05 53 35 46",
              "email": "contact@celsai.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "24 rue du Gouverneur Général Eboue",
                "addressLocality": "Issy-les-Moulineaux",
                "postalCode": "92130",
                "addressCountry": "FR"
              }
            }
          }
        `}</script>
      </Helmet>
      <Header />
      <main className="flex-grow pt-24">
        <div className="py-12 bg-gradient-to-b from-blue-50 to-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium mb-4">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Nous sommes à votre écoute
              </h1>
              <p className="text-xl text-gray-600">
                Notre équipe d'experts est prête à répondre à toutes vos questions et à vous aider à transformer votre service client avec notre solution d'intelligence artificielle.
              </p>
            </div>
          </Container>
        </div>
        
        <ContactSection />
        
        <section className="py-16 bg-celsai-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Questions fréquentes</h2>
              <p className="text-lg text-gray-600 mb-12">
                Vous trouverez peut-être la réponse à votre question ci-dessous. Si ce n'est pas le cas, n'hésitez pas à nous contacter directement.
              </p>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white p-6 rounded-lg shadow-sm text-left">
                  <h3 className="font-semibold text-xl mb-3">Combien de temps dure la période d'essai ?</h3>
                  <p className="text-gray-600">Notre période d'essai gratuit dure 14 jours, avec un accès complet à toutes les fonctionnalités et un support personnalisé pour vous aider à démarrer.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-left">
                  <h3 className="font-semibold text-xl mb-3">Comment fonctionne l'intégration avec mes outils existants ?</h3>
                  <p className="text-gray-600">Celsai s'intègre facilement avec la plupart des CRM, plateformes de support et outils de communication. Notre équipe vous guidera tout au long du processus d'intégration.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-left">
                  <h3 className="font-semibold text-xl mb-3">Quelle est la durée moyenne de déploiement ?</h3>
                  <p className="text-gray-600">Le déploiement initial peut être réalisé en quelques jours. L'optimisation complète avec votre base de connaissances prend généralement 2 à 4 semaines selon la complexité.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-left">
                  <h3 className="font-semibold text-xl mb-3">Proposez-vous un accompagnement personnalisé ?</h3>
                  <p className="text-gray-600">Oui, chaque client bénéficie d'un gestionnaire de compte dédié qui vous accompagne durant l'installation, la formation et l'optimisation continue de votre solution.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
