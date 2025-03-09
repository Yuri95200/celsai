
import React from "react";
import { Helmet } from "react-helmet";
import FeatureLayout from "@/components/FeatureLayout";
import { Container } from "@/components/ui/container";
import { Bot, MessageSquare, Languages, Clock, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ChatbotFeature = () => {
  const benefits = [
    {
      icon: MessageSquare,
      title: "Conversations naturelles",
      description: "Notre IA comprend le langage naturel et répond de manière conversationnelle et contextuelle."
    },
    {
      icon: Languages,
      title: "Multilingue",
      description: "Support de plus de 20 langues pour servir vos clients internationaux sans barrière linguistique."
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Assistance instantanée à toute heure du jour et de la nuit, sans temps d'attente."
    },
    {
      icon: Shield,
      title: "Sécurisé",
      description: "Sécurité des données de niveau entreprise et conformité RGPD pour vos conversations."
    },
    {
      icon: Users,
      title: "Personnalisable",
      description: "Adaptez le ton, le style et les réponses pour refléter l'identité de votre marque."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Chatbot IA Avancé pour Service Client | Disponible 24/7 | Celsai</title>
        <meta name="description" content="Offrez des réponses instantanées et personnalisées à vos clients 24h/24 et 7j/7 grâce à notre chatbot IA avancé. Multilingue, conversationnel et sécurisé selon les normes RGPD." />
        <meta name="keywords" content="chatbot IA, assistant virtuel, réponses automatisées, service client 24/7, support multilingue, Celsai" />
        <link rel="canonical" href="https://www.celsai.com/features/chatbot" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Chatbot IA Avancé pour Service Client | Celsai" />
        <meta property="og:description" content="Offrez des réponses instantanées et personnalisées à vos clients 24h/24 et 7j/7 grâce à notre chatbot IA avancé." />
        <meta property="og:url" content="https://www.celsai.com/features/chatbot" />
        <meta property="og:image" content="/lovable-uploads/53205e58-e4a2-4a41-8c98-124ad7ba6ff6.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Chatbot IA Celsai",
            "description": "Chatbot intelligent multicanal disponible 24/7",
            "image": "/lovable-uploads/53205e58-e4a2-4a41-8c98-124ad7ba6ff6.png",
            "brand": {
              "@type": "Brand",
              "name": "Celsai"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            }
          }
        `}</script>
      </Helmet>
      <FeatureLayout
        icon={Bot}
        title="Chatbot intelligent multicanal"
        description="Offrez une assistance client automatisée et intelligente sur tous vos canaux digitaux."
        imageSrc="/lovable-uploads/53205e58-e4a2-4a41-8c98-124ad7ba6ff6.png"
      >
        <section className="py-16">
          <Container>
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Comment fonctionne notre chatbot IA</h2>
              <p className="text-lg text-gray-600 mb-4">
                Notre chatbot intelligent va au-delà des simples arbres de décision et des réponses préprogrammées. 
                Il utilise des modèles de langage avancés pour comprendre véritablement les demandes de vos clients 
                et fournir des réponses pertinentes et contextuelles.
              </p>
              <p className="text-lg text-gray-600">
                Intégrez le chatbot sur votre site web, applications mobiles, Facebook Messenger, WhatsApp, et autres 
                canaux pour offrir une expérience client cohérente quel que soit le point de contact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                    <benefit.icon className="h-6 w-6 text-celsai-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Cas d'utilisation courants</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg mb-2">Réponse aux questions fréquentes</h4>
                  <p className="text-gray-600">
                    Automatisez les réponses aux questions récurrentes pour libérer votre équipe et réduire les temps d'attente.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg mb-2">Assistance à la navigation</h4>
                  <p className="text-gray-600">
                    Guidez vos visiteurs vers les informations ou produits qu'ils recherchent sur votre site web.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg mb-2">Qualification des leads</h4>
                  <p className="text-gray-600">
                    Collectez des informations pertinentes avant de transférer les conversations à votre équipe commerciale.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg mb-2">Support produit</h4>
                  <p className="text-gray-600">
                    Fournissez des instructions étape par étape pour résoudre les problèmes techniques courants.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/demo">
                <Button size="lg" className="bg-celsai-500 hover:bg-celsai-600 text-white">
                  Réserver une démonstration personnalisée
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </FeatureLayout>
    </>
  );
};

export default ChatbotFeature;
