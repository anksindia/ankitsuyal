"use client";
import AnimatedComment from "@/components/ui/AnimatedComment";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import TracingBeam from "@/components/ui/TracingBeam";
import { Code2, Paintbrush, Server, Database, Cloud, GitBranch, Wrench, FlaskConical, Users } from "lucide-react";


const languages = [
  {
    name: "JavaScript",
    about: "A versatile scripting language primarily used for interactive web development.",
    category: "Languages - Commonly used in web and full-stack development.",
    src: "/assets/skills/javascript.svg",
  },
  {
    name: "TypeScript",
    about: "A strongly typed superset of JavaScript that adds static typing.",
    category: "Languages - Enhances JavaScript for scalable web development.",
    src: "/assets/skills/typescript.svg",
  },
  {
    name: "Python",
    about: "A high-level programming language used for automation, data science, and backend development.",
    category: "Languages - Widely used in backend systems and data-centric applications.",
    src: "/assets/skills/python.svg",
  },
  {
    name: "C++",
    about: "A powerful object-oriented language often used in systems and game development.",
    category: "Languages - Common in performance-critical and system-level development.",
    src: "/assets/skills/cpp.svg",
  },
  {
    name: "SQL",
    about: "A domain-specific language for managing and querying relational databases.",
    category: "Languages - Essential for backend data operations and reporting.",
    src: "/assets/skills/sql.svg",
  }
];


const frontend = [
  {
    name: "HTML5",
    about: "The standard markup language for creating web page structure.",
    category: "Frontend - Fundamental for web content structure.",
    src: "/assets/skills/html5.svg",
  },
  {
    name: "CSS3",
    about: "A stylesheet language used to describe the presentation of HTML.",
    category: "Frontend - Essential for web design and layout.",
    src: "/assets/skills/css3.svg",
  },
  {
    name: "React",
    about: "A JavaScript library for building user interfaces efficiently with components.",
    category: "Frontend - Widely used for modern web app development.",
    src: "/assets/skills/react.svg",
  },
  {
    name: "Next.js",
    about: "A React framework for server-side rendering and static site generation.",
    category: "Frontend - Used in production-grade full-stack React applications.",
    src: "/assets/skills/nextjs.svg",
  },
  {
    name: "Tailwind CSS",
    about: "A utility-first CSS framework for rapid and responsive design.",
    category: "Frontend - Popular for modern and maintainable styling.",
    src: "/assets/skills/tailwindcss.svg",
  },
  {
    name: "Vite",
    about: "A frontend build tool that provides fast development and hot module replacement.",
    category: "Frontend - Speeds up local development and builds.",
    src: "/assets/skills/vite.svg",
  },
  {
    name: "GSAP",
    about: "An animation library for high-performance and complex animations.",
    category: "Frontend - Used for advanced UI/UX animations.",
    src: "/assets/skills/gsap.svg",
  }
];

const backend = [
  {
    name: "Node.js",
    about: "A JavaScript runtime built on Chrome’s V8 engine for building scalable backend services.",
    category: "Backend - Enables server-side JavaScript development.",
    src: "/assets/skills/nodejs.svg",
  },
  {
    name: "Express",
    about: "A lightweight web application framework for Node.js.",
    category: "Backend - Used to build REST APIs and web apps.",
    src: "/assets/skills/express.svg",
  },
  {
    name: "GraphQL",
    about: "A query language for APIs enabling flexible and efficient data fetching.",
    category: "Backend - Preferred for modern API development.",
    src: "/assets/skills/graphql.svg",
  }
];

const databases = [
  {
    name: "MongoDB",
    about: "A NoSQL document-oriented database for flexible, scalable applications.",
    category: "Databases - Commonly used in full-stack JavaScript apps.",
    src: "/assets/skills/mongodb.svg",
  },
  {
    name: "MySQL",
    about: "A relational database known for speed and reliability.",
    category: "Databases - Widely used in traditional backend systems.",
    src: "/assets/skills/mysql.svg",
  },
  {
    name: "PostgreSQL",
    about: "An advanced open-source relational database with strong standards compliance.",
    category: "Databases - Preferred for complex queries and data integrity.",
    src: "/assets/skills/postgresql.svg",
  }
];

