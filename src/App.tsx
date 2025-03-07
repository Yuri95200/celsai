
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
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
  let keywords = "service client IA, chatbot intelligent, support client automatisé, base de connaissances IA, résolution automatique, support omnicanal, IA entreprise, Celsai";
  let canonicalUrl = "https://www.celsai.com" + location.pathname;
  
  // Ajuster en fonction de la page
  if (location.pathname === "/") {
    title = "Celsai - Solution d'IA pour Service Client | Chatbot Intelligent et Automatisation";
    description = "Transformez votre service client avec Celsai, la plateforme d'IA avancée qui intègre chatbot intelligent, base de connaissances et automatisation des résolutions. Réduisez vos coûts et améliorez la satisfaction client.";
    keywords = "service client IA, chatbot intelligent, automation service client, expérience client, satisfaction client, support IA, Celsai";
  } else if (location.pathname.includes("/features/chatbot")) {
    title = "Chatbot IA Avancé pour Service Client | Disponible 24/7 | Celsai";
    description = "Offrez des réponses instantanées et personnalisées à vos clients 24h/24 et 7j/7 grâce à notre chatbot IA avancé. Multilingue, conversationnel et sécurisé selon les normes RGPD.";
    keywords = "chatbot IA, assistant virtuel, réponses automatisées, service client 24/7, support multilingue, Celsai";
  } else if (location.pathname.includes("/features/knowledge-base")) {
    title = "Base de Connaissances IA Dynamique | Assistance Intelligente | Celsai";
    description = "Notre base de connaissances IA centralise toutes vos informations pour des réponses précises et cohérentes. Synchronisation automatique avec vos documents et apprentissage continu.";
    keywords = "base de connaissances IA, gestion des connaissances, documentation automatisée, apprentissage machine, recherche sémantique, Celsai";
  } else if (location.pathname.includes("/features/automated-resolution")) {
    title = "Résolution Automatique des Problèmes Clients | IA Diagnostic | Celsai";
    description = "Résolvez rapidement les problèmes techniques de vos clients grâce à notre diagnostic IA et nos guides étape par étape. Réduction des tickets jusqu'à 60-80% sans intervention humaine.";
    keywords = "résolution automatique, diagnostic IA, self-service, guides interactifs, réduction tickets support, Celsai";
  } else if (location.pathname.includes("/features/smart-escalation")) {
    title = "Escalade Intelligente des Demandes Client | Routage IA | Celsai";
    description = "Notre système d'escalade intelligente analyse la complexité des demandes et les dirige vers les agents les plus qualifiés, optimisant l'efficacité de votre service client.";
    keywords = "escalade intelligente, routage demandes, transfert contextualisé, priorisation tickets, workflow support client, Celsai";
  } else if (location.pathname.includes("/features/analytics")) {
    title = "Analyses et Reporting IA du Service Client | Insights Avancés | Celsai";
    description = "Obtenez des insights puissants sur vos performances de service client grâce à nos tableaux de bord d'analyse IA. Visualisez tendances, sentiments et opportunités d'amélioration.";
    keywords = "analyses service client, dashboard IA, reporting performances, sentiment client, optimisation support, métriques service client, Celsai";
  } else if (location.pathname.includes("/features/industry-customization")) {
    title = "IA Service Client Personnalisée par Secteur | Solutions Spécifiques | Celsai";
    description = "Des solutions d'IA de service client sur mesure pour chaque secteur d'activité : finance, e-commerce, santé, télécoms, tourisme et services professionnels.";
    keywords = "IA service client sectorielles, solutions spécifiques industrie, personnalisation par secteur, IA spécialisée, Celsai";
  } else if (location.pathname.includes("/features/integrations")) {
    title = "Intégrations Service Client IA | Connectez vos Outils Existants | Celsai";
    description = "Intégrez facilement Celsai à vos outils existants - CRM, helpdesk, chat, e-commerce et plus. API flexible et connecteurs prêts à l'emploi pour une implémentation rapide.";
    keywords = "intégrations IA, connecteurs service client, API service client, intégration CRM, synchronisation helpdesk, Celsai";
  } else if (location.pathname.includes("/about")) {
    title = "À Propos de Celsai | Notre Mission et Notre Équipe d'IA";
    description = "Découvrez l'histoire de Celsai, notre mission de transformation du service client par l'IA et l'équipe d'experts qui développe nos solutions innovantes.";
    keywords = "équipe Celsai, histoire entreprise IA, mission service client, valeurs IA, experts intelligence artificielle, Celsai";
  } else if (location.pathname.includes("/contact")) {
    title = "Contactez Celsai | Experts en IA pour Service Client";
    description = "Entrez en contact avec notre équipe d'experts pour discuter de vos besoins en matière de service client IA et découvrir comment Celsai peut transformer votre expérience client.";
    keywords = "contact Celsai, service client IA, assistance IA, démo service client, support technique IA, Celsai";
  } else if (location.pathname.includes("/demo")) {
    title = "Réservez une Démo de Celsai | Découvrez notre IA Service Client";
    description = "Réservez une démonstration personnalisée pour découvrir comment Celsai peut transformer votre service client grâce à notre plateforme d'IA intégrée et nos solutions sur mesure.";
    keywords = "démonstration IA, démo service client, présentation chatbot, essai plateforme IA, rendez-vous consultation, Celsai";
  } else if (location.pathname.includes("/terms")) {
    title = "Conditions d'Utilisation | Celsai Solutions d'IA";
    description = "Consultez nos conditions d'utilisation détaillées pour comprendre les termes qui régissent l'utilisation de la plateforme Celsai et nos services d'IA pour le service client.";
    keywords = "conditions utilisation Celsai, termes service IA, obligations légales, droits utilisateur, politique service, Celsai";
  } else if (location.pathname.includes("/privacy")) {
    title = "Politique de Confidentialité | Protection des Données | Celsai";
    description = "Notre politique de confidentialité détaille comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD et autres réglementations.";
    keywords = "confidentialité données, RGPD IA, protection informations, sécurité données client, politique privée, Celsai";
  } else if (location.pathname.includes("/features")) {
    title = "Fonctionnalités IA Service Client | Suite Complète | Celsai";
    description = "Découvrez notre suite complète de fonctionnalités d'IA pour le service client : chatbot intelligent, base de connaissances, résolution automatisée et analyses avancées.";
    keywords = "fonctionnalités service client IA, capacités chatbot, outils support IA, solutions automation, plateforme assistance, Celsai";
  } else if (location.pathname.includes("/articles/guide-ia-2024")) {
    title = "Guide IA Service Client 2024 | Tendances et Stratégies | Celsai";
    description = "Découvrez comment l'IA révolutionne le service client en 2024 avec notre guide complet des technologies, stratégies et tendances émergentes pour optimiser votre support.";
    keywords = "guide IA 2024, tendances service client, innovations support, stratégies IA, futur service client, Celsai";
  } else if (location.pathname.includes("/articles/webinaire-support-omnicanal")) {
    title = "Webinaire Support Omnicanal IA | Stratégies Unifiées | Celsai";
    description = "Regardez notre webinaire sur les stratégies de support omnicanal propulsées par l'IA pour offrir une expérience client cohérente sur tous les canaux de communication.";
    keywords = "webinaire omnicanal, support multicanal, stratégie expérience client, communication unifiée, IA conversationnelle, Celsai";
  } else if (location.pathname.includes("/articles/livre-blanc-roi")) {
    title = "Livre Blanc ROI de l'IA en Service Client | Étude Complète | Celsai";
    description = "Notre livre blanc analyse le retour sur investissement de l'IA dans le service client avec des données concrètes, études de cas et méthodes de calcul pour justifier votre investissement.";
    keywords = "ROI IA service client, retour investissement support, bénéfices chatbot, rentabilité automation, réduction coûts support, Celsai";
  } else if (location.pathname.includes("/articles/metriques-service-client")) {
    title = "7 Métriques Essentielles Service Client | KPIs Support | Celsai";
    description = "Guide complet des 7 métriques essentielles pour évaluer l'efficacité de votre service client : satisfaction, résolution, temps de traitement et plus.";
    keywords = "métriques service client, KPI support, indicateurs performance, CSAT, NPS, taux résolution, temps traitement, Celsai";
  } else if (location.pathname.includes("/articles/etude-cas-banque-digitale")) {
    title = "Étude de Cas: Transformation IA du Support Bancaire | Celsai";
    description = "Découvrez comment une banque digitale a transformé son service client grâce à l'IA de Celsai, réduisant les coûts de 45% et augmentant la satisfaction client de 60%.";
    keywords = "étude cas IA bancaire, success story support, transformation digitale banque, réduction coûts service client, automation bancaire, Celsai";
  }
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

function App() {
  return (
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
  );
}

export default App;
