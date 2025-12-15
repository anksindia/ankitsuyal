"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { FiPhone, FiMail, FiCopy, FiCheck } from "react-icons/fi";
import ContactFormCard from "@/components/ContactFormCard";

/**
 * Dynamic Globe import
 * - ssr: false (WebGL / window safe)
 * - loading: placeholder to avoid layout jump
 */
const GlobeDemo = dynamic(
    () => import("@/components/ui/GlobeDemo"),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-[400px] flex flex-col items-center justify-center text-gray-400">
                <div className="animate-pulse">Preparing interactive globe…</div>
            </div>
        ),
    }
);

const ContactPage = () => {
    const [copied, setCopied] = useState(false);

    const phoneNumber = "+91 8171398763";
    const emailAddress = "ankitsuyal.in@gmail.com";

    /**
     * Preload Globe JS as soon as page mounts
     * (reduces perceived delay)
     */
    useEffect(() => {
        import("@/components/ui/GlobeDemo");
    }, []);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(phoneNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 py-10">
            {/* Globe Section */}
            <GlobeDemo
                title="Connect with me globally"
                subtitle="I’d love to hear from you no matter where you are on the planet."
            />

            {/* Centered Content */}
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center mt-16">
                <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>

                {/* Contact Info */}
                <div className="bg-black rounded-xl p-6 w-full mb-10 shadow-lg">
                    <div className="flex flex-col items-center gap-4">
                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <FiPhone size={20} />
                            <a
                                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                                className="hover:underline"
                            >
                                {phoneNumber}
                            </a>
                            <button onClick={handleCopy} title="Copy phone number">
                                {copied ? (
                                    <FiCheck className="text-green-400" />
                                ) : (
                                    <FiCopy className="hover:text-gray-300" />
                                )}
                            </button>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-3">
                            <FiMail size={20} />
                            <a
                                href={`mailto:${emailAddress}`}
                                className="hover:underline"
                            >
                                {emailAddress}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full">
                    <ContactFormCard />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
