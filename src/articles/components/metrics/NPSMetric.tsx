
import React from "react";

const NPSMetric = () => {
  return (
    <>
      <h2>2. Net Promoter Score (NPS)</h2>
      <p>
        Le NPS mesure la fidélité client et la probabilité qu'ils recommandent votre entreprise à d'autres personnes. C'est un excellent indicateur de satisfaction à long terme et de fidélité.
      </p>

      <h3>Comment le mesurer</h3>
      <p>
        Posez la question : "Sur une échelle de 0 à 10, quelle est la probabilité que vous recommandiez notre entreprise/produit/service à un ami ou un collègue ?"
      </p>
      <ul>
        <li>Promoteurs (9-10) : Clients enthousiastes et fidèles</li>
        <li>Passifs (7-8) : Clients satisfaits mais vulnérables aux offres concurrentes</li>
        <li>Détracteurs (0-6) : Clients insatisfaits pouvant nuire à votre réputation</li>
      </ul>
      <p>
        <strong>Formule :</strong> % de Promoteurs - % de Détracteurs = NPS (score entre -100 et +100)
      </p>

      <h3>Benchmark</h3>
      <ul>
        <li>Exceptionnel : &gt; 70</li>
        <li>Excellent : 50 - 70</li>
        <li>Bon : 30 - 49</li>
        <li>Moyen : 0 - 29</li>
        <li>Nécessite une amélioration : &lt; 0</li>
      </ul>

      <h3>Comment l'améliorer</h3>
      <ul>
        <li>Analyser les raisons pour lesquelles les détracteurs vous donnent un score faible</li>
        <li>Créer des programmes pour convertir les passifs en promoteurs</li>
        <li>Mettre en place des processus de service proactif</li>
      </ul>
    </>
  );
};

export default NPSMetric;
