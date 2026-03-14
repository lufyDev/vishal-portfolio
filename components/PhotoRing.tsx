import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";

function RotatingRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const dot1 = useRef<THREE.Mesh>(null);
  const dot2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (ring1.current) {
      ring1.current.rotation.y = t * 0.3;
      ring1.current.rotation.x = Math.sin(t * 0.15) * 0.15;
    }
    if (ring2.current) {
      ring2.current.rotation.y = -t * 0.2;
      ring2.current.rotation.z = t * 0.08;
    }
    if (dot1.current) {
      const a1 = t * 0.5;
      dot1.current.position.set(
        Math.cos(a1) * 1.85,
        Math.sin(a1) * 1.85,
        0
      );
    }
    if (dot2.current) {
      const a2 = -t * 0.35;
      dot2.current.position.set(
        Math.cos(a2) * 1.95,
        Math.sin(a2) * 1.95,
        0
      );
    }
  });

  return (
    <>
      <mesh ref={ring1}>
        <torusGeometry args={[1.85, 0.035, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" />
      </mesh>

      <mesh ref={ring2} rotation={[0.4, 0, 0.6]}>
        <torusGeometry args={[1.95, 0.018, 16, 100]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} />
      </mesh>

      <group>
        <mesh ref={dot1}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshBasicMaterial color="#60a5fa" />
        </mesh>
      </group>

      <group rotation={[0.4, 0, 0.6]}>
        <mesh ref={dot2}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshBasicMaterial color="#93c5fd" />
        </mesh>
      </group>
    </>
  );
}

export default function PhotoRing() {
  return (
    <motion.div
      className="relative aspect-square w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 3.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        style={{ position: "absolute", inset: 0, zIndex: 2 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <RotatingRings />
      </Canvas> */}

      <div
        className="absolute inset-[15%] z-[1] overflow-hidden rounded-full border border-accent/20"
        style={{
          boxShadow: "0 0 80px rgba(59, 130, 246, 0.2), inset 0 0 60px rgba(59, 130, 246, 0.08)",
        }}
      >
        {/* Replace this placeholder with your photo: */}
            <img src="/v2.png" alt="Vishal" className="h-full w-full object-cover" />
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/5 via-surface to-accent/5">
          <span className="text-7xl font-bold text-accent/30 select-none">V</span>
        </div>
      </div>

      <motion.div
        className="glass absolute -top-1 right-2 z-10 flex items-center gap-2 rounded-full px-3.5 py-1.5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.8, duration: 0.5 }}
      >
        <span className="text-xs font-semibold text-accent">&lt;/&gt;</span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted">Stack</p>
          <p className="text-xs font-medium text-foreground">Full-Stack</p>
        </div>
      </motion.div>

      <motion.div
        className="glass absolute bottom-8 -right-2 z-10 flex items-center gap-2 rounded-full px-3.5 py-1.5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 0.5 }}
      >
        <span className="text-xs font-semibold text-accent">▶</span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted">Focus</p>
          <p className="text-xs font-medium text-foreground">AI & Web</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
