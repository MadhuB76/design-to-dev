import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ import Link
import HoverButtonGroup from "../components/button";

export default function OverlayMenu({
  open,
  onClose,
  links,
  setActiveLink,
  hamburgerPos,
}) {
  const [showCross, setShowCross] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
    }, 500);
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
                top: isMobile ? 20 : hamburgerPos.top - 6,
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
            <div className="md:w-1/2 w-full h-1/2 md:h-full bg-[#FD2E35] text-white flex flex-col justify-center items-center px-10 py-12 md:px-16 md:py-0">
              <div className="flex flex-col items-center justify-center gap-6 md:gap-6">
                <ul className="flex flex-col items-center justify-center gap-6 md:gap-6 whitespace-nowrap">
                  {links.map((link) => (
                    <li
                      key={link.id}
                      className="relative group w-full text-center"
                    >
                      {/* ✅ Use Link instead of <a> */}
                      <Link
                        to={link.special ? "/contact" : `/${link.id}`}
                        onClick={() => {
                          setActiveLink(link.id);
                          handleClose();
                        }}
                        className="relative h3-title md:h2-title font-bold transition-colors duration-200 text-base sm:text-lg md:text-2xl"
                      >
                        {link.label}
                        <span
                          className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-white
                                     transition-all duration-300 group-hover:w-full"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* ===== Social Links ===== */}
                <div className="flex justify-center items-center gap-4 md:gap-6 mt-4 md:mt-6">
                  {[
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com/in/madhu-bavireddy/",
                    },
                    {
                      name: "Instagram",
                      url: "https://www.instagram.com/madhu.bavireddy/",
                    },
                    { name: "Twitter", url: "https://x.com/BavireddyM34094" },
                    {
                      name: "Behance",
                      url: "https://www.behance.net/MadhuBavireddy76",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group nav-link font-medium text-sm sm:text-base md:text-lg"
                    >
                      {social.name}
                      <span
                        className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-white
                                   transition-all duration-300 group-hover:w-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== Right Section ===== */}
            <div className="md:w-1/2 w-full h-1/2 md:h-full bg-[#221429] text-white flex flex-col justify-center items-center lg:items-start px-6 sm:px-8 md:px-16 py-12">
              <p className="nav-link font-medium text-base sm:text-lg md:text-xl mb-2 text-center lg:text-left">
                Thinkin’ Things?
              </p>

              <h1 className="h3-title md:h2-title font-bold leading-snug mb-6 text-xl sm:text-2xl md:text-4xl text-center lg:text-left max-w-[20ch]">
                In it for doodles, quirky ideas, and fun design chats.
              </h1>

              <section className="bg-[#221429]">
                <HoverButtonGroup
                  invert
                  text="Schedule a call"
                  onClick={() =>
                    window.open(
                      "https://calendar.app.google/qgCwaipDxXGuf68r8",
                      "_blank"
                    )
                  }
                />
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
