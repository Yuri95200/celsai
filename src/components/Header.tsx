import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Bot, BookOpen, Wrench, ArrowUpRight, BarChart3, Briefcase, Network, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Bot,
      title: "Chatbot intelligent",
      description: "Intégrez votre support client sur tous vos canaux",
      path: "/features/chatbot"
    },
    {
      icon: BookOpen,
      title: "Base de connaissances",
      description: "Analyse automatique de votre documentation existante",
      path: "/features/knowledge-base"
    },
    {
      icon: Wrench,
      title: "Résolution automatisée",
      description: "Diagnostic préliminaire des problèmes techniques",
      path: "/features/automated-resolution"
    },
    {
      icon: ArrowUpRight,
      title: "Escalade intelligente",
      description: "Détection des cas complexes nécessitant intervention humaine",
      path: "/features/smart-escalation"
    },
    {
      icon: BarChart3,
      title: "Analyses et tableaux de bord",
      description: "Suivi des problèmes fréquents et mesure des résultats",
      path: "/features/analytics"
    },
    {
      icon: Briefcase,
      title: "Personnalisation par secteur",
      description: "Modèles pré-entraînés pour différents secteurs d'activité",
      path: "/features/industry-customization"
    },
    {
      icon: Network,
      title: "Intégration avec vos outils",
      description: "Connexion aux principaux CRM et plateformes externes",
      path: "/features/integrations"
    }
  ];

  const handleFeaturesClick = (e) => {
    if (window.innerWidth >= 768) {
      e.preventDefault();
      setIsMegaMenuOpen(!isMegaMenuOpen);
    }
  };

  const navigateToFeatures = (e) => {
    e.preventDefault();
    navigate("/features");
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
  };

  const toggleMobileFeatures = (e) => {
    e.preventDefault();
    setIsMobileFeaturesOpen(!isMobileFeaturesOpen);
  };

  const navigateToContact = () => {
    navigate("/contact");
    setIsMobileMenuOpen(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    window.location.href = "https://app.schedmate.co";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMegaMenuOpen && !event.target.closest('.mega-menu-container')) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMegaMenuOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-out-expo",
        isScrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            className="flex items-center space-x-2"
            onClick={handleLogoClick}
          >
            <img 
              src="/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png" 
              alt="Celsai Logo" 
              className="h-10"
            />
          </a>
          
          <nav className="hidden md:flex items-center space-x-8 relative">
            <div className="relative">
              <a
                href="/features"
                className="text-gray-600 hover:text-celsai-500 transition-colors"
                onClick={navigateToFeatures}
              >
                Fonctionnalités
              </a>
              <button
                className="ml-1 text-gray-600 hover:text-celsai-500 transition-colors inline-flex items-center"
                onClick={handleFeaturesClick}
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-[700px] bg-white rounded-xl shadow-lg z-50 mega-menu-container animate-fade-in-up">
                  <div className="p-6 grid grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <Link 
                        key={index} 
                        to={feature.path}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <div className="h-10 w-10 bg-celsai-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-celsai-100 transition-colors">
                          <feature.icon className="h-5 w-5 text-celsai-500" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#demo" className="text-gray-600 hover:text-celsai-500 transition-colors">
              Démo
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-celsai-500 transition-colors">
              Témoignages
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-celsai-500 transition-colors">
              Tarifs
            </a>
            <Link to="/contact" className="text-gray-600 hover:text-celsai-500 transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-gray-200 hover:border-celsai-400 hover:bg-celsai-50"
              onClick={handleLoginClick}
            >
              Se connecter
            </Button>
            <a href="https://celsai.com/demo">
              <Button className="bg-celsai-500 hover:bg-celsai-600 text-white">
                Essai gratuit
              </Button>
            </a>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl animate-fade-in-up">
            <div className="px-4 py-6 flex flex-col space-y-4">
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <Link
                    to="/features"
                    className="block w-full text-gray-600 hover:text-celsai-500 py-2"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileFeaturesOpen(false);
                    }}
                  >
                    Fonctionnalités
                  </Link>
                  <button 
                    className="text-gray-500 hover:text-celsai-500 p-1"
                    onClick={toggleMobileFeatures}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${isMobileFeaturesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                {isMobileFeaturesOpen && (
                  <div className="pl-8 space-y-2 animate-fade-in-down">
                    {features.map((feature, index) => (
                      <Link
                        key={index}
                        to={feature.path}
                        className="flex items-center py-2 text-gray-600 hover:text-celsai-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <feature.icon className="h-4 w-4 mr-2" />
                        {feature.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <a 
                href="#demo" 
                className="block py-2 text-gray-600 hover:text-celsai-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Démo
              </a>
              <a 
                href="#testimonials" 
                className="block py-2 text-gray-600 hover:text-celsai-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Témoignages
              </a>
              <a 
                href="#pricing" 
                className="block py-2 text-gray-600 hover:text-celsai-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tarifs
              </a>
              <Link 
                to="/contact" 
                className="block py-2 text-gray-600 hover:text-celsai-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-gray-200"
                  onClick={handleLoginClick}
                >
                  Se connecter
                </Button>
                <a href="https://celsai.com/demo">
                  <Button className="w-full bg-celsai-500 hover:bg-celsai-600 text-white">
                    Essai gratuit
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
