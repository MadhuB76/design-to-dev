import React, { useState, useEffect } from "react";
import logo from "../assets/M.svg";
import Hamburger from "../assets/jam_menu.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState("");

  // Track scroll for navbar state and progress ring
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
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </a>

        {/* ===== Desktop Links + Hamburger ===== */}
        <div className="hidden md:flex items-center">
          {/* Nav Links */}
          <ul className="flex items-center gap-12 text-[14px] font-medium">
            {links.map((link) => {
              const isActive = activeLink === link.id;
              const isSpecial = link.special;

              return (
                <li key={link.id} className="relative group">
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActiveLink(link.id)}
                    className={`
                      relative transition-colors duration-200
                      ${isSpecial ? "text-[#FD2E35]" : "text-[#221429]"}
                      ${!isSpecial && "hover:text-[#FD2E35]"}
                    `}
                  >
                    {link.label}
                    {/* Underline */}
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

          {/* Inline Hamburger with slightly reduced gap */}
          {!scrolled && (
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="ml-6 relative z-10" // smaller than gap-12
            >
              <img src={Hamburger} alt="Menu" className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* ===== Floating Fixed Hamburger (on scroll) ===== */}
        {scrolled && (
          <div
            className="
              hidden md:flex items-center justify-center
              fixed top-6
              bg-white rounded-full p-3 shadow-lg z-50
              transition-[right] duration-500 ease-out   /* ✅ smooth slide to right */
            "
            style={{
              right: "32px", // exact 32px gap from viewport right edge
            }}
          >
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="relative z-10"
            >
              <img src={Hamburger} alt="Menu" className="h-6 w-6" />
            </button>

            {/* Progress Ring */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
              <circle
                className="text-gray-300"
                stroke="currentColor"
                fill="transparent"
                strokeWidth="0"
                cx="18"
                cy="18"
                r="16"
              />
              <circle
                className="text-[#FD2E35] transition-all duration-300"
                stroke="currentColor"
                fill="transparent"
                strokeWidth="2"
                strokeLinecap="round"
                cx="18"
                cy="18"
                r="16"
                strokeDasharray={`${(scrollProgress / 100) * (2 * Math.PI * 16)} ${2 * Math.PI * 16}`}
                transform="rotate(-90 18 18)"
              />
            </svg>
          </div>
        )}

        {/* ===== Mobile Hamburger ===== */}
        {!scrolled && (
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <img src={Hamburger} alt="Menu" className="h-6 w-6" />
            </button>
          </div>
        )}

        {/* ===== Mobile Dropdown ===== */}
        {open && (
          <div className="absolute top-16 right-0 w-48 bg-white shadow-md z-40 md:hidden rounded-lg overflow-hidden">
            <ul className="flex flex-col items-center gap-4 py-4 text-gray-800 font-medium">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-[#FD2E35]"
                    onClick={() => {
                      setOpen(false);
                      setActiveLink(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
