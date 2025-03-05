
import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingFAQ = () => {
  const faqItems = [
    {
      question: "Combien de temps dure la période d'essai gratuit ?",
      answer: "La période d'essai gratuit est de 14 jours pour tous nos forfaits, avec accès complet à toutes les fonctionnalités. Aucune carte de crédit n'est requise pour démarrer votre essai."
    },
    {
      question: "Puis-je changer de forfait après m'être inscrit ?",
      answer: "Oui, vous pouvez passer à un forfait supérieur ou inférieur à tout moment. La facturation sera ajustée au prorata de votre période de facturation restante."
    },
    {
      question: "Y a-t-il des limites de messages ou d'utilisateurs ?",
      answer: "Chaque forfait dispose de limites spécifiques pour le nombre de messages AI et d'utilisateurs. Le forfait Démarrage inclut 5 000 messages par mois, le forfait Pro 20 000 messages, et le forfait Entreprise offre un volume personnalisé selon vos besoins."
    },
    {
      question: "Comment fonctionne l'intégration avec mes outils existants ?",
      answer: "Celsai s'intègre facilement avec la plupart des CRM, plateformes de service client et outils de chat populaires via nos API et connecteurs prédéfinis. Notre équipe technique peut également vous accompagner pour des intégrations personnalisées."
    },
    {
      question: "Quelles langues sont prises en charge par Celsai ?",
      answer: "Celsai prend en charge plus de 30 langues, dont le français, l'anglais, l'espagnol, l'allemand, l'italien, le portugais, le russe, le chinois, le japonais et l'arabe. D'autres langues sont régulièrement ajoutées."
    },
    {
      question: "Quelle est la précision de l'IA dans la compréhension des demandes ?",
      answer: "Notre IA atteint une précision moyenne de 95% dans la compréhension et le traitement des demandes courantes, et continue de s'améliorer avec chaque interaction. Pour les cas complexes, notre système d'escalade intelligente assure que les requêtes sont transmises aux agents humains lorsque nécessaire."
    },
    {
      question: "Comment puis-je personnaliser l'IA selon mon secteur d'activité ?",
      answer: "Vous pouvez personnaliser Celsai en important votre documentation existante, vos FAQ et vos scénarios de support. Notre système apprend automatiquement de ces informations pour offrir des réponses adaptées à votre secteur et à votre entreprise."
    },
    {
      question: "Qu'en est-il de la sécurité et confidentialité des données ?",
      answer: "Celsai est conforme au RGPD et utilise le chiffrement de bout en bout pour toutes les données. Nous ne partageons aucune donnée avec des tiers, et vous restez propriétaire de toutes vos données. Des options de résidence des données sont disponibles pour les clients Entreprise."
    },
    {
      question: "Proposez-vous un accompagnement pour la mise en place ?",
      answer: "Absolument. Tous nos forfaits incluent un support par email et chat. Les forfaits Pro et Entreprise bénéficient également d'un accompagnement personnalisé pour la configuration, la formation et l'optimisation continue de l'IA selon vos besoins spécifiques."
    }
  ];

  return (
    <section id="pricing-faq" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium">
            F.A.Q
          </span>
          <h2 className="mt-4 font-bold text-gradient">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous avons rassemblé les réponses aux questions les plus courantes sur Celsai et nos offres.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <a href="https://celsai.com/demo">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              D'autres questions ? Contactez-nous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default PricingFAQ;
