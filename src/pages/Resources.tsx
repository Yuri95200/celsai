
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/resources/ResourcesHero";
import FeaturedResources from "@/components/resources/FeaturedResources";
import AllResources from "@/components/resources/AllResources";
import UpcomingWebinars from "@/components/resources/UpcomingWebinars";
import ResourcesCTA from "@/components/resources/ResourcesCTA";
import { categories, featuredResources, allResources, upcomingWebinars } from "@/components/resources/resourcesData";

const Resources = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <ResourcesHero categories={categories} />
        <FeaturedResources resources={featuredResources} />
        <AllResources resources={allResources} />
        <UpcomingWebinars webinars={upcomingWebinars} />
        <ResourcesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
