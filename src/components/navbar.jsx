import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/M.svg";
import Hamburger from "../assets/jam_menu.svg";
import OverlayMenu from "./overlaymenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState("");

  // New state: track hamburger position
  const [hamburgerPos, setHamburgerPos] = useState({ top: 0, left: 0 });

  // Refs for all hamburger buttons
  const staticHamburgerRef = useRef(null);
  const floatingHamburgerRef = useRef(null);
  const mobileHamburgerRef = useRef(null);

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
              onClick={() => {
                const rect = staticHamburgerRef.current.getBoundingClientRect();
                setHamburgerPos({ top: rect.top, left: rect.left });
                setOpen(!open);
              }}
              ref={staticHamburgerRef}
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
                onClick={() => {
                  const rect = floatingHamburgerRef.current.getBoundingClientRect();
                  setHamburgerPos({ top: rect.top, left: rect.left });
                  setOpen(!open);
                }}
                ref={floatingHamburgerRef}
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
              onClick={() => {
                const rect = mobileHamburgerRef.current.getBoundingClientRect();
                setHamburgerPos({ top: rect.top, left: rect.left });
                setOpen(!open);
              }}
              ref={mobileHamburgerRef}
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
                onClick={() => {
                  const rect = mobileHamburgerRef.current.getBoundingClientRect();
                  setHamburgerPos({ top: rect.top, left: rect.left });
                  setOpen(!open);
                }}
                ref={mobileHamburgerRef}
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

      {/* ===== Overlay Menu ===== */}
      <OverlayMenu
        open={open}
        onClose={() => setOpen(false)}
        links={links}
        setActiveLink={setActiveLink}
        hamburgerPos={
          scrolled
            ? floatingHamburgerRef.current
              ? floatingHamburgerRef.current.getBoundingClientRect()
              : { top: 0, left: 0 }
            : staticHamburgerRef.current
            ? staticHamburgerRef.current.getBoundingClientRect()
            : { top: 0, left: 0 }
        }
      />
    </header>
  );
}
