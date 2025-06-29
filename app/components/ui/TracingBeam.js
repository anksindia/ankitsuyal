"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";

const TracingBeam = ({ children, className = "" }) => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y1Raw = useTransform(scrollYProgress, [0, 1], [50, svgHeight]);
  const y2Raw = useTransform(scrollYProgress, [0, 1], [150, svgHeight - 100]);

  // Values for gradient (not motion value)
  const [y1, setY1] = useState(50);
  const [y2, setY2] = useState(150);

  useMotionValueEvent(y1Raw, "change", (latest) => {
    setY1(latest);
  });
  useMotionValueEvent(y2Raw, "change", (latest) => {
    setY2(latest);
  });

  // Dot color
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollActive(latest > 0.01);
  });

  // Resize observer for height
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <motion.div ref={ref} className={`relative mx-auto w-full max-w-4xl ${className}`}>
      <div className="absolute top-3 -left-4 md:-left-20 z-10">
        {/* Dot */}
        <motion.div
          className="border-neutral-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
          animate={{
            boxShadow: scrollActive
              ? "none"
              : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <motion.div
            className="h-2 w-2 rounded-full border"
            animate={{
              backgroundColor: scrollActive ? "white" : "#10b981",
              borderColor: scrollActive ? "white" : "#059669",
            }}
          />
        </motion.div>

        {/* Beam */}
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          />
          <path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
          />
          <defs>
            <linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

export default TracingBeam;
