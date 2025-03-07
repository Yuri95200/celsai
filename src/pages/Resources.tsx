
import React, { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/resources/ResourcesHero";
import FeaturedResources from "@/components/resources/FeaturedResources";
import AllResources from "@/components/resources/AllResources";
import UpcomingWebinars from "@/components/resources/UpcomingWebinars";
import ResourcesCTA from "@/components/resources/ResourcesCTA";
import { 
  categories as initialCategories, 
  featuredResources, 
  allResources, 
  upcomingWebinars 
} from "@/components/resources/resourcesData";
import { ResourceCardProps } from "@/components/resources/ResourceCard";

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [categories, setCategories] = useState(initialCategories);

  // Handle category change
  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setCategories(
      categories.map(category => ({
        ...category,
        active: category.name === categoryName
      }))
    );
  };

  // Filter resources based on selected category
  const filteredFeaturedResources = useMemo(() => {
    if (selectedCategory === "Tous") return featuredResources;
    return featuredResources.filter(resource => resource.type === selectedCategory);
  }, [selectedCategory]);

  const filteredAllResources = useMemo(() => {
    if (selectedCategory === "Tous") return allResources;
    return allResources.filter(resource => resource.type === selectedCategory);
  }, [selectedCategory]);

  // Filter webinars if the selected category is "Webinaires"
  const filteredWebinars = useMemo(() => {
    if (selectedCategory === "Tous" || selectedCategory === "Webinaires") {
      return upcomingWebinars;
    }
    return [];
  }, [selectedCategory]);

  // Determine if we should show the webinars section
  const showWebinars = selectedCategory === "Tous" || selectedCategory === "Webinaires";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <ResourcesHero 
          categories={categories} 
          onCategoryChange={handleCategoryChange} 
        />
        
        {filteredFeaturedResources.length > 0 && (
          <FeaturedResources resources={filteredFeaturedResources} />
        )}
        
        {filteredAllResources.length > 0 && (
          <AllResources resources={filteredAllResources} />
        )}
        
        {showWebinars && (
          <UpcomingWebinars webinars={filteredWebinars} />
        )}
        
        <ResourcesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
