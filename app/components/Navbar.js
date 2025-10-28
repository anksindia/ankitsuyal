"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { GiSkills } from "react-icons/gi";
// import { SiReactos } from "react-icons/si";
import { GoCodeOfConduct } from "react-icons/go";

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
    if (shrink) {
      gsap.to(menuRef.current, { width: "55vw", duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(menuRef.current, { width: "80vw", duration: 0.3, ease: "power2.out" });
    }
  }, [shrink]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 h-screen w-2/4 bg-gradient-to-br bg-black/50 backdrop-blur-sm p-6 z-[999] md:hidden flex flex-col items-center justify-center space-y-8 shadow-2xl"
          >
            {/* Close button inside the mobile menu */}
            <button
              aria-label="close-menu-btn"
              type="button"
              className="absolute top-6 right-6 text-white hover:text-gray-300 active:scale-90 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <ul className="flex flex-col items-center gap-6 text-white text-md w-full">
              {[
                { href: "/skills", label: "Skills", icon: <GiSkills size={24} /> },
                // { href: "/projects", label: "Projects", icon: <SiReactos size={24} /> },
                { href: "/work", label: "Work", icon: <GoCodeOfConduct size={24} /> },
                { href: "/contact", label: "Contact", icon: <FaEnvelope size={22} /> },
              ].map(({ href, label, icon }) => (
                <motion.li
                  key={label}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full"
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center border-amber-50 border-2 gap-4 px-4 py-1 bg-black rounded-full transition-all duration-200 hover:shadow-lg w-fit"
                  >
                    {icon}
                    <span>{label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-[999] transition-all duration-300 ease-in-out
          ${shrink
            ? "w-[55vw] py-1 bg-black/20 backdrop-blur-lg border border-black/20 shadow-md"
            : "w-[80vw] py-4 bg-transparent"}
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
              // { label: "Projects", path: "/projects" },
              { label: "Work", path: "/work" },
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

          {/* Mobile Menu Button (only shows when menu is closed) */}
          {!menuOpen && (
            <button
              aria-label="menu-btn"
              type="button"
              className="md:hidden text-white active:scale-90 transition-all"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={30} />
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
