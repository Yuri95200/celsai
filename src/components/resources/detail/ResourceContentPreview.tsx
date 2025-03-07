
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ResourceCardProps } from "../ResourceCard";

interface ResourceContentPreviewProps {
  resource: ResourceCardProps;
}

const ResourceContentPreview = ({ resource }: ResourceContentPreviewProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Aperçu du contenu</h2>
      <div className="prose max-w-none">
        <p>
          Cette ressource {resource.downloadable ? "téléchargeable" : "consultable"} vous 
          apportera des connaissances précieuses sur {resource.title.toLowerCase()}.
        </p>
        <p>
          Que vous cherchiez à améliorer votre service client, à automatiser certains
          processus ou à tirer parti des dernières innovations en matière d'IA, cette 
          ressource vous guidera pas à pas.
        </p>
        {resource.type === "Webinaire" && (
          <div className="my-4">
            <h3 className="font-medium">Points abordés dans ce webinaire :</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>État des lieux des innovations récentes</li>
              <li>Méthodologies d'implémentation</li>
              <li>Études de cas et exemples concrets</li>
              <li>Questions fréquentes et réponses d'experts</li>
            </ul>
          </div>
        )}
        {resource.type === "Guide" && (
          <div className="my-4">
            <h3 className="font-medium">Dans ce guide, vous découvrirez :</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>Les principes fondamentaux à connaître</li>
              <li>Les meilleures pratiques du secteur</li>
              <li>Des conseils d'experts pour optimiser vos résultats</li>
              <li>Des outils et ressources complémentaires</li>
            </ul>
          </div>
        )}
        {resource.type === "Livre blanc" && (
          <div className="my-4">
            <h3 className="font-medium">Ce livre blanc comprend :</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>Une analyse approfondie du sujet</li>
              <li>Des données et statistiques récentes</li>
              <li>Des perspectives d'experts du domaine</li>
              <li>Des recommandations concrètes et applicables</li>
            </ul>
          </div>
        )}
      </div>
      <div className="mt-6">
        {resource.link && resource.link.startsWith("/resources/") ? (
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link to={resource.link}>
              Accéder au contenu complet
            </Link>
          </Button>
        ) : (
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Accéder au contenu complet
          </Button>
        )}
      </div>
    </div>
  );
};

export default ResourceContentPreview;
