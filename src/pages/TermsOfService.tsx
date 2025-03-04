
import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Conditions d'utilisation</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">1. Acceptation des conditions</h2>
            <p className="mb-4">
              En accédant à ou en utilisant le service Celsai, vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser notre service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">2. Description du service</h2>
            <p className="mb-4">
              Celsai propose une solution d'intelligence artificielle destinée à améliorer le service client des entreprises. 
              Notre service inclut une plateforme en ligne, des outils d'analyse et des fonctionnalités d'IA conversationnelle.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">3. Conditions d'utilisation</h2>
            <p className="mb-4">
              Pour utiliser Celsai, vous devez:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Avoir au moins 18 ans ou l'âge légal dans votre juridiction</li>
              <li className="mb-2">Créer un compte avec des informations exactes et complètes</li>
              <li className="mb-2">Être responsable de la confidentialité de votre compte</li>
              <li className="mb-2">Utiliser le service conformément aux lois applicables</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">4. Abonnements et paiements</h2>
            <p className="mb-4">
              Celsai propose différentes formules d'abonnement. Les détails concernant les prix, la durée et les fonctionnalités 
              incluses sont disponibles sur notre page de tarification. Les paiements sont traités de manière sécurisée et 
              conformément à notre politique de confidentialité.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">5. Propriété intellectuelle</h2>
            <p className="mb-4">
              Tout le contenu présent sur Celsai, y compris mais non limité aux textes, graphiques, logos, icônes, images, 
              clips audio, téléchargements numériques et compilations de données, est la propriété de Celsai ou de ses fournisseurs 
              de contenu et est protégé par les lois françaises et internationales sur la propriété intellectuelle.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">6. Limitation de responsabilité</h2>
            <p className="mb-4">
              Celsai ne sera pas responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant 
              de l'utilisation ou de l'incapacité d'utiliser notre service, même si nous avons été informés de la possibilité 
              de tels dommages.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">7. Modifications des conditions</h2>
            <p className="mb-4">
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur 
              dès leur publication sur cette page. Il est de votre responsabilité de consulter régulièrement cette page pour 
              prendre connaissance des modifications.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">8. Contact</h2>
            <p className="mb-4">
              Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à 
              <a href="mailto:legal@celsai.com" className="text-blue-600 hover:underline"> legal@celsai.com</a>.
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

export default TermsOfService;
