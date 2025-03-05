
import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => {
  const handleDemoClick = () => {
    window.location.href = "https://celsai.com/demo";
  };

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="space-y-6 max-w-2xl">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                Support client automatisé
              </span>
              <h1 className="font-bold tracking-tight">
                <span className="text-gradient">L'intelligence artificielle</span> au service de votre support client
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Transformez votre service client avec Celsai, la solution SaaS qui utilise l'IA pour automatiser jusqu'à 70% de vos interactions tout en améliorant la satisfaction client.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 px-8"
                  onClick={handleDemoClick}
                >
                  Commencer l'essai gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-lg py-6 px-8"
                  onClick={handleDemoClick}
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Voir la démo
                </Button>
              </div>
              <div className="pt-6 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="w-10 h-10 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center shadow-sm">
                      <span className="text-white font-medium text-xs">C{index}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Rejoint par <span className="font-semibold text-gray-900">500+</span> entreprises
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-100 rounded-full opacity-50 filter blur-3xl"></div>
            <div className="absolute -left-10 -top-10 w-64 h-64 bg-blue-200 rounded-full opacity-50 filter blur-3xl"></div>
            
            <div className="relative glass-effect rounded-xl shadow-2xl p-2 md:p-4 z-10 animate-float">
              <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
                <div className="bg-gray-50 px-4 py-3 flex items-center">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto text-sm text-gray-500">Chat Support Celsai</div>
                </div>
                <div className="p-4 h-80 overflow-hidden flex flex-col">
                  <div className="flex mb-4">
                    <div className="bg-blue-100 text-blue-800 rounded-2xl rounded-tl-none py-2 px-4 max-w-[80%]">
                      <p className="text-sm">Bonjour, comment puis-je vous aider aujourd'hui?</p>
                    </div>
                  </div>
                  <div className="flex justify-end mb-4">
                    <div className="bg-gray-100 rounded-2xl rounded-tr-none py-2 px-4 max-w-[80%]">
                      <p className="text-sm">J'ai un problème avec ma facture du mois dernier.</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="bg-blue-100 text-blue-800 rounded-2xl rounded-tl-none py-2 px-4 max-w-[80%]">
                      <p className="text-sm">Je suis désolé pour ce désagrément. Pouvez-vous me préciser quel est le problème avec votre facture?</p>
                    </div>
                  </div>
                  <div className="flex justify-end mb-4">
                    <div className="bg-gray-100 rounded-2xl rounded-tr-none py-2 px-4 max-w-[80%]">
                      <p className="text-sm">Je pense avoir été facturé deux fois pour le même service.</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="bg-blue-100 text-blue-800 rounded-2xl rounded-tl-none py-2 px-4 max-w-[80%]">
                      <div className="h-4 w-16 bg-blue-200 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-t border-gray-100 p-4">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Écrivez votre message..."
                      className="w-full px-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="ml-2 bg-blue-600 text-white p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
