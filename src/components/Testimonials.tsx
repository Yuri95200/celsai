
import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare, Award, Users, ArrowRight, BookOpen } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Grâce à Celsai, nous avons réduit nos coûts de support de 60% tout en améliorant notre satisfaction client de 25%. C'est un investissement qui s'est rentabilisé en moins de 3 mois.",
      author: "Marie Dubois",
      title: "Directrice Service Client",
      company: "E-Commerce Plus",
      icon: <Star className="h-10 w-10 text-yellow-400" />
    },
    {
      id: 2,
      quote: "La mise en place a été d'une simplicité déconcertante. En deux semaines, Celsai était opérationnel et gérait déjà efficacement 40% de nos demandes sans intervention humaine.",
      author: "Thomas Leroy",
      title: "CTO",
      company: "SoftSolutions",
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />
    },
    {
      id: 3,
      quote: "Nos clients adorent obtenir des réponses instantanées 24/7. Le niveau de compréhension et de personnalisation de Celsai est impressionnant, même pour des questions techniques complexes.",
      author: "Sophie Martin",
      title: "Responsable Expérience Client",
      company: "TechVision",
      icon: <Award className="h-10 w-10 text-purple-500" />
    }
  ];

  const companyLogos = [
    { id: 1, name: "TechCorp", classes: "bg-gray-200" },
    { id: 2, name: "InnoSoft", classes: "bg-gray-300" },
    { id: 3, name: "DataFlow", classes: "bg-gray-200" },
    { id: 4, name: "CloudServe", classes: "bg-gray-300" },
    { id: 5, name: "SmartSys", classes: "bg-gray-200" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment Celsai transforme le service client de nombreuses entreprises à travers différents secteurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-4">
                {testimonial.icon}
              </div>
              <blockquote className="mb-6 flex-grow">
                <p className="italic text-gray-700">{testimonial.quote}</p>
              </blockquote>
              <div className="mt-auto">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.title}</p>
                <p className="text-blue-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
            <BookOpen className="mr-2 h-5 w-5" />
            Lire nos études de cas
          </Button>
        </div>

        <div className="text-center mb-8">
          <h3 className="font-semibold text-lg mb-4">Ils nous font confiance</h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {companyLogos.map((logo) => (
            <div 
              key={logo.id} 
              className={`${logo.classes} h-16 w-32 rounded-md flex items-center justify-center`}
            >
              <span className="font-semibold text-gray-700">{logo.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 p-4 rounded-lg">
            <Users className="h-5 w-5 text-blue-500" />
            <p className="text-blue-800 font-medium">
              Rejoignez plus de <span className="font-bold">500+</span> entreprises qui améliorent leur service client avec Celsai
            </p>
          </div>
          <div className="mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Commencer votre essai gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
