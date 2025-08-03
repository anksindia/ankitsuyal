"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

//color palette

const baseColors = [
  "#08FDD8", // Neon Aqua
  "#3EECAC", // Mint Green
  "#00C9FF", // Electric Blue
  "#6C63FF", // Soft Indigo
  "#537FE7", // Tech Blue
  "#3B82F6", // Vibrant Blue (Tailwind style)
  "#8892B0", // Cool Slate
  "#7F8C8D", // Soft Gray
  "#9BA3EB", // Periwinkle
  "#4ADEDE", // Soft Cyan
];


const ColourfulText = ({ text }) => {
  const [currentColors, setCurrentColors] = useState(baseColors);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...baseColors].sort(() => 0.5 - Math.random());
      setCurrentColors(shuffled);
      setCycle((prev) => prev + 1);
    }, 6000); // Slow down for a sleeker effect
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${cycle}-${index}`}
          initial={{ y: 0 }}
          animate={{
            color: currentColors[index % currentColors.length],
            y: [0, -1.5, 0],
            scale: [1, 1.015, 1],
            opacity: [1, 0.9, 1],
            filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.04,
          }}
          className="inline-block whitespace-pre font-semibold tracking-tight"
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};

export default ColourfulText;
