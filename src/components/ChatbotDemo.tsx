import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Send, MessageCircle, Bot, Sparkles, ArrowRight } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  isTyping?: boolean;
};

// Enhanced scenarios with context
type ChatScenario = {
  keyword: string;
  userMessage: string;
  botResponses: string[];
  currentStep?: number;
};

const presetConversation: Message[] = [{
  id: 1,
  text: "Bonjour ! Je suis Celsai, votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?",
  sender: "bot"
}];

const ChatbotDemo = () => {
  const [messages, setMessages] = useState<Message[]>(presetConversation);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeScenario, setActiveScenario] = useState<ChatScenario | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Define detailed scenarios for each interaction type
  const chatScenarios: ChatScenario[] = [
    {
      keyword: "remboursement",
      userMessage: "Je souhaite effectuer un remboursement",
      botResponses: ["Pour effectuer un remboursement, veuillez me communiquer votre numéro de commande afin que je puisse vérifier son éligibilité.", "Merci. J'ai retrouvé votre commande #FR2345678. D'après notre politique, elle est éligible au remboursement jusqu'au 30 juin. Souhaitez-vous un remboursement sur votre moyen de paiement initial ou un avoir ?", "Parfait. J'ai initié la procédure de remboursement sur votre carte bancaire. Vous recevrez une confirmation par email dans les prochaines minutes et le montant sera crédité sous 3 à 5 jours ouvrés. Puis-je vous aider avec autre chose ?"]
    }, {
      keyword: "facturation",
      userMessage: "J'ai une question sur ma facturation",
      botResponses: ["Concernant votre facturation, pourriez-vous préciser s'il s'agit d'une facture spécifique ou de votre abonnement en général ?", "Je vois. Pour votre abonnement Premium, vous êtes actuellement facturé 49€/mois avec prélèvement le 15 de chaque mois. Votre dernière facture a été émise le 15 mai. Souhaitez-vous modifier vos coordonnées bancaires ou votre formule d'abonnement ?", "Je comprends. Je viens de vous envoyer par email un lien sécurisé pour mettre à jour vos coordonnées bancaires. Ce lien est valable 24h. La modification sera prise en compte pour votre prochain prélèvement."]
    }, {
      keyword: "livraison",
      userMessage: "Quand sera livrée ma commande ?",
      botResponses: ["Pour vous renseigner sur l'état de votre livraison, j'aurais besoin de votre numéro de commande ou de l'email associé à votre compte.", "Merci pour ces informations. Votre commande #FR7890123 est actuellement en transit. Selon les informations du transporteur, elle sera livrée demain entre 9h et 12h à l'adresse indiquée. Souhaitez-vous recevoir les détails de suivi par SMS ?", "Parfait, je viens de programmer l'envoi des notifications de suivi au 06XX XX XX XX. Vous recevrez un SMS dès que le livreur sera en route. Une signature sera nécessaire à la réception."]
    }, {
      keyword: "problème",
      userMessage: "J'ai un problème avec mon compte",
      botResponses: ["Je suis désolé d'apprendre que vous rencontrez un problème avec votre compte. Pouvez-vous me préciser quel type de difficulté vous rencontrez (connexion, paramètres, permissions) ?", "Je comprends. Le problème de connexion que vous décrivez peut avoir plusieurs causes. Avez-vous essayé de réinitialiser votre mot de passe via le lien 'Mot de passe oublié' ? Si oui, vérifiez également vos dossiers de spam pour l'email de réinitialisation.", "Parfait. Je viens de vous envoyer un nouveau lien de réinitialisation à l'adresse john.doe@example.com. Ce lien expire dans 30 minutes. Si le problème persiste, je peux transférer votre demande à notre équipe technique qui pourra débloquer votre compte manuellement."]
    }, {
      keyword: "merci",
      userMessage: "Merci pour votre aide !",
      botResponses: ["Je vous en prie ! C'est toujours un plaisir de pouvoir vous aider. N'hésitez pas à revenir vers moi si vous avez d'autres questions. Je vous souhaite une excellente journée !"]
    }, {
      keyword: "bonjour",
      userMessage: "Bonjour, pouvez-vous m'aider ?",
      botResponses: ["Bonjour ! Je suis ravi de vous accueillir sur Celsai. Je peux vous aider avec les remboursements, la facturation, le suivi de livraison ou tout problème technique. Comment puis-je vous assister aujourd'hui ?"]
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = (text: string) => {
    setIsTyping(true);

    // Ajouter un message "typing" temporaire
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: "",
      sender: "bot",
      isTyping: true
    }]);

    // Délai proportionnel à la longueur du texte pour simuler la frappe
    const delay = Math.min(1000, Math.max(500, text.length * 20));
    setTimeout(() => {
      setIsTyping(false);

      // Remplacer le message "typing" par le vrai message
      setMessages(prev => prev.map(msg => msg.isTyping ? {
        ...msg,
        text,
        isTyping: false
      } : msg));
    }, delay);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Ajouter le message de l'utilisateur
    const newUserMessage = {
      id: Date.now(),
      text: input,
      sender: "user" as const
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInput("");

    // Vérifier si nous sommes dans un scénario actif
    if (activeScenario) {
      const currentStep = activeScenario.currentStep || 0;

      // S'il y a encore des réponses dans ce scénario
      if (currentStep < activeScenario.botResponses.length) {
        setTimeout(() => {
          simulateTyping(activeScenario.botResponses[currentStep]);
        }, 800);

        // Mettre à jour le step du scénario
        setActiveScenario({
          ...activeScenario,
          currentStep: currentStep + 1
        });
      } else {
        // Fin du scénario, revenir à l'état normal
        setActiveScenario(null);

        // Réponse de conclusion
        setTimeout(() => {
          simulateTyping("Y a-t-il autre chose avec quoi je pourrais vous aider aujourd'hui ?");
        }, 800);
      }
      return;
    }

    // Si pas de scénario actif, chercher un scénario correspondant
    const lowerInput = input.toLowerCase();
    let foundScenario = null;
    for (const scenario of chatScenarios) {
      if (lowerInput.includes(scenario.keyword)) {
        foundScenario = {
          ...scenario,
          currentStep: 0
        };
        break;
      }
    }
    if (foundScenario) {
      setActiveScenario(foundScenario);
      setTimeout(() => {
        simulateTyping(foundScenario.botResponses[0]);
      }, 800);
    } else {
      // Réponse par défaut si aucun scénario ne correspond
      setTimeout(() => {
        simulateTyping("Je comprends votre demande. Pourriez-vous me donner plus de détails pour que je puisse mieux vous assister ?");
      }, 800);
    }
  };

  // Fonction pour démarrer un scénario spécifique
  const startScenario = (scenarioKeyword: string) => {
    const scenario = chatScenarios.find(s => s.keyword === scenarioKeyword);
    if (scenario) {
      // Définir le message utilisateur correspondant au scénario
      setInput(scenario.userMessage);
    }
  };

  // Demo example questions
  const exampleQuestions = ["Comment effectuer un remboursement?", "J'ai une question sur ma facturation", "Quand sera livrée ma commande ?", "J'ai un problème avec mon compte"];

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">Démonstration interactive</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-6">Essayez notre chatbot intelligent</h2>
          <p className="text-lg text-gray-600 mb-8">Expérimentez par vous-même comment Celsai transforme le service client avec notre assistant virtuel. Posez toutes les questions qui vous passent par la tête concernant nos services.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 w-full max-w-md">
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold">Assistant Celsai</h3>
              </div>
              <div className="space-y-3 mb-6">
                {exampleQuestions.map((question, index) => (
                  <div key={index} className="flex items-start">
                    <MessageCircle className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-left text-sm">{question}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-blue-500 animate-pulse" />
                <p className="ml-3 text-blue-600 font-medium">Essayez maintenant !</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-lg shadow-lg mb-4">
                <MessageCircle className="h-5 w-5 mr-2" />
                <span>Cliquez sur l'icône en bas à droite</span>
              </div>
              <Sparkles className="h-10 w-10 text-blue-500 animate-float mb-3" />
              <p className="text-gray-600">Notre assistant vous attend</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChatbotDemo;
