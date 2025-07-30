"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import TrueFocus from "@/components/TrueFoucs";

const workPage = () => {
  const screenshots = ["screenshot", "screenshot2", "screenshot3", "screenshot4"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, screenshots.length]);

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-16 py-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto pt-20 md:pt-28"
      >
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-5xl font-extrabold  mb-4"><TrueFocus
            sentence="Software Work"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          /></h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            Here&apos;s a brief overview of my recent work, freelance experience, and academic journey.
          </p>
        </div>

        {/* Website Manager */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white">Website Manager</h2>
          <p className="text-gray-400">Spring Dales School, Almora · Dec 2024 – Present</p>
          <a
            href="https://springdalesschoolalmora.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-500 hover:underline text-sm mt-1"
          >
            springdalesschoolalmora.com <FiExternalLink />
          </a>
          <p className="mt-3 text-gray-300">
            Led the full-stack development and management of the school&apos;s official website, with CBSE compliance,
            SEO optimization, mobile-first design, and ongoing event/content updates.
          </p>
        </div>

        {/* Slideshow */}
        <div
          className="relative w-full h-64 sm:h-80 md:h-[28rem] rounded-lg overflow-hidden border border-gray-700 mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {screenshots.map((img, index) => (
            <Image
              key={img}
              src={`/assets/${img}.png`}
              alt={`Screenshot ${index + 1}`}
              width={1200}
              height={800}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
        </div>

        {/* Freelance Developer */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white">Freelance Web Developer</h2>
          <p className="text-gray-400">Remote · 2023 – Present</p>
          <p className="mt-3 text-gray-300">
            Worked with clients to deliver modern, responsive websites and landing pages using Next.js, Tailwind CSS,
            Framer Motion, and more. Focused on performance, SEO, and scalable design systems. Built portfolios,
            product sites, and admin panels tailored to client needs.
          </p>
        </div>

        {/* MCA Student */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white">MCA (Master of Computer Applications)</h2>
          <p className="text-gray-400">2024 – Ongoing</p>
          <p className="mt-3 text-gray-300">
            Currently pursuing an MCA with a focus on web development, software engineering, cloud technologies, and intelligent systems. Actively building personal and academic projects alongside freelance work, while exploring modern tools like Three.js for 3D/webGL works and developing real-time applications using cutting-edge tech stacks. Also expanding into Android development using Java/Kotlin and gaining work in intelligent software systems to build smarter, scalable solutions.
          </p>
        </div>

        {/* Google Business Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-xl"
        >
          <Image
            src="/assets/google-my-business-logo.svg"
            alt="Google My Business Logo"
            width={200}
            height={200}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-400">Google Business Profile</h3>
          <p className="text-gray-300 mt-2 max-w-xl">
            Optimized and maintained the school’s Google Business listing — increasing search visibility and
            engagement through timely posts, reviews management, and photo uploads.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default workPage;
