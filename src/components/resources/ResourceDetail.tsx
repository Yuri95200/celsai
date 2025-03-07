
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { allResources, featuredResources } from "./resourcesData";
import ResourceDetailHeader from "./detail/ResourceDetailHeader";
import ResourceContentPreview from "./detail/ResourceContentPreview";
import AuthorInfo from "./detail/AuthorInfo";
import RelatedResources from "./detail/RelatedResources";
import SupportCTA from "./detail/SupportCTA";
import ResourceNotFound from "./detail/ResourceNotFound";

const ResourceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the resource by ID from both resource arrays
  const resource = [...featuredResources, ...allResources].find(
    resource => resource.id === Number(id)
  );

  // Handle resource not found
  if (!resource) {
    return <ResourceNotFound />;
  }

  // Related resources (excluding current one)
  const relatedResources = [...featuredResources, ...allResources]
    .filter(item => item.id !== resource.id && item.type === resource.type)
    .slice(0, 3);

  return (
    <div className="pt-32 pb-20">
      <Container>
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="text-gray-600 hover:text-blue-600" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux ressources
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 space-y-8">
            <ResourceDetailHeader resource={resource} />
            <ResourceContentPreview resource={resource} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AuthorInfo resourceType={resource.type} />
            <RelatedResources resources={relatedResources} />
            <SupportCTA />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResourceDetail;
