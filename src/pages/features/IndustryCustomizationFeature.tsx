
import React from "react";
import FeatureLayout from "@/components/FeatureLayout";
import { Container } from "@/components/ui/container";
import { Briefcase, Store, Hospital, Plane, Landmark, Laptop, PaintBucket } from "lucide-react";

const IndustryCustomizationFeature = () => {
  const industries = [
    {
      icon: Store,
      name: "E-commerce",
      description: "Assistance produit, suivi de commande, processus de retour et remboursement"
    },
    {
      icon: Hospital,
      name: "Santé",
      description: "Prise de rendez-vous, informations sur les services, FAQ sur les assurances"
    },
    {
      icon: Plane,
      name: "Voyage",
      description: "Réservations, modifications, annulations, informations destinations"
    },
    {
      icon: Landmark,
      name: "Services financiers",
      description: "Questions sur les comptes, procédures, produits financiers"
    },
    {
      icon: Laptop,
      name: "SaaS & Tech",
      description: "Support technique, onboarding, dépannage, FAQ produit"
    }
  ];

  return (
    <FeatureLayout
      icon={Briefcase}
      title="Personnalisation par secteur"
      description="Des solutions IA adaptées aux spécificités de votre industrie et à votre marque."
      imageSrc="/lovable-uploads/055c1e16-f0f4-4267-a6a5-69c10c20a6ee.png"
    >
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto mb-16 text-left">
            <h2 className="text-3xl font-bold mb-6">Une IA qui parle le langage de votre industrie</h2>
            <p className="text-lg text-gray-600 mb-4">
              Chaque secteur a son vocabulaire, ses processus et ses défis spécifiques. Notre plateforme
              propose des modèles pré-entraînés pour différentes industries, garantissant des réponses
              pertinentes et précises dans votre domaine d'activité.
            </p>
            <p className="text-lg text-gray-600">
              En plus de l'adaptation sectorielle, nous personnalisons le ton et le style des réponses
              pour refléter parfaitement l'identité de votre marque et offrir une expérience cohérente
              à vos clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                  <industry.icon className="h-6 w-6 text-celsai-500" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-left">{industry.name}</h3>
                <p className="text-gray-600 text-left">{industry.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-celsai-50 to-blue-50 rounded-xl p-8 mb-16">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-bold mb-4">Personnalisation de la marque</h3>
                <p className="text-gray-700 mb-4">
                  Au-delà de l'adaptation à votre secteur, nous façonnons l'IA pour qu'elle communique
                  avec la voix unique de votre marque.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <PaintBucket className="h-5 w-5 text-celsai-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Adaptation du ton et du style de communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <PaintBucket className="h-5 w-5 text-celsai-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Intégration de votre terminologie spécifique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <PaintBucket className="h-5 w-5 text-celsai-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Respect des valeurs et messages clés de votre marque</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <PaintBucket className="h-5 w-5 text-celsai-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Adaptation des réponses selon le segment de clientèle</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-white rounded-lg p-5 shadow-sm text-left">
                <h4 className="font-medium mb-3">Exemple de personnalisation</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-gray-300 pl-4 py-2">
                    <p className="text-gray-500 text-sm mb-1">Version générique</p>
                    <p className="text-gray-700">
                      "Merci pour votre message. Nous pouvons vous aider à résoudre ce problème technique.
                      Veuillez suivre ces étapes..."
                    </p>
                  </div>
                  <div className="border-l-4 border-celsai-400 pl-4 py-2">
                    <p className="text-celsai-500 text-sm mb-1">Version personnalisée</p>
                    <p className="text-gray-700">
                      "Hey there! L'équipe TechCool est là pour vous. Pas d'inquiétude, on va régler ce petit bug 
                      ensemble. Suivez ce guide rapide et vous serez de retour en un rien de temps! ✨"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-left">Processus de personnalisation</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-celsai-500 text-white flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-lg mb-1">Analyse de votre communication</h4>
                  <p className="text-gray-600">
                    Nous analysons vos communications existantes, votre charte éditoriale et votre
                    positionnement pour comprendre votre voix.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-celsai-500 text-white flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-lg mb-1">Configuration du modèle</h4>
                  <p className="text-gray-600">
                    Nous configurons le modèle IA avec vos spécificités sectorielles et votre style de communication.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-celsai-500 text-white flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-lg mb-1">Phase de test et ajustement</h4>
                  <p className="text-gray-600">
                    Nous effectuons des tests approfondis et affinons les réponses jusqu'à obtenir le résultat parfait.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-celsai-500 text-white flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-lg mb-1">Déploiement et amélioration continue</h4>
                  <p className="text-gray-600">
                    Nous déployons la solution et continuons à l'améliorer au fil du temps en fonction des retours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </FeatureLayout>
  );
};

export default IndustryCustomizationFeature;
