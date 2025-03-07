
import React from "react";
import ArticleLayout from "./ArticleLayout";
import Introduction from "./components/metrics/Introduction";
import CSATMetric from "./components/metrics/CSATMetric";
import NPSMetric from "./components/metrics/NPSMetric";
import FCRMetric from "./components/metrics/FCRMetric";
import AHTMetric from "./components/metrics/AHTMetric";
import CESMetric from "./components/metrics/CESMetric";
import TicketVolumeMetric from "./components/metrics/TicketVolumeMetric";
import CostMetric from "./components/metrics/CostMetric";
import Dashboard from "./components/metrics/Dashboard";
import Conclusion from "./components/metrics/Conclusion";

const MetriquesServiceClient = () => {
  return (
    <ArticleLayout 
      title="7 métriques essentielles pour évaluer l'efficacité de votre service client"
      type="Guide"
      date="3 juin 2024"
      readTime="8 min"
      author={{
        name: "Julie Lambert",
        role: "Consultante Senior en Expérience Client",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
      }}
      downloadable={true}
    >
      <Introduction />
      <CSATMetric />
      <NPSMetric />
      <FCRMetric />
      <AHTMetric />
      <CESMetric />
      <TicketVolumeMetric />
      <CostMetric />
      <Dashboard />
      <Conclusion />
    </ArticleLayout>
  );
};

export default MetriquesServiceClient;
