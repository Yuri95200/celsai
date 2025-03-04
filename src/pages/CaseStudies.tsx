
import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Users, Award, ChartBar, Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Comment E-Commerce Plus a réduit ses coûts de support de 60%",
      company: "E-Commerce Plus",
      industry: "Commerce en ligne",
      challenge: "Face à une croissance rapide, E-Commerce Plus a vu ses tickets de support exploser, entraînant des délais de réponse de plus de 48 heures et une satisfaction client en baisse.",
      solution: "Mise en place de Celsai pour automatiser les réponses aux questions fréquentes et gérer les demandes de suivi de commandes.",
      results: [
        "Réduction des coûts de support de 60%",
        "Amélioration de la satisfaction client de 25%",
        "Temps de réponse réduit à moins de 5 minutes",
        "ROI atteint en moins de 3 mois"
      ],
      testimonial: "Grâce à Celsai, nous avons transformé notre service client d'un centre de coûts à un avantage compétitif.",
      author: "Marie Dubois, Directrice Service Client",
      image: "/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png"
    },
    {
      id: 2,
      title: "SoftSolutions : Mise en place d'une IA conversationnelle en 2 semaines",
      company: "SoftSolutions",
      industry: "Développement logiciel",
      challenge: "SoftSolutions cherchait à améliorer son support technique sans alourdir la charge de travail de ses développeurs seniors.",
      solution: "Intégration de Celsai avec leur base de connaissances techniques existante et leur système de tickets.",
      results: [
        "40% des demandes traitées sans intervention humaine",
        "Mise en place complète en seulement 2 semaines",
        "Augmentation de 35% de la productivité des développeurs",
        "Disponibilité du support technique 24/7"
      ],
      testimonial: "La mise en place a été d'une simplicité déconcertante. En deux semaines, Celsai gérait déjà efficacement 40% de nos demandes.",
      author: "Thomas Leroy, CTO",
      image: "/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png"
    },
    {
      id: 3,
      title: "TechVision : Une expérience client exceptionnelle malgré la complexité technique",
      company: "TechVision",
      industry: "Technologie & IoT",
      challenge: "Avec des produits IoT complexes, TechVision peinait à fournir un support de qualité sans multiplier les recrutements.",
      solution: "Déploiement de Celsai avec une formation spécifique sur les produits IoT et intégration avec leur CRM.",
      results: [
        "Capacité à répondre aux questions techniques complexes 24/7",
        "Taux de résolution au premier contact amélioré de 45%",
        "Réduction de 30% du temps de formation des nouveaux agents",
        "Augmentation des ventes additionnelles de 20%"
      ],
      testimonial: "Nos clients adorent obtenir des réponses instantanées 24/7. Le niveau de compréhension de Celsai est impressionnant, même pour des questions techniques complexes.",
      author: "Sophie Martin, Responsable Expérience Client",
      image: "/lovable-uploads/7a259d38-8248-4be9-857d-6ed9c88e32e9.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-6">Études de cas Celsai</h1>
              <p className="text-xl text-gray-600">
                Découvrez comment des entreprises de tous secteurs transforment leur service client avec notre IA conversationnelle.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <Button variant="outline" className="rounded-full">
                Tous les secteurs
              </Button>
              <Button variant="outline" className="rounded-full bg-blue-50">
                E-commerce
              </Button>
              <Button variant="outline" className="rounded-full">
                SaaS
              </Button>
              <Button variant="outline" className="rounded-full">
                Services financiers
              </Button>
              <Button variant="outline" className="rounded-full">
                Santé
              </Button>
            </div>
          </Container>
        </section>
        
        <section className="py-16">
          <Container>
            <div className="grid gap-12">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3">
                    <div className="md:col-span-1 bg-blue-50 p-8 flex items-center justify-center">
                      <img 
                        src={study.image}
                        alt={`${study.company} logo`} 
                        className="max-h-32 max-w-full"
                      />
                    </div>
                    <div className="md:col-span-2 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-3">
                            {study.industry}
                          </span>
                          <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                          <p className="text-blue-600 font-medium">{study.company}</p>
                        </div>
                        <Link to={`/case-studies/${study.id}`}>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="font-medium mb-2">Le défi</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="font-medium mb-2">Notre solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="font-medium mb-2">Résultats clés</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-500 mr-2">✓</span>
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border-t pt-6 mt-6">
                        <blockquote className="italic text-gray-600 mb-3">
                          "{study.testimonial}"
                        </blockquote>
                        <p className="font-medium">{study.author}</p>
                      </div>
                      
                      <div className="mt-6">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          Lire l'étude complète
                          <BookOpen className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        <section className="bg-blue-50 py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Prêt à rejoindre ces entreprises à succès ?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez comment Celsai peut transformer votre service client et vous aider à atteindre des résultats similaires.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                Commencer votre essai gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-blue-200 hover:border-blue-400 hover:bg-blue-50" size="lg">
                Planifier une démo
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
