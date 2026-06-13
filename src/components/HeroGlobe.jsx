import { useEffect, useRef } from "react";
import * as THREE from "three";

const CORAL = "#e8604a";
const GOLD  = "#d4a847";
const NAVY  = "#0d1b2a";

export default function HeroGlobe() {
  const mountRef = useRef(null);
  const mouse    = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    /* ── Sizes ── */
    let W = container.clientWidth  || 580;
    let H = container.clientHeight || 510;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ── Scene / Camera ── */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 200);
    camera.position.set(0, 0, 5.6);

    /* ── Globe: wireframe icosahedron ── */
    const geoGlobe = new THREE.IcosahedronGeometry(1.72, 4);
    const matGlobe = new THREE.MeshBasicMaterial({
      color:       new THREE.Color(CORAL),
      wireframe:   true,
      transparent: true,
      opacity:     0.09,
    });
    const globe = new THREE.Mesh(geoGlobe, matGlobe);
    scene.add(globe);

    /* ── Inner glow sphere ── */
    const geoInner = new THREE.SphereGeometry(1.62, 32, 32);
    const matInner = new THREE.MeshBasicMaterial({
      color:       new THREE.Color(NAVY),
      transparent: true,
      opacity:     0.55,
    });
    const inner = new THREE.Mesh(geoInner, matInner);
    scene.add(inner);

    /* ── Equator ring ── */
    const geoRing = new THREE.TorusGeometry(1.73, 0.007, 6, 120);
    const matRing = new THREE.MeshBasicMaterial({ color: new THREE.Color(GOLD), transparent: true, opacity: 0.38 });
    const ring    = new THREE.Mesh(geoRing, matRing);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    /* ── Orbiting nodes (satellite dots) ── */
    const NODES = 18;
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const nodeSphereGeo = new THREE.SphereGeometry(0.038, 8, 8);

    const orbitData = Array.from({ length: NODES }, (_, i) => {
      const theta  = Math.random() * Math.PI * 2;
      const phi    = Math.acos(2 * Math.random() - 1);
      const radius = 1.72 + Math.random() * 0.42 + 0.18;
      const speed  = (Math.random() - 0.5) * 0.008 + (i % 2 === 0 ? 0.006 : -0.006);
      const tiltX  = Math.random() * Math.PI;
      const tiltZ  = Math.random() * Math.PI;
      const isGold = i % 3 === 0;

      const mat  = new THREE.MeshBasicMaterial({
        color:       new THREE.Color(isGold ? GOLD : CORAL),
        transparent: true,
        opacity:     isGold ? 0.9 : 0.75,
      });
      const mesh = new THREE.Mesh(nodeSphereGeo, mat);
      nodeGroup.add(mesh);

      /* Trailing line orbit arc */
      const arcPoints = [];
      for (let a = 0; a <= Math.PI * 2; a += 0.18) {
        arcPoints.push(new THREE.Vector3(
          Math.cos(a) * radius,
          0,
          Math.sin(a) * radius,
        ));
      }
      const arcGeo  = new THREE.BufferGeometry().setFromPoints(arcPoints);
      const arcMat  = new THREE.LineBasicMaterial({
        color:       new THREE.Color(isGold ? GOLD : CORAL),
        transparent: true,
        opacity:     0.06,
      });
      const arc = new THREE.LineLoop(arcGeo, arcMat);
      arc.rotation.x = tiltX;
      arc.rotation.z = tiltZ;
      nodeGroup.add(arc);

      return { mesh, arc, theta, phi, radius, speed, tiltX, tiltZ };
    });

    /* ── Outer particle field ── */
    const FIELD_PTS = 70;
    const fieldPos  = new Float32Array(FIELD_PTS * 3);
    for (let i = 0; i < FIELD_PTS; i++) {
      const r = 2.2 + Math.random() * 1.4;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      fieldPos[i * 3]     = r * Math.sin(p) * Math.cos(t);
      fieldPos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      fieldPos[i * 3 + 2] = r * Math.cos(p);
    }
    const fieldGeo = new THREE.BufferGeometry();
    fieldGeo.setAttribute("position", new THREE.BufferAttribute(fieldPos, 3));
    const fieldMat = new THREE.PointsMaterial({
      color:           new THREE.Color(CORAL),
      size:            0.04,
      transparent:     true,
      opacity:         0.45,
      sizeAttenuation: true,
      blending:        THREE.AdditiveBlending,
      depthWrite:      false,
    });
    scene.add(new THREE.Points(fieldGeo, fieldMat));

    /* ── Resize ── */
    function onResize() {
      W = container.clientWidth  || 580;
      H = container.clientHeight || 510;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    }
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    /* ── Mouse parallax ── */
    function onMouse(e) {
      const rect = container.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      mouse.current.y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    }
    container.addEventListener("mousemove", onMouse, { passive: true });
    container.addEventListener("mouseleave", () => { mouse.current.x = 0; mouse.current.y = 0; });

    /* ── Animation loop ── */
    let raf;
    let t = 0;

    function animate() {
      raf = requestAnimationFrame(animate);
      t += 0.008;

      /* Slow globe spin */
      globe.rotation.y += 0.0024;
      globe.rotation.x += 0.0007;
      ring.rotation.z  += 0.003;

      /* Node orbits */
      orbitData.forEach((o) => {
        o.theta += o.speed;
        const x = Math.cos(o.theta) * o.radius;
        const z = Math.sin(o.theta) * o.radius;

        /* Apply arc tilt to node position */
        const cosX = Math.cos(o.tiltX), sinX = Math.sin(o.tiltX);
        const cosZ = Math.cos(o.tiltZ), sinZ = Math.sin(o.tiltZ);
        const y1   = -z * sinX;
        const z1   = z * cosX;
        const x2   = x * cosZ - y1 * sinZ;
        const y2   = x * sinZ + y1 * cosZ;

        o.mesh.position.set(x2, y2, z1);
        o.mesh.material.opacity = 0.5 + Math.sin(t + o.theta * 4) * 0.3;
      });

      /* Mouse parallax on nodeGroup + globe */
      const targetX = mouse.current.x * 0.18;
      const targetY = mouse.current.y * 0.12;
      nodeGroup.rotation.y += (targetX - nodeGroup.rotation.y) * 0.06;
      nodeGroup.rotation.x += (-targetY - nodeGroup.rotation.x) * 0.06;
      globe.rotation.y     += (targetX * 0.4 - 0 ) * 0.01;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("mousemove", onMouse);
      renderer.dispose();
      nodeSphereGeo.dispose();
      geoGlobe.dispose(); matGlobe.dispose();
      geoInner.dispose(); matInner.dispose();
      geoRing.dispose();  matRing.dispose();
      fieldGeo.dispose(); fieldMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset:    0,
        zIndex:   1,
        pointerEvents: "none",
      }}
    />
  );
}
