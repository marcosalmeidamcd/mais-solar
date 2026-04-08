import { useRef, useMemo, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── Error Boundary ────────────────────────────────────────── */
class SceneErrorBoundary extends Component {
  state = { crashed: false };
  static getDerivedStateFromError() { return { crashed: true }; }
  render() {
    if (this.state.crashed) return null;
    return this.props.children;
  }
}

/* ─── Canvas texture: realistic 60-cell monocrystalline ──────── */
function usePanelTexture() {
  return useMemo(() => {
    const W = 800, H = 1280; // portrait ratio ~1:1.6 (standard 60-cell panel)
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    const COLS = 6, ROWS = 10;
    const PAD = 18;
    const GAP = 4;
    const cellW = (W - PAD * 2 - GAP * (COLS - 1)) / COLS;
    const cellH = (H - PAD * 2 - GAP * (ROWS - 1)) / ROWS;

    // Dark backsheet
    ctx.fillStyle = '#050c16';
    ctx.fillRect(0, 0, W, H);

    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < ROWS; r++) {
        const x = PAD + c * (cellW + GAP);
        const y = PAD + r * (cellH + GAP);

        // Cell base — deep dark blue, slightly different per cell for natural variation
        const hueShift = (c + r) % 3;
        const baseColors = ['#0b1e42', '#0d2048', '#0a1c3e'];
        const lightColors = ['#112654', '#13284e', '#102250'];

        const grad = ctx.createLinearGradient(x, y, x + cellW, y + cellH);
        grad.addColorStop(0,    lightColors[hueShift]);
        grad.addColorStop(0.3,  baseColors[hueShift]);
        grad.addColorStop(0.6,  '#080f28');
        grad.addColorStop(0.85, baseColors[hueShift]);
        grad.addColorStop(1,    lightColors[hueShift]);
        ctx.fillStyle = grad;
        ctx.fillRect(x, y, cellW, cellH);

        // Monocrystalline iridescent shimmer — subtle diagonal highlight
        const shimmer = ctx.createLinearGradient(x, y, x + cellW, y + cellH);
        shimmer.addColorStop(0,    'rgba(60, 100, 200, 0)');
        shimmer.addColorStop(0.35, 'rgba(80, 130, 220, 0.10)');
        shimmer.addColorStop(0.5,  'rgba(100, 160, 255, 0.16)');
        shimmer.addColorStop(0.65, 'rgba(80, 130, 220, 0.08)');
        shimmer.addColorStop(1,    'rgba(40, 80, 180, 0)');
        ctx.fillStyle = shimmer;
        ctx.fillRect(x, y, cellW, cellH);

        // Finger lines — 14 horizontal silver wires
        ctx.strokeStyle = 'rgba(200, 220, 255, 0.45)';
        ctx.lineWidth = 0.7;
        for (let f = 1; f < 14; f++) {
          const fy = y + (cellH * f) / 14;
          ctx.beginPath();
          ctx.moveTo(x + 1, fy);
          ctx.lineTo(x + cellW - 1, fy);
          ctx.stroke();
        }

        // Thin edge highlight (cell border glow)
        ctx.strokeStyle = 'rgba(80, 140, 220, 0.3)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 0.5, y + 0.5, cellW - 1, cellH - 1);
      }
    }

    // Busbars — 3 vertical silver ribbons spanning full height
    const busbarXs = [
      PAD + cellW * 1 + GAP * 1 - cellW * 0.16,
      PAD + cellW * 3 + GAP * 3 - cellW * 0.16,
      PAD + cellW * 5 + GAP * 5 - cellW * 0.16,
    ];
    busbarXs.forEach(bx => {
      const barGrad = ctx.createLinearGradient(bx, 0, bx + 5, 0);
      barGrad.addColorStop(0,   'rgba(180, 210, 255, 0.15)');
      barGrad.addColorStop(0.3, 'rgba(230, 240, 255, 0.80)');
      barGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)');
      barGrad.addColorStop(0.7, 'rgba(230, 240, 255, 0.80)');
      barGrad.addColorStop(1,   'rgba(180, 210, 255, 0.15)');
      ctx.fillStyle = barGrad;
      ctx.fillRect(bx, PAD, 5, H - PAD * 2);
    });

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);
}