const cloudDeployment = [
  {
    name: "Vercel",
    about: "A platform for deploying frontend apps with serverless functions.",
    category: "Deployment & Cloud Services - Optimized for React/Next.js apps.",
    src: "/assets/skills/vercel.svg",
  },
  {
    name: "Netlify",
    about: "A cloud platform for deploying static websites and JAMstack apps.",
    category: "Deployment & Cloud Services - Common in frontend deployment.",
    src: "/assets/skills/netlify.svg",
  },
  {
    name: "Firebase",
    about: "Google’s platform offering real-time database and hosting services.",
    category: "Deployment & Cloud Services - Popular in mobile and small-scale apps.",
    src: "/assets/skills/firebase.svg",
  },
  {
    name: "AWS",
    about: "Comprehensive cloud computing services for scalable infrastructure.",
    category: "Deployment & Cloud Services - Used in enterprise-level deployment.",
    src: "/assets/skills/aws.svg",
  },
  {
    name: "Docker",
    about: "A platform for developing, shipping, and running applications in containers.",
    category: "Deployment & Cloud Services - Ensures consistent environments.",
    src: "/assets/skills/docker.svg",
  }
];

const versionControl = [
  {
    name: "Git",
    about: "A distributed version control system for tracking code changes.",
    category: "Version Control & Collaboration - Core tool for source control.",
    src: "/assets/skills/git.svg",
  },
  {
    name: "GitHub",
    about: "A web-based platform for hosting and collaborating on Git repositories.",
    category: "Version Control & Collaboration - Widely used for open-source projects.",
    src: "/assets/skills/github.svg",
  },
  {
    name: "GitLab",
    about: "An integrated DevOps platform for Git repositories, CI/CD, and more.",
    category: "Version Control & Collaboration - Often used in enterprise teams.",
    src: "/assets/skills/gitlab.svg",
  }
];

const tools = [
  {
    name: "Figma",
    about: "A collaborative interface design and prototyping tool.",
    category: "Tools & Utilities - Used for UI/UX design workflows.",
    src: "/assets/skills/figma.svg",
  }
];

const testing = [
  {
    name: "Jest",
    about: "A JavaScript testing framework for unit and integration tests.",
    category: "Testing Tools - Commonly used in React and Node projects.",
    src: "/assets/skills/jest.svg",
  }
];

const softSkills = [
  {
    name: "Communication",
    about: "Ability to convey ideas effectively in both spoken and written forms.",
    category: "Soft Skills - Critical for team collaboration and client interaction.",
    src: "/assets/skills/communication.png",
  },
  {
    name: "Problem Solving",
    about: "Identifying issues and implementing logical solutions.",
    category: "Soft Skills - Key for debugging and development challenges.",
    src: "/assets/skills/problem-solving.png",
  },
  {
    name: "Creativity",
    about: "Thinking innovatively to develop unique solutions and designs.",
    category: "Soft Skills - Important for UI/UX and architectural planning.",
    src: "/assets/skills/creativity.png",
  },
  {
    name: "Creative Thinking",
    about: "Applying imaginative approaches to problem-solving.",
    category: "Soft Skills - Enhances feature ideation and design thinking.",
    src: "/assets/skills/creative-thinking.png",
  },
  {
    name: "Team Work",
    about: "Working collaboratively with team members to achieve goals.",
    category: "Soft Skills - Essential for agile development and cross-functional teams.",
    src: "/assets/skills/team-work.png",
  }
];


export default function Page() {
  return (
    <div >
      <TextHoverEffect/>
      <div className=" py-16 px-4 sm:px-8 bg-[#000101] text-white">
      <TracingBeam className="px-4 sm:px-8">
      <div className="min-h-screen py-16 bg-[#000101] text-white">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Code2 size={20} /> Languages
        </h2>
        <AnimatedComment comments={languages} autoplay />

        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Paintbrush size={20} /> Frontend
        </h2>
        <AnimatedComment comments={frontend} autoplay />

        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Server size={20} /> Backend
        </h2>
        <AnimatedComment comments={backend} autoplay />

        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Database size={20} /> Databases
        </h2>
        <AnimatedComment comments={databases} autoplay />

        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Cloud size={20} /> Deployment & Cloud Services
        </h2>
        <AnimatedComment comments={cloudDeployment} autoplay />

        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <GitBranch size={20} /> Version Control & Collaboration
        </h2>
        <AnimatedComment comments={versionControl} autoplay />

        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Wrench size={20} /> Tools & Utilities
        </h2>
        <AnimatedComment comments={tools} autoplay />

        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <FlaskConical size={20} /> Testing Tools
        </h2>
        <AnimatedComment comments={testing} autoplay />

        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Users size={20} /> Soft Skills
        </h2>
        <AnimatedComment comments={softSkills} autoplay />
      </div>
    </TracingBeam>
    </div>
    </div>
  );
}
