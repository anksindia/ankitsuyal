"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle } from "react-icons/fa";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

const ContactFormCard = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_2864af9",         
        "template_erqn7pe",         
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "ghf6hfdhSM1vsFt1A"          
      )
      .then(() => {
        setIsLoading(false);
        setFormData({ name: "", email: "", message: "" });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send email. Please try again later.");
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-black p-6 rounded-xl shadow-lg text-white w-full">
      <h2 className="text-xl font-bold mb-4 text-center">Have something to say? Let’s connect</h2>

      <form onSubmit={sendEmail} className="flex flex-col gap-4 contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 rounded border bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 rounded border bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="p-2 rounded border bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="w-full max-w-xs mx-auto">
          <HoverBorderGradient
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
            fullWidth
          >
            Send
          </HoverBorderGradient>
        </div>
      </form>

      {showSuccess && (
        <div className="mt-4 flex flex-col items-center text-blue-400">
          <FaCheckCircle className="text-4xl mb-2" />
          <p className="text-lg">Thanks! We will reach out to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default ContactFormCard;
