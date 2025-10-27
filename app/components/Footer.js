"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { SiReactos } from "react-icons/si";
import { GoCodeOfConduct } from "react-icons/go";

// === Social Links ===
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

// === Premium Gradient Colors ===
const gradients = [
  "from-[#00D9F0] to-[#8EC6F8]",
  "from-[#FF008C] to-[#9D3DD5]",
  "from-[#FEC426] to-[#FF4D41]",
  "from-[#A855F7] to-[#EC4899]",
];

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  // === Stepper setup ===
  const steps = [
    {
      label: "Skills",
      href: "/skills",
      icon: <GiSkills className="text-xl" />,
    },
    // {
    //   label: "Projects",
    //   href: "/projects",
    //   icon: <SiReactos className="text-xl" />,
    // },
    {
      label: "Work",
      href: "/work",
      icon: <GoCodeOfConduct className="text-xl" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <FaEnvelope className="text-xl" />,
    },
  ];

  const stepsWithGradients = steps.map((step, index) => ({
    ...step,
    gradient: gradients[index] || "from-gray-400 to-gray-600",
  }));

  const currentIndex = steps.findIndex((step) => step.href === pathname);
  const isHomePage = pathname === "/";

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-black pt-12 pb-6"
    >
      {/* Stepper Progress UI */}
      <div className="w-full text-center mb-10 flex flex-col items-center gap-6">
        <div className="flex items-center justify-center relative w-fit px-[6vw]">
          {stepsWithGradients.map((step, index) => {
            const isActive = index === currentIndex;
            const isCompleted = index < currentIndex;

            return (
              <React.Fragment key={step.href}>
                <Link
                  href={step.href}
                  className="flex flex-col items-center z-10 transition-transform duration-300 ease-in-out group"
                >
                  <motion.div
                    className={`w-12 h-12 flex items-center justify-center rounded-full border-2 relative overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive || isCompleted
                        ? "border-transparent text-white"
                        : "border-gray-700 text-gray-500"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${
                        step.gradient
                      } transition-opacity duration-500 ${
                        isActive || isCompleted
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 rounded-full bg-black/60 transition-opacity duration-500 ${
                        isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                      }`}
                    />
                    <span className="relative z-10">{step.icon}</span>
                  </motion.div>
                  <span
                    className={`mt-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {step.label}
                  </span>
                </Link>
                {index < steps.length - 1 && (
                  <motion.div
                    className="flex-1 h-0.5 bg-gray-800 mx-4 relative"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-700 to-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isCompleted || (isActive && !isHomePage) ? 1 : 0 }}
                      style={{ originX: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-[6vw] h-px bg-gray-700" />

      {/* Footer Base */}
      <div className="w-full px-[6vw] py-4 flex flex-wrap items-center justify-between text-sm text-gray-400 gap-y-2">
        <div className="font-medium tracking-wide">© {year} Ankit Suyal</div>

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