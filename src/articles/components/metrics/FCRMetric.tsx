
import React from "react";

const FCRMetric = () => {
  return (
    <>
      <h2>3. First Contact Resolution (FCR)</h2>
      <p>
        Le FCR mesure le pourcentage de demandes clients résolues dès le premier contact, sans nécessiter de suivi supplémentaire. C'est un indicateur critique qui impacte directement la satisfaction client et l'efficacité opérationnelle.
      </p>

      <h3>Comment le mesurer</h3>
      <p>
        <strong>Formule :</strong> (Nombre de demandes résolues au premier contact / Nombre total de demandes) × 100
      </p>
      <p>
        Vous pouvez mesurer le FCR via :
      </p>
      <ul>
        <li>Les retours clients post-interaction</li>
        <li>L'analyse des données de contact (si un client revient avec le même problème)</li>
        <li>L'évaluation par les agents</li>
      </ul>

      <h3>Benchmark</h3>
      <ul>
        <li>Exceptionnel : &gt; 90%</li>
        <li>Excellent : 80% - 90%</li>
        <li>Bon : 70% - 79%</li>
        <li>Nécessite une amélioration : &lt; 70%</li>
      </ul>

      <h3>Comment l'améliorer</h3>
      <ul>
        <li>Créer des scripts et processus de résolution standardisés</li>
        <li>Améliorer la base de connaissances et les outils à disposition des agents</li>
        <li>Former les agents à identifier et résoudre les problèmes sous-jacents</li>
        <li>Implémenter des solutions d'IA pour assister les agents en temps réel</li>
      </ul>
    </>
  );
};

export default FCRMetric;
