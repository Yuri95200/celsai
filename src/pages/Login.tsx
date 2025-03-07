
import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Lock, Mail, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      // Vérification des identifiants
      // Ici, vous pourriez remplacer cette logique simplifiée par un appel réel à votre API 
      // qui vérifie les identifiants contre votre base de données ou l'API de GoHighLevel
      
      if (email.includes("@") && password.length > 0) {
        // Simulation d'une connexion réussie
        toast({
          title: "Connexion réussie",
          description: "Vous allez être redirigé vers votre espace client.",
          duration: 3000,
        });
        
        // Dans un cas réel, vous pourriez avoir une étape ici qui:
        // 1. Vérifie les identifiants contre l'API GoHighLevel
        // 2. Récupère les informations spécifiques au client
        // 3. Stocke un token d'authentification dans localStorage/sessionStorage
        
        // Pour l'instant, on redirige simplement vers app.schedmate.co
        setTimeout(() => {
          window.location.href = "https://app.schedmate.co";
        }, 1000);
      } else {
        // Gestion améliorée des erreurs
        if (!email.includes("@")) {
          setError("Veuillez entrer une adresse email valide.");
        } else if (password.length === 0) {
          setError("Le mot de passe ne peut pas être vide.");
        } else {
          setError("Identifiants invalides. Veuillez réessayer.");
        }
        
        toast({
          variant: "destructive",
          title: "Échec de connexion",
          description: "Vos identifiants sont incorrects. Veuillez réessayer.",
          duration: 3000,
        });
      }
    } catch (err) {
      setError("Une erreur est survenue lors de la connexion. Veuillez réessayer.");
      console.error("Login error:", err);
      
      toast({
        variant: "destructive",
        title: "Erreur de connexion",
        description: "Une erreur technique est survenue. Veuillez réessayer ultérieurement.",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16 bg-gray-50">
        <Container className="max-w-md">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Connexion à votre espace</h1>
              <p className="text-gray-600">Accédez à votre compte Celsai</p>
            </div>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="vous@exemple.fr" className="pl-10" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Votre mot de passe" 
                    className="pl-10" 
                    required 
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    id="remember-me" 
                    name="remember-me" 
                    type="checkbox" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Se souvenir de moi
                  </label>
                </div>
                
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Mot de passe oublié?
                </a>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700" 
                disabled={loading}
              >
                {loading ? "Connexion en cours..." : "Se connecter"}
                {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                Besoin d'aide pour vous connecter? <a href="/contact" className="font-medium text-blue-600 hover:text-blue-500">Contactez-nous</a>
              </p>
            </div>
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
