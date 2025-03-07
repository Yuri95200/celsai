
import React from "react";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

interface CategoryType {
  name: string;
  count: number;
  active: boolean;
}

interface ResourcesHeroProps {
  categories: CategoryType[];
}

const ResourcesHero = ({ categories }: ResourcesHeroProps) => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Centre de ressources Celsai</h1>
          <p className="text-xl text-gray-600">
            Explorez nos guides, livres blancs, webinaires et études de cas pour optimiser votre service client.
          </p>
          
          <div className="mt-8 relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Rechercher des ressources..."
              className="pl-10 pr-4 py-3 rounded-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Button variant="ghost" className="p-0 h-9 w-9">
                <Filter className="h-5 w-5 text-gray-400" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <Button 
              key={index}
              variant={category.active ? "default" : "outline"} 
              className={`rounded-full ${category.active ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-gray-200'}`}
            >
              {category.name} <span className="ml-1 text-xs opacity-70">({category.count})</span>
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResourcesHero;
