import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

emailjs.init("YOUR_PUBLIC_KEY");

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [emailConfigured, setEmailConfigured] = useState(false);

  useEffect(() => {
    const emailjsPublicKey = "YOUR_PUBLIC_KEY";
    const emailjsServiceId = "YOUR_SERVICE_ID";
    const emailjsTemplateId = "YOUR_TEMPLATE_ID";
    
    if (
      emailjsPublicKey !== "YOUR_PUBLIC_KEY" &&
      emailjsServiceId !== "YOUR_SERVICE_ID" &&
      emailjsTemplateId !== "YOUR_TEMPLATE_ID"
    ) {
      setEmailConfigured(true);
    } else {
      console.warn("EmailJS n'est pas correctement configuré. L'envoi d'emails sera simulé.");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (emailConfigured) {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          from_company: formData.company,
          message: formData.message,
          to_email: "contact@celsai.com",
          subject: `Demande de contact de ${formData.name} - ${formData.company}`
        };

        await emailjs.send(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          templateParams
        );
      } else {
        console.log("Simulation d'envoi d'email à contact@celsai.com:", {
          subject: `Demande de contact de ${formData.name} - ${formData.company}`,
          body: `
            Nom: ${formData.name}
            Email: ${formData.email}
            Entreprise: ${formData.company}
            Message: ${formData.message}
          `
        });
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      toast({
        title: "Message envoyé",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-12 placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email professionnel <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-12 placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">
          Entreprise <span className="text-red-500">*</span>
        </label>
        <Input
          id="company"
          name="company"
          placeholder="Nom de votre entreprise"
          value={formData.company}
          onChange={handleChange}
          required
          className="h-12 placeholder:text-gray-400"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Décrivez votre projet ou vos besoins..."
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[120px] placeholder:text-gray-400"
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-celsai-500 hover:bg-celsai-600 text-white h-12 text-lg"
        disabled={isLoading}
      >
        {isLoading ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
      <p className="text-center text-xs text-gray-500">
        En soumettant ce formulaire, vous acceptez notre politique de confidentialité et de traitement des données.
      </p>
    </form>
  );
};

export default ContactForm;
