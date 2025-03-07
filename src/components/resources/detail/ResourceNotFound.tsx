
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";

const ResourceNotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="pt-32 pb-16">
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold mb-4">Ressource introuvable</h1>
        <p className="text-gray-600 mb-8">
          La ressource que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>
      </div>
    </Container>
  );
};

export default ResourceNotFound;
