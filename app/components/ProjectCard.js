'use client';

import React, { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const MAX_DESC_LENGTH = 160;

const ProjectCard = ({ title, description, tech, images = [], sourceCode }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const intervalRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
      },
    });
  }, []);

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoPlay, images]);

  const nextImage = () => setCurrentImg((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  const handleMissingLink = () => alert("Sorry, source code link is not available");

  if (!isClient) return null;

  const isLongDesc = description.length > MAX_DESC_LENGTH;
  const shortDesc = isLongDesc ? description.slice(0, MAX_DESC_LENGTH) + "..." : description;

  return (
    <>
      {fullscreen && (
        <div
          onClick={() => setFullscreen(false)}
          className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center"
        >
          <Image
            src={images[currentImg]}
            width={400}
            height={300}
            alt="fullscreen"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
          />
        </div>
      )}

      <motion.div
        ref={cardRef}
        className="bg-black border border-gray-700 p-5 rounded-2xl shadow-xl flex flex-col justify-between 
                   h-[500px] w-[90vw] sm:w-[330px] max-w-[330px] relative"
      >
        {/* Image Slider */}
        <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 group">
          <Image
            src={images[currentImg]}
            width={400}
            height={300}
            alt={`Slide ${currentImg + 1}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setFullscreen(true)}
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full hover:bg-white/40 transition z-10"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full hover:bg-white/40 transition z-10"
          >
            ›
          </button>
        </div>

        {/* Scrollable Content with custom scrollbar */}
        <div className="flex-grow overflow-auto max-h-[180px] pr-1 custom-scrollbar">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-gray-300 mb-2">
            {showMore || !isLongDesc ? description : shortDesc}
            {isLongDesc && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-blue-500 text-xs ml-1 underline"
              >
                {showMore ? "Show less" : "Show more"}
              </button>
            )}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {tech.map((t, i) => (
              <span
                key={i}
                className="bg-gray-800 text-gray-100 px-3 py-1 text-xs rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-between items-center pt-3">
          <button
            onClick={() => setAutoPlay((prev) => !prev)}
            className={`text-xs px-3 py-1 rounded-full ${autoPlay ? "bg-blue-800 text-white" : "bg-gray-700 text-gray-300"
              }`}
          >
            {autoPlay ? "Slideshow" : "Paused"}
          </button>

          {sourceCode ? (
            <a
              href={sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 flex items-center gap-1 text-sm"
            >
              <FaGithub /> Source Code
            </a>
          ) : (
            <button
              onClick={handleMissingLink}
              className="text-red-400 text-sm hover:underline flex items-center gap-1"
            >
              <FaGithub /> No Source
            </button>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
