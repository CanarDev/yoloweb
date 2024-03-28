'use client';

import Head from 'next/head';
import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export default function Illuminati() {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const interactiveLogoRef = useRef(null); // Pour l'image qui grossit avec la musique
  const soundRef = useRef(null); // Pour le contrôle audio
  const buttonRef = useRef(null); // Référence pour le bouton personnalisé

  useEffect(() => {
    // GSAP pour le texte "ILLUMINATI"
    gsap.to('.text-hover', {
      y: '+=20',
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });

    // GSAP pour l'agrandissement de l'image au survol
interactiveLogoRef.current.addEventListener('mouseenter', () => {
  gsap.killTweensOf(interactiveLogoRef.current); // Tue toutes les animations en cours sur cet élément
  gsap.to(interactiveLogoRef.current, { scale: 3, duration: 2 });
  soundRef.current.play();
});

interactiveLogoRef.current.addEventListener('mouseleave', () => {
  gsap.killTweensOf(interactiveLogoRef.current); // De même avant de commencer l'animation de réduction
  gsap.to(interactiveLogoRef.current, { scale: 1, duration: 1 });
  soundRef.current.pause();
  soundRef.current.currentTime = 0;
});


    const button = buttonRef.current;
    gsap.fromTo(
      button,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1 }
    );

    // Initialiser Matter.js pour la zone entière de la page sans ajouter de défilement
    const engine = Matter.Engine.create({ gravity: { y: 0 } });
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        wireframes: false,
        background: 'transparent',
      },
    });

    // Ajouter le MouseConstraint pour la manipulation des objets
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    Matter.World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    Matter.Engine.run(engine);
    Matter.Render.run(render);

    return () => {
      document.body.style.overflow = ''; // Restaurer le défilement
      Matter.Render.stop(render);
      /* Matter.World.clear(engine.world); */
      /* Matter.Engine.clear(engine); */
      render.canvas.remove();
    };
  }, []);

  const addFloatingImage = () => {
    const engine = engineRef.current;

    // Ajouter une image à une position aléatoire avec vitesse initiale
    const posX = Math.random() * document.documentElement.clientWidth;
    const posY = Math.random() * document.documentElement.clientHeight;
    const logo = Matter.Bodies.circle(posX, posY, 20, {
      restitution: 0.9,
      render: {
        sprite: {
          texture: "/Illuminati-Logo-color.png",
          xScale: 0.1,
          yScale: 0.1,
        }
      }
    });
    Matter.Body.setVelocity(logo, { x: (Math.random() - 0.5) * 10, y: (Math.random() - 0.5) * 10 });
    Matter.World.add(engine.world, logo);
  };
  

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#009473] to-[#5F4B8B] p-8 relative overflow-visible" ref={sceneRef}>
      <Head>
        <title>Page Dégradé</title>
      </Head>
  
      <h1 className="text-hover" style={{
          background: 'linear-gradient(to bottom, #009473, #F5DF4D)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          fontSize: '95px',
          margin: '0 0 20px 0',
        }}>ILLUMINATI</h1>
  
      <button onClick={addFloatingImage} style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px 20px',
          background: 'linear-gradient(145deg, #BB2649, #F5DF4D)',
          border: 'none',
          borderRadius: '5px',
          color: '#FFFFFF',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(145deg, #BB2649, #F5DF4D)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(145deg, #F5DF4D, #BB2649)';
        }}
      >
        Adhérez à la cause
      </button>
  
      <div ref={interactiveLogoRef} style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <Image src="/Illuminati-Logo-color.png" alt="Logo Illuminati" width={100} height={100} layout="fixed" />
      </div>
  
      <audio ref={soundRef} src="/ILLUMINATI-S.mp3" hidden></audio>
    </div>
  );
  
  
}
