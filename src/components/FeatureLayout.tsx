
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "./ui/container";
import { ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface FeatureLayoutProps {
  icon: React.ElementType;
  title: string;
  description: string;
  imageSrc?: string;
  children: React.ReactNode;
}

const FeatureLayout = ({ icon: Icon, title, description, imageSrc, children }: FeatureLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <Container>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-1/2 space-y-6 text-left">
                <div className="inline-flex items-center">
                  <Link to="/" className="text-gray-500 hover:text-gray-700">Accueil</Link>
                  <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                  <Link to="/#features" className="text-gray-500 hover:text-gray-700">Fonctionnalités</Link>
                  <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                  <span className="text-celsai-600">{title}</span>
                </div>
                
                <div className="inline-block p-3 bg-celsai-50 rounded-2xl">
                  <Icon className="h-8 w-8 text-celsai-500" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
                <p className="text-xl text-gray-600">{description}</p>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/demo">
                    <Button className="bg-celsai-500 hover:bg-celsai-600 text-white">
                      Essai gratuit
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-gray-200">
                      Demander une démo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/2">
                {imageSrc ? (
                  <img 
                    src={imageSrc} 
                    alt={`${title} illustration`} 
                    className="rounded-xl shadow-lg w-full object-cover h-auto max-h-[400px]"
                    onError={(e) => {
                      console.error(`Failed to load image: ${imageSrc}`);
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/placeholder.svg';
                    }}
                  />
                ) : (
                  <div className="bg-gray-200 rounded-xl h-80 w-full flex items-center justify-center">
                    <Icon className="h-16 w-16 text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
        
        {/* Content */}
        {children}
        
        {/* CTA Section */}
        <section className="py-20 bg-celsai-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre service client ?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Rejoignez plus de 500 entreprises qui utilisent Celsai pour améliorer leur support client et réduire leurs coûts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/demo">
                  <Button className="bg-celsai-500 hover:bg-celsai-600 text-white" size="lg">
                    Commencer votre essai gratuit
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-gray-200" size="lg">
                    Parler à un conseiller
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeatureLayout;
