
import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ResourceCard, { ResourceCardProps } from "./ResourceCard";

interface AllResourcesProps {
  resources: ResourceCardProps[];
}

const AllResources = ({ resources }: AllResourcesProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <h2 className="text-2xl font-bold mb-8">Toutes les ressources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-gray-200 hover:border-blue-400 hover:bg-blue-50">
            Voir plus de ressources
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AllResources;
