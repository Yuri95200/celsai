
import React from "react";
import FeatureLayout from "@/components/FeatureLayout";
import { Container } from "@/components/ui/container";
import { ArrowUpRight, Users, Clock, FileText, MessageCircle } from "lucide-react";

const SmartEscalationFeature = () => {
  return (
    <FeatureLayout
      icon={ArrowUpRight}
      title="Escalade intelligente"
      description="Transfert fluide vers vos agents humains uniquement quand c'est vraiment nécessaire."
      imageSrc="/placeholder.svg"
    >
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto mb-16 text-left">
            <h2 className="text-3xl font-bold mb-6">L'humain au bon moment</h2>
            <p className="text-lg text-gray-600 mb-4">
              Notre système d'escalade intelligente détecte automatiquement les situations où l'intervention
              d'un agent humain est nécessaire et transfère la conversation de manière fluide, avec tout le
              contexte des échanges précédents.
            </p>
            <p className="text-lg text-gray-600">
              Vos agents humains sont ainsi libérés des tâches répétitives et peuvent se concentrer sur
              les cas complexes qui nécessitent réellement leur expertise et leur empathie.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-left">Comment fonctionne l'escalade intelligente</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-celsai-500 text-white flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-lg mb-1">Détection des cas complexes</h4>
                  <p className="text-gray-600">
                    Notre IA identifie les situations où elle ne peut pas résoudre le problème avec un niveau
                    de confiance élevé ou détecte une frustration chez l'utilisateur.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-celsai-500 text-white flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-lg mb-1">Préparation du transfert</h4>
                  <p className="text-gray-600">
                    Le système prépare un résumé de la conversation, identifie le problème principal et
                    les tentatives de résolution déjà effectuées.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-celsai-500 text-white flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-lg mb-1">Sélection de l'agent approprié</h4>
                  <p className="text-gray-600">
                    En fonction du type de problème, le système identifie l'agent le plus qualifié
                    disponible pour traiter la demande.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-celsai-500 text-white flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-lg mb-1">Transfert contextuel</h4>
                  <p className="text-gray-600">
                    L'agent reçoit l'historique complet de la conversation et le résumé du problème,
                    évitant au client de devoir répéter ses informations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <Users className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-left">Distribution intelligente</h3>
              <p className="text-gray-600 text-left">
                Affecte automatiquement les conversations aux agents en fonction de leurs compétences,
                disponibilité, et historique avec le client pour un service optimal.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <Clock className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-left">Réduction du temps de traitement</h3>
              <p className="text-gray-600 text-left">
                Les agents reçoivent des conversations avec contexte et résumé, réduisant jusqu'à 40%
                le temps nécessaire pour comprendre et résoudre le problème.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <FileText className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-left">Suggestions d'aide</h3>
              <p className="text-gray-600 text-left">
                Propose aux agents des réponses et solutions suggérées basées sur des cas similaires
                précédemment résolus pour accélérer la résolution.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <MessageCircle className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-left">Continuité conversationnelle</h3>
              <p className="text-gray-600 text-left">
                Transition transparente entre le bot et l'agent humain, préservant l'historique complet
                et le contexte de la conversation.
              </p>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-celsai-500 pl-6 py-2 text-left">
            <p className="text-xl italic text-gray-700 mb-4">
              "L'escalade intelligente de Celsai a transformé notre service client. Nos agents ne traitent plus
              que les cas qui nécessitent vraiment leur expertise, et ils disposent immédiatement de toutes les
              informations nécessaires pour être efficaces dès la première seconde."
            </p>
            <footer className="text-gray-600">
              — Sophie Martin, Directrice Service Client chez E-Commerce Solutions
            </footer>
          </blockquote>
        </Container>
      </section>
    </FeatureLayout>
  );
};

export default SmartEscalationFeature;
