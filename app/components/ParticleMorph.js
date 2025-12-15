"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const getTextCoordinates = (text, fontSize = 120) => {
  if (typeof document === "undefined") return [];

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const width = 1000;
  const height = 500;

  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  ctx.font = `bold ${fontSize}px Arial`;
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);

  const data = ctx.getImageData(0, 0, width, height).data;

  const particles = [];
  const step = 4;

  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const idx = (y * width + x) * 4;
      if (data[idx] > 10) {
        particles.push({
          x: (x - width / 2) * 0.05,
          y: -(y - height / 2) * 0.05,
          z: 0,
        });
      }
    }
  }
  return particles;
};

const ParticleSystem = ({ text }) => {
  const pointsRef = useRef();
  const [mode, setMode] = useState("sphere");

  const { positions, textCoords, sphereCoords, randomOffsets } = useMemo(() => {
    const textPoints = getTextCoordinates(text);
    const count = textPoints.length;

    const current = new Float32Array(count * 3);
    const textT = new Float32Array(count * 3);
    const sphereT = new Float32Array(count * 3);
    const offsets = new Float32Array(count * 3);

    const radius = 6;

    for (let i = 0; i < count; i++) {
      textT[i * 3] = textPoints[i].x;
      textT[i * 3 + 1] = textPoints[i].y;
      textT[i * 3 + 2] = 0;

      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const sx = radius * Math.cos(theta) * Math.sin(phi);
      const sy = radius * Math.sin(theta) * Math.sin(phi);
      const sz = radius * Math.cos(phi);

      sphereT[i * 3] = sx;
      sphereT[i * 3 + 1] = sy;
      sphereT[i * 3 + 2] = sz;

      current[i * 3] = sx;
      current[i * 3 + 1] = sy;
      current[i * 3 + 2] = sz;

      offsets[i * 3] = Math.random() * 2 - 1;
      offsets[i * 3 + 1] = Math.random() * 2 - 1;
      offsets[i * 3 + 2] = Math.random() * 2 - 1;
    }

    return {
      positions: current,
      textCoords: textT,
      sphereCoords: sphereT,
      randomOffsets: offsets,
    };
  }, [text]);

  useEffect(() => {
    const id = setInterval(() => {
      setMode((m) => (m === "sphere" ? "text" : "sphere"));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const geo = pointsRef.current.geometry;
    const pos = geo.attributes.position;
    const target = mode === "text" ? textCoords : sphereCoords;

    const t = state.clock.getElapsedTime();

    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i);
      const py = pos.getY(i);
      const pz = pos.getZ(i);

      const tx = target[i * 3];
      const ty = target[i * 3 + 1];
      const tz = target[i * 3 + 2];

      // Smooth morph movement
      let nx = px + (tx - px) * 0.06;
      let ny = py + (ty - py) * 0.06;
      let nz = pz + (tz - pz) * 0.06;

      // ⭐ INDIVIDUAL particle rotation / orbital movement
      const ox = randomOffsets[i * 3];
      const oy = randomOffsets[i * 3 + 1];
      const oz = randomOffsets[i * 3 + 2];

      nx += Math.sin(t * 1.2 + ox * 5) * 0.015;
      ny += Math.cos(t * 1.3 + oy * 5) * 0.015;
      nz += Math.sin(t * 1.1 + oz * 5) * 0.015;

      pos.setXYZ(i, nx, ny, nz);
    }

    pos.needsUpdate = true;

    // ❌ REMOVE GROUP ROTATION — NO MORE FLIP
    // pointsRef.current.rotation.y += 0.002;  // REMOVE THIS
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
      </bufferGeometry>

      <pointsMaterial
        size={0.16}
        color="#a855f7"
        opacity={0.95}
        transparent
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default function ParticleMorph({ customText = "Ankit Suyal" }) {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
        <ambientLight intensity={0.5} />

        <ParticleSystem text={customText} />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
