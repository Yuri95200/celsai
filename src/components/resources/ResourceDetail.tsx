
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Download, 
  Share2, 
  Bookmark, 
  PlayCircle 
} from "lucide-react";
import { allResources, featuredResources } from "./resourcesData";
import { ResourceCardProps } from "./ResourceCard";
import { toast } from "sonner";

const ResourceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the resource by ID from both resource arrays
  const resource = [...featuredResources, ...allResources].find(
    resource => resource.id === Number(id)
  );

  // Handle resource not found
  if (!resource) {
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
  }

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

            {/* Content preview section */}
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">À propos de l'auteur</h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-xl">
                    {resource.type.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Equipe Celsai</h3>
                  <p className="text-sm text-gray-600">Experts en IA et service client</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-700">
                Nos experts combinent une expertise technique approfondie et une connaissance 
                pointue des enjeux du service client moderne.
              </p>
            </div>

            {/* Related resources */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Ressources similaires</h2>
              <div className="space-y-4">
                {relatedResources.length > 0 ? (
                  relatedResources.map((relatedResource: ResourceCardProps) => (
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

            {/* CTA */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-3">Besoin d'aide ?</h2>
              <p className="text-sm text-gray-700 mb-4">
                Notre équipe d'experts est disponible pour répondre à vos questions et vous guider 
                dans l'implémentation de nos solutions.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Contacter un expert
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResourceDetail;
