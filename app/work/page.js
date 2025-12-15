'use client';


import ProjectCard from "@/components/ProjectCard";
import SkillMarquee from "@/components/ui/SkillMarquee";
import TailwindBackgroundWrapper from '@/components/ui/TailwindBackgroundWrapper';
import React from 'react';
import Image from "next/image";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";


const projects = [
  {
    title: "KisanConnect – Farmer-to-Buyer Platform",
    description:
      "A farmer to buyer marketplace enabling seller registration, product listings, cart functionality, and secure authentication built to promote local produce and support regional communities.",
    tech: ["Next.js", "Tailwind CSS", "React Hook Form", "MongoDB", "NextAuth", "Razorpay", "React Toastify"],
    images: ["/assets/projects/kisanconnet.png", "/assets/projects/kisanconnet1.png", "/assets/projects/kisanconnet2.png", "/assets/projects/kisanconnet3.png"],
    sourceCode: "https://github.com/anksindia/kisanconnect"
  },
  {
    title: "Class2Career – Your Personal Job Tracker",
    description:
      "A beautifully designed application that helps students and job seekers keep track of job applications effortlessly and efficiently.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "React Hot Toast",
      "Node.js",
      "Express.js",
      "MongoDB with Mongoose",
      "React Context API"
    ],
    images: ["/assets/projects/Class2Career.png", "/assets/projects/c2.png", "/assets/projects/Class2Career3.png", "/assets/projects/Class2Career4.png", "/assets/projects/Class2Career5.png"],
    sourceCode: "https://github.com/anksindia/Class2Career-Your-Personal-Job-Tracker"
  }
  ,
  {
    title: "CodeForge AI – AI-Powered Code Review",
    description:
      "An AI-powered code review and chat assistant that allows users to write, review, and discuss their code seamlessly. Features include a live AI chat, interactive editor, and instant feedback for better coding experiences.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "PrismJS",
      "React Markdown",
      "React Simple Code Editor",
      "Node.js",
      "Express.js",
      "@google/generative-ai",
      "Vite"
    ],
    images: [
      "/assets/projects/CodeForge-AI.png",
      "/assets/projects/CodeForge-AI2.png",
      "/assets/projects/CodeForge-AI3.png"
    ],
    sourceCode: "https://github.com/anksindia/CodeForge-AI-Ai-Powered-Code-review"
  },
  {
    title: "Invista – Inventory Management System",
    description:
      "A modern inventory and order management system designed for small to mid-sized businesses. It allows product listing, real-time stock tracking, order placement, and detailed reporting  all through a clean and responsive interface.",
    tech: [
      "Python",
      "Flask",
      "SQLite",
      "SQLAlchemy",
      "HTML",
      "Bootstrap 4",
      "Custom CSS"
    ],
    images: [
      "/assets/projects/invista.png",
      "/assets/projects/invista2.png"
    ],
    sourceCode: "https://github.com/anksindia/invista-inventory-management-system"
  }
  ,
  // {
  //   title: "CTM – Cash Transaction Machine",
  //   description:
  //     "A full-stack ATM simulation web app where users can securely register, manage their profile, and perform real-time banking operations like deposit, withdrawal, and transfers. Designed with a modern, responsive UI and theme switching for a seamless user experience.",
  //   tech: [
  //     "React.js",
  //     "Vite",
  //     "Tailwind CSS",
  //     "DaisyUI",
  //     "Zustand",
  //     "React Router DOM",
  //     "Axios",
  //     "React Hot Toast",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB with Mongoose",
  //     "JWT",
  //     "Cloudinary",
  //     "Multer",
  //     "cookie-parser",
  //     "dotenv",
  //     "vite-plugin-compression"
  //   ],
  //   images: [
  //     "/assets/projects/CTM.png",
  //     "/assets/projects/CTM1.png",
  //     "/assets/projects/CTM2.png",
  //     "/assets/projects/CTM3.png",
  //     "/assets/projects/CTM4.png"
  //   ],
  //   sourceCode: "https://github.com/anksindia/CTM-Cash-Transaction-Machine"
  // },
  // {
  //   title: "Pinterest Clone – MERN Image Sharing App",
  //   description:
  //     "A full-stack Pinterest-style image sharing app where users can upload, save, and manage pins with authentication and a fully responsive UI. Designed to provide a smooth, modern user experience similar to the original platform.",
  //   tech: [
  //     "React.js",
  //     "Vite",
  //     "Tailwind CSS",
  //     "React Router DOM",
  //     "React Icons",
  //     "React Toastify",
  //     "React Hot Toast",
  //     "Axios",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB with Mongoose",
  //     "JWT",
  //     "Cloudinary",
  //     "Multer",
  //     "dotenv",
  //     "cookie-parser",
  //     "compression"
  //   ],
  //   images: [
  //     "/assets/projects/pinterest.png",
  //     "/assets/projects/pinterest2.png",
  //     "/assets/projects/pinterest3.png",
  //     "/assets/projects/pinterest4.png",
  //     "/assets/projects/pinterest5.png"
  //   ],
  //   sourceCode: "https://github.com/anksindia/Pinterest-clone"
  // },
  {
    title: "AgendaFlow – Todo App",
    description:
      "A clean and responsive to-do application to efficiently manage daily tasks with full CRUD support, dark/light theme toggle, and persistent data storage — your minimal and powerful productivity companion.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "LocalStorage"
    ],
    images: [
      "/assets/projects/agendaflow.png",
      "/assets/projects/agendaflow2.png",
      "/assets/projects/agendaflow3.png"
    ],
    sourceCode: "https://github.com/anksindia/AgendaFlow-Todo-app"
  }

];


