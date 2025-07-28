"use client";
import React from "react";
import { GlowingCard } from "./ui/GlowingCard";
import { Code, Brain, Gamepad2 } from "lucide-react";
import { PinContainer } from "./ui/PinContainer";
import ColourfulText from "./ui/ColourfulText";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
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
        title="MERN Developer"
        text="I’m currently sharpening my skills as a full stack developer, working extensively with the MERN Stack to build real-world applications and solve meaningful problems."
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
          Born in the scenic hills of Almora, Uttarakhand. A place that keeps me grounded while <br />I build for the future.
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

  );
};

export default AboutSection;
