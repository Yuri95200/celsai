
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  Download, 
  Share2, 
  Bookmark, 
  PlayCircle 
} from "lucide-react";
import { toast } from "sonner";
import { ResourceCardProps } from "../ResourceCard";

interface ResourceDetailHeaderProps {
  resource: ResourceCardProps;
}

const ResourceDetailHeader = ({ resource }: ResourceDetailHeaderProps) => {
  const handleBookmark = () => {
    toast.success("Ressource ajoutée aux favoris");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Lien copié dans le presse-papier");
  };

  const handleDownload = () => {
    if (resource.downloadable) {
      toast.success("Téléchargement démarré");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img
          src={resource.imageUrl}
          alt={resource.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {resource.type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{resource.title}</h1>
        
        <div className="flex flex-wrap justify-between items-center mb-6 text-gray-600 text-sm">
          <div className="flex items-center mr-4 mb-2">
            <Clock className="h-4 w-4 mr-1" />
            {resource.readTime}
          </div>
          <div className="flex items-center mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            {resource.date}
          </div>
        </div>

        {resource.description && (
          <p className="text-gray-700 mb-6">
            {resource.description}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          {resource.downloadable ? (
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
          ) : (
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <PlayCircle className="mr-2 h-4 w-4" />
              Lire la ressource
            </Button>
          )}
          <Button variant="outline" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Partager
          </Button>
          <Button variant="outline" onClick={handleBookmark}>
            <Bookmark className="mr-2 h-4 w-4" />
            Ajouter aux favoris
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailHeader;
