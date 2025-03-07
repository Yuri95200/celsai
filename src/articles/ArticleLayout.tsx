
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/container";
import { ArrowLeft, Clock, Download, BookOpen, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  type: string;
  date: string;
  readTime: string;
  author?: {
    name: string;
    role: string;
    imageUrl?: string;
  };
  downloadable?: boolean;
}

const ArticleLayout = ({
  children,
  title,
  type,
  date,
  readTime,
  author,
  downloadable = false,
}: ArticleLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <Container>
          <div className="py-8">
            <Link to="/resources" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux ressources
            </Link>

            <div className="mt-8 max-w-3xl mx-auto">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                {type}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {readTime} de lecture
                </div>
                <div>
                  Publié le {date}
                </div>
              </div>

              {author && (
                <div className="flex items-center gap-4 mb-8 p-4 border border-gray-100 rounded-lg bg-gray-50">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    {author.imageUrl ? (
                      <img src={author.imageUrl} alt={author.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-xl">
                        {author.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{author.name}</div>
                    <div className="text-sm text-gray-500">{author.role}</div>
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-2 mb-8">
                {downloadable && (
                  <Button variant="outline" size="sm" className="text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </Button>
                )}
                <Button variant="outline" size="sm" className="text-sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager
                </Button>
                <Button variant="outline" size="sm" className="text-sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Ajouter aux favoris
                </Button>
              </div>

              <div className="prose max-w-none">
                {children}
              </div>
              
              <div className="border-t border-gray-200 mt-12 pt-8">
                <h3 className="text-xl font-bold mb-4">Articles similaires</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <Link to="/articles/comment-reduire-temps-resolution-tickets" className="p-4 border border-gray-200 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-colors">
                    <h4 className="font-medium mb-2">Comment réduire de 40% le temps de résolution des tickets grâce à l'IA</h4>
                    <p className="text-sm text-gray-600">Découvrez les stratégies éprouvées pour accélérer la résolution des problèmes clients.</p>
                  </Link>
                  <Link to="/articles/metriques-service-client" className="p-4 border border-gray-200 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-colors">
                    <h4 className="font-medium mb-2">7 métriques essentielles pour évaluer l'efficacité de votre service client</h4>
                    <p className="text-sm text-gray-600">Les indicateurs clés à suivre pour optimiser votre support client.</p>
                  </Link>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8 mt-12">
                <h3 className="text-xl font-bold mb-4">Prêt à transformer votre service client ?</h3>
                <p className="mb-6">Découvrez comment Celsai peut vous aider à améliorer l'efficacité de votre équipe de support.</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Demander une démo
                  </Button>
                  <Button variant="outline" className="border-blue-200 hover:border-blue-400 hover:bg-blue-100">
                    Voir les tarifs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleLayout;
