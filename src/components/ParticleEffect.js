import React, { useEffect } from 'react';
import * as THREE from 'three';

const ParticleEffect = () => {
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    // Créer une scène Three.js
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Créer une caméra
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Créer un rendu WebGL
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('particle-container').appendChild(renderer.domElement);

    // Créer un effet de particules
    const particleGeometry = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05});

    // Remplir la géométrie avec des positions aléatoires pour les particules
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Créer le système de particules
    const particles = new THREE.Points(particleGeometry, particleMaterial);

    // Ajouter le système de particules à la scène
    scene.add(particles);

    // Mettre à jour la position des particules en fonction de la souris
    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Mettre à jour la position des particules en fonction de la souris
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    
    animate();
  }, []);

  return <div id="particle-container" />;
};

export default ParticleEffect;