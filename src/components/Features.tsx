import React from "react";
import { Container } from "@/components/ui/container";
import { Link } from "react-router-dom";
import { Bot, BookOpen, Wrench, ArrowUpRight, BarChart3, Briefcase, Network, CheckCircle2 } from "lucide-react";
const features = [{
  icon: Bot,
  title: "Chatbot intelligent multicanal",
  description: "Intégrez votre support client sur votre site web, applications mobiles, réseaux sociaux et messageries avec une compréhension contextuelle avancée.",
  link: "/features/chatbot"
}, {
  icon: BookOpen,
  title: "Base de connaissances dynamique",
  description: "Analyse automatique de votre documentation existante et apprentissage continu basé sur les interactions précédentes.",
  link: "/features/knowledge-base"
}, {
  icon: Wrench,
  title: "Résolution automatisée",
  description: "Diagnostic préliminaire des problèmes techniques et proposition de solutions étape par étape pour guider vos utilisateurs.",
  link: "/features/automated-resolution"
}, {
  icon: ArrowUpRight,
  title: "Escalade intelligente",
  description: "Détection des cas complexes nécessitant une intervention humaine avec transfert contextuel et résumé du problème.",
  link: "/features/smart-escalation"
}, {
  icon: BarChart3,
  title: "Analyses et tableaux de bord",
  description: "Suivi des problèmes fréquents, mesure des taux de résolution automatique et identification des axes d'amélioration.",
  link: "/features/analytics"
}, {
  icon: Briefcase,
  title: "Personnalisation par secteur",
  description: "Modèles pré-entraînés pour différents secteurs d'activité et adaptation du ton selon l'identité de votre marque.",
  link: "/features/industry-customization"
}, {
  icon: Network,
  title: "Intégration avec vos outils",
  description: "Connexion aux principaux CRM, plateformes de ticketing et API ouvertes pour vos systèmes propriétaires.",
  link: "/features/integrations"
}];
const keyBenefits = ["Réduction de 40-70% des coûts de support", "Temps de réponse réduit de plusieurs heures à quelques secondes", "Disponibilité 24/7 sans coûts supplémentaires", "Expérience client cohérente sur tous les canaux"];
const Features = () => {
  return <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium">
            Fonctionnalités
          </span>
          <h2 className="mt-4 font-bold text-gradient">
            Support client augmenté par l'IA
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Celsai combine le meilleur de l'intelligence artificielle et de l'expérience humaine pour créer un support client inégalé.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Link key={index} to={feature.link} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all card-hover">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Link>)}
        </div>
        
        <div className="mt-20 glass-effect rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Les <span className="text-gradient">avantages</span> concurrentiels
              </h3>
              <p className="text-gray-600 mb-6">
                Celsai ne se contente pas d'automatiser votre support, il transforme complètement l'expérience client et votre efficacité opérationnelle.
              </p>
              <ul className="space-y-4">
                {keyBenefits.map((benefit, index) => <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-celsai-500 mr-2 flex-shrink-0" />
                    <span className="text-left">{benefit}</span>
                  </li>)}
              </ul>
            </div>
            <div className="md:w-1/2 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-lg font-medium">Coûts de support</div>
                  <div className="text-sm text-gray-500">Économies réalisées</div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="text-sm">Sans Celsai</div>
                      <div className="text-sm font-medium">100%</div>
                    </div>
                    <div className="h-3 w-full bg-gray-100 rounded-full">
                      <div className="h-3 bg-gray-400 rounded-full" style={{
                      width: '100%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="text-sm">Avec Celsai</div>
                      <div className="text-sm font-medium">-60%</div>
                    </div>
                    <div className="h-3 w-full bg-gray-100 rounded-full">
                      <div className="h-3 bg-celsai-500 rounded-full" style={{
                      width: '40%'
                    }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">Économie annuelle moyenne</div>
                      <div className="text-2xl font-bold text-celsai-500">45,000€</div>
                    </div>
                    <div className="text-xs text-gray-500 text-right">
                      Basé sur une équipe<br />de 5 agents de support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>;
};
export default Features;