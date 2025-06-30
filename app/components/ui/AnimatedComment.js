"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const AnimatedComment = ({ comments, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % comments.length);
  }, [comments.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + comments.length) % comments.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Image Logo with circular glass blur */}
        <div className="relative h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40">
          <AnimatePresence mode="wait">
            {comments.map((comment, index) => (
              <motion.div
                key={comment.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0,
                  scale: isActive(index) ? 1 : 0.95,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 10 : 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative h-full w-full rounded-full overflow-hidden backdrop-blur-xl border border-white/10 shadow-inner shadow-black/30">
                  <Image
                    src={comment.src}
                    alt="blur"
                    fill
                    className="absolute object-cover blur-lg scale-125 opacity-20 z-0"
                  />
                  <Image
                    src={comment.src}
                    alt={comment.name}
                    width={200}
                    height={200}
                    className="relative z-10 object-contain p-4"
                    draggable={false}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text Info */}
        <motion.div
          key={active}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="max-w-xl"
        >
          <h3 className="text-xl font-semibold text-white">{comments[active].name}</h3>
          <p className="text-sm text-gray-400 mt-1">{comments[active].category}</p>
          <motion.p className="mt-4 text-sm text-gray-300 leading-relaxed px-4 sm:px-6">
            {comments[active].about.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ filter: "blur(8px)", opacity: 0, y: 3 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: 0.015 * index,
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Arrows */}
        <div className="flex gap-4 pt-2">
          <button
            onClick={handlePrev}
            className="group flex h-8 w-8 items-center justify-center rounded-full bg-gray-100/10 dark:bg-white/10 hover:bg-white/20 transition"
          >
            <ArrowLeft className="h-4 w-4 text-white group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={handleNext}
            className="group flex h-8 w-8 items-center justify-center rounded-full bg-gray-100/10 dark:bg-white/10 hover:bg-white/20 transition"
          >
            <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedComment;
