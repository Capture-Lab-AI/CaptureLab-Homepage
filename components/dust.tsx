"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * Dust motes drifting through the hero's lamplight — a particle pass over the
 * reading-room photograph. Warm-tinted, additive, and deliberately sparse;
 * the motes sway on the spot rather than streaming, and the whole field
 * leans a few pixels toward the cursor.
 */

const COUNT = 150;

const VERTEX = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uDpr;
  attribute float aSeed;
  attribute float aSize;
  varying float vTwinkle;

  void main() {
    vec3 p = position;
    float t = uTime * 0.14 + aSeed * 43.0;
    p.x += sin(t * 0.55 + aSeed * 6.28) * 0.34;
    p.y += sin(t * 0.38 + aSeed * 12.4) * 0.26 + sin(uTime * 0.05 + aSeed * 3.1) * 0.12;
    p.xy += uMouse * (0.05 + aSeed * 0.11);

    vTwinkle = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * (0.5 + aSeed * 1.3) + aSeed * 21.0));

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = aSize * uDpr * (3.2 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAGMENT = /* glsl */ `
  varying float vTwinkle;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.06, d) * vTwinkle;
    gl_FragColor = vec4(1.0, 0.78, 0.56, a * 0.5);
  }
`;

function Motes() {
  const material = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport, gl } = useThree();

  const { positions, seeds, sizes } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT);
    const sizes = new Float32Array(COUNT);
    const w = viewport.width;
    const h = viewport.height;
    // the pendant lamp sits right-of-center, upper-middle of the photo
    const lampX = w * 0.06;
    const lampY = h * 0.06;
    for (let i = 0; i < COUNT; i++) {
      const nearLamp = i < COUNT * 0.62;
      let x: number;
      let y: number;
      if (nearLamp) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() ** 1.6 * w * 0.3;
        x = lampX + Math.cos(angle) * radius;
        y = lampY + Math.sin(angle) * radius * 0.75;
      } else {
        x = (Math.random() - 0.5) * w;
        y = (Math.random() - 0.5) * h;
      }
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
      seeds[i] = Math.random();
      sizes[i] = 1.6 + Math.random() ** 2 * 4.6;
    }
    return { positions, seeds, sizes };
  }, [viewport.width, viewport.height]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uDpr: { value: gl.getPixelRatio() },
    }),
    [gl],
  );

  useFrame((state) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = state.clock.elapsedTime;
    const m = material.current.uniforms.uMouse.value as THREE.Vector2;
    m.x += (mouse.current.x - m.x) * 0.04;
    m.y += (mouse.current.y - m.y) * 0.04;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSeed" args={[seeds, 1]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        vertexShader={VERTEX}
        fragmentShader={FRAGMENT}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function Dust() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden md:block"
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 3], fov: 55 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      >
        <Motes />
      </Canvas>
    </div>
  );
}
