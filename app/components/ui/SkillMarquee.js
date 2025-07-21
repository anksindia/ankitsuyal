"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  LaptopMinimal,
  Smartphone,
  TabletSmartphone,
} from "lucide-react";

const skillImages = [
  "/assets/skills/python.svg",
  "/assets/skills/mongodb.svg",
  "/assets/skills/react.svg",
  "/assets/skills/nextjs.svg",
  "/assets/skills/gsap.svg",
  "/assets/skills/nodejs.svg",
  "/assets/skills/express.svg",
  "/assets/skills/graphql.svg",
  "/assets/skills/firebase.svg",
  "/assets/skills/mysql.svg",
  "/assets/skills/postgresql.svg",
  "/assets/skills/git.svg",
  "/assets/skills/github.svg",
  "/assets/skills/gitlab.svg",
  "/assets/skills/aws.svg",
];

const repeatedSkills = [...skillImages, ...skillImages, ...skillImages];

export default function SkillMarquee() {
  const chunks = useMemo(() => {
    const chunkSize = Math.ceil(repeatedSkills.length / 7);
    return Array.from({ length: 7 }, (_, i) =>
      repeatedSkills.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
  }, []);

  const titleRef = useRef(null);
  const subtextRef = useRef(null);
  const headingContainerRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "My Builds";

  const [currentIcon, setCurrentIcon] = useState("mobile");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (headingContainerRef.current) {
      gsap.fromTo(
        headingContainerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          delay: 0.5,
        }
      );
    }
  }, []);

  useEffect(() => {
    const devices = ["mobile", "tablet", "laptop"];
    let index = 0;
    const interval = setInterval(() => {
      setCurrentIcon(devices[index % devices.length]);
      index++;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getColorClass = (segment) => {
    if (currentIcon === "mobile" && segment === "PRO")
      return "text-transparent bg-clip-text bg-gradient-to-r from-[#00D9F0] to-[#8EC6F8]";
    if (currentIcon === "tablet" && segment === "J")
      return "text-transparent bg-clip-text bg-gradient-to-r from-[#FF008C] to-[#9D3DD5]";
    if (currentIcon === "laptop" && segment === "ECTS")
      return "text-transparent bg-clip-text bg-gradient-to-r from-[#FEC426] to-[#FF4D41]";
    return "text-white";
  };

  return (
    <div className="relative overflow-hidden bg-gray-950 text-white min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] flex items-center justify-center">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#000101] to-transparent z-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000101] to-transparent z-30 pointer-events-none" />

      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="flex gap-6"
          style={{
            transform: "rotateX(55deg) rotateZ(-45deg)",
            transformOrigin: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
            width: "250%",
          }}
        >
          {chunks.map((column, i) => (
            <motion.div
              key={i}
              animate={{ y: i % 2 === 0 ? [0, -100, 0] : [0, 100, 0] }}
              transition={{
                duration: i % 2 === 0 ? 20 : 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col gap-6"
            >
              {column.map((src, j) => (
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  key={j + src}
                  className="relative rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={src}
                    alt={`Skill ${j}`}
                    width={240}
                    height={180}
                    className="object-contain bg-white/5 backdrop-blur rounded-md p-2"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />
      </div>

      {/* Title Section */}
      <div ref={headingContainerRef} className="relative z-30 text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide flex items-center justify-center gap-2">
          {/* Icon transition */}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIcon}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8"
            >
              {currentIcon === "mobile" && (
                <Smartphone className="w-8 h-8" color="#00D9F0" />
              )}
              {currentIcon === "tablet" && (
                <TabletSmartphone className="w-8 h-8" color="#FF008C" />
              )}
              {currentIcon === "laptop" && (
                <LaptopMinimal className="w-8 h-8" color="#FEC426" />
              )}
            </motion.span>
          </AnimatePresence>

          {/* Segment colored PROJECTS */}
          <span ref={titleRef} className="inline-flex gap-0.5">
            <span className={getColorClass("PRO")}>PRO</span>
            <span className={getColorClass("J")}>J</span>
            <span className={getColorClass("ECTS")}>ECTS</span>
          </span>
        </h2>

        <p
          ref={subtextRef}
          className="mt-3 text-sm sm:text-base tracking-wide relative"
        >
          {/* Glow behind */}
          <span
            aria-hidden
            className="absolute inset-0 text-white blur-sm opacity-40 z-0 animate-pulse pointer-events-none"
          >
            {typedText}
          </span>

          {/* Actual text with gradient */}
          <span className="relative z-10 bg-gradient-to-r from-slate-300 via-gray-400 to-gray-100 bg-clip-text text-transparent">
            {typedText}
          </span>
        </p>

      </div>
    </div>
  );
}
