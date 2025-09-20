import React, { useState } from "react";
import { Menu } from "lucide-react";
import logo from "../assets/M.svg";
import Hamburger from "../assets/jam_menu.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="flex items-center justify-between py-8 px-32 relative">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-16 text-gray-800 font-medium">
          <li>
            <a href="#projects" className="hover:text-red-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#process" className="hover:text-red-500 transition">
              Process
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-red-500 transition">
              Experience
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="#contact"
              className="text-red-500 border-b-2 border-red-500 pb-1 hover:text-red-600"
            >
              Let’s Talk
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a href="/">
              <img src={Hamburger} alt="Logo" className="h-6 w-auto" />
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-800"
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden z-50">
            <ul className="flex flex-col items-center gap-6 py-6 text-gray-800 font-medium">
              <li>
                <a
                  href="#projects"
                  className="hover:text-red-500"
                  onClick={() => setOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-red-500"
                  onClick={() => setOpen(false)}
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-red-500"
                  onClick={() => setOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="#contact"
                  className="text-red-500 border-b-2 border-red-500 pb-1"
                  onClick={() => setOpen(false)}
                >
                  Let’s Talk
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="/">
                  <img src={Hamburger} alt="Logo" className="h-10 w-auto" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
