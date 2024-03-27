'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Matter from 'matter-js';

export default function Mlg() {
  const gameContainerRef = useRef(null);

  useEffect(() => {
    const gameContainer = gameContainerRef.current;
    if (!gameContainer) return;

    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      element: gameContainer,
      engine: engine,
      options: {
        width: gameContainer.offsetWidth,
        height: gameContainer.offsetHeight,
        wireframes: false,
        background: 'transparent'
      }
    });

    render.canvas.style.position = 'absolute';
    render.canvas.style.top = '0';
    render.canvas.style.zIndex = '20';

    const walls = initWalls(gameContainer.offsetWidth, gameContainer.offsetHeight);
    Matter.World.add(engine.world, walls);

    createElements(engine, gameContainer.offsetWidth, gameContainer.offsetHeight);

    gameContainer.addEventListener('click', (e) => handleGameClick(e, gameContainer, engine));

    Matter.Events.on(engine, 'collisionStart', function(event) {
      var pairs = event.pairs;
      
      pairs.forEach(function(pair) {
        if (pair.bodyA.label === 'topWall' || pair.bodyB.label === 'topWall') {
          playSound();
          showExplosions(gameContainer);
        }
      });
    });

    Matter.Engine.run(engine);
    Matter.Render.run(render);

    return () => cleanup(engine, render);
  }, []);

  return (
    <main ref={gameContainerRef} id="mlg-section" className="overflow-hidden h-screen relative z-[1]">
      <Image src="/mlg/snoop_dogg.gif" alt="Snoop Dogg" className='h-[20rem] w-[10rem] absolute inset-x-0 bottom-0 z-[1]' width={500} height={200} unoptimized={true}/>
      <div className="flex justify-center h-full z-[1] relative items-center">
        <Image src="/mlg/mlg_logo.png" alt="MLG Logo" className='h-[10rem] w-[20rem] z-[1]' width={500} height={200}/>
      </div>
      <Image src="/mlg/mlg_grenouille.gif" alt="MLG Dance" className='h-[20rem] w-[10rem] absolute bottom-0 right-1/2 z-[1]' width={500} height={200} unoptimized={true}/>
      <Image src="/mlg/mlg_dance.gif" alt="MLG Dance" className='h-[20rem] w-[10rem] absolute bottom-0 right-0 z-[1]' width={500} height={200} unoptimized={true}/>
    </main>
  );
}

function initWalls(width, height) {
  return [
    Matter.Bodies.rectangle(width / 2, height, width, 60, { isStatic: true, render: { visible: false }}),
    Matter.Bodies.rectangle(0, height / 2, 60, height, { isStatic: true, render: { visible: false }}),
    Matter.Bodies.rectangle(width, height / 2, 60, height, { isStatic: true, render: { visible: false }}),
    Matter.Bodies.rectangle(width / 2, 0, width, 60, { isStatic: true, render: { visible: false }, label: 'topWall'})
  ];
}

function createElements(engine, width, height) {
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height / 2;
    const texture = i % 2 === 0 ? '/mlg/doritos.png' : '/mlg/mountain_dew.png';
    const scale = 0.4;

    const element = Matter.Bodies.circle(x, y, 40, {
      density: 0.04,
      frictionAir: 0.005,
      restitution: 0.6,
      friction: 0.01,
      render: {
        sprite: {
          texture: texture,
          xScale: scale,
          yScale: scale
        }
      }
    });

    Matter.World.add(engine.world, element);
  }
}

function handleGameClick(e, gameContainer, engine) {
  const relativeX = e.clientX - gameContainer.getBoundingClientRect().left;
  const relativeY = e.clientY - gameContainer.getBoundingClientRect().top;

  const bodies = Matter.Query.point(engine.world.bodies, { x: relativeX, y: relativeY });

  if (bodies.length > 0) {
    const body = bodies[0];
    const forceMagnitude = 1;
    const forceDirection = {
      x: (body.position.x - relativeX) * forceMagnitude,
      y: (body.position.y - relativeY) * forceMagnitude
    };

    Matter.Body.applyForce(body, body.position, { x: forceDirection.x, y: -Math.abs(forceDirection.y) });

    const hitMarker = document.createElement('img');
    hitMarker.src = '/mlg/hitmarker.png';
    hitMarker.style.position = 'absolute';
    hitMarker.style.height = '40px';
    hitMarker.style.width = '40px';
    hitMarker.style.left = `${e.clientX}px`;
    hitMarker.style.top = `${e.clientY}px`;
    hitMarker.style.zIndex = '100';
    gameContainer.appendChild(hitMarker);

    setTimeout(() => {
      hitMarker.remove();
    }, 5000);
  }
}

function cleanup(engine, render) {
  Matter.Render.stop(render);
  Matter.World.clear(engine.world);
  Matter.Engine.clear(engine);
  render.canvas.remove();
}

function showExplosions(container) {
  const gifs = [
    { x: '50%', y: '50%', src:'/mlg/mlg_explosion', height:'800px', translate: 'translate(-50%, -50%)', width: '400px' },
    { x: '70%', y: '100%', src:'/mlg/mlg_wow', height:'500px', translate: 'translate(-70%, -100%)', width: '400px' },
    { x: '100%', y: '10%', src:'/mlg/mlg_doritos', height:'300px', translate: 'translate(-90%, -10%)', width: '300px' },
    { x: '20%', y: '20%', src:'/mlg/sniper', height:'300px', translate: 'translate(-20%, -20%)', width: '300px' },
    { x: '0%', y: '10%', src:'/mlg/mlg_pepe_frog', height:'300px', translate: 'translate(-0%, -10%)', width: '300px' },
    { x: '70%', y: '20%', src:'/mlg/mlg_cannabis', height:'300px', translate: 'translate(-0%, -10%)', width: '300px' }
  ];

  gifs.forEach(n => {
    const gif = document.createElement('img');
    gif.src = n.src+'.gif';
    gif.className = 'explosion-gif';
    gif.style.position = 'absolute';
    gif.style.left = n.x;
    gif.style.top = n.y;
    gif.style.height = n.height;
    gif.style.transform = n.translate;
    gif.style.width = n.width;
    gif.style.zIndex = '1';
    gif.unoptimized = true;
    container.appendChild(gif);

    setTimeout(() => {
      gif.remove();
    }, 4000);
  });
}

function playSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  fetch('/mlg/mlg_oh.mp3')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      
      source.connect(audioContext.destination);
      
      source.start(0);

      setTimeout(() => {
        source.stop();
        audioContext.close();
      }, 4000);
    })
    .catch(e => console.error("Erreur lors de la lecture du son :", e));
}