import { Injectable, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Injectable({ providedIn: 'root' })
export class ThreeBackgroundService {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private stars!: THREE.Points;

  init(containerId: string): void {
    const container = document.getElementById(containerId);

    if (!container) {
      console.error(`Contenedor #${containerId} no encontrado.`);
      return;
    }

    // 1. Escena
    this.scene = new THREE.Scene();

    // 2. Cámara
    this.camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.8,
      1000
    );
    this.camera.position.z = 1;

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);

    // 4. Crear estrellas
    this.createStars();

    // 5. Animación
    this.animate();

    // 6. Manejar redimensionamiento
    window.addEventListener('resize', () => this.onWindowResize());
  }

  private createStars(): void {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const colors = []; // Array para colores individuales

  // Crear 10,000 estrellas
  for (let i = 0; i < 5000; i++) {
    // Posiciones aleatorias en un cubo 3D
    vertices.push(
      (Math.random() - 0.5) * 2000,
      (Math.random() - 0.5) * 2000,
      (Math.random() - 0.5) * 2000
    );

    // Variación de color: azul base + componente aleatoria para brillo
      colors.push(
    0.3 + Math.random() * 0.2,  // Toque morado mínimo
    0.2 + Math.random() * 0.1,  // Verde casi inexistente
    0.6 + Math.random() * 0.3    // Azul dominante
  );
  }
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3)); // Asignar colores

    // Textura personalizada para el efecto de halo
    const starTexture = this.createStarTexture();

    const material = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true, // Usar colores por vértice
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      map: starTexture,
      sizeAttenuation: true,
      alphaTest: 0.01,
    });

    this.stars = new THREE.Points(geometry, material);
    this.scene.add(this.stars);
  }

  private createStarTexture(): THREE.Texture {
    const canvas = document.createElement('canvas');
    const size = 128; // Mayor resolución para mejor detalle
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d')!;
    const center = size / 2;
    const gradient = ctx.createRadialGradient(
      center,
      center,
      0, // Centro del círculo
      center,
      center,
      center // Radio del gradiente
    );

    // Gradiente intenso en el centro que se desvanece
    gradient.addColorStop(0, 'rgba(100, 180, 255, 1)'); // Núcleo blanco-azul
    gradient.addColorStop(0.2, 'rgba(50, 120, 255, 0.8)'); // Transición azul
    gradient.addColorStop(0.6, 'rgba(0, 80, 200, 0.4)'); // Azul más oscuro
    gradient.addColorStop(1, 'rgba(0, 40, 100, 0)'); // Totalmente transparente

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.stars.rotation.y += 0.0005;
    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

function createGlowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(102, 163, 255, 1)');
  gradient.addColorStop(1, 'rgba(102, 163, 255, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 32);

  return new THREE.CanvasTexture(canvas);
}
