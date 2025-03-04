
import React from "react";
import FeatureLayout from "@/components/FeatureLayout";
import { Container } from "@/components/ui/container";
import { Wrench, CheckCircle, Zap, Lightbulb, ArrowRight } from "lucide-react";

const AutomatedResolutionFeature = () => {
  const steps = [
    {
      number: 1,
      title: "Identification du problème",
      description: "Analyse de la description fournie par l'utilisateur pour identifier la nature du problème."
    },
    {
      number: 2,
      title: "Diagnostic préliminaire",
      description: "Évaluation des causes possibles basée sur les symptômes et l'historique des problèmes similaires."
    },
    {
      number: 3,
      title: "Proposition de solutions",
      description: "Génération d'instructions étape par étape pour résoudre le problème identifié."
    },
    {
      number: 4,
      title: "Vérification de résolution",
      description: "Confirmation que le problème a été résolu ou escalade vers un agent humain si nécessaire."
    }
  ];

  return (
    <FeatureLayout
      icon={Wrench}
      title="Résolution automatisée"
      description="Résolvez rapidement les problèmes techniques grâce à notre diagnostic IA et nos guides étape par étape."
      imageSrc="/placeholder.svg"
    >
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Résolution proactive des problèmes</h2>
            <p className="text-lg text-gray-600 mb-4">
              Notre système de résolution automatisée analyse les problèmes soumis par vos clients,
              identifie les causes probables et propose des solutions précises pour les résoudre rapidement,
              sans nécessiter l'intervention d'un agent humain.
            </p>
            <p className="text-lg text-gray-600">
              Les instructions sont présentées de manière claire et accessible, avec des captures d'écran
              si nécessaire, pour aider vos clients à résoudre leurs problèmes par eux-mêmes.
            </p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Le processus de résolution automatisée</h3>
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-0">
              {steps.map((step, index) => (
                <div key={index} className="flex-1 relative">
                  <div className="flex flex-col items-center text-center px-4">
                    <div className="h-14 w-14 rounded-full bg-celsai-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                      {step.number}
                    </div>
                    <h4 className="text-lg font-medium mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-full w-full h-0.5 bg-gray-200 z-0">
                      <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <CheckCircle className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">Taux de résolution élevé</h3>
              <p className="text-gray-600">
                Résolution automatique de 60 à 80% des problèmes techniques courants sans intervention humaine.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <Zap className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">Résolution instantanée</h3>
              <p className="text-gray-600">
                Réduisez le temps de résolution de plusieurs heures ou jours à quelques minutes seulement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <Lightbulb className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">Apprentissage continu</h3>
              <p className="text-gray-600">
                Plus vous l'utilisez, plus le système devient efficace pour résoudre les problèmes spécifiques à votre produit.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Exemples de cas résolus automatiquement</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2">Problèmes de connexion</h4>
                <p className="text-gray-600">
                  Réinitialisation de mot de passe, déblocage de compte, résolution des problèmes d'authentification.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2">Installations et mises à jour</h4>
                <p className="text-gray-600">
                  Guide étape par étape pour installer des logiciels ou appliquer des mises à jour.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2">Configuration de paramètres</h4>
                <p className="text-gray-600">
                  Assistance pour configurer correctement les paramètres de produits ou services.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg mb-2">Dépannage d'erreurs courantes</h4>
                <p className="text-gray-600">
                  Résolution des messages d'erreur fréquents et des blocages d'application.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </FeatureLayout>
  );
};

export default AutomatedResolutionFeature;
