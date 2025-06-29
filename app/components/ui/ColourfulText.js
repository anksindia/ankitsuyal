"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ColourfulText = ({ text }) => {
  const baseColors = [
    "#83B320", "#2FC36A", "#2AA9D2", "#0470CA", "#6B0AFF",
    "#B700DA", "#DA00AB", "#E6405C", "#E8623F", "#F9812F",
  ];

  const [currentColors, setCurrentColors] = useState(baseColors);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...baseColors].sort(() => 0.5 - Math.random());
      setCurrentColors(shuffled);
      setCycle(prev => prev + 1);
    }, 5000);
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
            y: [0, -3, 0],
            scale: [1, 1.02, 1],
            opacity: [1, 0.8, 1],
            filter: ["blur(0px)", "blur(3px)", "blur(0px)"],
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
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
