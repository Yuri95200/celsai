
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import CaseStudies from "./pages/CaseStudies";
import Resources from "./pages/Resources";
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
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/resources" element={<Resources />} />
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
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
