import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

import heroImg from "@/assets/hero.jpg";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uStrength;
  uniform vec2 uMouse;
  uniform float uPlaneAspect;
  uniform float uImageAspect;

  void main() {
    // cover-fit the image to the plane
    vec2 ratio = vec2(
      min(uPlaneAspect / uImageAspect, 1.0),
      min(uImageAspect / uPlaneAspect, 1.0)
    );
    vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    // ripple emanating from the cursor (the "drop" effect)
    vec2 diff = uv - uMouse;
    float dist = length(diff * vec2(uPlaneAspect, 1.0));
    float ripple = sin(dist * 40.0 - uTime * 5.0) * exp(-dist * 4.5);

    // gentle idle drift so the surface always breathes
    float idle = sin(uv.y * 14.0 + uTime * 0.8) * 0.0018
               + cos(uv.x * 18.0 - uTime * 0.6) * 0.0014;

    vec2 dir = normalize(diff + 0.0001);
    // a constant hover term keeps a living ripple under the cursor even when still
    vec2 offset = dir * ripple * (0.06 * (uStrength + 0.5)) + idle;

    // chromatic aberration for a cinematic, liquid feel
    float r = texture2D(uTexture, uv + offset * 1.0).r;
    float g = texture2D(uTexture, uv + offset * 1.5).g;
    float b = texture2D(uTexture, uv + offset * 2.1).b;
    vec3 color = vec3(r, g, b);

    // subtle vignette to seat the headline
    float vig = smoothstep(1.15, 0.25, distance(vUv, vec2(0.5)));
    color *= mix(0.62, 1.0, vig);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function RippleMesh() {
  const texture = useTexture(heroImg);
  const { viewport, pointer } = useThree();
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));
  const prevMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const strength = useRef(0);

  const uniforms = useMemo(() => {
    const img = texture.image as HTMLImageElement | undefined;
    const imageAspect = img ? img.width / img.height : 1.5;
    texture.minFilter = THREE.LinearFilter;
    texture.colorSpace = THREE.SRGBColorSpace;
    return {
      uTexture: { value: texture },
      uTime: { value: 0 },
      uStrength: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uPlaneAspect: { value: 1 },
      uImageAspect: { value: imageAspect },
    };
  }, [texture]);

  useFrame((_, delta) => {
    if (!matRef.current) return;
    const u = matRef.current.uniforms;

    // target cursor in 0..1 uv space
    const tx = pointer.x * 0.5 + 0.5;
    const ty = pointer.y * 0.5 + 0.5;
    mouse.current.x += (tx - mouse.current.x) * 0.08;
    mouse.current.y += (ty - mouse.current.y) * 0.08;

    const vel = mouse.current.distanceTo(prevMouse.current);
    prevMouse.current.copy(mouse.current);

    strength.current += vel * 16;
    strength.current *= 0.94;
    strength.current = Math.min(strength.current, 2.2);

    u.uTime.value += delta;
    u.uStrength.value = strength.current;
    u.uMouse.value.copy(mouse.current);
    u.uPlaneAspect.value = viewport.width / viewport.height;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export function RippleImage() {
  const [lost, setLost] = useState(false);

  if (lost) return null;

  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 1], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener(
          "webglcontextlost",
          (e) => {
            e.preventDefault();
            // GPU dropped the context — unmount so the static hero photo shows.
            setLost(true);
          },
          { once: true },
        );
      }}
    >
      <RippleMesh />
    </Canvas>
  );
}
