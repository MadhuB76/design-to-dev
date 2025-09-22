import React, { useState, useEffect } from "react";
import logo from "../assets/M.svg";
import Hamburger from "../assets/jam_menu.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState("");

  // Track scroll position for progress ring & navbar state
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 50);
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "projects", label: "Projects" },
    { id: "process", label: "Process" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Let’s Talk", special: true },
  ];

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center py-6 px-6 md:px-[15%] relative">
        {/* ===== Logo ===== */}
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto sm:h-10 md:h-12 lg:h-14"
          />
        </a>

        {/* ===== Desktop Links + Hamburger ===== */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-12 text-[14px] font-medium">
            {links.map((link) => {
              const isActive = activeLink === link.id;
              const isSpecial = link.special;
              return (
                <li key={link.id} className="relative group">
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActiveLink(link.id)}
                    className={`relative transition-colors duration-200
                      ${isSpecial ? "text-[#FD2E35]" : "text-[#221429]"}
                      ${!isSpecial && "hover:text-[#FD2E35]"}
                    `}
                  >
                    {link.label}
                    <span
                      className={`
                        absolute bottom-[-5px] left-0 h-[2px] rounded-full
                        transition-all duration-300
                        ${isSpecial ? "bg-[#FD2E35] w-[50%] group-hover:w-full" : ""}
                        ${
                          !isSpecial && isActive
                            ? "bg-[#221429] w-[50%] group-hover:w-full group-hover:bg-[#FD2E35]"
                            : ""
                        }
                      `}
                      style={{
                        transformOrigin: isSpecial ? "left" : "center",
                        width: !isSpecial && !isActive ? "0%" : undefined,
                      }}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Inline Hamburger (shows only when not scrolled) */}
          {!scrolled && (
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="ml-6 relative z-10"
            >
              <img src={Hamburger} alt="Menu" className="h-6 w-6" />
            </button>
          )}

          {/* Floating Hamburger (desktop) on scroll */}
          {scrolled && (
            <div
              className="fixed top-6 right-8 z-50 flex items-center justify-center
                         bg-white rounded-full p-3 shadow-lg transition-[right] duration-500 ease-out"
            >
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="relative z-10"
              >
                <img src={Hamburger} alt="Menu" className="h-6 w-6" />
              </button>

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r={16}
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="18"
                  cy="18"
                  r={16}
                  stroke="#FD2E35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  transform="rotate(-90 18 18)"
                  strokeDasharray={`${2 * Math.PI * 16} ${2 * Math.PI * 16}`}
                  strokeDashoffset={`${
                    (1 - scrollProgress / 100) * 2 * Math.PI * 16
                  }`}
                  className="transition-[stroke-dashoffset] duration-150 linear"
                />
              </svg>
            </div>
          )}
        </div>

        {/* ===== Mobile/Tablet Hamburger ===== */}
        <div className="md:hidden">
          {!scrolled ? (
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="relative z-10"
            >
              <img src={Hamburger} alt="Menu" className="h-6 w-6" />
            </button>
          ) : (
            <div
              className="fixed top-6 right-6 z-50 flex items-center justify-center
                         bg-white rounded-full p-3 shadow-lg transition-all duration-500 ease-out"
            >
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="relative z-10"
              >
                <img src={Hamburger} alt="Menu" className="h-6 w-6" />
              </button>

              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 36 36"
              >
                <circle
                  cx="18"
                  cy="18"
                  r={16}
                  stroke="#E5E7EB"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="18"
                  cy="18"
                  r={16}
                  stroke="#FD2E35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  transform="rotate(-90 18 18)"
                  strokeDasharray={`${2 * Math.PI * 16} ${2 * Math.PI * 16}`}
                  strokeDashoffset={`${
                    (1 - scrollProgress / 100) * 2 * Math.PI * 16
                  }`}
                  className="transition-[stroke-dashoffset] duration-150 linear"
                />
              </svg>
            </div>
          )}
        </div>
      </nav>

      {/* ===== Fullscreen Overlay (Animated) ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen z-[999] flex"
          >
            {/* ===== Left Section: Links & Socials (40% width) ===== */}
            <div className="w-[40%] bg-[#FD2E35] text-white flex flex-col justify-center px-[15%] relative">

              {/* Vertical Navigation Links */}
              <ul className="flex flex-col gap-6 text-2xl font-semibold">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => {
                        setOpen(false);
                        setActiveLink(link.id);
                      }}
                      className="hover:underline transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Horizontal Social Icons at bottom */}
              <div className="flex gap-6 mt-6">
                <a href="#" aria-label="Twitter" className="hover:opacity-80">
                  <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Dribbble" className="hover:opacity-80">
                  <img src="/icons/dribbble.svg" alt="Dribbble" className="h-6 w-6" />
                </a>
              </div>
            </div>

            
            {/* ===== Right Section: Heading & Button (60% width) ===== */}
            <div className="w-[60%] bg-[#221429] text-white flex flex-col justify-center px-[5%] relative">
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-3xl font-bold"
                style={{ position: "absolute", top: "4rem", right: "13rem" }}
                aria-label="Close menu" 
              >
                ✕
              </button>

              <p className="text-sm font-medium mb-2">Thinkin’ Things?</p>
              <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
                In it for doodles, quirky ideas, <br /> and fun design chats.
              </h1>

              {/* Action Button */}
              <button
                className="px-6 py-3 bg-[#FD2E35] text-white font-semibold hover:bg-[#e0292f] transition">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
