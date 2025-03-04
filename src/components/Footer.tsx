import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png" 
                alt="Celsai Logo" 
                className="h-12"
              />
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
                <a href="#features" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  Fonctionnalités
                </a>
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
                <a href="#" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-celsai-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-celsai-500 transition-colors">
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
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="h-10"
              />
              <Button className="bg-celsai-500 hover:bg-celsai-600 text-white h-10 w-10 p-0">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2023 Celsai. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-celsai-500 text-sm">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-500 hover:text-celsai-500 text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-500 hover:text-celsai-500 text-sm">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
