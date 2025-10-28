'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const TextHoverEffect = ({ text = 'SKILLS', duration = 0.5 }) => {
  const svgRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [maskPosition, setMaskPosition] = useState({
    cx: '50%',
    cy: '50%',
  });

  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => window.removeEventListener('resize', updateMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      controls.start({
        cx: ['0%', '100%'],
        cy: '50%',
        transition: {
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        },
      });
    }
  }, [isMobile, controls]);

  const handleMouseMove = (e) => {
    if (isMobile || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = (x / rect.width) * 100;
    const cy = (y / rect.height) * 100;
    setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` });
  };

  return (
    <div
      className="w-full h-[30vh] md:h-[50vh] p-4"
      onMouseMove={handleMouseMove}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 300 90"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full select-none"
      >
        <defs>
          <linearGradient id="textGradient">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="25%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="75%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="25%"
            animate={isMobile ? controls : maskPosition}
            initial={{ cx: '50%', cy: '50%' }}
            transition={{ duration, ease: 'easeOut' }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>

          <mask id="textMask">
            <rect width="100%" height="100%" fill="url(#revealMask)" />
          </mask>
        </defs>

        {/* Outline Text */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className="fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800"
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 4, ease: 'easeInOut' }}
        >
          {text}
        </motion.text>

        {/* Glowing Beam (Gradient Masked) */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="0.3"
          mask="url(#textMask)"
          className="fill-transparent font-[helvetica] text-7xl font-bold"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};
