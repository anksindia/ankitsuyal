"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export const GlowingCard = ({ icon, title, color = "#22d3ee", text }) => {
  const cardRef = useRef(null);
  const iconWrapperRef = useRef(null);
  const iconInnerRef = useRef(null); 
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;

    const glowAnim = gsap.to(el, {
      backgroundColor: color + "20",
      duration: 0.4,
      ease: "power2.out",
      paused: true,
    });

    const iconAnim = gsap.to(iconInnerRef.current, {
      color: color,
      fill: color, 
      stroke: color,
      duration: 0.4,
      ease: "power2.out",
      paused: true,
    });

    const handleEnter = () => {
      setHovered(true);
      glowAnim.play();
      iconAnim.play();
    };

    const handleLeave = () => {
      setHovered(false);
      glowAnim.reverse();
      iconAnim.reverse();
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [color]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-80 h-60 bg-black/80 border border-gray-700 rounded-2xl p-5 text-white flex flex-col justify-between overflow-hidden shadow-md"
    >

      <motion.div
        ref={iconWrapperRef}
        className="absolute top-4 left-4 p-2 rounded-md bg-white/10"
      >
        <div ref={iconInnerRef} className="text-white">
          {icon}
        </div>
      </motion.div>

      <div className="flex-1 flex flex-col justify-end">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-neutral-300 leading-snug">{text}</p>
      </div>

      
      <div
        className="absolute inset-0 rounded-2xl z-[-1] backdrop-blur-md transition-all duration-300"
        style={{
          background: hovered ? `${color}40` : "transparent",
          boxShadow: hovered ? `inset 0 0 40px ${color}` : "none",
        }}
      />
    </motion.div>
  );
};
