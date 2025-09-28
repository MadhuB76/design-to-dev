import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/M.svg";
import Hamburger from "../assets/jam_menu.svg";
import OverlayMenu from "./overlaymenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState("");

  // Track hamburger position
  const [hamburgerPos, setHamburgerPos] = useState({ top: 0, left: 0 });

  // Refs for all hamburger buttons
  const staticHamburgerRef = useRef(null);
  const floatingHamburgerRef = useRef(null);
  const mobileHamburgerRef = useRef(null);

  const location = useLocation();

  // Update active link on route change
  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    setActiveLink(path);
  }, [location]);

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

  // Helper to get correct hamburger ref for overlay positioning
  const getHamburgerRef = () => {
    if (window.innerWidth >= 1024) {
      // Desktop
      return scrolled ? floatingHamburgerRef : staticHamburgerRef;
    } else {
      // Mobile + Tablet
      return mobileHamburgerRef;
    }
  };

  // Click handler for hamburger buttons
  const handleHamburgerClick = (ref) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHamburgerPos({ top: rect.top, left: rect.left });
      setOpen(!open);
    }
  };

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center py-6 px-6 lg:px-[15%] relative">
        {/* ===== Logo ===== */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto sm:h-10 md:h-12 lg:h-14"
          />
        </Link>

        {/* ===== Desktop Links + Hamburger ===== */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-12 text-[14px] font-medium">
            {links.map((link) => {
              const isActive = activeLink === link.id;
              const isSpecial = link.special;
              return (
                <li key={link.id} className="relative group">
                  <Link
                    to={`/${link.id}`}
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
                        ${
                          isSpecial
                            ? "bg-[#FD2E35] w-[50%] group-hover:w-full"
                            : ""
                        }
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
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Inline Hamburger (shows only when not scrolled) */}
          {!scrolled && (
            <button
              onClick={() => handleHamburgerClick(staticHamburgerRef)}
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
                onClick={() => handleHamburgerClick(floatingHamburgerRef)}
                ref={floatingHamburgerRef}
                aria-label="Toggle menu"
                className="relative z-10"
              >
                <img src={Hamburger} alt="Menu" className="h-6 w-6" />
              </button>

              <svg
                className="absolute inset-0 w-full h-full"
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

        {/* ===== Mobile/Tablet Hamburger ===== */}
        <div className="lg:hidden">
          {!scrolled ? (
            <button
              onClick={() => handleHamburgerClick(mobileHamburgerRef)}
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
                onClick={() => handleHamburgerClick(mobileHamburgerRef)}
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
          getHamburgerRef() && getHamburgerRef().current
            ? getHamburgerRef().current.getBoundingClientRect()
            : { top: 0, left: 0 }
        }
      />
    </header>
  );
}
