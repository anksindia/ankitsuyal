"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Spotlight = ({
  gradientFirstMobile = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, 0.08) 0, hsla(0, 0%, 100%, 0.03) 50%, hsla(0, 0%, 100%, 0.01) 80%)",
  gradientSecondMobile = "radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, 0.05) 0, hsla(0, 0%, 100%, 0.02) 80%, transparent 100%)",
  gradientThirdMobile = "radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, 0.04) 0, hsla(0, 0%, 100%, 0.01) 80%, transparent 100%)",
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, 0.20) 0, hsla(0, 0%, 100%, 0.08) 50%, hsla(0, 0%, 100%, 0.02) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, 0.15) 0, hsla(0, 0%, 100%, 0.06) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, 0.10) 0, hsla(0, 0%, 100%, 0.04) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
} = {}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const g1 = isMobile ? gradientFirstMobile : gradientFirst;
  const g2 = isMobile ? gradientSecondMobile : gradientSecond;
  const g3 = isMobile ? gradientThirdMobile : gradientThird;

  const w = isMobile ? width * 0.8 : width;
  const h = isMobile ? height * 0.85 : height;
  const sw = isMobile ? smallWidth * 0.5 : smallWidth;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Left */}
      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: g1,
            width: `${w}px`,
            height: `${h}px`,
          }}
          className="absolute top-0 left-0"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: g2,
            width: `${sw}px`,
            height: `${h}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: g3,
            width: `${sw}px`,
            height: `${h}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      {/* Right */}
      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: g1,
            width: `${w}px`,
            height: `${h}px`,
          }}
          className="absolute top-0 right-0"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: g2,
            width: `${sw}px`,
            height: `${h}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: g3,
            width: `${sw}px`,
            height: `${h}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};
