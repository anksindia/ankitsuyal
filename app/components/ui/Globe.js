"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import countries from "@/data/globe.json";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

function genRandomNumbers(min, max, count) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
  }
  return arr;
}

const GlobeInner = ({ globeConfig, data }) => {
  const globeRef = useRef(null);
  const groupRef = useRef();
  const [initialized, setInitialized] = useState(false);

  //  Memoize defaultProps to avoid dependency warnings
  const defaultProps = useMemo(
    () => ({
      pointSize: 1,
      atmosphereColor: "#ffffff",
      showAtmosphere: true,
      atmosphereAltitude: 0.1,
      polygonColor: "rgba(255,255,255,0.7)",
      globeColor: "#2E8B57",
      emissive: "#2E8B57",
      emissiveIntensity: 0.1,
      shininess: 0.9,
      arcTime: 2000,
      arcLength: 0.9,
      rings: 1,
      maxRings: 3,
      ...globeConfig,
    }),
    [globeConfig]
  );

  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      groupRef.current.add(globeRef.current);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!globeRef.current || !initialized) return;
    const material = globeRef.current.globeMaterial();
    material.color = new THREE.Color(defaultProps.globeColor);
    material.emissive = new THREE.Color(defaultProps.emissive);
    material.emissiveIntensity = defaultProps.emissiveIntensity;
    material.shininess = defaultProps.shininess;
  }, [initialized, defaultProps]);

  useEffect(() => {
    if (!globeRef.current || !initialized || !data) return;

    let points = [];
    for (let arc of data) {
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    const filteredPoints = points.filter(
      (v, i, a) => a.findIndex(v2 => v2.lat === v.lat && v2.lng === v.lng) === i
    );

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    globeRef.current
      .arcsData(data)
      .arcStartLat(d => d.startLat)
      .arcStartLng(d => d.startLng)
      .arcEndLat(d => d.endLat)
      .arcEndLng(d => d.endLng)
      .arcColor(d => d.color)
      .arcAltitude(d => d.arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap(d => d.order)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    globeRef.current
      .pointsData(filteredPoints)
      .pointColor(d => d.color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
      .ringsData([])
      .ringColor(() => defaultProps.polygonColor)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings);
  }, [initialized, data, defaultProps]);

  useEffect(() => {
    if (!globeRef.current || !initialized || !data) return;

    const interval = setInterval(() => {
      const randomIndexes = genRandomNumbers(0, data.length, Math.floor(data.length * 0.8));
      const ringsData = data
        .filter((_, i) => randomIndexes.includes(i))
        .map(d => ({
          lat: d.startLat,
          lng: d.startLng,
          color: d.color,
        }));
      globeRef.current.ringsData(ringsData);
    }, 2000);

    return () => clearInterval(interval);
  }, [initialized, data, defaultProps]);
  
  return <group ref={groupRef} />;
};

const WebGLRendererConfig = () => {
  const { gl, size } = useThree();
  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size]); //  Fix dependency array
  return null;
};

export const World = ({ globeConfig, data }) => {
  return (
    <Canvas camera={{ position: [0, 0, cameraZ], fov: 50 }}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight color={globeConfig.directionalLeftLight} position={[-400, 100, 400]} />
      <directionalLight color={globeConfig.directionalTopLight} position={[-200, 500, 200]} />
      <pointLight color={globeConfig.pointLight} position={[-200, 500, 200]} intensity={0.8} />
      <GlobeInner globeConfig={globeConfig} data={data} />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1} minPolarAngle={Math.PI / 3.5} maxPolarAngle={Math.PI - Math.PI / 3} />
    </Canvas>
  );
};
