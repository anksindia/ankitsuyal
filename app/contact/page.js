"use client";

import React from "react";
import { GlobeDemo } from "@/components/ui/GlobeDemo";
import ContactFormCard from "@/components/ContactFormCard";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#000000] p-6 text-white relative">
      
      <GlobeDemo 
        title="Connect with me globally"
        subtitle="I’d love to hear from you no matter where you are on the planet." 
      />

      {/* Direct Contact Form */}
      <div className="mt-10 max-w-2xl mx-auto">
        <ContactFormCard />
      </div>
    </div>
  );
};

export default ContactPage;
