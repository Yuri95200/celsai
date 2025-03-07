import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowRight, FileText, Download, BookOpen, 
  PlayCircle, ChevronRight, Calendar, Search,
  Bookmark, Clock, Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Resources = () => {
  const categories = [
    { name: "Tous", count: 42, active: true },
    { name: "Guides", count: 12, active: false },
    { name: "Livres blancs", count: 8, active: false },
    { name: "Webinaires", count: 10, active: false },
    { name: "Études de cas", count: 7, active: false },
    { name: "Infographies", count: 5, active: false }
  ];
  
  const featuredResources = [
    {
      id: 1,
      title: "Guide complet : Comment l'IA révolutionne le service client en 2024",
      type: "Guide",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "Découvrez les dernières innovations en matière d'IA conversationnelle et comment elles transforment l'expérience client.",
      downloadable: true,
      date: "15 juin 2024",
      readTime: "12 min",
      link: "/resources/guide-ia-2024"
    },
    {
      id: 2,
      title: "Webinaire : Intégrer une IA conversationnelle à votre stratégie omnicanale",
      type: "Webinaire",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      description: "Regardez notre webinaire pour apprendre à créer une expérience client fluide sur tous vos canaux grâce à l'IA.",
      downloadable: false,
      date: "28 mai 2024",
      readTime: "45 min",
      link: "/resources/webinaire-support-omnicanal"
    },
    {
      id: 3,
      title: "Livre blanc : ROI de l'IA dans le service client - Analyse de 200 entreprises",
      type: "Livre blanc",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Étude détaillée sur le retour sur investissement réel des solutions d'IA dans le service client.",
      downloadable: true,
      date: "10 avril 2024",
      readTime: "25 min",
      link: "/resources/livre-blanc-roi"
    }
  ];
  
  const resources = [
    {
      id: 4,
      title: "7 métriques essentielles pour évaluer l'efficacité de votre service client",
      type: "Guide",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "3 juin 2024",
      readTime: "8 min",
      link: "/resources/metriques-service-client"
    },
    {
      id: 5,
      title: "Comment réduire de 40% le temps de résolution des tickets grâce à l'IA",
      type: "Étude de cas",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      date: "25 mai 2024",
      readTime: "15 min",
      link: "/resources/etude-cas-banque-digitale"
    },
    {
      id: 6,
      title: "Infographie : L'évolution du service client de 2000 à 2024",
      type: "Infographie",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      date: "12 mai 2024",
      readTime: "5 min"
    },
    {
      id: 7,
      title: "Webinaire : Comment personnaliser l'expérience client grâce au NLP",
      type: "Webinaire",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      date: "3 mai 2024",
      readTime: "40 min"
    },
    {
      id: 8,
      title: "Le guide de l'automatisation du service client pour les PME",
      type: "Livre blanc",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      date: "20 avril 2024",
      readTime: "18 min"
    },
    {
      id: 9,
      title: "Étude de cas : Comment Banque Digitale a réduit ses coûts de 50%",
      type: "Étude de cas",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      date: "15 avril 2024",
      readTime: "12 min"
    }
  ];
  
  const upcomingWebinars = [
    {
      id: 1,
      title: "Comment implémenter l'IA dans votre équipe de support existante",
      date: "25 juin 2024",
      time: "14:00 - 15:00 CET",
      speaker: "Jean Dupont, Expert IA"
    },
    {
      id: 2,
      title: "Les meilleures pratiques pour entraîner votre IA conversationnelle",
      date: "10 juillet 2024",
      time: "11:00 - 12:00 CET",
      speaker: "Laura Martin, Directrice Produit"
    },
    {
      id: 3,
      title: "Intelligence émotionnelle et IA : Le futur du service client",
      date: "22 juillet 2024",
      time: "15:00 - 16:00 CET",
      speaker: "Dr. Paul Leclerc, Chercheur en IA"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-6">Centre de ressources Celsai</h1>
              <p className="text-xl text-gray-600">
                Explorez nos guides, livres blancs, webinaires et études de cas pour optimiser votre service client.
              </p>
              
              <div className="mt-8 relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Rechercher des ressources..."
                  className="pl-10 pr-4 py-3 rounded-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Button variant="ghost" className="p-0 h-9 w-9">
                    <Filter className="h-5 w-5 text-gray-400" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={category.active ? "default" : "outline"} 
                  className={`rounded-full ${category.active ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-gray-200'}`}
                >
                  {category.name} <span className="ml-1 text-xs opacity-70">({category.count})</span>
                </Button>
              ))}
            </div>
          </Container>
        </section>
        
        <section className="py-16">
          <Container>
            <h2 className="text-2xl font-bold mb-8">Ressources à la une</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group">
                  <Link to={resource.link} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={resource.imageUrl}
                        alt={resource.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {resource.type}
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
                    <Link to={resource.link}>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4">
                      {resource.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {resource.readTime}
                      </div>
                      <div className="text-sm text-gray-500">
                        {resource.date}
                      </div>
                    </div>
                    <div className="mt-4">
                      {resource.downloadable ? (
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                          <Link to={resource.link}>
                            <Download className="mr-2 h-4 w-4" />
                            Télécharger
                          </Link>
                        </Button>
                      ) : (
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                          <Link to={resource.link}>
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Regarder
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        <section className="py-12 bg-gray-50">
          <Container>
            <h2 className="text-2xl font-bold mb-8">Toutes les ressources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-all group">
                  <Link to={resource.link || "#"} className="block">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={resource.imageUrl}
                        alt={resource.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {resource.type}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-5">
                    <Link to={resource.link || "#"}>
                      <h3 className="font-bold mb-3 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                    </Link>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {resource.readTime}
                      </div>
                      <div>
                        {resource.date}
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full justify-between hover:text-blue-600" asChild>
                      <Link to={resource.link || "#"}>
                        Lire la suite
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-gray-200 hover:border-blue-400 hover:bg-blue-50">
                Voir plus de ressources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Container>
        </section>
        
        <section className="py-16">
          <Container>
            <div className="bg-blue-50 rounded-xl p-8 md:p-12">
              <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                    Webinaires à venir
                  </span>
                  <h2 className="text-3xl font-bold mb-4">Participez à nos prochains webinaires en direct</h2>
                  <p className="text-gray-600 mb-6">
                    Inscrivez-vous à nos webinaires pour approfondir vos connaissances et poser vos questions à nos experts en temps réel.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white mb-6 md:mb-0">
                    Voir tous les webinaires
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  {upcomingWebinars.map((webinar) => (
                    <div key={webinar.id} className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg mb-2">{webinar.title}</h3>
                          <div className="flex items-center text-gray-600 mb-1">
                            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                            {webinar.date}, {webinar.time}
                          </div>
                          <p className="text-gray-600">{webinar.speaker}</p>
                        </div>
                        <Button size="sm" variant="outline" className="border-blue-200 hover:border-blue-400 hover:bg-blue-50">
                          S'inscrire
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Besoin d'aide pour choisir la bonne ressource ?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre équipe est disponible pour vous guider et vous recommander les ressources les plus adaptées à vos besoins.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                Contacter un expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-blue-200 hover:border-blue-400 hover:bg-blue-50" size="lg">
                S'inscrire à la newsletter
                <FileText className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
