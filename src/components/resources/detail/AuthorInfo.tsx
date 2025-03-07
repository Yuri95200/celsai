
import React from "react";

interface AuthorInfoProps {
  resourceType: string;
}

const AuthorInfo = ({ resourceType }: AuthorInfoProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">À propos de l'auteur</h2>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
          <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold text-xl">
            {resourceType.charAt(0)}
          </div>
        </div>
        <div>
          <h3 className="font-medium">Equipe Celsai</h3>
          <p className="text-sm text-gray-600">Experts en IA et service client</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-700">
        Nos experts combinent une expertise technique approfondie et une connaissance 
        pointue des enjeux du service client moderne.
      </p>
    </div>
  );
};

export default AuthorInfo;
