import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ChatbotWidget from "./ChatbotWidget";

const Footer = () => {
  const navigate = useNavigate();
  
  const handleLogoClick = e => {
    e.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
  };
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-4" onClick={handleLogoClick}>
              <img src="/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png" alt="Celsai Logo" className="h-12" />
            </a>
            <p className="text-gray-600 mb-4">
              Transformez votre service client avec l'intelligence artificielle qui comprend réellement vos clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-celsai-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-celsai-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-celsai-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-celsai-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Produit</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <a href="#demo" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  Démonstration
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  Tarification
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#pricing-faq" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-celsai-500 transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-celsai-500 transition-colors">
                  Partenaires
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Restez informé</h3>
            <p className="text-gray-600 mb-4">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et conseils en matière de service client.
            </p>
            <div className="flex gap-2 mb-4">
              <Input type="email" placeholder="Votre email" className="h-10" />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white h-10 w-10 p-0">
                <ArrowRight size={18} />
              </Button>
            </div>
            <Button variant="outline" className="border-gray-200 hover:border-blue-400 hover:bg-blue-50 w-full">
              <Mail className="mr-2 h-4 w-4" />
              S'inscrire à la newsletter
            </Button>
          </div>
        </div>
        
        <div className="py-8 border-t border-b border-gray-200 mb-8">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Prêt à révolutionner votre support client ?</h3>
            <a href="https://celsai.com/demo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Commencer votre essai gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Celsai. Tous droits réservés.</p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-500 hover:text-celsai-500 text-sm">
                Conditions d'utilisation
              </Link>
              <Link to="/privacy" className="text-gray-500 hover:text-celsai-500 text-sm">
                Politique de confidentialité
              </Link>
              <a href="#" className="text-gray-500 hover:text-celsai-500 text-sm">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </Container>
      
      <ChatbotWidget />
    </footer>
  );
};

export default Footer;
