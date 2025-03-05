
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/container";
import ContactSection from "@/components/Contact";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium mb-4">
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contactez <span className="text-gradient">l'équipe Celsai</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans la transformation de votre service client.
              </p>
            </div>
          </Container>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
