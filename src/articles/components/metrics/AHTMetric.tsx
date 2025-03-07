
import React from "react";

const AHTMetric = () => {
  return (
    <>
      <h2>4. Average Handle Time (AHT)</h2>
      <p>
        L'AHT mesure le temps moyen nécessaire pour traiter une demande client, du début à la fin de l'interaction, incluant le temps de conversation, d'attente et de travail post-interaction.
      </p>

      <h3>Comment le mesurer</h3>
      <p>
        <strong>Formule :</strong> (Temps total de conversation + Temps total d'attente + Temps total post-interaction) / Nombre total d'interactions
      </p>

      <h3>Benchmark</h3>
      <p>
        Les benchmarks varient considérablement selon le secteur et la complexité des produits ou services :
      </p>
      <ul>
        <li>Support technique : 10-15 minutes</li>
        <li>Services financiers : 5-7 minutes</li>
        <li>E-commerce : 3-5 minutes</li>
      </ul>

      <h3>Comment l'améliorer</h3>
      <ul>
        <li>Optimiser les processus de résolution</li>
        <li>Améliorer l'accès à l'information pour les agents</li>
        <li>Utiliser des assistants IA pour suggérer des réponses</li>
        <li>Automatiser les tâches post-interaction</li>
      </ul>
      <p>
        <strong>Attention :</strong> La réduction de l'AHT ne doit jamais se faire au détriment de la qualité du service ou de la résolution effective des problèmes clients.
      </p>
    </>
  );
};

export default AHTMetric;
