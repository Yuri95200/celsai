
import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Target, Star, Award, BookOpen, Heart } from "lucide-react";

const About = () => {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium mb-4">
                À propos de nous
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Notre mission : révolutionner le service client
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Découvrez l'équipe derrière Celsai et notre vision pour transformer l'expérience client grâce à l'intelligence artificielle conversationnelle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-celsai-500 hover:bg-celsai-600 text-white">
                  Rejoindre notre équipe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-gray-200 hover:border-celsai-400 hover:bg-celsai-50">
                  Contacter nos experts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Notre Histoire */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium">
                  Notre histoire
                </span>
                <h2 className="mt-4 text-3xl font-bold mb-6">De l'idée à la réalité</h2>
                <p className="text-gray-600 mb-4">
                  Celsai est né d'une vision simple : rendre le service client plus humain grâce à la technologie. Fondée en 2021 par une équipe d'experts en IA et en expérience client, notre entreprise s'est donnée pour mission de révolutionner la façon dont les entreprises interagissent avec leurs clients.
                </p>
                <p className="text-gray-600 mb-4">
                  Face à des services clients souvent impersonnels et inefficaces, nous avons développé une solution d'IA conversationnelle capable de comprendre véritablement les besoins des clients, d'apprendre en continu, et de fournir des réponses pertinentes et personnalisées.
                </p>
                <p className="text-gray-600">
                  Aujourd'hui, Celsai aide des entreprises de toutes tailles à transformer leur support client, à réduire leurs coûts opérationnels, et à offrir des expériences exceptionnelles à leurs utilisateurs.
                </p>
              </div>
              <div className="order-1 lg:order-2 p-4">
                <div className="relative">
                  <div className="absolute -inset-4 bg-celsai-100 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                      alt="L'équipe Celsai" 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Nos Valeurs */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium">
                Nos valeurs
              </span>
              <h2 className="mt-4 text-3xl font-bold mb-6">Les principes qui nous guident</h2>
              <p className="text-gray-600">
                Chez Celsai, nos valeurs définissent qui nous sommes et comment nous travaillons. Elles sont au cœur de chaque décision que nous prenons et de chaque interaction que nous avons.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-celsai-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Heart className="text-celsai-600 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Empathie</h3>
                <p className="text-gray-600">
                  Nous plaçons l'humain au centre de notre technologie. Comprendre les besoins, les frustrations et les attentes des utilisateurs est notre priorité absolue.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-celsai-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Star className="text-celsai-600 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Nous visons constamment l'excellence dans nos produits et nos services. Notre engagement envers la qualité se reflète dans chaque ligne de code et chaque interaction client.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-celsai-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BookOpen className="text-celsai-600 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Apprentissage continu</h3>
                <p className="text-gray-600">
                  Comme notre IA, nous apprenons et nous adaptons constamment. Nous cultivons une culture où la curiosité et l'amélioration continue sont encouragées.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-celsai-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Target className="text-celsai-600 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Nous repoussons sans cesse les limites de ce qui est possible. Notre esprit d'innovation nous permet de créer des solutions qui transforment véritablement le service client.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-celsai-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="text-celsai-600 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  Nous croyons en la puissance du travail d'équipe. La diversité des perspectives et des compétences est notre force pour résoudre des problèmes complexes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-celsai-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Award className="text-celsai-600 h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Confiance</h3>
                <p className="text-gray-600">
                  Nous construisons des relations basées sur la confiance, tant avec nos clients qu'au sein de notre équipe. Transparence et honnêteté sont nos principes fondateurs.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-celsai-500 hover:bg-celsai-600 text-white">
                Découvrir nos opportunités de carrière
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Container>
        </section>

        {/* Notre Équipe */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium">
                Notre équipe
              </span>
              <h2 className="mt-4 text-3xl font-bold mb-6">Les visages derrière Celsai</h2>
              <p className="text-gray-600">
                Notre équipe est composée d'experts passionnés par l'IA, l'expérience client et le développement de produits innovants. Ensemble, nous travaillons pour créer une technologie qui améliore la vie des utilisateurs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Sophie Martin",
                  role: "CEO & Co-fondatrice",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Thomas Dubois",
                  role: "CTO & Co-fondateur",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Léa Bernard",
                  role: "Directrice Produit",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Alexandre Petit",
                  role: "Directeur IA",
                  image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Emma Richard",
                  role: "Lead Designer UX",
                  image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Nicolas Moreau",
                  role: "Lead Développeur",
                  image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Julie Lambert",
                  role: "Responsable Marketing",
                  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "David Roux",
                  role: "Responsable Commercial",
                  image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <Button variant="outline" className="w-full text-white border-white hover:bg-white/20">
                        Voir le profil
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="bg-celsai-50 rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Rejoignez l'aventure Celsai</h3>
                <p className="text-gray-600 mb-6">
                  Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre équipe en pleine croissance. Découvrez nos opportunités de carrière et aidez-nous à façonner l'avenir du service client.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-celsai-500 hover:bg-celsai-600 text-white">
                    Voir nos offres d'emploi
                  </Button>
                  <Button variant="outline" className="border-celsai-200 hover:border-celsai-400 hover:bg-celsai-50">
                    Candidature spontanée
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-celsai-600 to-blue-700 text-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à transformer votre service client avec Celsai ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Rejoignez les entreprises qui offrent déjà une expérience client exceptionnelle grâce à notre IA conversationnelle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-celsai-600 hover:bg-gray-100">
                  Demander une démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white/30 hover:bg-white/10 text-white">
                  Commencer un essai gratuit
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
