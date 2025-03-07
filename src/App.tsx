
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet";
import Index from "./pages/Index";
import About from "./pages/About";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import AllFeatures from "./pages/AllFeatures";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import ScrollToTop from "./components/ScrollToTop";
import DecorativeMotifs from "./components/DecorativeMotifs";
import "./App.css";

// Feature pages
import ChatbotFeature from "./pages/features/ChatbotFeature";
import KnowledgeBaseFeature from "./pages/features/KnowledgeBaseFeature";
import AutomatedResolutionFeature from "./pages/features/AutomatedResolutionFeature";
import SmartEscalationFeature from "./pages/features/SmartEscalationFeature";
import AnalyticsFeature from "./pages/features/AnalyticsFeature";
import IndustryCustomizationFeature from "./pages/features/IndustryCustomizationFeature";
import IntegrationsFeature from "./pages/features/IntegrationsFeature";

// Article pages
import GuideIA2024 from "./articles/GuideIA2024";
import WebinaireSupportOmnicanal from "./articles/WebinaireSupportOmnicanal";
import LivreBlancROI from "./articles/LivreBlancROI";
import MetriquesServiceClient from "./articles/MetriquesServiceClient";
import EtudeCasBanqueDigitale from "./articles/EtudeCasBanqueDigitale";

function SEOWrapper() {
  const location = useLocation();
  
  // Définir le titre et la description par défaut
  let title = "Celsai - Solution d'IA pour Service Client | Chatbot Intelligent et Automatisation";
  let description = "Transformez votre service client avec Celsai, la plateforme d'IA avancée qui intègre chatbot intelligent, base de connaissances et automatisation des résolutions.";
  
  // Ajuster en fonction de la page
  if (location.pathname.includes("/features/chatbot")) {
    title = "Chatbot IA Avancé | Celsai";
    description = "Découvrez notre chatbot IA avancé qui offre des réponses instantanées et personnalisées à vos clients 24h/24 et 7j/7.";
  } else if (location.pathname.includes("/features/knowledge-base")) {
    title = "Base de Connaissances IA | Celsai";
    description = "Notre base de connaissances IA centralise toutes vos informations pour des réponses précises et cohérentes.";
  } else if (location.pathname.includes("/about")) {
    title = "À Propos de Celsai | Notre Mission et Notre Équipe";
    description = "Découvrez l'histoire de Celsai, notre mission et l'équipe qui transforme le service client grâce à l'IA.";
  } else if (location.pathname.includes("/contact")) {
    title = "Contactez Celsai | Demandez une Démo";
    description = "Entrez en contact avec notre équipe pour discuter de vos besoins en matière de service client IA et planifier une démonstration.";
  } else if (location.pathname.includes("/demo")) {
    title = "Réservez une Démo | Celsai";
    description = "Réservez une démonstration personnalisée pour découvrir comment Celsai peut transformer votre service client.";
  }
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEOWrapper />
        <ScrollToTop />
        <DecorativeMotifs />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/features" element={<AllFeatures />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          
          {/* Feature routes */}
          <Route path="/features/chatbot" element={<ChatbotFeature />} />
          <Route path="/features/knowledge-base" element={<KnowledgeBaseFeature />} />
          <Route path="/features/automated-resolution" element={<AutomatedResolutionFeature />} />
          <Route path="/features/smart-escalation" element={<SmartEscalationFeature />} />
          <Route path="/features/analytics" element={<AnalyticsFeature />} />
          <Route path="/features/industry-customization" element={<IndustryCustomizationFeature />} />
          <Route path="/features/integrations" element={<IntegrationsFeature />} />
          
          {/* Article routes */}
          <Route path="/articles/guide-ia-2024" element={<GuideIA2024 />} />
          <Route path="/articles/webinaire-support-omnicanal" element={<WebinaireSupportOmnicanal />} />
          <Route path="/articles/livre-blanc-roi" element={<LivreBlancROI />} />
          <Route path="/articles/metriques-service-client" element={<MetriquesServiceClient />} />
          <Route path="/articles/etude-cas-banque-digitale" element={<EtudeCasBanqueDigitale />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
