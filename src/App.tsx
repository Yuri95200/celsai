
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import AllFeatures from "./pages/AllFeatures";
import Contact from "./pages/Contact";
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <DecorativeMotifs />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/features" element={<AllFeatures />} />
        <Route path="/contact" element={<Contact />} />
        
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
  );
}

export default App;
