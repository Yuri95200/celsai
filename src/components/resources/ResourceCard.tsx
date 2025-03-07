
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Bookmark, Download, PlayCircle, ChevronRight } from "lucide-react";

export interface ResourceCardProps {
  id: number;
  title: string;
  type: string;
  imageUrl: string;
  description?: string;
  downloadable?: boolean;
  date: string;
  readTime: string;
  link?: string;
  featured?: boolean;
}

const ResourceCard = ({ 
  id, 
  title, 
  type, 
  imageUrl, 
  description, 
  downloadable, 
  date, 
  readTime, 
  link = "#",
  featured = false 
}: ResourceCardProps) => {
  if (featured) {
    return (
      <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group">
        <Link to={link} className="block">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {type}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <Button variant="ghost" size="sm" className="bg-white/80 backdrop-blur-sm hover:bg-white text-blue-700 rounded-full w-8 h-8 p-0">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Link>
        <div className="p-6">
          <Link to={link}>
            <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </Link>
          {description && (
            <p className="text-gray-600 text-sm mb-4">
              {description}
            </p>
          )}
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {readTime}
            </div>
            <div className="text-sm text-gray-500">
              {date}
            </div>
          </div>
          <div className="mt-4">
            {downloadable ? (
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link to={link}>
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger
                </Link>
              </Button>
            ) : (
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link to={link}>
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Regarder
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div key={id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-all group">
      <Link to={link} className="block">
        <div className="relative h-40 overflow-hidden">
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {type}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <Link to={link}>
          <h3 className="font-bold mb-3 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {readTime}
          </div>
          <div>
            {date}
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-between hover:text-blue-600" asChild>
          <Link to={link}>
            Lire la suite
            <ChevronRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ResourceCard;
