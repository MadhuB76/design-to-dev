import React from "react";
import { ArrowRight } from "lucide-react";
import HoverButtonGroup from "../components/button";

export default function LetsConnect() {
  return (
    <section
      className="
        relative w-full
        flex flex-col justify-center items-center
        bg-[#221429] text-center px-6 pt-20 pb-20
      "
    >
      {/* Small Heading */}
      <p className="text-white/80 text-lg mb-4">Thinkin' Things?</p>

      {/* Main Heading */}
      <h2
        className="
          text-white text-3xl md:text-5xl
          font-semibold leading-snug max-w-3xl mx-auto mb-2
        "
      >
        In It For Doodles, Quirky Ideas,
        <br className="hidden md:block" />
        And Fun Design Chats.
      </h2>

      {/* Inverted usage (white button on dark #221429 bg) */}
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
    </section>
  );
}
