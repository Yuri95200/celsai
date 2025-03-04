
import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-out-expo",
        isScrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png" 
              alt="Celsai Logo" 
              className="h-10"
            />
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-celsai-500 transition-colors">
              Fonctionnalités
            </a>
            <a href="#demo" className="text-gray-600 hover:text-celsai-500 transition-colors">
              Démo
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-celsai-500 transition-colors">
              Tarifs
            </a>
            <a href="#contact" className="text-gray-600 hover:text-celsai-500 transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-gray-200 hover:border-celsai-400 hover:bg-celsai-50">
              Se connecter
            </Button>
            <Button className="bg-celsai-500 hover:bg-celsai-600 text-white">
              Essai gratuit
            </Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl animate-fade-in-up">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#features" 
                className="block py-2 text-gray-600 hover:text-celsai-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fonctionnalités
              </a>
              <a 
                href="#demo" 
                className="block py-2 text-gray-600 hover:text-celsai-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Démo
              </a>
              <a 
                href="#pricing" 
                className="block py-2 text-gray-600 hover:text-celsai-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tarifs
              </a>
              <a 
                href="#contact" 
                className="block py-2 text-gray-600 hover:text-celsai-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full border-gray-200">
                  Se connecter
                </Button>
                <Button className="w-full bg-celsai-500 hover:bg-celsai-600 text-white">
                  Essai gratuit
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
