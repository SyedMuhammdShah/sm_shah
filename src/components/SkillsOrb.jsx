import { useEffect, useRef } from "react";
import * as THREE from "three";

const CORAL = "#e8604a";
const GOLD  = "#d4a847";
const NAVY4 = "#1c3050";

const SKILLS = [
  "Flutter", "iOS", "Node.js", "Firebase", "AWS",
  "BLoC", "Dart", "Swift", "GCP", "MySQL",
];

export default function SkillsOrb({ size = 320 }) {
  const mountRef  = useRef(null);
  const labelRefs = useRef([]);
  const paused    = useRef(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const W = size, H = size;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ── Scene / Camera ── */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4.5;

    /* ── Core torus knot ── */
    const geoCore = new THREE.TorusKnotGeometry(0.92, 0.26, 140, 14, 2, 3);
    const matCore = new THREE.MeshBasicMaterial({
      color:       new THREE.Color(CORAL),
      wireframe:   true,
      transparent: true,
      opacity:     0.22,
    });
    const coreKnot = new THREE.Mesh(geoCore, matCore);
    scene.add(coreKnot);

    /* ── Inner glowing orb ── */
    const geoOrb = new THREE.SphereGeometry(0.7, 32, 32);
    const matOrb = new THREE.MeshBasicMaterial({
      color:       new THREE.Color(NAVY4),
      transparent: true,
      opacity:     0.6,
    });
    scene.add(new THREE.Mesh(geoOrb, matOrb));

    /* ── Outer ring ── */
    const geoRing  = new THREE.TorusGeometry(1.54, 0.006, 6, 100);
    const matRing  = new THREE.MeshBasicMaterial({ color: new THREE.Color(GOLD), transparent: true, opacity: 0.4 });
    const outerRing = new THREE.Mesh(geoRing, matRing);
    outerRing.rotation.x = 0.6;
    scene.add(outerRing);

    /* ── Second tilted ring ── */
    const geoRing2   = new THREE.TorusGeometry(1.3, 0.005, 6, 100);
    const matRing2   = new THREE.MeshBasicMaterial({ color: new THREE.Color(CORAL), transparent: true, opacity: 0.25 });
    const innerRing  = new THREE.Mesh(geoRing2, matRing2);
    innerRing.rotation.z = 1.1;
    scene.add(innerRing);

    /* ── Skill label 3D positions (on sphere surface) ── */
    const labelPositions = SKILLS.map((_, i) => {
      const phi   = Math.acos(-1 + (2 * i) / SKILLS.length);
      const theta = Math.sqrt(SKILLS.length * Math.PI) * phi;
      return new THREE.Vector3(
        1.7 * Math.cos(theta) * Math.sin(phi),
        1.7 * Math.sin(phi)   * Math.sin(theta),
        1.7 * Math.cos(phi),
      );
    });

    /* ── Particle halo ── */
    const HALO_N   = 50;
    const haloPts  = new Float32Array(HALO_N * 3);
    for (let i = 0; i < HALO_N; i++) {
      const r = 1.72 + Math.random() * 0.5;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      haloPts[i * 3]     = r * Math.sin(p) * Math.cos(t);
      haloPts[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      haloPts[i * 3 + 2] = r * Math.cos(p);
    }
    const haloGeo = new THREE.BufferGeometry();
    haloGeo.setAttribute("position", new THREE.BufferAttribute(haloPts, 3));
    const haloMat = new THREE.PointsMaterial({
      color: new THREE.Color(CORAL), size: 0.04,
      transparent: true, opacity: 0.5,
      sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    scene.add(new THREE.Points(haloGeo, haloMat));

    /* ── Hover pause ── */
    renderer.domElement.addEventListener("mouseenter", () => { paused.current = true; });
    renderer.domElement.addEventListener("mouseleave", () => { paused.current = false; });

    /* ── Animation ── */
    let raf;
    let angle = 0;

    function project(vec3) {
      const v = vec3.clone().project(camera);
      return {
        x: (v.x  *  0.5 + 0.5) * W,
        y: (-v.y * 0.5 + 0.5) * H,
        z: v.z,
      };
    }

    function animate() {
      raf = requestAnimationFrame(animate);

      if (!paused.current) {
        angle += 0.006;
        coreKnot.rotation.x  = angle * 0.7;
        coreKnot.rotation.y  = angle;
        outerRing.rotation.y = angle * 0.4;
        innerRing.rotation.x = angle * 0.3;
      }

      renderer.render(scene, camera);

      /* Update HTML label positions */
      labelPositions.forEach((pos3, i) => {
        const rotated = pos3.clone().applyEuler(
          new THREE.Euler(angle * 0.3, angle * 0.5, 0)
        );
        const { x, y, z } = project(rotated);
        const label = labelRefs.current[i];
        if (!label) return;
        const visible = z < 1;
        label.style.transform   = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        label.style.opacity     = visible ? Math.max(0, (1 - z) * 1.8).toFixed(2) : "0";
        label.style.fontSize    = `${9 + (1 - Math.max(0, z)) * 2}px`;
      });
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      renderer.dispose();
      geoCore.dispose(); matCore.dispose();
      geoOrb.dispose();  matOrb.dispose();
      geoRing.dispose(); matRing.dispose();
      geoRing2.dispose(); matRing2.dispose();
      haloGeo.dispose(); haloMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [size]);

  return (
    <div
      style={{ position: "relative", width: size, height: size, flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Three.js canvas mount */}
      <div ref={mountRef} style={{ position: "absolute", inset: 0 }} />

      {/* HTML label overlay */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {SKILLS.map((name, i) => (
          <span
            key={name}
            ref={(el) => { labelRefs.current[i] = el; }}
            style={{
              position:       "absolute",
              top:            0,
              left:           0,
              fontFamily:     "'JetBrains Mono', monospace",
              fontWeight:     700,
              color:          i % 3 === 0 ? "#d4a847" : "#e8604a",
              pointerEvents:  "none",
              userSelect:     "none",
              whiteSpace:     "nowrap",
              transition:     "opacity .1s",
              textShadow:     "0 0 8px currentColor",
              letterSpacing:  ".04em",
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
