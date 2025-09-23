import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OverlayMenu({ open, onClose, links, setActiveLink }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-screen z-[999] flex flex-col md:flex-row"
        >
          {/* ===== Left Section: Links & Socials ===== */}
          <div
            className="md:w-[50%] w-full md:h-full h-[60%]
                        bg-[#FD2E35] text-white flex flex-col justify-center
                        px-[10%] py-12 md:px-[15%] md:py-0"
            >
            {/* Centered Links */}
            <ul className="flex flex-col items-start justify-center gap-6 md:gap-6 flex-grow whitespace-nowrap">
              {links.map((link) => (
                <li key={link.id} className="relative group">
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setActiveLink(link.id);
                      onClose();
                    }}
                    className="relative h3-title font-bold transition-colors duration-200"
                  >
                    {link.label}
                    <span
                      className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-white
                                transition-all duration-300 group-hover:w-full"
                    />
                  </a>
                </li>
              ))}
            </ul>
            </div>

          {/* ===== Right Section: Heading & Button ===== */}
          <div
            className="md:w-[50%] w-full md:h-full h-[40%]
                       bg-[#221429] text-white flex flex-col justify-center
                       px-[8%] relative"
          >
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="absolute top-6 right-6 text-3xl font-bold"
            >
              ✕
            </button>

            <p className="nav-link font-medium mb-2">Thinkin’ Things?</p>

            {/* 🔑 Desktop H2, fallback to H3 on small screens */}
            <h1 className="h3-title md:h2-title font-bold leading-snug mb-6">
              In it for doodles, quirky ideas, <br /> and fun design chats.
            </h1>

            <button className="px-6 py-3 bg-[#FD2E35] text-white font-semibold hover:bg-[#e0292f] transition nav-link">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
