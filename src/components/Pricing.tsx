
import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const pricingPlans = [
  {
    name: "Startup",
    price: 200,
    description: "Pour les petites entreprises qui démarrent leur transformation digitale.",
    features: [
      "500 conversations/mois",
      "1 canal d'intégration",
      "Base de connaissances standard",
      "Analyses basiques",
      "Support par email",
      "Temps de réponse 24h"
    ],
    recommended: false,
    color: "bg-white"
  },
  {
    name: "Business",
    price: 800,
    description: "Pour les entreprises en croissance qui souhaitent améliorer leur service client.",
    features: [
      "2,500 conversations/mois",
      "3 canaux d'intégration",
      "Base de connaissances avancée",
      "Analyses détaillées",
      "Support prioritaire",
      "Temps de réponse 8h",
      "Personnalisation de marque"
    ],
    recommended: true,
    color: "bg-gradient-to-br from-celsai-50 to-white"
  },
  {
    name: "Enterprise",
    price: 2500,
    description: "Pour les grandes entreprises avec des besoins complexes et des volumes importants.",
    features: [
      "10,000+ conversations/mois",
      "Tous les canaux d'intégration",
      "Base de connaissances personnalisée",
      "Analyses avancées et prédictives",
      "Support dédié 24/7",
      "Temps de réponse 1h",
      "Personnalisation complète",
      "API dédiées et intégrations CRM"
    ],
    recommended: false,
    color: "bg-white"
  }
];

const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(true);
  
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium">
            Tarification
          </span>
          <h2 className="mt-4 font-bold text-gradient">
            Des forfaits adaptés à vos besoins
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choisissez le plan qui correspond le mieux à la taille et aux besoins de votre entreprise. Économisez avec la facturation annuelle.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-gray-100 p-1 rounded-full flex items-center">
              <button
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  annualBilling ? "bg-white shadow-sm text-gray-900" : "text-gray-600"
                }`}
                onClick={() => setAnnualBilling(true)}
              >
                Annuel
                <span className="ml-1 text-xs text-celsai-500 font-normal">-20%</span>
              </button>
              <button
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  !annualBilling ? "bg-white shadow-sm text-gray-900" : "text-gray-600"
                }`}
                onClick={() => setAnnualBilling(false)}
              >
                Mensuel
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`border ${
                plan.recommended ? "border-celsai-300 ring-2 ring-celsai-100" : "border-gray-200"
              } rounded-xl ${plan.color} shadow-sm p-8 relative flex flex-col h-full`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-celsai-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Recommandé
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{annualBilling ? Math.round(plan.price * 0.8) : plan.price}€</span>
                <span className="text-gray-600 ml-1">/mois</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-celsai-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`${
                  plan.recommended 
                    ? "bg-celsai-500 hover:bg-celsai-600 text-white" 
                    : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
                } w-full`}
              >
                {plan.recommended ? "Commencer l'essai" : "Choisir ce forfait"}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl font-bold mb-2">Besoin d'un forfait personnalisé ?</h3>
              <p className="text-gray-600">
                Pour les grandes entreprises avec des besoins spécifiques, nous proposons des solutions sur mesure. Contactez notre équipe commerciale pour plus d'informations.
              </p>
            </div>
            <Button className="bg-celsai-500 hover:bg-celsai-600 text-white">
              Contacter l'équipe commerciale
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-medium mb-4">Questions fréquentes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium flex items-center gap-2">
                  Puis-je changer de forfait à tout moment ?
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Vous pouvez changer de forfait à tout moment, le montant sera ajusté au prorata.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </h5>
                <p className="text-gray-600 text-sm mt-1">
                  Oui, vous pouvez mettre à niveau ou rétrograder votre forfait à tout moment. Les changements prendront effet immédiatement.
                </p>
              </div>
              <div>
                <h5 className="font-medium flex items-center gap-2">
                  Qu'est-ce qu'une conversation ?
                </h5>
                <p className="text-gray-600 text-sm mt-1">
                  Une conversation est définie comme un échange complet entre un utilisateur et le chatbot, qui peut comprendre plusieurs messages.
                </p>
              </div>
              <div>
                <h5 className="font-medium flex items-center gap-2">
                  Comment fonctionne l'essai gratuit ?
                </h5>
                <p className="text-gray-600 text-sm mt-1">
                  Vous bénéficiez d'un accès complet à toutes les fonctionnalités pendant 14 jours, sans engagement et sans carte bancaire.
                </p>
              </div>
              <div>
                <h5 className="font-medium flex items-center gap-2">
                  Quels sont les canaux d'intégration disponibles ?
                </h5>
                <p className="text-gray-600 text-sm mt-1">
                  Site web, applications mobiles, Facebook Messenger, WhatsApp, Instagram, Twitter, et plus selon votre forfait.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
