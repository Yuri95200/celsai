
import React, { useEffect, useRef } from "react";

const DecorativeMotifs = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajuster la taille du canvas pour qu'il couvre toute la fenêtre
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Appeler au chargement et lors du redimensionnement
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Définition des couleurs
    const colors = [
      "rgba(10, 62, 110, 0.2)",  // bleu foncé
      "rgba(1, 88, 160, 0.3)",   // bleu moyen
      "rgba(16, 143, 231, 0.2)", // bleu clair
      "rgba(122, 200, 251, 0.3)" // bleu très clair
    ];

    // Création des étoiles
    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.05 + 0.01
      });
    }

    // Création des nœuds pour les constellations et réseaux neuronaux
    const nodes: { x: number; y: number; size: number; vx: number; vy: number; color: string }[] = [];
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Création des formes géométriques
    const geometricShapes: { x: number; y: number; size: number; rotation: number; speed: number; type: string }[] = [];
    const shapeTypes = ["triangle", "square", "pentagon", "hexagon"];
    for (let i = 0; i < 15; i++) {
      geometricShapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 10,
        rotation: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.2 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
      });
    }

    // Fonction pour dessiner un polygone
    const drawPolygon = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, sides: number, rotation: number) => {
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = rotation + (i * 2 * Math.PI / sides);
        const px = x + radius * Math.cos(angle);
        const py = y + radius * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();
    };

    // Animation
    let frameCount = 0;
    const animate = () => {
      frameCount++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dessiner les étoiles
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        const pulseOpacity = star.opacity * (1 + 0.3 * Math.sin(frameCount * star.speed));
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity})`;
        ctx.fill();
        
        // Faire bouger lentement les étoiles vers le haut
        star.y -= star.speed;
        if (star.y < -star.radius) {
          star.y = canvas.height + star.radius;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Dessiner les connections entre les nœuds proches
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        
        // Mise à jour de la position
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;
        
        // Rebondir sur les bords
        if (nodeA.x <= 0 || nodeA.x >= canvas.width) nodeA.vx = -nodeA.vx;
        if (nodeA.y <= 0 || nodeA.y >= canvas.height) nodeA.vy = -nodeA.vy;
        
        // Dessiner les connections
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = `rgba(122, 200, 251, ${opacity * 0.3})`;
            ctx.stroke();
          }
        }
        
        // Dessiner le nœud
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.size, 0, Math.PI * 2);
        ctx.fillStyle = nodeA.color;
        ctx.fill();
      }
      
      // Dessiner et animer les formes géométriques
      geometricShapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        // Dessiner avec un effet de pulsation
        const pulseSize = shape.size * (1 + 0.1 * Math.sin(frameCount * 0.03));
        ctx.strokeStyle = `rgba(16, 143, 231, ${0.2 + 0.1 * Math.abs(Math.sin(frameCount * 0.02))})`;
        ctx.lineWidth = 1;
        
        let sides = 3; // triangle par défaut
        if (shape.type === "square") sides = 4;
        else if (shape.type === "pentagon") sides = 5;
        else if (shape.type === "hexagon") sides = 6;
        
        drawPolygon(ctx, 0, 0, pulseSize, sides, 0);
        ctx.stroke();
        
        ctx.restore();
        
        // Faire tourner les formes
        shape.rotation += shape.speed * 0.01;
        
        // Mouvement ascendant lent
        shape.y -= 0.2;
        if (shape.y < -shape.size) {
          shape.y = canvas.height + shape.size;
          shape.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{ opacity: 0.8 }}
    />
  );
};

export default DecorativeMotifs;
