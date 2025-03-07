
import React from "react";
import { Helmet } from "react-helmet";
import FeatureLayout from "@/components/FeatureLayout";
import { Container } from "@/components/ui/container";
import { BarChart3, PieChart, TrendingUp, Search, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AnalyticsFeature = () => {
  return (
    <>
      <Helmet>
        <title>Analyses et Reporting IA du Service Client | Insights Avancés | Celsai</title>
        <meta name="description" content="Obtenez des insights puissants sur vos performances de service client grâce à nos tableaux de bord d'analyse IA. Visualisez tendances, sentiments et opportunités d'amélioration." />
        <meta name="keywords" content="analyses service client, dashboard IA, reporting performances, sentiment client, optimisation support, métriques service client, Celsai" />
        <link rel="canonical" href="https://www.celsai.com/features/analytics" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Analyses et Reporting IA du Service Client | Insights Avancés | Celsai" />
        <meta property="og:description" content="Obtenez des insights puissants sur vos performances de service client grâce à nos tableaux de bord d'analyse IA." />
        <meta property="og:url" content="https://www.celsai.com/features/analytics" />
        <meta property="og:image" content="/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Analyses et Reporting IA du Service Client | Insights Avancés | Celsai" />
        <meta name="twitter:description" content="Obtenez des insights puissants sur vos performances de service client grâce à nos tableaux de bord d'analyse IA." />
        <meta name="twitter:image" content="/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Celsai Analytics",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Plateforme d'analyse avancée pour le service client propulsée par l'IA",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "featureList": "Tableaux de bord personnalisables, Analyse sémantique, Détection proactive des problèmes, Suivi des performances",
            "screenshot": "/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "127"
            }
          }
        `}</script>
      </Helmet>
      <FeatureLayout
        icon={BarChart3}
        title="Analyses et tableaux de bord"
        description="Exploitez les données de votre support client pour prendre des décisions éclairées."
        imageSrc="/images/photo-1518770660439-4636190af475.jpg"
      >
        <section className="py-16">
          <Container>
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Des insights actionnables</h2>
              <p className="text-lg text-gray-600 mb-4">
                Notre plateforme d'analyse avancée transforme les interactions de support client en insights
                précieux pour améliorer votre produit, votre service et l'expérience globale de vos clients.
              </p>
              <p className="text-lg text-gray-600">
                Suivez les tendances, identifiez les problèmes récurrents et mesurez l'efficacité de votre
                support client avec des tableaux de bord intuitifs qui vous fournissent toutes les informations
                dont vous avez besoin.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                  <BarChart3 className="h-6 w-6 text-celsai-500" />
                </div>
                <h3 className="text-xl font-medium mb-3">Tableaux de bord personnalisables</h3>
                <p className="text-gray-600">
                  Créez des tableaux de bord sur mesure avec les métriques qui comptent le plus pour votre
                  entreprise, accessibles à tous les membres de votre équipe.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                  <PieChart className="h-6 w-6 text-celsai-500" />
                </div>
                <h3 className="text-xl font-medium mb-3">Analyse des sujets</h3>
                <p className="text-gray-600">
                  Identifiez automatiquement les sujets et problèmes les plus fréquemment mentionnés par vos
                  clients pour orienter vos efforts d'amélioration.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                  <TrendingUp className="h-6 w-6 text-celsai-500" />
                </div>
                <h3 className="text-xl font-medium mb-3">Suivi des performances</h3>
                <p className="text-gray-600">
                  Mesurez le taux de résolution automatique, le temps de réponse, la satisfaction client et
                  d'autres KPIs essentiels pour optimiser votre support.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                  <Search className="h-6 w-6 text-celsai-500" />
                </div>
                <h3 className="text-xl font-medium mb-3">Analyse sémantique</h3>
                <p className="text-gray-600">
                  Notre IA analyse le sentiment et les émotions exprimées dans les conversations pour vous
                  aider à comprendre l'expérience émotionnelle de vos clients.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6">Principales métriques disponibles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg mb-1">Taux de résolution automatique</h4>
                  <p className="text-gray-600">
                    Pourcentage de demandes résolues sans intervention humaine.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg mb-1">Temps moyen de résolution</h4>
                  <p className="text-gray-600">
                    Durée moyenne nécessaire pour résoudre les problèmes clients.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg mb-1">Score de satisfaction client</h4>
                  <p className="text-gray-600">
                    Évaluation de la satisfaction des clients après interaction.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg mb-1">Taux d'escalade</h4>
                  <p className="text-gray-600">
                    Pourcentage de conversations transférées à un agent humain.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg mb-1">Volume par canal</h4>
                  <p className="text-gray-600">
                    Répartition des demandes par canal de communication.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg mb-1">Principaux sujets</h4>
                  <p className="text-gray-600">
                    Thématiques les plus fréquemment abordées par les clients.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-5 flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Détection proactive des problèmes</h3>
                  <p className="text-gray-600 mb-4">
                    Notre système d'alerte proactive détecte automatiquement les augmentations inhabituelles
                    de certains types de problèmes, vous permettant d'identifier et de résoudre rapidement
                    les incidents avant qu'ils n'affectent un grand nombre de clients.
                  </p>
                  <p className="text-gray-600">
                    Configurez des alertes personnalisées pour être informé en temps réel des situations
                    qui nécessitent votre attention immédiate.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/demo">
                <Button size="lg" className="bg-celsai-500 hover:bg-celsai-600 text-white">
                  Réserver une démonstration personnalisée
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </FeatureLayout>
    </>
  );
};

export default AnalyticsFeature;
