import React, { useState, useEffect } from "react";
import logo from "../assets/M.svg";
import Hamburger from "../assets/jam_menu.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState(""); // No link selected on home page

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 50); // threshold for navbar
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

        {/* Links + Hamburger */}
        <ul className="hidden md:flex items-center gap-12 text-[14px] font-medium">
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
                      absolute bottom-[-5px] left-0 h-[2.5px] rounded-full transition-all duration-300
                      ${!isSpecial && isActive ? "group-hover:w-full" : ""}
                    `}
                    style={{
                      width: isSpecial
                        ? "50%" // Let’s Talk default
                        : isActive
                        ? "50%" // Selected normal link
                        : "0%",  // Default no line
                      transformOrigin: isSpecial ? "left" : "center",
                      backgroundColor: isSpecial
                        ? "#FD2E35" // Let’s Talk always FD2E35
                        : isActive
                        ? "#221429" // Selected normal link underline same as text
                        : "transparent",
                    }}
                  />
                </a>
              </li>
            );
          })}



          {/* Hamburger inside the same row */}
          <li
            className={`
              flex items-center justify-center transition-all duration-300
              ${scrolled
                ? "fixed top-4 right-4 bg-white rounded-full p-3 shadow-lg z-50"
                : "relative"
              }
            `}
          >
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <img src={Hamburger} alt="Menu" className="h-6 w-6" />
            </button>

            {/* Scroll progress circle */}
            {scrolled && (
              <div
                className="absolute inset-0 rounded-full border-2 border-gray-300"
                style={{
                  background: `conic-gradient(#FF0000 ${scrollProgress}%, transparent ${scrollProgress}%)`,
                }}
              />
            )}
          </li>
        </ul>

        {/* Mobile Hamburger */}
        {!scrolled && (
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <img src={Hamburger} alt="Menu" className="h-6 w-6" />
            </button>
          </div>
        )}

        {/* Mobile Dropdown */}
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

      {/* Optional: remove extra CSS hover since we control via React */}
    </header>
  );
}
