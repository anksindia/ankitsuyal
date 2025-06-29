'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight-new';
import { HoverBorderGradient } from './ui/HoverBorderGradient';

const HeroSection = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, { y: 50, opacity: 0, duration: 1.4, ease: 'power3.out' });
  }, []);

  const floatingCircles = [
    { size: 80, top: '10%', left: '20%' },
    { size: 60, top: '40%', left: '75%' },
    { size: 100, top: '65%', left: '15%' },
    { size: 70, top: '30%', left: '50%' },
    { size: 90, top: '85%', left: '60%' },
    { size: 50, top: '20%', left: '80%' },
  ];

  return (
    <section className="relative min-h-screen text-white flex items-center justify-center px-6 sm:px-8 md:px-10 overflow-hidden bg-gradient-to-b from-[#000101] via-[#000000] to-[#000101]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none z-0" />
      </div>

      <Spotlight />

      <div className="relative z-10 flex flex-col items-center gap-16 max-w-4xl w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          tabIndex={0}
          aria-label="Hero headline: Hey there, I'm Ankit Suyal"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 bg-clip-text text-transparent animate-text-glow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Hey there,<br className="hidden sm:block" />I'm<br />Ankit Suyal
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-xl backdrop-blur-sm"
        >
          Crafting web apps with the MERN stack, now diving into Android & intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <HoverBorderGradient as="a" href="/contact">
            Let’s Connect
          </HoverBorderGradient>
        </motion.div>
      </div>

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