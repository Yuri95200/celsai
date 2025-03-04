
import React from "react";
import { Container } from "@/components/ui/container";
import ContactForm from "./ContactForm";
import { Mail, MapPin, Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium">
                Contact
              </span>
              <h2 className="mt-4 font-bold text-gradient">
                Prêt à transformer votre support client ?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment Celsai peut aider votre entreprise à offrir un support client exceptionnel.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Réserver une démo personnalisée
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/resources">
                  <Button variant="outline" className="border-gray-200 hover:border-blue-400 hover:bg-blue-50">
                    Consulter nos ressources
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 space-y-6">
              <div className="flex items-start">
                <div className="bg-celsai-100 rounded-full p-3 mr-4">
                  <Mail className="h-5 w-5 text-celsai-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="text-gray-600 mt-1">contact@celsai.com</p>
                  <p className="text-gray-600">support@celsai.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-celsai-100 rounded-full p-3 mr-4">
                  <Phone className="h-5 w-5 text-celsai-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Téléphone</h3>
                  <p className="text-gray-600 mt-1">+33 1 23 45 67 89</p>
                  <p className="text-gray-600">Lun-Ven, 9h-18h (CET)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-celsai-100 rounded-full p-3 mr-4">
                  <MapPin className="h-5 w-5 text-celsai-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Bureau</h3>
                  <p className="text-gray-600 mt-1">123 Avenue de l'Innovation</p>
                  <p className="text-gray-600">75008 Paris, France</p>
                </div>
              </div>
            </div>
            
            <div className="bg-celsai-50 border border-celsai-100 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-3">Ils nous font confiance</h3>
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <div key={index} className="bg-white h-16 rounded flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-md bg-celsai-${100 + (index * 100) % 500} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">C{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="glass-effect rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6">Parlez-nous de votre projet</h3>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
