"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    if (autoPlay && images.length > 1) {
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
      {/* Fullscreen Image View */}
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
          <div className="absolute top-4 text-sm text-white/60">Click anywhere to close</div>
        </div>
      )}

      {/* Responsive Card */}
      <motion.div
        ref={cardRef}
        className="bg-black border border-gray-700 p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row 
                   h-auto sm:h-[270px] w-[90vw] sm:w-[700px] max-w-[700px] transition-transform hover:scale-[1.01]"
      >
        {/* Image Section */}
        <div className="relative w-full sm:w-[45%] h-44 sm:h-full rounded-xl overflow-hidden group mb-4 sm:mb-0 sm:mr-4">
          <Image
            src={images[currentImg]}
            width={400}
            height={300}
            alt={`Slide ${currentImg + 1}`}
            className="w-full h-full object-cover cursor-pointer rounded-xl"
            onClick={() => setFullscreen(true)}
          />

          {/* Prev/Next Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 hover:bg-black text-yellow-500 p-2 rounded-full invert transition z-10"
            title="Previous"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-black text-blue-500 p-2 rounded-full invert transition z-10"
            title="Next"
          >
            <FaChevronRight size={14} />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setAutoPlay((prev) => !prev)}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 invert text-red-500 p-2 rounded-full hover:bg-black transition z-10"
            title={autoPlay ? "Pause Slideshow" : "Play Slideshow"}
          >
            {autoPlay ? <FaPause size={14} /> : <FaPlay size={14} />}
          </button>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-grow overflow-auto pr-1 custom-scrollbar max-h-[180px] sm:max-h-full">
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

            <div className="flex flex-wrap gap-2 mb-2">
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

          {/* Source Code Button */}
          <div className="flex justify-end items-center pt-2">
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
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
