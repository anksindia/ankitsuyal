"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TfiLink, TfiUnlink } from "react-icons/tfi";
import { GiSkills } from "react-icons/gi";
import { SiReactos } from "react-icons/si";
import { GoCodeOfConduct } from "react-icons/go";

// Drop positions
const dropOrigins = ["10%", "57%", "85%"];

// Social icons
const socialLinks = [
  {
    href: "https://x.com/AnkitSdotcom/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    label: "Twitter",
  },
  {
    href: "https://github.com/anksindia",
    icon: <FaGithub className="h-4 w-4" />,
    label: "GitHub",
  },
  {
    href: "mailto:ankitsuyal.in@gmail.com",
    icon: <FaEnvelope className="h-4 w-4" />,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/ankit-suyal-b37789344/",
    icon: <FaLinkedin className="h-4 w-4" />,
    label: "LinkedIn",
  },
];

// === INLINE FROZEN BUTTON ===
const FrozenButton = ({ text = "Click Me", onClick, className }) => {
  const pathname = usePathname();

  const [activeDrop, setActiveDrop] = useState(null);
  const [gradientIndex, setGradientIndex] = useState(0);

  // Gradient color sets: { background, drop color }
  const gradients = [
    {
      background: "linear-gradient(90deg, #00D9F0 0%, #8EC6F8 100%)",
      drop: "linear-gradient(180deg, #00D9F0, #8EC6F8)",
    },
    {
      background: "linear-gradient(90deg, #FF008C 0%, #9D3DD5 100%)",
      drop: "linear-gradient(180deg, #FF008C, #9D3DD5)",
    },
    {
      background: "linear-gradient(90deg, #FEC426 0%, #FF4D41 100%)",
      drop: "linear-gradient(180deg, #FEC426, #FF4D41)",
    },
  ];


  const frozenDrips = [
    { left: "10%", scaleY: 0.75, height: 24 },
    { left: "57%", scaleY: 0.8, height: 14 },
    { left: "85%", scaleY: 0.9, height: 18 },
  ];

  const pageIcons = {
    "/": <GiSkills className="text-[17px]" />,
    "/skills": <SiReactos className="text-[17px]" />,
    "/projects": <GoCodeOfConduct className="text-[17px]" />,
    "/work": <FaEnvelope className="text-[17px]" />,
    // "/contact": <TfiUnlink className="text-[17px]" />,
  };

  const icon = pageIcons[pathname] || <TfiLink className="text-[17px]" />;

  useEffect(() => {
    const dripInterval = setInterval(() => {
      const random = Math.floor(Math.random() * dropOrigins.length);
      setActiveDrop(dropOrigins[random]);
      setTimeout(() => setActiveDrop(null), 1600);
    }, 2400);

    const gradientInterval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 4000);

    return () => {
      clearInterval(dripInterval);
      clearInterval(gradientInterval);
    };
  }, []);

  const currentGradient = gradients[gradientIndex];

  return (
    <div className="relative inline-block">
      {/* Background transition */}
      <div className="absolute inset-0 z-0 rounded-md overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0 rounded-md overflow-hidden pointer-events-none">
          {gradients.map((gradient, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              style={{
                backgroundImage: gradient.background,
                opacity: index === gradientIndex ? 1 : 0,
              }}
              animate={{
                opacity: index === gradientIndex ? 1 : 0,
                transition: {
                  duration: 1.8, // slower = smoother
                  ease: [0.4, 0, 0.2, 1], // custom easing (ease-in-out)
                },
              }}
            />
          ))}
        </div>

      </div>

      <button
        onClick={onClick}
        className={`group relative z-10 flex items-center gap-2 rounded-md px-5 py-2 font-semibold text-white  shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm text-sm ${className}`}
        style={{ backgroundColor: "transparent" }}
      >
        <span>{text}</span>
        <span className="relative w-5 h-5 inline-block">{icon}</span>

        {/* Gradient drips */}
        {frozenDrips.map((drop, i) => (
          <div
            key={i}
            className="absolute top-[99%] origin-top"
            style={{
              left: drop.left,
              transform: `scaleY(${drop.scaleY}) translateZ(0px)`,
            }}
          >
            <div
              className="w-2 rounded-b-full"
              style={{
                height: `${drop.height}px`,
                backgroundImage: currentGradient.drop,
              }}
            ></div>

            {/* Curved left and right caps */}
            <svg width="6" height="6" viewBox="0 0 6 6" className="absolute left-full top-0">
              <path d="M5.4 0H0V5.4C0 2.4 2.4 0 5.4 0Z" className="fill-white opacity-40" />
            </svg>
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              className="absolute right-full top-0 rotate-90"
            >
              <path d="M5.4 0H0V5.4C0 2.4 2.4 0 5.4 0Z" className="fill-white opacity-40" />
            </svg>
          </div>
        ))}
      </button>

      {/* Falling Drop */}
      {activeDrop && (
        <motion.svg
          key={activeDrop + Date.now()}
          className="absolute z-0"
          style={{ top: "100%", left: `calc(${activeDrop} - 3px)` }}
          width="12"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          initial={{ y: 0, opacity: 1, scale: 1 }}
          animate={{ y: 80, opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          <path
            d="M12 2C12 2 4 10 4 16C4 20.4 7.6 24 12 24C16.4 24 20 20.4 20 16C20 10 12 2 12 2Z"
            fill="url(#dropGradient)"
          />
          <defs>
            <linearGradient id="dropGradient" x1="0" y1="0" x2="0" y2="1">
              {(() => {
                const dropColors = currentGradient.drop.match(/#(?:[0-9a-fA-F]{3}){1,2}/g) || ["#ffffff", "#ffffff"];
                return (
                  <>
                    <stop offset="0%" stopColor={dropColors[0]} />
                    <stop offset="100%" stopColor={dropColors[1]} />
                  </>
                );
              })()}

            </linearGradient>
          </defs>
        </motion.svg>
      )}
    </div>
  );
};

// === FOOTER ===
export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const ctaMap = {
    "/": { label: "Explore Skills", href: "/skills" },
    "/skills": { label: "View Projects", href: "/projects" },
    "/projects": { label: "See Work Experience", href: "/work" },
    "/work": { label: "Get in Touch", href: "/contact" },
  };

  const cta = ctaMap[pathname];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-black pt-6"
    >
      {/* CTA */}
      {cta && (
        <div className="w-full text-center mb-3">
          <FrozenButton
            text={cta.label}
            onClick={() => router.push(cta.href)}
            className="mx-auto"
          />
        </div>
      )}

      <div className="mx-[6vw] h-px bg-gray-700" />

      {/* Footer base */}
      <div className="w-full px-[6vw] py-4 flex flex-wrap items-center justify-between text-sm text-gray-400 gap-y-2">
        <div className="font-medium tracking-wide">
          © {year} Ankit Suyal
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item.href}
                target="_blank"
                aria-label={item.label}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item.icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
