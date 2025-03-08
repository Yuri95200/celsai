import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { useNavigate } from "react-router-dom";
const Demo = () => {
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Création du script pour le widget de réservation
    const script = document.createElement("script");
    script.src = "https://link.schedmate.co/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Nettoyage du script quand le composant est démonté
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    // Fonction pour ajuster la hauteur de l'iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === 'string' && event.data.includes('schedmate:height')) {
        try {
          const data = JSON.parse(event.data.split('schedmate:height:')[1]);
          const iframe = document.getElementById("T46yHwigNm8Fmx8Fzcdy_1741345593056") as HTMLIFrameElement;
          if (iframe && data.height) {
            iframe.style.height = `${data.height}px`;
          }
        } catch (e) {
          console.error("Erreur lors du traitement du message:", e);
        }
      }
    };

    // Ajout d'une fonction pour redimensionner l'iframe lors du chargement de la page et des changements de taille d'écran
    const resizeObserver = new ResizeObserver(() => {
      const iframe = document.getElementById("T46yHwigNm8Fmx8Fzcdy_1741345593056") as HTMLIFrameElement;
      if (iframe) {
        // Force le recalcul de la taille de l'iframe
        iframe.style.minHeight = window.innerWidth < 768 ? '750px' : '650px';
      }
    });
    if (iframeContainerRef.current) {
      resizeObserver.observe(iframeContainerRef.current);
    }
    window.addEventListener('message', handleMessage);
    window.addEventListener('resize', () => {
      const iframe = document.getElementById("T46yHwigNm8Fmx8Fzcdy_1741345593056") as HTMLIFrameElement;
      if (iframe) {
        iframe.style.minHeight = window.innerWidth < 768 ? '750px' : '650px';
      }
    });
    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('resize', () => {});
      if (iframeContainerRef.current) {
        resizeObserver.unobserve(iframeContainerRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);
  return <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Réservez une Démo de Celsai | Découvrez notre IA Service Client</title>
        <meta name="description" content="Réservez une démonstration personnalisée pour découvrir comment Celsai peut transformer votre service client grâce à notre plateforme d'IA intégrée et nos solutions sur mesure." />
        <meta name="keywords" content="démonstration IA, démo service client, présentation chatbot, essai plateforme IA, rendez-vous consultation, Celsai" />
        <link rel="canonical" href="https://www.celsai.com/demo" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Réservez une Démo de Celsai | Découvrez notre IA Service Client" />
        <meta property="og:description" content="Réservez une démonstration personnalisée pour découvrir comment Celsai peut transformer votre service client." />
        <meta property="og:url" content="https://www.celsai.com/demo" />
        <meta property="og:image" content="/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Réservez une Démo de Celsai | Découvrez notre IA Service Client" />
        <meta name="twitter:description" content="Réservez une démonstration personnalisée pour découvrir comment Celsai peut transformer votre service client." />
        <meta name="twitter:image" content="/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Réservez une Démo de Celsai",
            "description": "Démonstration personnalisée de notre solution d'IA pour service client",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "description": "Démo gratuite de 30 minutes avec un expert Celsai"
            }
          }
        `}</script>
      </Helmet>
      <Header />
      <main className="flex-grow pt-32 pb-20 w-full">
        <div className="w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6">Réservez votre démonstration</h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Découvrez comment Celsai peut transformer votre service client avec une démonstration personnalisée de notre plateforme.
              </p>
            </div>
          </div>
          
          <div className="w-full max-w-4xl mx-auto px-2 sm:px-4" ref={iframeContainerRef}>
            <div className="bg-white rounded-xl shadow-lg p-2 sm:p-4">
              <iframe src="https://link.schedmate.co/widget/booking/T46yHwigNm8Fmx8Fzcdy" style={{
              width: '100%',
              border: 'none',
              minHeight: '750px'
            }} id="T46yHwigNm8Fmx8Fzcdy_1741345593056" title="Calendrier de réservation de démonstration Celsai" />
            </div>
          </div>
          
          <Container className="mt-12">
            <div className="bg-celsai-50 rounded-xl p-4 sm:p-8 text-center max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Pourquoi choisir une démo personnalisée ?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center mx-auto mb-4">
                    
                  </div>
                  <h3 className="font-medium text-lg mb-2">Solutions sur mesure</h3>
                  <p className="text-sm sm:text-base text-gray-600">Découvrez comment notre technologie s'adapte spécifiquement à votre secteur d'activité.</p>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center mx-auto mb-4">
                    
                  </div>
                  <h3 className="font-medium text-lg mb-2">Questions spécifiques</h3>
                  <p className="text-sm sm:text-base text-gray-600">Posez toutes vos questions à un expert qui comprend les défis de votre entreprise.</p>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center mx-auto mb-4">
                    
                  </div>
                  <h3 className="font-medium text-lg mb-2">Évaluation précise</h3>
                  <p className="text-sm sm:text-base text-gray-600">Obtenez une estimation claire des bénéfices et du ROI pour votre organisation.</p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Demo;