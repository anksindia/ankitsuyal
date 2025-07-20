"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export const GlowingCard = ({ icon, title, color = "#22d3ee", text }) => {
  const cardRef = useRef(null);
  const iconInnerRef = useRef(null);
  const glowAnimRef = useRef(null);
  const iconAnimRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;

    // Create animation once and pause it
    glowAnimRef.current = gsap.to(el, {
      backgroundColor: color + "10",
      boxShadow: `inset 0 0 60px ${color}`,
      duration: 0.6,
      ease: "power2.out",
      paused: true,
    });

    iconAnimRef.current = gsap.to(iconInnerRef.current, {
      color: color,
      fill: color,
      stroke: color,
      duration: 0.4,
      ease: "power2.out",
      paused: true,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsInView(visible);

        if (visible && !isHovered) {
          glowAnimRef.current?.play();
          iconAnimRef.current?.play();
        } else {
          glowAnimRef.current?.reverse();
          iconAnimRef.current?.reverse();
        }
      },
      { threshold: 0.5 }
    );

    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [color, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(cardRef.current, {
      backgroundColor: "#000000",
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    if (isInView) {
      glowAnimRef.current?.play();
      iconAnimRef.current?.play();
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-80 h-60 bg-black border border-gray-700 rounded-2xl p-5 text-white flex flex-col justify-between overflow-hidden transition-all duration-500"
    >
      {/* Icon */}
      <div className="absolute top-4 left-4 p-2 rounded-md bg-white/10">
        <div ref={iconInnerRef} className="text-white">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-end">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-neutral-300 leading-snug">{text}</p>
      </div>
    </div>
  );
};
