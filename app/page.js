"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./components/ui/HoverBorderGradient";
import Orb from "./components/ui/Orb";
import { GlowingCard } from "./components/ui/GlowingCard";
import { Code, Brain, Gamepad2 } from "lucide-react";
import { PinContainer } from "./components/ui/PinContainer";
import ColourfulText from "./components/ui/ColourfulText";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const floatingCircles = [
    { size: 80, top: "10%", left: "20%" },
    { size: 60, top: "40%", left: "75%" },
    { size: 100, top: "65%", left: "15%" },
    { size: 70, top: "30%", left: "50%" },
    { size: 90, top: "85%", left: "60%" },
    { size: 50, top: "20%", left: "80%" },
  ];

  if (!isMounted) return null;

  return (
    <section className="relative w-screen h-screen text-white flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-[#000000] via-[#1A2560] to-[#000000]">
      {/* Orb background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center gap-10 w-full max-w-screen-sm text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          tabIndex={0}
          aria-label="Hero headline: Hello World! I'm Ankit Suyal"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-gray-200 via-blue-200 to-red-200 bg-clip-text text-transparent animate-text-glow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Hello World!{" "}
          <br className="hidden sm:block" />
          I&apos;m
          <br />
          Ankit Suyal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-md px-2"
        >
          Developing scalable web applications and exploring Android development with intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HoverBorderGradient as="a" href="/contact">
            Let’s Connect
          </HoverBorderGradient>
        </motion.div>
      </div>

      {/* Floating circles */}
      {floatingCircles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/10 pointer-events-none"
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.left,
            top: circle.top,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, Math.random() * 40 - 20],
            opacity: [0, 0.12, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden flex flex-col flex-wrap" style={{ maxWidth: "100vw" }}>
      <HeroSection />

      <div className="relative z-10 bg-black pb-24 px-4 sm:px-6 lg:px-8 overflow-visible">
        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl space-y-20">
          {/* Section Title */}
          <div className="text-center mx-auto max-w-2xl px-2 sm:px-4">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white leading-snug"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              A little <ColourfulText text="about me" />
            </motion.h2>
          </div>

          {/* Glowing Cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0">
              <GlowingCard
                title="Software Engineer"
                text="A Full Stack Engineer passionate about building efficient, scalable, and real-world software solutions."
                icon={<Code className="w-5 h-5 text-yellow-400" />}
                color="#FACC15"
              />
              <GlowingCard
                title="AI & Android Explorer"
                text="I’m exploring Android (Java/Kotlin), strengthening DSA & OOP, diving into AI/ML basics, while pursuing my MCA."
                icon={<Brain className="w-5 h-5 text-emerald-400" />}
                color="#10b981"
              />
              <GlowingCard
                title="Curious Gamer & Learner"
                text="When not coding or building systems, I’m gaming or diving into new tech to stay sharp and inspired."
                icon={<Gamepad2 className="w-5 h-5 text-blue-400" />}
                color="#60a5fa"
              />
            </div>
          </div>

          {/* Location Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-2 sm:px-0">
            <motion.div
              className="md:col-span-2 text-white flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold">Where I&apos;m From</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Born in the scenic hills of Almora, Uttarakhand. A place that keeps me grounded while <br />
                I build for the future.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <PinContainer
                title="Almora, Uttarakhand"
                href="https://www.google.com/maps/place/Almora,+Uttarakhand"
                imageSrc="/assets/Almoramap.png"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
