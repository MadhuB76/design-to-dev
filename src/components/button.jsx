import React from "react";

export default function HoverButtonGroup({
  text = "Schedule a call",
  arrow = "→",
  onClick,
  invert = false,
}) {
  const baseBg = invert ? "bg-white" : "bg-[#221429]";
  const baseText = invert ? "text-[#221429]" : "text-white";

  return (
    <div
      className="mt-6 flex flex-wrap items-center gap-0.5 relative z-10 cursor-pointer group"
      onClick={onClick}
    >
      {/* Button 1 - vertical text slide */}
      <button
        className={`relative overflow-hidden ${baseBg} ${baseText} px-4 py-2 text-sm transition-colors duration-300`}
      >
        {/* Old text slides UP slightly more than full height */}
        <span
          className={`relative z-10 block transition-transform duration-300 group-hover:-translate-y-[130%] ${baseText} group-hover:text-white`}
        >
          {text}
        </span>
        {/* New text comes from BELOW */}
        <span
          className={`absolute top-full left-0 w-full h-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:-translate-y-[100%] ${baseText} group-hover:text-white`}
        >
          {text}
        </span>
        {/* Background sweep */}
        <span className="absolute top-0 right-0 w-0 h-full bg-[#FD2E35] transition-all duration-500 group-hover:w-full"></span>
      </button>

      {/* Button 2 - horizontal text slide (opposite) */}
      <button
        className={`relative overflow-hidden ${baseBg} ${baseText} px-4 py-2 text-sm transition-colors duration-300`}
      >
        {/* Old arrow slides RIGHT slightly more than full width */}
        <span
          className={`relative z-10 block transition-transform duration-300 group-hover:translate-x-[300%] ${baseText} group-hover:text-white`}
        >
          {arrow}
        </span>
        {/* New arrow comes from LEFT */}
        <span
          className={`absolute top-0 -left-full w-full h-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:translate-x-[100%] ${baseText} group-hover:text-white`}
        >
          {arrow}
        </span>
        {/* Background sweep */}
        <span className="absolute top-0 left-0 w-0 h-full bg-[#FD2E35] transition-all duration-500 group-hover:w-full"></span>
      </button>
    </div>
  );
}
