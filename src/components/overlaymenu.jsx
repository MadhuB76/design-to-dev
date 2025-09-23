import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OverlayMenu({ open, onClose, links, setActiveLink, hamburgerPos }) {
  const [showCross, setShowCross] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile/tablet
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setShowCross(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShowCross(false);
    }
  }, [open]);

  const handleClose = () => {
    setIsClosing(true);
    setShowCross(false);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    },);
  };

  return (
    <AnimatePresence>
      {(open || isClosing) && (
        <>
          {showCross && (
            <button
              onClick={handleClose}
              aria-label="Close menu"
              className="fixed text-2xl font-bold z-[10000] text-white transition"
              style={{
                top: (isMobile ? 20 : hamburgerPos.top - 6),
                left: isMobile ? "auto" : hamburgerPos.left,
                right: isMobile ? 24 : "auto",
              }}
            >
              ✕
            </button>
          )}

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
              className="md:w-1/2 w-full h-1/2 md:h-full
                         bg-[#FD2E35] text-white flex flex-col justify-center items-end
                         px-10 pt-12 md:px-16 md:py-0 text-right"
            >
              <div className="flex flex-col items-end justify-center gap-6 md:gap-6">
                <ul className="flex flex-col items-center justify-center gap-6 md:gap-8 whitespace-nowrap">
                  {links.map((link) => (
                    <li key={link.id} className="relative group w-full text-right">
                      <a
                        href={`#${link.id}`}
                        onClick={() => {
                          setActiveLink(link.id);
                          handleClose();
                        }}
                        className="
                        relative h3-title md:h2-title font-bold transition-colors duration-200 text-xl sm:text-2xl md:text-4xl"
                      >
                        {link.label}
                        <span
                          className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-white
                                     transition-all duration-300 group-hover:w-full"
                        />
                      </a>
                    </li>
                  ))}
                </ul>

              <div className="flex justify-center items-center gap-6 md:gap-12 mt-[0px] pt-[12px]">
                  {["Twitter", "LinkedIn", "Dribbble"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="relative group nav-link font-medium text-sm sm:text-base md:text-lg"
                    >
                      {social}
                      <span
                        className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-white
                                   transition-all duration-300 group-hover:w-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== Right Section: Heading & Button ===== */}
            <div
              className="md:w-1/2 w-full h-1/2 md:h-full bg-[#221429] text-white flex flex-col justify-center px-6 sm:px-8 md:px-16 py-12 gap-12"
            >
              <div className="flex flex-col justify-center gap-0">
              <p className="nav-link font-medium text-base sm:text-lg md:text-xl mb-2 text-center md:text-left">
                Thinkin’ Things?
              </p>

              <h1
                className="h1-title md:h2-title font-bold leading-snug mb-6
                          text-xl sm:text-2xl md:text-4xl text-center md:text-left"
              >
                In it for doodles,<br />
                quirky ideas,<br />
                and fun design chats.
              </h1>
              </div>
              <button
                className="
                  relative px-6 py-3 bg-[#FD2E35] text-white font-semibold text-sm sm:text-base md:text-lg
                "
              >
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
