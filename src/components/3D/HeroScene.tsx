import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { SceneFallback } from './SceneFallback';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

// Particle Field Component
function ParticleCloud({ count = 400 }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorA = new THREE.Color('#06b6d4'); // Cyan
    const colorB = new THREE.Color('#6366f1'); // Indigo
    const colorC = new THREE.Color('#8b5cf6'); // Violet

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 3.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);

      const mixedColor = i % 3 === 0 ? colorA : i % 3 === 1 ? colorB : colorC;
      col[i3] = mixedColor.r;
      col[i3 + 1] = mixedColor.g;
      col[i3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        state.pointer.y * 0.2,
        0.05
      );
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(
        pointsRef.current.rotation.z,
        state.pointer.x * 0.2,
        0.05
      );
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Interactive Central Geometric Core
function CentralTechCore() {
  const outerCageRef = useRef<THREE.Mesh>(null!);
  const innerCoreRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Group>(null!);
  const ring2Ref = useRef<THREE.Group>(null!);
  const satellite1Ref = useRef<THREE.Mesh>(null!);
  const satellite2Ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Mouse parallax tracking
    const targetX = state.pointer.x * 0.4;
    const targetY = state.pointer.y * 0.4;

    // Outer wireframe cage rotation
    if (outerCageRef.current) {
      outerCageRef.current.rotation.x += delta * 0.2;
      outerCageRef.current.rotation.y += delta * 0.3;
      outerCageRef.current.rotation.x = THREE.MathUtils.lerp(outerCageRef.current.rotation.x, targetY, 0.04);
      outerCageRef.current.rotation.y = THREE.MathUtils.lerp(outerCageRef.current.rotation.y, targetX, 0.04);
    }

    // Inner core reverse rotation
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.x -= delta * 0.25;
      innerCoreRef.current.rotation.y -= delta * 0.35;
      // Pulse scale
      const scale = 1 + Math.sin(t * 2) * 0.04;
      innerCoreRef.current.scale.set(scale, scale, scale);
    }

    // Orbital rings rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.4;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.3;
      ring2Ref.current.rotation.y += delta * 0.2;
    }

    // Satellites motion along the orbit
    if (satellite1Ref.current) {
      const radius = 2.4;
      satellite1Ref.current.position.x = Math.cos(t * 1.5) * radius;
      satellite1Ref.current.position.y = Math.sin(t * 1.5) * radius;
    }

    if (satellite2Ref.current) {
      const radius = 2.8;
      satellite2Ref.current.position.x = Math.sin(t * 1.1) * radius;
      satellite2Ref.current.position.z = Math.cos(t * 1.1) * radius;
    }
  });

  return (
    <group>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={outerCageRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner Crystalline Core */}
      <mesh ref={innerCoreRef}>
        <octahedronGeometry args={[1.0, 0]} />
        <meshPhysicalMaterial
          color="#6366f1"
          emissive="#4338ca"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.85}
          transmission={0.4}
          ior={1.5}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Orbital Ring 1 - Cyan */}
      <group ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.4, 0.018, 16, 64]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.8}
            roughness={0.3}
          />
        </mesh>
        {/* Orbiting node satellite */}
        <mesh ref={satellite1Ref}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={1.5}
          />
        </mesh>
      </group>

      {/* Orbital Ring 2 - Violet / Indigo */}
      <group ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <mesh>
          <torusGeometry args={[2.8, 0.015, 16, 64]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#8b5cf6"
            emissiveIntensity={0.8}
            roughness={0.3}
          />
        </mesh>
        {/* Second orbiting node satellite */}
        <mesh ref={satellite2Ref}>
          <boxGeometry args={[0.12, 0.12, 0.12]} />
          <meshStandardMaterial
            color="#c084fc"
            emissive="#c084fc"
            emissiveIntensity={1.5}
          />
        </mesh>
      </group>
    </group>
  );
}

// Scene Root with Lights and Camera
export const HeroScene: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <SceneFallback />;
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[560px] cursor-grab active:cursor-grabbing">
      {/* Background ambient color bleed */}
      <div className="absolute inset-0 bg-radial-gradient-hero pointer-events-none" />

      <Suspense fallback={<SceneFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            powerPreference: 'high-performance',
            alpha: true
          }}
          className="w-full h-full"
        >
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#38bdf8" />
          <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#818cf8" />
          <pointLight position={[0, 0, 2]} intensity={1.5} color="#06b6d4" distance={5} />

          {/* Floating animated group */}
          <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
            <CentralTechCore />
          </Float>

          {/* Surrounding particle nebula */}
          <ParticleCloud count={350} />
        </Canvas>
      </Suspense>

      {/* Interactive overlay hint */}
      <div className="absolute bottom-3 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono text-slate-400 bg-surface-card/60 backdrop-blur-md border border-white/5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Interactive 3D Canvas
      </div>
    </div>
  );
};
