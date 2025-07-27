"use client";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import TracingBeam from "@/components/ui/TracingBeam";
import Image from "next/image";
import { Code2, Paintbrush, Server, Database, Cloud, GitBranch, Wrench, FlaskConical, Users } from "lucide-react";


// SkillItem component to replicate the exact UI from the screenshot for each skill tag
const SkillItem = ({ name, src }) => (
    <div className="flex items-center gap-2 bg-[#0A0A0A] border border-gray-700 rounded-lg px-3 py-1.5 cursor-pointer text-sm font-medium whitespace-nowrap transition-colors duration-200 hover:bg-[#2b2b2ba8]">
        {src && <Image src={src} alt={name} width={16} height={16} className="w-4 h-4" />}
        <span className="text-white">{name}</span>
    </div>
);

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
        name: "C",
        about: "A foundational procedural programming language widely used in systems programming, embedded systems, and operating system development.",
        category: "Languages - Common in low-level, performance-critical, and hardware-near programming.",
        src: "/assets/skills/c.svg",
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
    }, {
        name: "VSCode",
        about: "A lightweight yet powerful source code editor developed by Microsoft, with built-in support for debugging, Git, and extensions.",
        category: "Tools - Code editors and development environments.",
        src: "/assets/skills/vscode.svg",
    }, {
        name: "Postman",
        about: "A popular collaboration platform for API development, testing, and debugging with a user-friendly interface and automation support.",
        category: "Tools - API testing and development utilities.",
        src: "/assets/skills/postman.svg",
    }, {
        name: "Nginx",
        about: "A high-performance web server and reverse proxy known for its speed, stability, and low resource usage, often used in scalable web applications.",
        category: "Tools - Web servers and networking infrastructure.",
        src: "/assets/skills/nginx.svg",
    }, {
        name: "WordPress",
        about: "A widely used open-source content management system (CMS) for creating websites and blogs with ease, offering extensive themes and plugins.",
        category: "Tools - CMS and website development platforms.",
        src: "/assets/skills/wordpress.svg",
    }, {
        name: "Adobe Photoshop",
        about: "An industry-standard software for image editing, graphic design, and digital art, known for its powerful tools and layer-based editing system.",
        category: "Tools - Image editing and graphic design software.",
        src: "/assets/skills/adobe-photoshop.svg",
    }, {
        name: "Adobe Premiere Pro",
        about: "A professional video editing software used for film, TV, and web content creation, offering powerful editing tools and timeline-based workflow.",
        category: "Tools - Video editing and production software.",
        src: "/assets/skills/adobe-premiere-pro.svg",
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
        <div className="bg-[#000101] text-white min-h-screen">
            <TextHoverEffect /> {/* Keep TextHoverEffect */}
            <div className="py-16 px-4 sm:px-8">
                <TracingBeam className="px-4 sm:px-8">
                    {/* A little about me - New Content */}
                    <div className="mb-12">
                        
                        <p className=" mb-4 leading-relaxed text-white">
                            I build like a MERN dev with my own flavor! While{" "}
                            <span className="inline-flex items-center gap-1">
                                <Image src="/assets/skills/mongodb.svg" alt="MongoDB" width={18} height={18} /> MongoDB
                            </span>{" "}
                            and{" "}
                            <span className="inline-flex items-center gap-1">
                                <Image src="/assets/skills/express.svg" alt="Express" width={18} height={18} /> Express
                            </span>{" "}
                            are in the toolkit,{" "}
                            <span className="inline-flex items-center gap-1">
                                <Image src="/assets/skills/nextjs.svg" alt="Next.js" width={18} height={18} /> Next.js
                            </span>{" "}
                            is my real playground. Paired with{" "}
                            <span className="inline-flex items-center gap-1">
                                <Image src="/assets/skills/tailwindcss.svg" alt="Tailwind CSS" width={18} height={18} /> Tailwind CSS
                            </span>, I craft clean, responsive UIs that just feel right.
                        </p>
                        <p className=" mb-4 leading-relaxed text-white">
                            Backend? I switch from{" "}
                            <span className="inline-flex items-center gap-1">
                                <Image src="/assets/skills/nodejs.svg" alt="Node.js" width={18} height={18} /> Node.js
                            </span>{" "}
                            to{" "}
                            <span className="inline-flex items-center gap-1">
                                <Image src="/assets/skills/postgresql.svg" alt="PostgreSQL" width={18} height={18} /> PostgreSQL
                            </span>all managed seamlessly. I deploy with{" "}
                            <span className="inline-flex items-center gap-1">
                                <Image src="/assets/skills/vercel.svg" alt="Vercel" width={18} height={18} /> Vercel
                            </span>{" "}
                            because easy, fast, and serverless is my style.
                        </p>
                        <p className=" mb-4 leading-relaxed text-white">
                            I version with{" "}
                            <span className="inline-flex items-center gap-1">
                                <Image src="/assets/skills/git.svg" alt="Git" width={18} height={18} /> Git
                            </span>, animate with{" "}
                            <span className="inline-flex items-center gap-1">
                                <Image src="/assets/skills/gsap.svg" alt="GSAP" width={18} height={18} /> GSAP
                            </span>, design in{" "}
                            <span className="inline-flex items-center gap-1">
                                <Image src="/assets/skills/figma.svg" alt="Figma" width={18} height={18} /> Figma
                            </span>, and sometimes even edit with{" "}
                            <span className="inline-flex items-center gap-1">
                                <Image src="/assets/skills/adobe-premiere-pro.svg" alt="Premiere Pro" width={18} height={18} /> Premiere Pro
                            </span>{" "}
                            (because why not?).
                        </p>
                        <p className=" mb-4 leading-relaxed text-white">
                            And yup I code it all inside a cozy, AI-assisted setup.
                        </p>
                        <p className=" text-white">
                            Let’s just say I love building stuff that{" "}
                            <span className="font-bold">works and wows</span>.
                        </p>
                    </div>

                    {/* My Skills Section Title */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">My Skills</h1>
                    </div>

                    {/* Languages Section */}
                    <div className="mb-12">
                        <h2 className="flex items-center gap-2 text-2xl text-gray-300   border-gray-700 pb-2">
                            <Code2 size={24} className="text-white" /> Languages
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {languages.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} src={skill.src} />
                            ))}
                        </div>
                    </div>

                    {/* Frontend Section */}
                    <div className="mb-12">
                        <h2 className="flex items-center gap-2 text-2xl text-gray-300   border-gray-700 pb-2">
                            <Paintbrush size={24} className="text-white" /> Frontend
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {frontend.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} src={skill.src} />
                            ))}
                        </div>
                    </div>

                    {/* Backend Section */}
                    <div className="mb-12">
                        <h2 className="flex items-center gap-2 text-2xl text-gray-300   border-gray-700 pb-2">
                            <Server size={24} className="text-white" /> Backend
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {backend.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} src={skill.src} />
                            ))}
                        </div>
                    </div>

                    {/* Databases Section */}
                    <div className="mb-12">
                        <h2 className="flex items-center gap-2 text-2xl text-gray-300   border-gray-700 pb-2">
                            <Database size={24} className="text-white" /> Databases
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {databases.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} src={skill.src} />
                            ))}
                        </div>
                    </div>

                    {/* Deployment & Cloud Services Section */}
                    <div className="mb-12">
                        <h2 className="flex items-center gap-2 text-2xl text-gray-300   border-gray-700 pb-2">
                            <Cloud size={24} className="text-white" /> Deployment & Cloud Services
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {cloudDeployment.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} src={skill.src} />
                            ))}
                        </div>
                    </div>

                    {/* Version Control & Collaboration Section */}
                    <div className="mb-12">
                        <h2 className="flex items-center gap-2 text-2xl text-gray-300   border-gray-700 pb-2">
                            <GitBranch size={24} className="text-white" /> Version Control & Collaboration
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {versionControl.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} src={skill.src} />
                            ))}
                        </div>
                    </div>

                    {/* Tools & Utilities Section */}
                    <div className="mb-12">
                        <h2 className="flex items-center gap-2 text-2xl text-gray-300   border-gray-700 pb-2">
                            <Wrench size={24} className="text-white" /> Tools & Utilities
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {tools.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} src={skill.src} />
                            ))}
                        </div>
                    </div>

                    {/* Testing Tools Section */}
                    <div className="mb-12">
                        <h2 className="flex items-center gap-2 text-2xl text-gray-300   border-gray-700 pb-2">
                            <FlaskConical size={24} className="text-white" /> Testing Tools
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {testing.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} src={skill.src} />
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills Section */}
                    <div className="mb-12">
                        <h2 className="flex items-center gap-2 text-2xl text-gray-300   border-gray-700 pb-2">
                            <Users size={24} className="text-white" /> Soft Skills
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {softSkills.map((skill, index) => (
                                <SkillItem key={index} name={skill.name} src={skill.src} />
                            ))}
                        </div>
                    </div>

                    <p className="text-center mt-12 text-gray-400">
                        Few more ... but secret hehehe
                    </p>
                </TracingBeam>
            </div>
        </div>
    );
}