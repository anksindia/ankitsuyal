"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

// ✅ Full Inside Glow + React Icon appear on Hover (Only Inside Glow)
export const GlowingCard = ({ icon, title, color = "#22d3ee", text }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    const glowAnim = gsap.to(el, {
      backgroundColor: color + "20",
      duration: 0.4,
      ease: "power2.out",
      paused: true,
    });

    const iconAnim = gsap.to(iconRef.current, {
      opacity: 1,
      y: 0,
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
      className="relative w-80 h-60 bg-black/80 border border-gray-700 rounded-2xl p-5 text-white flex flex-col justify-between overflow-hidden"
    >
      {/* Hidden icon on top-left that fades in on hover */}
      <motion.div
        ref={iconRef}
        initial={{ opacity: 0, y: 10 }}
        className="absolute top-4 left-4 p-2 rounded-md bg-white/10"
      >
        {icon}
      </motion.div>

      <div className="flex-1 flex flex-col justify-end">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-neutral-300 leading-snug">{text}</p>
      </div>

      {/* Internal glow layer only (no outer box-shadow) */}
      <div
        className="absolute inset-0 rounded-2xl z-[-1]"
        style={{
          background: hovered ? `${color}30` : "transparent",
          boxShadow: hovered ? `inset 0 0 40px ${color}` : "none",
          transition: "all 0.3s ease",
        }}
      />
    </motion.div>
  );
};