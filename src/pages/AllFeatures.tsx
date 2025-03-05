
import React from "react";
import { Container } from "@/components/ui/container";
import { Link } from "react-router-dom";
import { Bot, BookOpen, Wrench, ArrowUpRight, BarChart3, Briefcase, Network, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Les mêmes fonctionnalités que celles définies dans Features.tsx
const features = [
  {
    icon: Bot,
    title: "Chatbot intelligent multicanal",
    description: "Intégrez votre support client sur votre site web, applications mobiles, réseaux sociaux et messageries avec une compréhension contextuelle avancée.",
    link: "/features/chatbot"
  },
  {
    icon: BookOpen,
    title: "Base de connaissances dynamique",
    description: "Analyse automatique de votre documentation existante et apprentissage continu basé sur les interactions précédentes.",
    link: "/features/knowledge-base"
  },
  {
    icon: Wrench,
    title: "Résolution automatisée",
    description: "Diagnostic préliminaire des problèmes techniques et proposition de solutions étape par étape pour guider vos utilisateurs.",
    link: "/features/automated-resolution"
  },
  {
    icon: ArrowUpRight,
    title: "Escalade intelligente",
    description: "Détection des cas complexes nécessitant une intervention humaine avec transfert contextuel et résumé du problème.",
    link: "/features/smart-escalation"
  },
  {
    icon: BarChart3,
    title: "Analyses et tableaux de bord",
    description: "Suivi des problèmes fréquents, mesure des taux de résolution automatique et identification des axes d'amélioration.",
    link: "/features/analytics"
  },
  {
    icon: Briefcase,
    title: "Personnalisation par secteur",
    description: "Modèles pré-entraînés pour différents secteurs d'activité et adaptation du ton selon l'identité de votre marque.",
    link: "/features/industry-customization"
  },
  {
    icon: Network,
    title: "Intégration avec vos outils",
    description: "Connexion aux principaux CRM, plateformes de ticketing et API ouvertes pour vos systèmes propriétaires.",
    link: "/features/integrations"
  }
];

const keyBenefits = [
  "Réduction de 40-70% des coûts de support",
  "Temps de réponse réduit de plusieurs heures à quelques secondes",
  "Disponibilité 24/7 sans coûts supplémentaires",
  "Expérience client cohérente sur tous les canaux"
];

const useCase = [
  {
    title: "E-commerce",
    description: "Automatisez les questions sur les commandes, le suivi des colis et les retours produits."
  },
  {
    title: "SaaS",
    description: "Guidez les utilisateurs dans la configuration et résolvez les problèmes techniques courants."
  },
  {
    title: "Services financiers",
    description: "Répondez aux questions sur les comptes, les transactions et la sécurité."
  },
  {
    title: "Santé",
    description: "Assistez les patients pour la prise de rendez-vous et les questions fréquentes."
  }
];

const AllFeatures = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium mb-4">
                Toutes nos fonctionnalités
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Une suite complète pour transformer votre <span className="text-gradient">support client</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Découvrez comment Celsai révolutionne chaque aspect de votre service client avec des solutions d'IA avancées et intuitives.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-celsai-500 hover:bg-celsai-600 text-white">
                  Essai gratuit
                </Button>
                <Button variant="outline" className="border-gray-200">
                  Demander une démo
                </Button>
              </div>
            </div>
          </Container>
        </section>
        
        {/* All Features Grid */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Link 
                  key={index} 
                  to={feature.link} 
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col h-full"
                >
                  <div className="h-14 w-14 bg-celsai-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-celsai-100 transition-colors">
                    <feature.icon className="h-7 w-7 text-celsai-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{feature.description}</p>
                  <div className="mt-auto flex items-center text-celsai-500 font-medium">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium mb-4">
                  Avantages
                </span>
                <h2 className="text-3xl font-bold mb-6">
                  Pourquoi choisir <span className="text-gradient">Celsai</span> ?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Notre plateforme ne se contente pas d'automatiser votre support, elle transforme complètement l'expérience client et votre efficacité opérationnelle.
                </p>
                <ul className="space-y-4">
                  {keyBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-celsai-500 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden p-8">
                  <h3 className="text-xl font-semibold mb-6">Cas d'utilisation par secteur</h3>
                  <div className="space-y-6">
                    {useCase.map((item, index) => (
                      <div key={index} className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
                        <h4 className="font-medium mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Integration Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium mb-4">
                Écosystème
              </span>
              <h2 className="text-3xl font-bold mb-6">
                S'intègre parfaitement à vos outils existants
              </h2>
              <p className="text-lg text-gray-600">
                Celsai se connecte à votre infrastructure existante pour une mise en place rapide et des résultats immédiats.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="bg-gray-50 rounded-lg h-20 flex items-center justify-center">
                  <div className="text-gray-400 text-xs">Logo partenaire</div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-celsai-50">
          <Container>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Prêt à transformer votre service client ?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Rejoignez plus de 500 entreprises qui utilisent Celsai pour améliorer leur support client et réduire leurs coûts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://celsai.com/demo">
                  <Button className="bg-celsai-500 hover:bg-celsai-600 text-white" size="lg">
                    Commencer votre essai gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Button variant="outline" className="border-gray-200" size="lg">
                  Voir la démonstration
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllFeatures;
