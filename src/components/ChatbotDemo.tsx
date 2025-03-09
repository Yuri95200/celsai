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
  const exampleQuestions = [
    "Comment effectuer un remboursement?",
    "J'ai une question sur ma facturation",
    "Quand sera livrée ma commande ?",
    "J'ai un problème avec mon compte"
  ];

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Démonstration Interactive
          </span>
          <h2 className="mt-4 font-bold text-4xl text-gradient mb-6">
            Découvrez Notre Chatbot Intelligent
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Expérimentez par vous-même comment Celsai transforme le service client avec notre assistant virtuel. 
            Posez vos questions ou essayez notre démo interactive ci-dessous.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <Bot className="h-10 w-10 text-blue-500 mr-4" />
            <ArrowRight className="h-6 w-6 text-gray-400 mr-4 animate-pulse" />
            <div className="flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg shadow-lg">
              <MessageCircle className="h-5 w-5 mr-2" />
              <span>Essayez notre chatbot en bas à droite de votre écran</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100">
            {/* Chatbot demo header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 flex items-center">
              <Bot className="h-8 w-8 text-white mr-3" />
              <div>
                <h3 className="text-white font-medium">Assistant Celsai</h3>
                <p className="text-blue-100 text-sm">En ligne et prêt à vous aider</p>
              </div>
              <div className="ml-auto flex space-x-2">
                <span className="inline-flex h-3 w-3 rounded-full bg-green-400"></span>
                <span className="text-xs text-blue-100">Disponible 24/7</span>
              </div>
            </div>
            
            {/* Chat messages container */}
            <div className="p-6 bg-gray-50 h-80 overflow-y-auto flex flex-col space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 max-w-[80%]">
                <div className="flex items-center mb-2">
                  <Bot className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-blue-700">Celsai</span>
                </div>
                <p className="text-gray-700">
                  Bonjour ! Je suis l'assistant virtuel Celsai. Comment puis-je vous aider aujourd'hui ?
                </p>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg shadow-sm border border-blue-200 ml-auto max-w-[80%]">
                <div className="flex items-center justify-end mb-2">
                  <span className="text-sm font-medium text-blue-700">Vous</span>
                </div>
                <p className="text-gray-700">
                  Bonjour, j'aimerais en savoir plus sur vos services de chatbot.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 max-w-[80%]">
                <div className="flex items-center mb-2">
                  <Bot className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-blue-700">Celsai</span>
                </div>
                <p className="text-gray-700">
                  Avec plaisir ! Notre solution de chatbot intelligent utilise l'IA avancée pour comprendre les intentions de vos clients. Il peut répondre aux questions fréquentes, traiter les demandes courantes et escalader les cas complexes automatiquement. Souhaitez-vous connaître nos tarifs ou voir une démonstration personnalisée ?
                  <Sparkles className="inline-block h-4 w-4 text-yellow-500 ml-1" />
                </p>
              </div>
            </div>
            
            {/* Chat input area */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  className="text-xs px-3 py-1 h-auto border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  Tarification
                </Button>
                <Button 
                  variant="outline" 
                  className="text-xs px-3 py-1 h-auto border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  Fonctionnalités
                </Button>
                <Button 
                  variant="outline" 
                  className="text-xs px-3 py-1 h-auto border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  Intégrations
                </Button>
              </div>
              
              <div className="flex items-center mt-3 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <input 
                  type="text" 
                  placeholder="Écrivez votre message ici..." 
                  className="flex-1 px-4 py-3 bg-transparent border-none focus:outline-none text-gray-700"
                  disabled
                />
                <Button className="rounded-l-none h-full bg-blue-600 hover:bg-blue-700">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Des questions en tête ? <span className="text-blue-600 font-medium">Essayez ces exemples :</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {exampleQuestions.map((question, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                  onClick={() => startScenario(question.toLowerCase().includes("remboursement") ? "remboursement" : 
                                             question.toLowerCase().includes("facturation") ? "facturation" :
                                             question.toLowerCase().includes("livr") ? "livraison" : "problème")}
                >
                  {question}
                </Button>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-xl text-gray-800 mb-2">Essayez notre chatbot en direct</h3>
                  <p className="text-gray-600 mb-4">
                    Notre assistant est disponible en bas à droite de votre écran pour répondre à toutes vos questions.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Ouvrir le chat <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChatbotDemo;
