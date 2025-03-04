
import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold">Politique de confidentialité</h1>
          </div>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <p className="mb-6">
              Chez Celsai, nous prenons la protection de vos données personnelles très au sérieux. 
              Cette politique de confidentialité explique comment nous collectons, utilisons, partageons 
              et protégeons vos informations lorsque vous utilisez notre service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">1. Informations que nous collectons</h2>
            <p className="mb-4">Nous collectons les types d'informations suivants :</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Informations personnelles :</strong> Nom, adresse email, numéro de téléphone, 
                informations de facturation lorsque vous créez un compte ou souscrivez à un abonnement.
              </li>
              <li className="mb-2">
                <strong>Données d'utilisation :</strong> Informations sur la façon dont vous interagissez 
                avec notre service, les fonctionnalités que vous utilisez et le temps passé sur notre plateforme.
              </li>
              <li className="mb-2">
                <strong>Données client importées :</strong> Les conversations et données client que vous importez 
                dans notre système pour l'entraînement de l'IA et la personnalisation du service.
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">2. Comment nous utilisons vos informations</h2>
            <p className="mb-4">Nous utilisons vos informations pour :</p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Fournir, maintenir et améliorer notre service</li>
              <li className="mb-2">Traiter vos transactions et gérer votre compte</li>
              <li className="mb-2">Vous envoyer des informations techniques, des mises à jour ou des alertes de sécurité</li>
              <li className="mb-2">Répondre à vos demandes et fournir un support client</li>
              <li className="mb-2">Personnaliser votre expérience et adapter notre service à vos besoins</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">3. Partage des informations</h2>
            <p className="mb-4">
              Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos informations avec :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Prestataires de services :</strong> Qui nous aident à fournir notre service (hébergement, 
                traitement des paiements, analyse)
              </li>
              <li className="mb-2">
                <strong>Partenaires commerciaux :</strong> Avec votre consentement, pour des services complémentaires
              </li>
              <li className="mb-2">
                <strong>Obligations légales :</strong> Si nécessaire pour se conformer à la loi ou protéger nos droits
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">4. Sécurité des données</h2>
            <p className="mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos 
              informations contre l'accès non autorisé, la perte ou l'altération. Ces mesures incluent le chiffrement 
              des données, les contrôles d'accès et les audits de sécurité réguliers.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">5. Conservation des données</h2>
            <p className="mb-4">
              Nous conservons vos informations aussi longtemps que nécessaire pour fournir notre service et 
              respecter nos obligations légales. Vous pouvez demander la suppression de vos données conformément 
              aux lois applicables.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">6. Vos droits</h2>
            <p className="mb-4">
              Selon votre localisation, vous pouvez avoir le droit d'accéder, de corriger, de supprimer ou de 
              limiter l'utilisation de vos données personnelles. Vous pouvez également avoir le droit de vous 
              opposer au traitement ou de demander la portabilité de vos données.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">7. Modifications de cette politique</h2>
            <p className="mb-4">
              Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons 
              de tout changement important par email ou par une notification sur notre service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">8. Contact</h2>
            <p className="mb-4">
              Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à 
              <a href="mailto:privacy@celsai.com" className="text-blue-600 hover:underline"> privacy@celsai.com</a>.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Retour à l'accueil
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
