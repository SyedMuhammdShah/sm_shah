import { useEffect, useRef } from "react";
import * as THREE from "three";

const CORAL = "#e8604a";
const GOLD  = "#d4a847";

export default function FloatingRings({ width = 700, height = 500 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let W = container.clientWidth  || width;
    let H = container.clientHeight || height;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ── Scene / Camera ── */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    camera.position.z = 5;

    /* ── Ring 1 — large outer coral wireframe torus ── */
    const geo1 = new THREE.TorusGeometry(2.2, 0.018, 6, 140);
    const mat1 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CORAL), wireframe: false,
      transparent: true, opacity: 0.18,
    });
    const ring1 = new THREE.Mesh(geo1, mat1);
    ring1.rotation.x = 1.1;
    scene.add(ring1);

    /* ── Ring 2 — medium gold torus ── */
    const geo2 = new THREE.TorusGeometry(1.55, 0.012, 6, 100);
    const mat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(GOLD),
      transparent: true, opacity: 0.22,
    });
    const ring2 = new THREE.Mesh(geo2, mat2);
    ring2.rotation.x = 0.4;
    ring2.rotation.z = 0.8;
    scene.add(ring2);

    /* ── Ring 3 — small inner coral wireframe ── */
    const geo3 = new THREE.TorusGeometry(0.88, 0.008, 6, 80);
    const mat3 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(CORAL), wireframe: true,
      transparent: true, opacity: 0.30,
    });
    const ring3 = new THREE.Mesh(geo3, mat3);
    ring3.rotation.y = 0.7;
    ring3.rotation.z = 1.4;
    scene.add(ring3);

    /* ── Scatter particles ── */
    const N_PTS = 60;
    const pPos  = new Float32Array(N_PTS * 3);
    for (let i = 0; i < N_PTS; i++) {
      const r = 1 + Math.random() * 2.2;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      pPos[i * 3]     = r * Math.sin(p) * Math.cos(t);
      pPos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      pPos[i * 3 + 2] = r * Math.cos(p);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: new THREE.Color(CORAL), size: 0.06,
      transparent: true, opacity: 0.4,
      sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    scene.add(new THREE.Points(pGeo, pMat));

    /* ── Resize observer ── */
    function onResize() {
      W = container.clientWidth  || width;
      H = container.clientHeight || height;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    }
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    /* ── Animation ── */
    let raf;
    let t = 0;

    function animate() {
      raf = requestAnimationFrame(animate);
      t += 0.006;

      ring1.rotation.z += 0.0028;
      ring2.rotation.y += 0.0045;
      ring2.rotation.x += 0.0012;
      ring3.rotation.x += 0.0065;
      ring3.rotation.z += 0.003;

      /* Pulsing opacity */
      mat1.opacity = 0.14 + Math.sin(t)        * 0.06;
      mat2.opacity = 0.18 + Math.sin(t + 1.2)  * 0.08;
      mat3.opacity = 0.26 + Math.sin(t + 2.4)  * 0.1;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      geo1.dispose(); mat1.dispose();
      geo2.dispose(); mat2.dispose();
      geo3.dispose(); mat3.dispose();
      pGeo.dispose(); pMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [width, height]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        position:      "absolute",
        inset:         0,
        pointerEvents: "none",
        zIndex:        0,
        overflow:      "hidden",
        borderRadius:  30,
      }}
    />
  );
}
