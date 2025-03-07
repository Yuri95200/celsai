
import React from "react";
import { Button } from "@/components/ui/button";

const SupportCTA = () => {
  return (
    <div className="bg-blue-50 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-3">Besoin d'aide ?</h2>
      <p className="text-sm text-gray-700 mb-4">
        Notre équipe d'experts est disponible pour répondre à vos questions et vous guider 
        dans l'implémentation de nos solutions.
      </p>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Contacter un expert
      </Button>
    </div>
  );
};

export default SupportCTA;