const Page = () => {

  const [activeImage, setActiveImage] = React.useState(null);


  return (
    <div className="w-full overflow-x-hidden">
      <SkillMarquee />
      <div>
        <TailwindBackgroundWrapper>
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>


          {/* Takshila School Website Project */}
          <div className="mb-10 flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">School Website Project</h2>
              <p className="text-gray-400">Takshila School · Dec 2025</p>

              <a
                href="https://www.takshilaedu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-500 hover:underline text-sm mt-1"
              >
                takshilaedu.in <FiExternalLink />
              </a>

              <p className="mt-3 text-gray-300">
                Designed and developed the official website for Takshila School using Next.js 15,
                featuring fully custom components, dynamic routing, and a modern UI with Tailwind CSS.
                Integrated secure form submissions using Resend API with custom API routes for enquiries
                and contact messages. Implemented SEO optimization, fast loading architecture, and
                mobile-responsive layouts, along with automated sitemap generation and performance
                enhancements for a seamless user experience.

              </p>
            </div>

            {/* Next.js Logo */}
            <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Image
                src="/assets/skills/nextjs.svg"
                alt="Next.js"
                width={180}
                height={180}
                className="w-7 h-7 invert"
              />


            </div>
          </div>


          {/* School Website Project */}
          <div className="mb-10 flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">School Website Project</h2>
              <p className="text-gray-400">Spring Dales School, Almora · Dec 2024</p>
              <a
                href="https://springdalesschoolalmora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-500 hover:underline text-sm mt-1"
              >
                springdalesschoolalmora.com <FiExternalLink />
              </a>
              <p className="mt-3 text-gray-300">
                Developed and managed the school’s official website as a WordPress-based project,
                ensuring CBSE compliance, SEO optimization, and responsive design with regular event
                and content updates.
              </p>
            </div>

            {/* WordPress Logo */}
            <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <Image
                src="/assets/skills/wordpress.svg"
                alt="WordPress"
                width={180}
                height={180}
                className="w-6 h-6"
              />
            </div>
          </div>





          {/* Digital Presence & Local Visibility Section - REDESIGNED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" border-t border-gray-800 pt-10"
          >
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-6">

              {/* Left Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white">
                  Digital Presence & Local Visibility
                </h2>
                <p className="text-gray-400">Google Business Profile · SEO Optimization</p>

                <a
                  href="https://share.google/0Hgpf4rgOH50ADzBR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-500 hover:underline text-sm mt-1"
                >
                  View Live Profile <FiExternalLink />
                </a>

                <div className="mt-4 text-gray-300 space-y-4">
                  <p>
                    Optimized and managed Google Business Profile to improve local search visibility,
                    credibility, and discovery for educational institutions and local businesses.
                  </p>

                  {/* Case Study Highlights - Integrated cleanly */}
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                      <FiMapPin className="text-blue-400" />
                      <span>Case Study: Spring Dales School, Almora</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex gap-2 items-start">
                        <FiCheckCircle className="text-green-500 mt-1 min-w-[16px]" />
                        <span>Optimized categories, description, and media for higher ranking.</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <FiCheckCircle className="text-green-500 mt-1 min-w-[16px]" />
                        <span>
                          Achieved top results for &quot;best school in Almora&quot; related searches.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Logo (Consistent with other sections) */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Image
                    src="/assets/google-my-business-logo.svg"
                    // Make sure this SVG looks good on white, otherwise change bg to white/10
                    alt="GMB"
                    width={35}
                    height={35}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Screenshots - Made Responsive & Readable */}
            <div className="mt-8">
              <h4 className="text-gray-500 text-sm mb-3 uppercase tracking-wider font-semibold">
                Proof of Performance
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {[
                  "/assets/gmb/gmb-search-1.png",
                  "/assets/gmb/gmb-search-2.png",
                  "/assets/gmb/gmb-search-3.png",
                ].map((src, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(src)}
                    className="group 
  relative 
  cursor-pointer 
  w-full 
  h-[150px] sm:h-[170px] md:h-48 
  rounded-lg 
  overflow-hidden 
  bg-black
"

                  >

                    {/* Image */}
                    <Image
                      src={src}
                      alt={`SEO Result ${index + 1}`}
                      fill
                      className="object-contain md:object-cover md:object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay for 'Click to Zoom' hint */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-medium bg-black/60 px-3 py-1 rounded-full border border-white/20">
                        View Result
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {activeImage && (
            <div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setActiveImage(null)}
            >
              <div className="relative max-w-5xl w-full max-h-[90vh]">
                <Image
                  src={activeImage}
                  alt="Google Business Result"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-lg border border-white/10"
                />

                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-3 right-3 text-white text-sm bg-black/60 px-3 py-1 rounded-full border border-white/20 hover:bg-black/80"
                >
                  ✕ Close
                </button>
              </div>
            </div>
          )}


          <div className="text-center text-gray-500 text-sm flex flex-col items-center">
            <p>
              And yup... there&apos;s more cooking.
              <br className="hidden sm:block" />
              Stay tuned for new drops
            </p>
            <div className="relative w-32 h-32">
              <Image
                src="/build.gif"
                alt="More coming soon"
                fill
                className="object-contain rounded-md shadow-md"
              />
            </div>
          </div>
        </TailwindBackgroundWrapper>
      </div>
    </div>
  );
};

export default Page;
