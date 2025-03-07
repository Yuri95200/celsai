
import React from "react";
import { Container } from "@/components/ui/container";
import ResourceCard, { ResourceCardProps } from "./ResourceCard";

interface FeaturedResourcesProps {
  resources: ResourceCardProps[];
}

const FeaturedResources = ({ resources }: FeaturedResourcesProps) => {
  if (resources.length === 0) {
    return null; // Don't render the section if there are no resources to show
  }
  
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-2xl font-bold mb-8">Ressources à la une</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} featured={true} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedResources;
