
import React from "react";
import FeatureLayout from "@/components/FeatureLayout";
import { Container } from "@/components/ui/container";
import { Network, Code, MessageSquare, MessageCircle, Smartphone, Globe, Store, ShieldCheck } from "lucide-react";

const IntegrationsFeature = () => {
  const channels = [
    {
      icon: Globe,
      name: "Site web",
      description: "Widget de chat facile à intégrer sur n'importe quel site web"
    },
    {
      icon: Smartphone,
      name: "Applications mobiles",
      description: "SDK pour iOS et Android pour une intégration native"
    },
    {
      icon: MessageSquare,
      name: "Facebook Messenger",
      description: "Connection directe à votre page Facebook"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      description: "Intégration avec l'API Business de WhatsApp"
    },
    {
      icon: Store,
      name: "Instagram",
      description: "Gestion des messages directs Instagram"
    }
  ];

  const integrations = [
    {
      name: "Systèmes CRM",
      examples: ["Salesforce", "HubSpot", "Zoho CRM"]
    },
    {
      name: "Plateformes de ticketing",
      examples: ["Zendesk", "Freshdesk", "ServiceNow"]
    },
    {
      name: "Outils de collaboration",
      examples: ["Slack", "Microsoft Teams", "Google Workspace"]
    },
    {
      name: "E-commerce",
      examples: ["Shopify", "Magento", "WooCommerce"]
    },
    {
      name: "Bases de connaissances",
      examples: ["Confluence", "Notion", "Help Scout"]
    }
  ];

  return (
    <FeatureLayout
      icon={Network}
      title="Intégration avec vos outils"
      description="Connectez Celsai à tous vos systèmes existants pour une expérience unifiée."
      imageSrc="/placeholder.svg"
    >
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Une solution connectée à votre écosystème</h2>
            <p className="text-lg text-gray-600 mb-4">
              Celsai s'intègre parfaitement à votre pile technologique existante, offrant une expérience
              fluide et cohérente pour vos clients et vos équipes internes. Notre plateforme se connecte
              aux principaux CRM, outils de support et canaux de communication.
            </p>
            <p className="text-lg text-gray-600">
              Grâce à notre API ouverte et nos connecteurs prédéfinis, l'intégration est simple et rapide,
              sans nécessiter de développement complexe.
            </p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Canaux de communication supportés</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {channels.map((channel, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                    <channel.icon className="h-6 w-6 text-celsai-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{channel.name}</h3>
                  <p className="text-gray-600">{channel.description}</p>
                </div>
              ))}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                  <Code className="h-6 w-6 text-celsai-500" />
                </div>
                <h3 className="text-xl font-medium mb-3">API flexible</h3>
                <p className="text-gray-600">
                  Intégrez Celsai à n'importe quel canal propriétaire grâce à notre API flexible et bien documentée.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6">Intégrations avec vos systèmes existants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-medium text-lg mb-3">{integration.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {integration.examples.map((example, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                    <span className="bg-celsai-100 text-celsai-700 px-3 py-1 rounded-full text-sm">
                      et plus...
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <Code className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">API complète</h3>
              <p className="text-gray-600">
                Notre API RESTful bien documentée vous permet d'intégrer Celsai dans n'importe quel système propriétaire et d'automatiser des flux de travail personnalisés.
              </p>
              <div className="mt-4 bg-gray-50 p-3 rounded-md">
                <code className="text-xs text-gray-700">
                  GET /api/v1/conversations<br />
                  POST /api/v1/messages<br />
                  PUT /api/v1/escalations
                </code>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 bg-celsai-50 rounded-lg flex items-center justify-center mb-5">
                <ShieldCheck className="h-6 w-6 text-celsai-500" />
              </div>
              <h3 className="text-xl font-medium mb-3">Sécurité et conformité</h3>
              <p className="text-gray-600">
                Toutes nos intégrations respectent les standards de sécurité les plus élevés avec authentification OAuth 2.0, chiffrement des données et conformité RGPD.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Authentification sécurisée</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Chiffrement des données en transit et au repos</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Audits de sécurité réguliers</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Besoin d'une intégration personnalisée?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Notre équipe d'experts peut vous aider à créer des intégrations sur mesure pour vos systèmes spécifiques et vos besoins uniques.
            </p>
            <div className="inline-block bg-celsai-50 text-celsai-700 px-4 py-3 rounded-lg">
              <p className="font-medium">
                Contactez notre équipe technique pour discuter de vos besoins d'intégration spécifiques.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </FeatureLayout>
  );
};

export default IntegrationsFeature;
