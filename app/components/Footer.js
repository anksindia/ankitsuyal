"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://x.com/AnkitSdotcom/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
      >
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-[#020718] pt-4"
    >
      {/* Simulated top border  */}
      <div className="w-full">
        <div className="mx-[10vw] h-px bg-gray-700" />
      </div>

      {/* Footer Content  */}
      <div className="w-full px-[12vw] py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        {/* Left: Name */}
        <div className="font-medium tracking-wide text-center md:text-left">
          © {year} Ankit Suyal
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-5">
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
