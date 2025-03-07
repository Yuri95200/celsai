
import React from "react";

const CESMetric = () => {
  return (
    <>
      <h2>5. Customer Effort Score (CES)</h2>
      <p>
        Le CES mesure la facilité avec laquelle les clients peuvent résoudre leurs problèmes ou obtenir de l'aide. C'est un excellent prédicteur de la fidélité client.
      </p>

      <h3>Comment le mesurer</h3>
      <p>
        Posez une question comme : "Dans quelle mesure avez-vous trouvé facile de résoudre votre problème aujourd'hui ?" sur une échelle de 1 (très difficile) à 7 (très facile).
      </p>
      <p>
        <strong>Formule :</strong> Somme des scores / Nombre de répondants
      </p>

      <h3>Benchmark</h3>
      <ul>
        <li>Exceptionnel : &gt; 6.5</li>
        <li>Excellent : 5.8 - 6.5</li>
        <li>Bon : 5.0 - 5.7</li>
        <li>Nécessite une amélioration : &lt; 5.0</li>
      </ul>

      <h3>Comment l'améliorer</h3>
      <ul>
        <li>Simplifier les parcours client</li>
        <li>Réduire le nombre d'étapes nécessaires pour obtenir de l'aide</li>
        <li>Proposer une assistance proactive</li>
        <li>Mettre en place des options de self-service intuitives</li>
      </ul>
    </>
  );
};

export default CESMetric;
