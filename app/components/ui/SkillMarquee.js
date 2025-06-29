"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useEffect, useRef, useState } from "react";
import { LaptopMinimal } from "lucide-react"; 
import gsap from "gsap";
import ColourfulText from "./ColourfulText";

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

    // Modern text animation for "My Skills"
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          delay: 0.5
        }
      );

      // Add subtle continuous gradient animation
      gsap.to(titleRef.current, {
        backgroundPosition: "100% 50%",
        duration: 8,
        ease: "none",
        repeat: -1
      });
    }
  }, []);

  return (
   <div className="relative overflow-hidden bg-gray-950 text-white min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] flex items-center justify-center">

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#000101] to-transparent z-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000101] to-transparent z-30 pointer-events-none" />

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
      </div>

      <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black/40" />

      <div ref={headingContainerRef} className="relative z-30 text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide flex items-center justify-center gap-2">
          <span className="w-8 h-8 text-transparent bg-gradient-to-r from-gray-700 via-gray-600 to-gray-400 bg-clip-text">
            <LaptopMinimal className="text-gray-200 w-8 h-8" />
          </span>

          <span
            ref={titleRef}
            className="inline-block text-white  bg-clip-text  bg-[length:200%_100%]"
          >
           PROJECTS
          </span>
        </h2>

        <p
          ref={subtextRef}
          className="mt-3 text-sm sm:text-base bg-gradient-to-r from-slate-300 via-gray-400 to-gray-100 bg-clip-text text-transparent opacity-90 tracking-wide"
        >
          {typedText}
        </p>
      </div>
    </div>
  );
}