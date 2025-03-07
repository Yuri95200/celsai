
import React from "react";

const CostMetric = () => {
  return (
    <>
      <h2>7. Cost Per Resolution</h2>
      <p>
        Cette métrique calcule le coût moyen de résolution d'une demande client. Elle est cruciale pour évaluer l'efficience de votre service client et justifier les investissements en amélioration.
      </p>

      <h3>Comment le mesurer</h3>
      <p>
        <strong>Formule :</strong> Coûts totaux du service client sur une période / Nombre de tickets résolus
      </p>
      <p>
        Les coûts à inclure :
      </p>
      <ul>
        <li>Salaires et avantages sociaux des agents</li>
        <li>Coûts des technologies et outils</li>
        <li>Formation et développement</li>
        <li>Frais généraux (espace de bureau, etc.)</li>
      </ul>

      <h3>Benchmark</h3>
      <p>
        Les coûts varient considérablement selon le secteur et la complexité du support :
      </p>
      <ul>
        <li>Self-service : 0.10€ - 1€</li>
        <li>Email/Chat : 3€ - 10€</li>
        <li>Téléphone : 7€ - 15€</li>
        <li>Support technique complexe : 20€ - 50€+</li>
      </ul>

      <h3>Comment l'optimiser</h3>
      <ul>
        <li>Augmenter le taux de résolution au premier contact</li>
        <li>Développer les options de self-service</li>
        <li>Automatiser les tâches répétitives</li>
        <li>Utiliser l'IA pour traiter les demandes simples</li>
        <li>Former les agents à résoudre efficacement les problèmes complexes</li>
      </ul>
    </>
  );
};

export default CostMetric;
