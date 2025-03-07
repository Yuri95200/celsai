
import React from "react";
import { Link } from "react-router-dom";
import { ResourceCardProps } from "../ResourceCard";

interface RelatedResourcesProps {
  resources: ResourceCardProps[];
}

const RelatedResources = ({ resources }: RelatedResourcesProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Ressources similaires</h2>
      <div className="space-y-4">
        {resources.length > 0 ? (
          resources.map((relatedResource) => (
            <Link 
              key={relatedResource.id}
              to={`/resources/detail/${relatedResource.id}`}
              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-sm font-medium">{relatedResource.title}</div>
              <div className="text-xs text-gray-600 mt-1">{relatedResource.type}</div>
            </Link>
          ))
        ) : (
          <p className="text-gray-600 text-sm">
            Aucune ressource similaire disponible pour le moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedResources;
