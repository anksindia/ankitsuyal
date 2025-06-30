"use client";

import dynamic from "next/dynamic";
import ContactFormCard from "@/components/ContactFormCard";

// dynamic import works now!
const GlobeDemo = dynamic(() => import("@/components/ui/GlobeDemo"), { ssr: false });

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#000000] p-6 text-white relative">
      <GlobeDemo
        title="Connect with me globally"
        subtitle="I’d love to hear from you no matter where you are on the planet."
      />
      <div className="mt-10 max-w-2xl mx-auto">
        <ContactFormCard />
      </div>
    </div>
  );
};

export default ContactPage;
