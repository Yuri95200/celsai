
import React from "react";
import { Helmet } from "react-helmet";
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
  seoTitle?: string;
  seoDescription?: string;
}

const FeatureLayout = ({ 
  icon: Icon, 
  title, 
  description, 
  imageSrc, 
  children,
  seoTitle = "", 
  seoDescription = ""
}: FeatureLayoutProps) => {
  const pageTitle = seoTitle || `${title} | Celsai - Solution d'IA pour Service Client`;
  const pageDescription = seoDescription || `Découvrez comment Celsai ${title.toLowerCase()} peut transformer votre service client. Solutions d'IA personnalisées pour votre entreprise.`;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
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
                  <img src="/lovable-uploads/2f8829b5-202e-464f-bb75-0799bd8e0a3c.png" alt="Celsai" className="h-8 w-8" />
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
                    <img src="/lovable-uploads/2f8829b5-202e-464f-bb75-0799bd8e0a3c.png" alt="Celsai" className="h-16 w-16" />
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
