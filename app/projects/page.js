'use client';


import ProjectCard from "@/components/ProjectCard";
import SkillMarquee from "@/components/ui/SkillMarquee";
import TailwindBackgroundWrapper from '@/components/ui/TailwindBackgroundWrapper';
import React from 'react';
import Image from "next/image";

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
    images: ["/assets/projects/Class2Career.png", "/assets/projects/c2.png", "/assets/projects/Class2Career3.png", "/assets/projects/Class2Career4.png"],
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
  {
    title: "CTM – Cash Transaction Machine",
    description:
      "A full-stack ATM simulation web app where users can securely register, manage their profile, and perform real-time banking operations like deposit, withdrawal, and transfers. Designed with a modern, responsive UI and theme switching for a seamless user experience.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Zustand",
      "React Router DOM",
      "Axios",
      "React Hot Toast",
      "Node.js",
      "Express.js",
      "MongoDB with Mongoose",
      "JWT",
      "Cloudinary",
      "Multer",
      "cookie-parser",
      "dotenv",
      "vite-plugin-compression"
    ],
    images: [
      "/assets/projects/CTM.png",
      "/assets/projects/CTM1.png",
      "/assets/projects/CTM2.png",
      "/assets/projects/CTM3.png",
      "/assets/projects/CTM4.png"
    ],
    sourceCode: "https://github.com/anksindia/CTM-Cash-Transaction-Machine"
  },
  {
    title: "Pinterest Clone – MERN Image Sharing App",
    description:
      "A full-stack Pinterest-style image sharing app where users can upload, save, and manage pins with authentication and a fully responsive UI. Designed to provide a smooth, modern user experience similar to the original platform.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "React Icons",
      "React Toastify",
      "React Hot Toast",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB with Mongoose",
      "JWT",
      "Cloudinary",
      "Multer",
      "dotenv",
      "cookie-parser",
      "compression"
    ],
    images: [
      "/assets/projects/pinterest.png",
      "/assets/projects/pinterest2.png",
      "/assets/projects/pinterest3.png",
      "/assets/projects/pinterest4.png",
      "/assets/projects/pinterest5.png"
    ],
    sourceCode: "https://github.com/anksindia/Pinterest-clone"
  },
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


const page = () => {
  return (
     <div>
      <SkillMarquee />
      <div>
        <TailwindBackgroundWrapper>
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center py-10 text-gray-500 text-sm flex flex-col items-center">
            <p className="mb-4">
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

export default page;
