
import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const ResourcesCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Besoin d'aide pour choisir la bonne ressource ?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Notre équipe est disponible pour vous guider et vous recommander les ressources les plus adaptées à vos besoins.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
            Contacter un expert
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-blue-200 hover:border-blue-400 hover:bg-blue-50" size="lg">
            S'inscrire à la newsletter
            <FileText className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ResourcesCTA;
