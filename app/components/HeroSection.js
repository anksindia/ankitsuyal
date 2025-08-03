"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from './ui/HoverBorderGradient';
import Orb from './ui/Orb';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  const floatingCircles = [
    { size: 80, top: '10%', left: '20%' },
    { size: 60, top: '40%', left: '75%' },
    { size: 100, top: '65%', left: '15%' },
    { size: 70, top: '30%', left: '50%' },
    { size: 90, top: '85%', left: '60%' },
    { size: 50, top: '20%', left: '80%' },
  ];

  if (!isMounted) return null; 

  return (
    <section className="relative w-screen h-screen text-white flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-[#000000] via-[#1A2560] to-[#000000]">

      {/* Orb background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center gap-10 w-full max-w-screen-sm text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          tabIndex={0}
          aria-label="Hero headline: Hello World! I&#39;m Ankit Suyal"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-gray-200 via-blue-200 to-red-200 bg-clip-text text-transparent animate-text-glow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Hello World!<br className="hidden sm:block" />I&apos;m<br />Ankit Suyal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-md px-2"
        >
          Crafting web apps with the MERN stack, now diving into Android & intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HoverBorderGradient as="a" href="/contact">
            Let’s Connect
          </HoverBorderGradient>
        </motion.div>
      </div>

      {/* Floating circles */}
      {floatingCircles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/10 pointer-events-none"
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.left,
            top: circle.top,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, Math.random() * 40 - 20],
            opacity: [0, 0.12, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </section>
  );
};

export default HeroSection;