/* ─── Realistic Solar Panel ─────────────────────────────────── */
function SolarPanel({ position = [0, 0, 0], rotOffset = 0, scale = 1 }) {
  const ref = useRef();
  const cellTexture = usePanelTexture();

  // Gentle individual sway
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.3 + rotOffset) * 0.08;
  });

  // Real 60-cell panel proportions: 1650×990 mm → ratio ~1.67
  const W = 2.2, H = 3.5, D = 0.05;
  const FT = 0.07; // frame thickness
  const FD = 0.12; // frame depth

  return (
    <group ref={ref} position={position} rotation={[-0.15, 0, 0]} scale={scale}>

      {/* ── Back sheet (white/light grey) ─────────────────── */}
      <mesh position={[0, 0, -D / 2 - 0.001]}>
        <boxGeometry args={[W - FT * 2, H - FT * 2, 0.003]} />
        <meshStandardMaterial color="#dce4ea" roughness={0.95} metalness={0} />
      </mesh>

      {/* ── Cell area with canvas texture ──────────────────── */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[W - FT * 2, H - FT * 2, D]} />
        <meshStandardMaterial
          map={cellTexture}
          roughness={0.18}
          metalness={0.08}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* ── Anti-reflective tempered glass ─────────────────── */}
      <mesh position={[0, 0, D / 2 + 0.004]}>
        <boxGeometry args={[W - FT * 2, H - FT * 2, 0.006]} />
        <meshPhysicalMaterial
          color="#9ab8d0"
          metalness={0}
          roughness={0.04}
          clearcoat={1.0}
          clearcoatRoughness={0.06}
          transmission={0.06}
          opacity={0.72}
          transparent
          envMapIntensity={1.0}
          ior={1.5}
        />
      </mesh>

      {/* ── Aluminium frame — 4 sides ──────────────────────── */}
      {/* Top */}
      <mesh position={[0, H / 2 - FT / 2, 0]}>
        <boxGeometry args={[W, FT, FD]} />
        <meshStandardMaterial color="#d0dce6" metalness={0.95} roughness={0.08} />
      </mesh>
      {/* Bottom */}
      <mesh position={[0, -H / 2 + FT / 2, 0]}>
        <boxGeometry args={[W, FT, FD]} />
        <meshStandardMaterial color="#d0dce6" metalness={0.95} roughness={0.08} />
      </mesh>
      {/* Left */}
      <mesh position={[-W / 2 + FT / 2, 0, 0]}>
        <boxGeometry args={[FT, H - FT * 2, FD]} />
        <meshStandardMaterial color="#bccad4" metalness={0.95} roughness={0.08} />
      </mesh>
      {/* Right */}
      <mesh position={[W / 2 - FT / 2, 0, 0]}>
        <boxGeometry args={[FT, H - FT * 2, FD]} />
        <meshStandardMaterial color="#bccad4" metalness={0.95} roughness={0.08} />
      </mesh>

      {/* ── Frame inner edge highlight ─────────────────────── */}
      {/* Creates the anodized aluminum inner channel look */}
      <mesh position={[0, H / 2 - FT * 1.1, D / 2 + 0.01]}>
        <boxGeometry args={[W - FT * 0.5, FT * 0.3, 0.004]} />
        <meshStandardMaterial color="#e8f0f6" metalness={0.98} roughness={0.05} />
      </mesh>
      <mesh position={[0, -H / 2 + FT * 1.1, D / 2 + 0.01]}>
        <boxGeometry args={[W - FT * 0.5, FT * 0.3, 0.004]} />
        <meshStandardMaterial color="#e8f0f6" metalness={0.98} roughness={0.05} />
      </mesh>

      {/* ── Junction box ───────────────────────────────────── */}
      <mesh position={[0, -0.5, -D / 2 - 0.025]}>
        <boxGeometry args={[0.28, 0.18, 0.05]} />
        <meshStandardMaterial color="#1c1c1c" roughness={0.6} metalness={0.25} />
      </mesh>
      <mesh position={[0, -0.5, -D / 2 - 0.052]}>
        <boxGeometry args={[0.22, 0.13, 0.005]} />
        <meshStandardMaterial color="#111" roughness={0.5} metalness={0.3} />
      </mesh>
      {/* Cable conduit */}
      <mesh position={[0, -H / 2 + FT, -D / 2 - 0.025]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.8, 8]} />
        <meshStandardMaterial color="#222" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* ── Mounting rail ──────────────────────────────────── */}
      <mesh position={[0, 0.4, -D / 2 - 0.04]}>
        <boxGeometry args={[W * 0.88, 0.07, 0.05]} />
        <meshStandardMaterial color="#90a0b0" metalness={0.88} roughness={0.18} />
      </mesh>
      <mesh position={[0, -0.9, -D / 2 - 0.04]}>
        <boxGeometry args={[W * 0.88, 0.07, 0.05]} />
        <meshStandardMaterial color="#90a0b0" metalness={0.88} roughness={0.18} />
      </mesh>

      {/* ── Mounting clips (4 total) ────────────────────────── */}
      {[-W * 0.3, W * 0.3].map((cx, i) => (
        <group key={i}>
          <mesh position={[cx, 0.4, -D / 2 - 0.06]}>
            <boxGeometry args={[0.12, 0.14, 0.06]} />
            <meshStandardMaterial color="#7a8a98" metalness={0.9} roughness={0.2} />
          </mesh>
          <mesh position={[cx, -0.9, -D / 2 - 0.06]}>
            <boxGeometry args={[0.12, 0.14, 0.06]} />
            <meshStandardMaterial color="#7a8a98" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ─── Array: 3 panels ───────────────────────────────────────── */
function SolarArray() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.003;
    groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.4) * 0.12;
  });

  return (
    <group ref={groupRef}>
      {/* Centre panel — full size, slightly forward */}
      <SolarPanel position={[0,    0,    0.5]} rotOffset={0}   scale={1}    />
      {/* Side panels — smaller, stepped back */}
      <SolarPanel position={[-2.8, -0.2, -0.5]} rotOffset={1.2} scale={0.72} />
      <SolarPanel position={[2.8,  -0.2, -0.5]} rotOffset={2.4} scale={0.72} />
    </group>
  );
}

