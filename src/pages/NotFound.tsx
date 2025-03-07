
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Enregistrement de l'erreur 404 pour analyse
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page non trouvée | Celsai</title>
        <meta name="description" content="La page que vous recherchez n'existe pas. Retournez à l'accueil de Celsai, votre solution d'IA pour service client." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.celsai.com/404" />
      </Helmet>

      <Container className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16">
        <div className="w-full max-w-md mx-auto text-center bg-white shadow-lg rounded-lg p-8 border border-gray-100">
          <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-6" />
          
          <h1 className="text-4xl font-bold mb-2 text-gray-900">404</h1>
          <h2 className="text-xl font-medium text-gray-700 mb-4">Page non trouvée</h2>
          
          <p className="text-gray-600 mb-8">
            Oups ! La page <span className="font-medium">{location.pathname}</span> que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>
            <Button asChild variant="outline" onClick={() => window.history.back()}>
              <span>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Page précédente
              </span>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 text-center max-w-lg">
          <h3 className="text-lg font-medium mb-2 text-gray-700">Vous cherchez peut-être ?</h3>
          <ul className="grid grid-cols-2 gap-2 text-celsai-600">
            <li><Link to="/features" className="hover:underline">Nos fonctionnalités</Link></li>
            <li><Link to="/contact" className="hover:underline">Nous contacter</Link></li>
            <li><Link to="/demo" className="hover:underline">Réserver une démo</Link></li>
            <li><Link to="/about" className="hover:underline">À propos de nous</Link></li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
