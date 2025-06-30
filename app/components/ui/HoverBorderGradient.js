"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const movingMap = {
  TOP: "radial-gradient(20.7% 50% at 50% 0%, #ffffffcc 0%, transparent 100%)",
  LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #ffffffcc 0%, transparent 100%)",
  BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #ffffffcc 0%, transparent 100%)",
  RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, #ffffffcc 0%, transparent 100%)",
};

const highlight =
  "radial-gradient(90% 200% at 50% 50%, #3b82f6 0%, transparent 100%)";
const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];

export function HoverBorderGradient({
  children,
  containerClassName = "",
  className = "",
  as: Tag = "button",
  href,
  duration = 1,
  clockwise = true,
  isLoading = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = useCallback(
    (dir) => {
      const index = directions.indexOf(dir);
      return clockwise
        ? directions[(index - 1 + directions.length) % directions.length]
        : directions[(index + 1) % directions.length];
    },
    [clockwise]
  );

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, rotateDirection, duration]);

  const content = (
    <div
      className={cn(
        "z-10 bg-black/80 text-white px-5 py-2 text-sm font-medium rounded-full backdrop-blur-md flex items-center justify-center gap-2",
        className,
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        children
      )}
    </div>
  );

  const buttonStyles = cn(
    "relative flex rounded-full border border-white/10 bg-black/30 dark:bg-white/10 " +
      "hover:bg-black/20 dark:hover:bg-white/20 transition duration-500 ease-out " +
      "items-center justify-center overflow-visible p-px shadow-[0_0_10px_rgba(255,255,255,0.03)]",
    fullWidth && "w-full",
    containerClassName
  );

  const animatedGlow = (
    <motion.div
      className="absolute inset-0 z-0 rounded-full pointer-events-none"
      style={{ filter: "blur(3px)" }}
      initial={{ background: movingMap[direction] }}
      animate={{
        background: hovered
          ? [movingMap[direction], highlight]
          : movingMap[direction],
      }}
      transition={{ ease: "easeInOut", duration }}
    />
  );

  const dimLayer = (
    <div className="absolute inset-0 rounded-full bg-black/40 dark:bg-white/10 z-[0] pointer-events-none" />
  );

  const core = (
    <>
      {content}
      {animatedGlow}
      {dimLayer}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={buttonStyles}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      >
        {core}
      </Link>
    );
  }

  return (
    <Tag
      type={type}
      disabled={disabled || isLoading}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={buttonStyles}
      {...props}
    >
      {core}
    </Tag>
  );
}
