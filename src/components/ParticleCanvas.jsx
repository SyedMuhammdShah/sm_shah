import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Ultra-subtle ambient particle field.
 * Barely-visible dots that drift slowly — just enough to add depth
 * and a sense of "aliveness" without competing with content.
 */
export default function ParticleCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({
      canvas: el,
      alpha: true,
      antialias: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);

    /* ── Scene / Camera (2D ortho) ── */
    const scene = new THREE.Scene();
    let W = window.innerWidth;
    let H = window.innerHeight;
    const camera = new THREE.OrthographicCamera(
      -W / 2, W / 2, H / 2, -H / 2, 0.1, 1000
    );
    camera.position.z = 10;
    renderer.setSize(W, H);

    /* ── Particle config ── */
    const COUNT = 60; // Very few — just ambient texture
    const DRIFT = 0.08; // Extremely slow

    /* ── Particle data ── */
    const particles = Array.from({ length: COUNT }, () => ({
      x: (Math.random() - 0.5) * W,
      y: (Math.random() - 0.5) * H,
      vx: (Math.random() - 0.5) * DRIFT,
      vy: (Math.random() - 0.5) * DRIFT,
      baseAlpha: Math.random() * 0.12 + 0.03, // Very dim: 0.03 – 0.15
      phase: Math.random() * Math.PI * 2,
    }));

    /* ── Points geometry ── */
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 2,
      sizeAttenuation: false,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    scene.add(new THREE.Points(geo, mat));

    /* ── Palette: muted warm tones ── */
    const palette = [
      new THREE.Color("#3a4f65"), // Muted steel blue
      new THREE.Color("#4a3f3a"), // Muted warm brown
      new THREE.Color("#3d4a52"), // Slate
    ];

    /* ── Resize ── */
    function onResize() {
      W = window.innerWidth;
      H = window.innerHeight;
      renderer.setSize(W, H);
      camera.left = -W / 2;
      camera.right = W / 2;
      camera.top = H / 2;
      camera.bottom = -H / 2;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onResize);

    /* ── Animation ── */
    let raf;
    let time = 0;

    function animate() {
      raf = requestAnimationFrame(animate);
      time += 0.003;

      const posArr = geo.attributes.position.array;
      const colArr = geo.attributes.color.array;

      for (let i = 0; i < COUNT; i++) {
        const p = particles[i];

        // Gentle drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges silently
        if (p.x < -W / 2 - 10) p.x = W / 2 + 10;
        if (p.x > W / 2 + 10) p.x = -W / 2 - 10;
        if (p.y < -H / 2 - 10) p.y = H / 2 + 10;
        if (p.y > H / 2 + 10) p.y = -H / 2 - 10;

        posArr[i * 3] = p.x;
        posArr[i * 3 + 1] = p.y;
        posArr[i * 3 + 2] = 0;

        // Slow breathing opacity
        const breath = Math.sin(time * 0.8 + p.phase) * 0.5 + 0.5;
        const alpha = p.baseAlpha * (0.5 + breath * 0.5);

        const col = palette[i % palette.length];
        colArr[i * 3] = col.r * alpha * 3;
        colArr[i * 3 + 1] = col.g * alpha * 3;
        colArr[i * 3 + 2] = col.b * alpha * 3;
      }

      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    />
  );
}
