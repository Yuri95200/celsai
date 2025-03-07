
import React from "react";
import FeatureLayout from "@/components/FeatureLayout";
import { Container } from "@/components/ui/container";
import { BookOpen, Search, RefreshCw, FileText, Brain } from "lucide-react";

const KnowledgeBaseFeature = () => {
  return (
    <FeatureLayout
      icon={BookOpen}
      title="Base de connaissances dynamique"
      description="Convertissez votre documentation existante en intelligence actionnable pour votre service client."
      imageSrc="/images/photo-1488590528505-98d2b5aba04b.jpg"
    >
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Une base de connaissances qui évolue avec vous</h2>
            <p className="text-lg text-gray-600 mb-4">
              Contrairement aux bases de connaissances traditionnelles qui nécessitent une maintenance constante,
              notre solution analyse automatiquement votre documentation existante et apprend en continu des interactions
              avec vos clients.
            </p>
            <p className="text-lg text-gray-600">
              Plus votre chatbot interagit avec vos clients, plus il devient intelligent et capable de répondre
              précisément à leurs questions spécifiques. C'est une base de connaissances vivante qui ne cesse de s'enrichir.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <Search className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">Recherche sémantique avancée</h3>
              <p className="text-gray-600">
                Notre technologie va au-delà de la simple recherche par mots-clés pour comprendre
                l'intention derrière les questions et fournir les réponses les plus pertinentes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <RefreshCw className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">Mise à jour automatique</h3>
              <p className="text-gray-600">
                Synchronisez votre base de connaissances avec vos documents internes, FAQs, et articles
                pour que votre chatbot dispose toujours des informations les plus récentes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <FileText className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">Intégration de documents</h3>
              <p className="text-gray-600">
                Importez facilement des documents PDF, Word, PowerPoint ou des pages web dans votre
                base de connaissances pour enrichir le savoir de votre assistant IA.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <Brain className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">Apprentissage continu</h3>
              <p className="text-gray-600">
                Notre système enregistre les nouvelles questions et améliore continuellement ses réponses
                en fonction des interactions réelles avec vos clients.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6">Sources de connaissances compatibles</h3>
            <ul className="space-y-3 pl-6 list-disc">
              <li className="text-gray-700">Documents Office (Word, Excel, PowerPoint)</li>
              <li className="text-gray-700">Documents PDF, y compris les documents scannés grâce à l'OCR</li>
              <li className="text-gray-700">Articles de blogs et pages web</li>
              <li className="text-gray-700">Bases de connaissances existantes (Zendesk, Helpjuice, etc.)</li>
              <li className="text-gray-700">Wikis internes et documentation technique</li>
              <li className="text-gray-700">Manuels d'utilisation et guides</li>
              <li className="text-gray-700">Forums et communautés d'entraide</li>
              <li className="text-gray-700">Transcriptions de conversations client</li>
            </ul>
          </div>
          
          <blockquote className="border-l-4 border-celsai-500 pl-6 py-2 mb-8">
            <p className="text-xl italic text-gray-700 mb-4">
              "La capacité de Celsai à assimiler notre documentation technique complexe et à répondre précisément
              aux questions de nos clients nous a permis de réduire nos tickets de support de 45%."
            </p>
            <footer className="text-gray-600">
              — Jean Dupont, Directeur IT chez TechSolutions
            </footer>
          </blockquote>
        </Container>
      </section>
    </FeatureLayout>
  );
};

export default KnowledgeBaseFeature;
