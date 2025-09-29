// pages/Process.jsx
import React from "react";
import LetsConnect from "../components/letsconnect";
import Footer from "../components/footer";
import StrategyImage from "../assets/Research.svg";
import ResearchImage from "../assets/UI Design.svg";
import ExecutionImage from "../assets/Testing.svg";

export default function Process() {
  // REDUCED STICKY TOP: Changed md:top-24 to md:top-0 to push the sticky element to the very top.
  // This minimizes the required height for the section, making it un-stick sooner.
  const leftStickyClasses = `
    order-1 md:order-none flex flex-col flex-1 md:sticky md:top-0 md:self-start 
    items-center md:items-start text-center md:text-left
  `;

  // Define mobile order for the Right Part
  const rightScrollableClasses =
    "order-2 md:order-none flex-1 flex flex-col gap-20";

  // Reduced padding significantly to ensure instant transition.
  // We'll use a small value (like 5rem) to account for any browser/layout discrepancies.
  const rightPaddingClass = "md:pb-20"; // pb-20 is 5rem

  return (
    <div className="flex flex-col w-full bg-[#F7F4F2]">
      {/* ---------- Heading ---------- */}
      <section>
        <div className="flex items-start justify-start px-4 sm:px-6 md:px-[15%] lg:px-[15%] max-w-[80%] w-full mt-10">
          {/* Text + Image */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full">
            {/* Left: Headings with Red Line */}
            <div className="flex flex-col flex-1">
              <div className="flex flex-row gap-2 items-start md:items-strat">
                {/* Responsive Red line */}
                <span className="w-0.5 h-6 md:w-2 md:h-[2.1rem] bg-[#FD2E35]" />
                {/* Text block (all text after red line) */}
                <div>
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#221429] leading-snug">
                    <span className="text-[#221429]">What I Do?</span>
                  </h1>
                  <p className="text-sm sm:text-md md:text-lg text-[#221429] mt-1">
                    I design with purpose, blending creativity and strategy to
                    build solutions that feel natural. Every experience is
                    crafted to not only look good but work seamlessly for users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="relative w-full flex flex-col justify-center px-4 sm:px-6 md:px-[15%] lg:px-[15%] max-w-[90%] mt-20 mb-20">
        {/* Step-1: Strategy */}
        <div
          // REMOVED mb-4. Now sections abut each other.
          className="relative flex flex-col md:flex-row w-full max-w-[1200px] 
                     px-2 sm:px-4 md:px-0 gap-6 sm:gap-8 md:gap-10"
        >
          {/* Left Sticky Part: top-0 for immediate transition */}
          <div className={leftStickyClasses}>
            <p className="text-sm text-gray-500 mb-2">Strategy</p>
            <img
              src={StrategyImage}
              alt="Process Illustration"
              className="w-40 sm:w-44 md:w-48 h-auto mb-4"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-[#221429]">
              UX Research
            </h2>
          </div>

          {/* Right Scrollable Part Wrapper: Added small, fixed bottom padding */}
          <div className={`${rightScrollableClasses} ${rightPaddingClass}`}>
            <div className="flex flex-col gap-6">
              <p className="text-sm text-gray-500">Flow</p>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-lg">1. Define Problem’s</h3>
                  <p className="text-gray-700">
                    Aligning objectives with user needs. Meaningful questions
                    from the start solves design.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">2. Research</h3>
                  <p className="text-gray-700">
                    Gather insights, uncover patterns, behavior, expectations,
                    and pain points.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">3. Scenarios</h3>
                  <p className="text-gray-700">
                    Create realistic contexts, visualize how users interact with
                    the product in real-life contexts.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">4. Strategize</h3>
                  <p className="text-gray-700">
                    Translate findings into clear opportunities for design.
                    Guide the user experience moving forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step-2: Research */}
        <div
          // REMOVED mb-4
          className="relative flex flex-col md:flex-row w-full max-w-[1200px] 
                     px-2 sm:px-4 md:px-0 gap-6 sm:gap-8 md:gap-10"
        >
          {/* Left Sticky Part: top-0 for immediate transition */}
          <div className={leftStickyClasses}>
            <p className="text-sm text-gray-500 mb-2">Design</p>
            <img
              src={ResearchImage}
              alt="Process Illustration"
              className="w-40 sm:w-44 md:w-48 h-auto mb-4"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-[#221429]">
              User Interface
            </h2>
          </div>

          {/* Right Scrollable Part Wrapper: Added small, fixed bottom padding */}
          <div className={`${rightScrollableClasses} ${rightPaddingClass}`}>
            <div className="flex flex-col gap-6">
              <p className="text-sm text-gray-500">Flow</p>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-lg">1. Design Language</h3>
                  <p className="text-gray-700">
                    Consistent visual identity, typography, color schemes, and
                    hierarchy. Recognizable and engaging look across the
                    product.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    2. Sketch & Wireframe
                  </h3>
                  <p className="text-gray-700">
                    Quick low-fidelity sketches to explore possibilities.
                    Setting the foundation for structure and layout ideas.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">3. Layout</h3>
                  <p className="text-gray-700">
                    Organize elements. Clarity, readability, and balance. guides
                    the user’s smoothly through the interface.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">4. Interface</h3>
                  <p className="text-gray-700">
                    Translating wireframes into interfaces. Ensure every element
                    feels natural to interact with. Shape the final look and
                    feel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step-3: Execution */}
        <div
          // REMOVED mb-4
          className="relative flex flex-col md:flex-row w-full max-w-[1200px] 
                     px-2 sm:px-4 md:px-0 gap-6 sm:gap-8 md:gap-10"
        >
          {/* Left Sticky Part: top-0 for immediate transition */}
          <div className={leftStickyClasses}>
            <p className="text-sm text-gray-500 mb-2">Finale</p>
            <img
              src={ExecutionImage}
              alt="Process Illustration"
              className="w-40 sm:w-44 md:w-48 h-auto mb-4"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-[#221429]">
              Prototyping, <br /> testing!
            </h2>
          </div>

          {/* Right Scrollable Part Wrapper: Use no padding for the final step */}
          <div className={`${rightScrollableClasses} md:pb-0`}>
            <div className="flex flex-col gap-6">
              <p className="text-sm text-gray-500">Flow</p>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-lg">1. Prototype</h3>
                  <p className="text-gray-700">
                    Develop mid or high-fidelity prototypes for realistic
                    testing. Bring ideas closer to the final experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">2. Flow Checks</h3>
                  <p className="text-gray-700">
                    Define journeys and map interaction points. Ensures the
                    product feels logical and smooth to navigate.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    3. Interaction Design
                  </h3>
                  <p className="text-gray-700">
                    Enhance usability with intuitive navigation and subtle
                    micro-interactions. Making experiences engaging and
                    effortless.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">4. Test & Iterate</h3>
                  <p className="text-gray-700">
                    Collect feedback through usability testing and refine
                    designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <LetsConnect />

      {/* Footer */}
      <Footer />
    </div>
  );
}
