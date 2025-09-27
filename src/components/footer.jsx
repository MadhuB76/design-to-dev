import React from "react";

export default function Footer() {
  return (
    <footer
      className="
        relative w-full
        flex flex-col justify-center items-center
        text-center px-6 pt-[64px] pb-[16px]
      "
    >
      {/* Heading */}
      <h4 className="text-[#221429] text-lg md:text-lg font-semibold mb-8">
        FOLLOW ON
      </h4>

      {/* Social Links */}
      <div
        className="
          w-full
            flex flex-col md:flex-row
            justify-between md:justify-around
            items-center
            gap-6 md:gap-8
            text-[#221429] text-2xl md:text-3xl font-bold mb-12
        "
      >
        <a
          href="www.linkedin.com/in/madhu-bavireddy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FD2E35] transition-colors"
        >
          LINKEDIN
        </a>
        <a
          href="https://www.instagram.com/madhu.bavireddy/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FD2E35] transition-colors"
        >
          INSTAGRAM
        </a>
        <a
          href="https://x.com/BavireddyM34094"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FD2E35] transition-colors"
        >
          X
        </a>
        <a
          href="https://www.behance.net/MadhuBavireddy76"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FD2E35] transition-colors"
        >
          Behance
        </a>
      </div>

      {/* Tagline */}
      <p className="text-[#FD2E35] text-xm md:text-xl">
        let’s create amazing designs together!
      </p>

      {/* Copyright */}
      <p className="text-[#221429] text-base md:text-lg">© 2025</p>
    </footer>
  );
}
