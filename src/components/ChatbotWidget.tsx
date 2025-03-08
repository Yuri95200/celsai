
import { useEffect } from "react";

const ChatbotWidget = () => {
  useEffect(() => {
    // Création du script pour le widget de chatbot
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.async = true;
    script.dataset.resourcesUrl = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
    script.dataset.widgetId = "67cc77601d6992daa61ea853";
    
    // Ajout du script au body
    document.body.appendChild(script);

    // Nettoyage du script quand le composant est démonté
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Le composant ne rend rien visuellement, il ajoute juste le script
  return null;
};

export default ChatbotWidget;
