"use client";

import React from "react";
import { World } from "@/components/ui/Globe"; 
import sampleArcs from "@/data/sample-arcs.json";

const globeConfig = {
  globeColor: "#2C3E50", 
  showAtmosphere: true,
  atmosphereColor: " #DDE6EC", 
  atmosphereAltitude: 0.1,
  polygonColor: "rgba(255, 255, 255, 0.7)", 
  ambientLight: "#274B8F", 
  directionalLeftLight: "#e5ddc8",
  directionalTopLight: "#faf5ef",
  pointLight: "#d0c6af",
  arcLength: 0.7,
  arcTime: 2000,
  rings: 1,
  maxRings: 3,
  pointSize: 4,
  emissive: "#1A2D66",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

export const GlobeDemo = ({
  title = "Let&apos;s connect the world",
  subtitle = "Ping me from anywhere!",
}) => {
  return (
    <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl h-[500px] md:h-[600px] w-full">
      {/* Text overlay on top of globe */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6 md:p-10 pointer-events-none">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f3f2ed] drop-shadow-lg">
          {title}
        </h2>
        <p className="text-[#d6d1c4] text-lg mt-2 drop-shadow-md">
          {subtitle}
        </p>
      </div>

      {/* Globe component behind the text */}
      <div className="absolute inset-0 z-0">
        <World globeConfig={globeConfig} data={sampleArcs} />
      </div>

      {/* Optional gradient fade at bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#000000] z-20 pointer-events-none" />
    </div>
  );
};
