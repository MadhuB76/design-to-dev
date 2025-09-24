import React from "react";
import HoverButtonGroup from "../components/button";

export default function Home() {
  return (
    <div className="home-page p-6 md:px-[15%]">
      {/* ===== Hero Section ===== */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
        {/* ===== Top Section ===== */}
        <div className="w-full max-w-5xl">
          {/* ===== Desktop / Tablet Layout ===== */}
          <div className="hidden md:flex flex-row items-end justify-end gap-10">
            {/* Headings + Red Line */}
            <div className="flex flex-row gap-3 items-start">
              <span className="w-1 h-10 bg-[#FD2E35]"></span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#221429] leading-snug">
                  <span className="text-[#221429]">UX/UI Designer</span>
                  <br />
                  Sometimes <span className="text-[#FD2E35]">Structured.</span>
                </h1>
                <p className="text-[#221429] text-xl mt-3">
                  Designing sense from curious chaos.
                </p>
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="shrink-0 hidden md:block">
              <HoverButtonGroup
                text="Schedule a call"
                arrow="→"
                onClick={() => console.log("Schedule call clicked!")}
              />
            </div>
          </div>

          {/* ===== Mobile Layout ===== */}
          <div className="flex md:hidden flex-col gap-4">
            <div className="flex flex-row gap-3 items-start">
              <span className="w-1 h-10 bg-[#FD2E35]"></span>
              <div>
                <h1 className="text-3xl font-bold text-[#221429] leading-snug">
                  <span className="text-[#221429]">UX/UI Designer</span>
                  <br />
                  Sometimes <span className="text-[#FD2E35]">Structured.</span>
                </h1>
                <p className="text-[#221429] text-xl mt-3">
                  Designing sense from curious chaos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bottom Section - MADHU Title + Profile + Button ===== */}
      </section>
    </div>
  );
}
