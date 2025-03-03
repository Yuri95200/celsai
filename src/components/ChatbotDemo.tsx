
import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  isTyping?: boolean;
};

const presetConversation: Message[] = [
  { id: 1, text: "Bonjour ! Je suis Celsai, votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?", sender: "bot" }
];

const ChatbotDemo = () => {
  const [messages, setMessages] = useState<Message[]>(presetConversation);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedResponses: { [key: string]: string } = {
    "remboursement": "Pour effectuer un remboursement, veuillez consulter notre politique de retour dans votre espace client. Si votre demande est éligible, vous pourrez initier le processus directement. Avez-vous besoin d'aide pour localiser cette section ?",
    "facturation": "Je vois que vous avez une question concernant la facturation. Pourriez-vous préciser si c'est à propos d'une facture spécifique ou du processus de facturation en général ? Je pourrais alors mieux vous orienter.",
    "livraison": "Concernant les délais de livraison, ils varient généralement entre 2 et 5 jours ouvrés selon votre localisation. Si vous avez déjà passé commande, je peux vérifier le statut actuel de votre livraison si vous me communiquez votre numéro de commande.",
    "problème": "Je suis désolé d'apprendre que vous rencontrez un problème. Pourriez-vous me décrire plus précisément ce qui se passe ? Cela m'aidera à vous proposer la solution la plus adaptée ou à transférer votre demande au service concerné.",
    "merci": "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. Je suis là pour vous aider à tout moment.",
    "bonjour": "Bonjour ! Ravi de vous accueillir. Comment puis-je vous assister aujourd'hui ?"
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = (text: string) => {
    setIsTyping(true);
    
    // Ajouter un message "typing" temporaire
    setMessages(prev => [...prev, { id: Date.now(), text: "", sender: "bot", isTyping: true }]);
    
    // Délai proportionnel à la longueur du texte pour simuler la frappe
    const delay = Math.min(1000, Math.max(500, text.length * 20));
    
    setTimeout(() => {
      setIsTyping(false);
      
      // Remplacer le message "typing" par le vrai message
      setMessages(prev => prev.map(msg => 
        msg.isTyping ? { ...msg, text, isTyping: false } : msg
      ));
    }, delay);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Ajouter le message de l'utilisateur
    const newUserMessage = { id: Date.now(), text: input, sender: "user" as const };
    setMessages(prev => [...prev, newUserMessage]);
    setInput("");
    
    // Générer une réponse
    const lowerInput = input.toLowerCase();
    let response = "Je comprends votre demande. Laissez-moi vous aider avec ça. Pouvez-vous me donner plus de détails pour que je puisse mieux vous assister ?";
    
    // Vérifier les mots clés
    for (const [keyword, reply] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(keyword)) {
        response = reply;
        break;
      }
    }
    
    // Simuler la frappe de la réponse
    setTimeout(() => simulateTyping(response), 800);
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-celsai-100 text-celsai-700 text-sm font-medium">
            Démonstration
          </span>
          <h2 className="mt-4 font-bold text-gradient">
            Essayez notre chatbot intelligent
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Interagissez avec notre assistant virtuel pour découvrir comment Celsai peut transformer votre service client. Posez des questions sur les remboursements, la facturation, les livraisons ou signalez un problème.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-celsai-500 text-white p-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <span className="text-white font-bold">C</span>
              </div>
              <div>
                <div className="font-medium">Assistant Celsai</div>
                <div className="text-xs text-celsai-100">En ligne</div>
              </div>
            </div>
            
            <div className="bg-gray-50 h-96 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div 
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        message.sender === "user" 
                          ? "bg-celsai-500 text-white rounded-tr-none" 
                          : "bg-white border border-gray-200 rounded-tl-none"
                      }`}
                    >
                      {message.isTyping ? (
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                          <div className="w-2 h-2 rounded-full bg-current animate-pulse delay-75"></div>
                          <div className="w-2 h-2 rounded-full bg-current animate-pulse delay-150"></div>
                        </div>
                      ) : (
                        <p>{message.text}</p>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            <div className="bg-white p-4 border-t border-gray-200">
              <form onSubmit={handleSubmit} className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-celsai-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <Button 
                  type="submit" 
                  className="ml-2 bg-celsai-500 hover:bg-celsai-600 text-white rounded-full p-2 h-10 w-10"
                  disabled={isTyping || !input.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
          
          <div className="mt-8 bg-celsai-50 rounded-lg p-5 border border-celsai-100">
            <h4 className="font-medium mb-2 text-celsai-800">Suggestions d'interaction :</h4>
            <div className="flex flex-wrap gap-2">
              {Object.keys(predefinedResponses).map((keyword, index) => (
                <button
                  key={index}
                  className="bg-white border border-celsai-200 hover:bg-celsai-100 rounded-full px-3 py-1 text-sm text-celsai-700 transition-colors"
                  onClick={() => {
                    const suggestedMessages = [
                      "Je souhaite effectuer un remboursement",
                      "J'ai une question sur ma facturation",
                      "Quand sera livrée ma commande ?",
                      "J'ai un problème avec mon compte",
                      "Merci pour votre aide !",
                      "Bonjour, pouvez-vous m'aider ?"
                    ];
                    setInput(suggestedMessages[index]);
                  }}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ChatbotDemo;
