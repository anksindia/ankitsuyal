"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaPlay,
  FaPause,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const MAX_DESC_LENGTH = 160;

const ProjectCard = ({
  title,
  description,
  tech = [],
  images = [],
  sourceCode,
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const intervalRef = useRef(null);
  const cardRef = useRef(null);

  /* -------------------- CLIENT CHECK -------------------- */
  useEffect(() => setIsClient(true), []);

  /* -------------------- GSAP ANIMATION -------------------- */
  useEffect(() => {
    if (!cardRef.current) return;
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
      },
    });
  }, []);

  /* -------------------- AUTOPLAY -------------------- */
  useEffect(() => {
    if (autoPlay && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoPlay, images]);

  if (!isClient) return null;

  const isLongDesc = description.length > MAX_DESC_LENGTH;
  const shortDesc = isLongDesc
    ? description.slice(0, MAX_DESC_LENGTH) + "..."
    : description;

  const nextImage = () =>
    setCurrentImg((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* ================= FULLSCREEN IMAGE ================= */}
      {fullscreen && (
        <div
          onClick={() => setFullscreen(false)}
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
        >
          <Image
            src={images[currentImg]}
            alt="fullscreen"
            width={1200}
            height={800}
            className="max-w-[92vw] max-h-[92vh] object-contain rounded-xl"
          />
          <span className="absolute top-4 text-xs text-white/60">
            Click anywhere to close
          </span>
        </div>
      )}

      {/* ================= CARD ================= */}
      <motion.div
        ref={cardRef}
        whileHover={{ scale: 1.01 }}
        className="
          bg-gradient-to-br from-[#0b0b0b] to-[#111]
          border border-white/10
          rounded-2xl
          p-4 sm:p-5
          w-full max-w-[760px]
          flex flex-col md:flex-row
          gap-4
          shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
        "
      >
        {/* ================= IMAGE SECTION ================= */}
        <div className="relative group w-full md:w-[42%] aspect-video rounded-xl overflow-hidden">
          <Image
            src={images[currentImg]}
            fill
            alt={`Slide ${currentImg + 1}`}
            className="object-cover cursor-pointer transition-transform duration-500 group-hover:scale-[1.03]"
            onClick={() => setFullscreen(true)}
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />

          {/* navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="icon-btn absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
              >
                <FaChevronLeft size={14} />
              </button>

              <button
                onClick={nextImage}
                className="icon-btn absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
              >
                <FaChevronRight size={14} />
              </button>

              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="icon-btn absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100"
              >
                {autoPlay ? <FaPause size={12} /> : <FaPlay size={12} />}
              </button>
            </>
          )}
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
            {title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            {showMore || !isLongDesc ? description : shortDesc}
            {isLongDesc && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-blue-400 ml-1 text-xs hover:underline"
              >
                {showMore ? "Show less" : "Show more"}
              </button>
            )}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, i) => (
              <span
                key={i}
                className="bg-white/5 text-gray-300 px-3 py-1 text-[11px] rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* ================= CTA ================= */}
          <div className="mt-auto">
            {sourceCode ? (
              <a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
              >
                <FaGithub /> View Source
              </a>
            ) : (
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <FaGithub /> Private Repository
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
