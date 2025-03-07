
import React from "react";

const CSATMetric = () => {
  return (
    <>
      <h2>1. Customer Satisfaction Score (CSAT)</h2>
      <p>
        Le CSAT est l'une des métriques les plus directes pour mesurer la satisfaction client. Il évalue généralement la satisfaction concernant une interaction spécifique.
      </p>

      <h3>Comment le mesurer</h3>
      <p>
        Proposez aux clients d'évaluer leur niveau de satisfaction après une interaction, généralement sur une échelle de 1 à 5 ou de 1 à 10. Le CSAT correspond au pourcentage de répondants ayant donné un score de satisfaction (généralement 4 ou 5 sur une échelle de 5).
      </p>
      <p>
        <strong>Formule :</strong> (Nombre de réponses satisfaites / Nombre total de réponses) × 100
      </p>

      <h3>Benchmark</h3>
      <p>
        Un bon score CSAT varie selon les secteurs, mais en règle générale :
      </p>
      <ul>
        <li>Exceptionnel : &gt; 95%</li>
        <li>Excellent : 90% - 95%</li>
        <li>Bon : 80% - 89%</li>
        <li>Nécessite une amélioration : &lt; 80%</li>
      </ul>

      <h3>Comment l'améliorer</h3>
      <ul>
        <li>Analyser les commentaires accompagnant les scores négatifs</li>
        <li>Former les agents sur les points faibles identifiés</li>
        <li>Mettre en place un suivi personnalisé pour les clients insatisfaits</li>
      </ul>
    </>
  );
};

export default CSATMetric;
