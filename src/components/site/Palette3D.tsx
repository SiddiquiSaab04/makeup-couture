import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

import { useIsMounted } from "@/hooks/use-is-mounted";
import { hasWebGL } from "@/lib/has-webgl";
import paletteImg from "@/assets/palette.png";

function PaletteMesh() {
  const texture = useTexture(paletteImg);
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const scroll = typeof window !== "undefined" ? window.scrollY : 0;
    group.current.rotation.y = scroll * 0.0016 + Math.sin(t * 0.4) * 0.25;
    group.current.rotation.x = Math.sin(t * 0.5) * 0.12 - 0.1;
    group.current.position.y = Math.sin(t * 0.8) * 0.12;
  });

  return (
    <group ref={group}>
      <mesh>
        <planeGeometry args={[4.2, 2.8]} />
        <meshStandardMaterial
          map={texture}
          transparent
          alphaTest={0.05}
          roughness={0.35}
          metalness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export function Palette3D() {
  const mounted = useIsMounted();

  if (!mounted || !hasWebGL()) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <img
          src={paletteImg}
          alt="VELOUR Bloom blush palette"
          className="animate-float w-[80%] max-w-md object-contain drop-shadow-[0_30px_60px_rgba(255,45,149,0.4)]"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} color="#ff63b8" />
      <directionalLight position={[-4, -2, 2]} intensity={1.4} color="#b69cff" />
      <PaletteMesh />
    </Canvas>
  );
}
