// pages/Contact.jsx
import React, { useState } from "react";
import RightImage from "../assets/Absolute Cinema.svg";
import Footer from "../components/footer";
import AnimatedSendButton from "../components/animatedsendbutton";
import emailjs from "@emailjs/browser";

// EmailJS configuration
const PublicKeyCredential = "4redalHgblELDY_nR";
const ServiceID = "service_t0xrbf8";
const ClientTemplateID = "template_w70y9cl"; // Confirmation email to client
const MyTemplateID = "template_p99kj59"; // Email to you

export default function Contact() {
  const [formData, setFormData] = useState({
    story: "",
    name: "",
    mail: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Debug payloads
    console.log("Sending to me:", formData);
    console.log("Sending to client:", {
      name: formData.name,
      mail: formData.mail,
    });

    try {
      // 1️⃣ Send email to YOU
      await emailjs.send(
        ServiceID,
        MyTemplateID,
        {
          story: formData.story,
          name: formData.name,
          mail: formData.mail, // used for Reply-To if needed
          phone: formData.phone,
        },
        PublicKeyCredential
      );

      // 2️⃣ Send email to CLIENT
      await emailjs.send(
        ServiceID,
        ClientTemplateID,
        {
          name: formData.name,
          mail: formData.mail, // dynamic recipient
        },
        PublicKeyCredential
      );

      setMessage("✅ Story sent! Confirmation email sent to the client.");
      setFormData({ story: "", name: "", mail: "", phone: "" }); // clear form
    } catch (error) {
      console.error("EmailJS error:", error);
      setMessage("❌ Failed to send story. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full p-2 border-b border-[#D7C7C5] bg-white placeholder:text-[#9A9A9A] text-[#221429] text-sm focus:outline-none focus:border-[#FD2E35] transition-colors duration-200";

  return (
    <div className="flex flex-col w-full bg-[#F7F4F2]">
      {/* ---------- Heading ---------- */}
      <section>
        <div className="flex items-start justify-start px-4 sm:px-6 md:px-[15%] lg:px-[15%] w-full mt-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full">
            <div className="flex flex-col flex-1">
              <div className="flex flex-row gap-2 items-start md:items-start">
                <span className="w-0.5 h-6 md:w-1 md:h-[2.1rem] bg-[#FD2E35]" />
                <div>
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#221429] leading-snug">
                    Every Great Project
                    <br /> Starts With A Story.
                  </h1>
                  <p className="text-sm sm:text-md md:text-lg text-[#221429] mt-1">
                    Tell me yours—how it began, where it’s headed, and what
                    <br className="hidden sm:block" />
                    you dream it could become.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              <img
                src={RightImage}
                alt="Showing Projects!"
                className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Form Section --- */}
      <section className="px-4 sm:px-6 md:px-[15%] lg:px-[15%] w-full mt-10 mb-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#221429]">
            What's the next chapter?
          </h2>
          <p className="text-md sm:text-lg text-[#221429] mt-2 mb-4">
            Share a note below and let's start writing it together.
          </p>

          <textarea
            name="story"
            rows="6"
            placeholder="Start writing the first line..."
            className="w-full p-4 border border-[#D7C7C5] bg-white placeholder:text-[#9A9A9A] text-[#221429] text-base focus:outline-none focus:border-[#FD2E35] transition-colors duration-200 resize-none"
            value={formData.story}
            onChange={handleChange}
            required
          />

          <h2 className="text-xl sm:text-2xl font-semibold text-[#221429] mt-10 mb-6">
            Character Info
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-xm uppercase text-[#221429] tracking-wider mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Main Character"
                className={inputClass}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="hidden md:block">
              <label
                htmlFor="phone"
                className="block text-xm uppercase text-[#221429] tracking-wider mb-1"
              >
                Your Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Secret Hotline"
                className={inputClass}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="mail"
                className="block text-xm uppercase text-[#221429] tracking-wider mb-1"
              >
                Your Mail
              </label>
              <input
                type="email"
                id="mail"
                name="mail"
                placeholder="Magic Scroll"
                className={inputClass}
                value={formData.mail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="md:hidden">
              <label
                htmlFor="phone-mobile"
                className="block text-xs uppercase text-[#9A9A9A] tracking-wider mb-1"
              >
                Your Phone
              </label>
              <input
                type="tel"
                id="phone-mobile"
                name="phone"
                placeholder="Secret Hotline"
                className={inputClass}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col items-start mt-8">
            <AnimatedSendButton
              onClick={handleSubmit}
              isSubmitting={isSubmitting}
              text="Send Story"
            />
            {message && (
              <p className="mt-4 text-sm font-medium text-[#221429]">
                {message}
              </p>
            )}
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
}
