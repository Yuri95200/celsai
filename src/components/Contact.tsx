import React from "react";
import { Container } from "@/components/ui/container";
import ContactForm from "./ContactForm";
import { Mail, MapPin, Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Contact = () => {
  return <section id="contact" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            
            
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
                  <p className="text-gray-600 mt-1">+33 6 05 53 35 46</p>
                  <p className="text-gray-600">Lun-Ven, 9h-18h (CET)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-celsai-100 rounded-full p-3 mr-4">
                  <MapPin className="h-5 w-5 text-celsai-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Bureau</h3>
                  <p className="text-gray-600 mt-1">24 Rue du Gouverneur Général Eboue</p>
                  <p className="text-gray-600">92130 Issy-les-Moulineaux, France</p>
                </div>
              </div>
            </div>
            
            <div className="bg-celsai-50 border border-celsai-100 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-3">Ils nous font confiance</h3>
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((_, index) => <div key={index} className="bg-white h-16 rounded flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-md bg-celsai-${100 + index * 100 % 500} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">C{index + 1}</span>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          
          <div className="glass-effect rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6">Parlez-nous de votre projet</h3>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>;
};
export default Contact;