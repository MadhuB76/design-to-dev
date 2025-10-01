// components/AnimatedSendButton.jsx
import React from "react";

export default function AnimatedSendButton({
  text = "Send Story",
  arrow = "→",
  isSubmitting = false,
  onClick,
}) {
  const baseBg = "bg-[#221429]";
  const baseText = "text-[#F7F4F2]";
  const baseBorder = "border";
  const hoverBg = "bg-[#FD2E35]";
  const hoverText = "text-white";

  return (
    <div className="flex flex-col items-start w-full">
      <div
        className={`mt-2 flex flex-wrap items-center gap-0 relative z-10 cursor-pointer ${
          isSubmitting ? "pointer-events-none opacity-50" : "group"
        }`}
      >
        {/* Button 1 - Text Button with vertical slide and red sweep */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`relative overflow-hidden ${baseBg} ${baseText} ${baseBorder} px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-300`}
        >
          {/* Old text slides UP */}
          <span
            className={`relative z-10 block transition-transform duration-300 group-hover:-translate-y-[130%] ${baseText} group-hover:text-white`}
          >
            {isSubmitting ? "Sending..." : text}
          </span>
          {/* New text comes from BELOW */}
          <span
            className={`absolute top-full left-0 w-full h-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:-translate-y-[100%] ${hoverText}`}
          >
            {isSubmitting ? "Sending..." : text}
          </span>
          {/* Background sweep (red color) */}
          <span
            className={`absolute top-0 right-0 w-0 h-full ${hoverBg} transition-all duration-500 group-hover:w-full`}
          ></span>
        </button>

        {/* Button 2 - Arrow Button with horizontal slide and red sweep */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`relative overflow-hidden ${baseBg} ${baseText} ${baseBorder} px-4 py-2 text-sm font-semibold transition-colors duration-300`}
        >
          {/* Old arrow slides RIGHT */}
          <span
            className={`relative z-10 block transition-transform duration-300 group-hover:translate-x-[300%] ${baseText}`}
          >
            {arrow}
          </span>
          {/* New arrow comes from LEFT */}
          <span
            className={`absolute top-0 -left-full w-full h-full flex items-center justify-center z-10 transition-transform duration-300 group-hover:translate-x-[100%] ${hoverText}`}
          >
            {arrow}
          </span>
          {/* Background sweep (red color) */}
          <span
            className={`absolute top-0 left-0 w-0 h-full ${hoverBg} transition-all duration-500 group-hover:w-full`}
          ></span>
        </button>
      </div>
    </div>
  );
}