/* ─── Particles ─────────────────────────────────────────────── */
function Particles() {
  const ref = useRef();

  const { positions, colors } = useMemo(() => {
    const count = 140;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
      // Mix of orange and blue-white particles
      const isOrange = Math.random() > 0.5;
      col[i * 3]     = isOrange ? 0.96 : 0.75;
      col[i * 3 + 1] = isOrange ? 0.65 : 0.85;
      col[i * 3 + 2] = isOrange ? 0.14 : 1.0;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.07} transparent opacity={0.6} sizeAttenuation vertexColors />
    </points>
  );
}

/* ─── Export ────────────────────────────────────────────────── */
export default function SolarScene() {
  return (
    <SceneErrorBoundary>
      <Canvas
        camera={{ position: [0, 2, 14], fov: 48 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false,
        }}
        style={{ background: 'transparent' }}
      >
        {/* ── Lighting rig ─────────────────────────────── */}

        {/* Low ambient — preserves dark blue cell color */}
        <ambientLight intensity={0.35} color="#c8dff5" />

        {/* Main sun — comes from the side/top so glass reflects, not overexposes */}
        <directionalLight position={[8, 12, 6]}   intensity={1.8} color="#fff4d0" />

        {/* Weak secondary — cool sky, just enough to fill shadows */}
        <directionalLight position={[-6, 4, 3]}   intensity={0.5} color="#a0c8ff" />

        {/* Orange rim accent — gives warmth without washing out cells */}
        <pointLight position={[-5, 3, -3]}         intensity={0.7} color="#F5A623" />

        {/* Subtle back rim — separates panel from background */}
        <pointLight position={[4, -2, -8]}         intensity={0.3} color="#4070c0" />

        <SolarArray />
        <Particles />
      </Canvas>
    </SceneErrorBoundary>
  );
}
