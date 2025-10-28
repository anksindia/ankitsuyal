"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

const TracingBeam = ({ children, className = "" }) => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(1000);
  const [scrollActive, setScrollActive] = useState(false);

  // Scroll progress for full tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    // makes 0 = start of section, 1 = bottom of section visible
    offset: ["start start", "end end"],
  });

  // Make it cinematic-smooth
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.8,
  });

  // Map to full height (covers 100%)
  const y1Base = useTransform(smoothScroll, [0, 1], [0, svgHeight * 0.95]);
  const y2Base = useTransform(smoothScroll, [0, 1], [150, svgHeight]);

  // Smooth final values
  const y1Smooth = useSpring(y1Base, { stiffness: 80, damping: 30 });
  const y2Smooth = useSpring(y2Base, { stiffness: 80, damping: 30 });

  const [y1, setY1] = useState(0);
  const [y2, setY2] = useState(150);

  useMotionValueEvent(y1Smooth, "change", (v) => setY1(v));
  useMotionValueEvent(y2Smooth, "change", (v) => setY2(v));

  // Dot animation
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollActive(latest > 0.01 && latest < 0.99);
  });

  // Resize observer for dynamic height
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    });
    if (contentRef.current) resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`relative mx-auto w-full max-w-4xl ${className}`}
    >
      {/* === LEFT SIDE BEAM + DOT === */}
      <div className="absolute top-3 -left-4 md:-left-20 z-10">
        {/* Dot */}
        <motion.div
          className="border-neutral-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
          animate={{
            boxShadow: scrollActive
              ? "rgba(0,0,0,0.25) 0px 2px 6px"
              : "rgba(0,0,0,0.1) 0px 1px 3px",
          }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          <motion.div
            className="h-2 w-2 rounded-full border"
            animate={{
              backgroundColor: scrollActive ? "#10b981" : "white",
              borderColor: scrollActive ? "#059669" : "white",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* === Beam SVG === */}
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          {/* Static background line */}
          <path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          />

          {/* Animated gradient beam */}
          <path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.5"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="1" />
              <stop offset="0.3" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* === CHILDREN CONTENT === */}
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

export default TracingBeam;
