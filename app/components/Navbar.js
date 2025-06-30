"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2, Briefcase } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { LaptopMinimal } from "lucide-react"; 
import gsap from "gsap";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out
        ${shrink ? "w-[55vw] py-1 bg-black/20 backdrop-blur-lg border border-black/20 shadow-md" : "w-[80vw] py-4 bg-transparent"}
        px-6 md:px-10 rounded-full`}
    >
      <div className="flex justify-between items-center">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center text-white font-bold text-xl">
          <Image src="/logo.svg" alt="Ankit" width={32} height={32} priority />
          {!shrink && (
            <span className="hidden sm:inline-block text-white text-xl font-bold">nkit</span>
          )}
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium text-sm">
          {[
            { label: "Skills", path: "/skills" },
            { label: "Projects", path: "/projects" },
            { label: "Experience", path: "/experience" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`transition hover:text-white/70 ${
                  pathname === item.path ? "font-bold underline underline-offset-4" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 text-white text-sm px-4 py-2 rounded-full hover:opacity-90 active:scale-95 transition-all"
        >
          <FaEnvelope size={16} />
          {!shrink && <span className="hidden sm:inline">Contact</span>}
        </Link>

        {/* Mobile Menu Button */}
        <button
          aria-label="menu-btn"
          type="button"
          className="md:hidden text-white active:scale-90 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full mt-4 left-0 w-full bg-black backdrop-blur-md rounded-xl p-6 md:hidden"
        >
          <ul className="flex flex-col gap-4 text-white">
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3">
              <Code2 size={18} />
              <Link href="/skills" onClick={() => setMenuOpen(false)}>
                Skills
              </Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3">
              <LaptopMinimal size={18} />
              <Link href="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3">
              <Briefcase size={18} />
              <Link href="/experience" onClick={() => setMenuOpen(false)}>
                Experience
              </Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3">
              <FaEnvelope size={16} />
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
