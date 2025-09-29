// pages/Experience.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import RightImage from "../assets/Experience.svg";
import Footer from "../components/footer";

// --- Data ---
const experienceData = [
  {
    company: "Sugarinc Network Solutions Pvt. Ltd.",
    role: "UX/UI Designer",
    duration: "Mar 2025 – Present",
    type: "Company",
    link: "https://zerodigital.co/",
    bullets: [
      "Crafting intuitive websites and mobile apps from wireframe to prototype.",
      "Lead design flows, partner with developers to keep specs on point, and run iterative reviews so every release meets both client goals and real-world user needs.",
      "Conduct iterative design reviews to maintain alignment between client expectations, user needs, and technical feasibility.",
    ],
  },
  {
    company: "Codetta Digital",
    role: "UX/UI & Graphic Designer",
    duration: "Nov 2023 – May 2024",
    type: "Company",
    link: "https://www.codetta.digital/",
    bullets: [
      "Held a dual role as UX/UI designer and graphic designer, creating brand graphics and marketing assets based on client briefs.",
      "Designed and developed responsive websites on Shopify, translating wireframes and prototypes into high-quality, production-ready designs.",
      "Collaborated with clients to refine visual identities and ensure consistency across digital platforms.",
    ],
  },
];

// Placeholder for Freelance Data (Currently empty to represent "disabled" state)
const freelanceData = [
  // Example structure commented out
];

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

// --- Job Card Component for Reusability ---
const JobCard = ({ job, isLast }) => (
  <motion.div
    className={`mb-10 ${!isLast ? "border-b border-gray-300 pb-10" : ""}`}
    variants={itemVariants}
  >
    <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#FD2E35] mb-1">
      <a
        href={job.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {job.company || job.project}
      </a>
    </h4>
    <p className="text-sm sm:text-base md:text-lg font-semibold text-[#221429]">
      {job.role} —{" "}
      <span className="text-gray-600 font-normal">{job.duration}</span>
    </p>
    <ul className="list-disc list-outside ml-5 mt-3 text-xs sm:text-sm md:text-base text-gray-700 space-y-1">
      {job.bullets.map((bullet, i) => (
        <li key={i}>{bullet}</li>
      ))}
    </ul>
  </motion.div>
);

export default function Experience() {
  const [activeSection, setActiveSection] = useState("company");
  const companyRef = useRef(null);
  const freelanceRef = useRef(null);

  const hasFreelanceProjects = freelanceData.length > 0;

  const handleSectionChange = (section, ref) => {
    setActiveSection(section);
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const getLineClass = (sectionName) => {
    const isBaseClass = activeSection === sectionName ? "w-1/2" : "w-1/2";
    const hoverClass = "group-hover:w-full";
    const colorClass =
      activeSection === sectionName
        ? "bg-[#FD2E35]"
        : "bg-gray-400 group-hover:bg-[#FD2E35]";
    return `absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${colorClass} ${isBaseClass} ${hoverClass}`;
  };

  return (
    <div className="flex flex-col w-full bg-[#F7F4F2]">
      {/* ---------- Heading Section ---------- */}
      <section>
        <div className="flex items-start justify-start px-4 sm:px-6 md:px-[10%] lg:px-[15%] w-full mt-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full">
            <div className="flex flex-col flex-1">
              <div className="flex flex-row gap-2 items-start">
                <span className="w-0.5 h-6 md:w-1 md:h-[2.1rem] bg-[#FD2E35]" />
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#221429] leading-snug">
                    <span className="text-[#221429]">
                      Shaped By Real Projects
                    </span>
                    <br /> And Practice
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-[#221429] mt-1">
                    My curious and evolving path that sharpened my skills to
                    <br className="hidden sm:block" /> grow with every
                    challenge.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              <img
                src={RightImage}
                alt="Experience Graphic"
                className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Experience Details Section ---------- */}
      <motion.section
        className="px-4 sm:px-6 md:px-[10%] lg:px-[15%] w-full mt-12 md:mt-20 mb-10 max-w-[1200px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Sticky Header for Buttons */}
        <div className="sticky top-0 bg-[#F7F4F2] pt-4 pb-6 z-10 border-b border-gray-300">
          <div className="flex justify-start items-end w-full gap-12 flex-wrap sm:flex-nowrap">
            {/* Companies Button */}
            <button
              onClick={() => handleSectionChange("company", companyRef)}
              className="flex flex-col items-start focus:outline-none transition-all duration-300 group relative pb-1"
            >
              <p
                className={` text-sm sm:text-base md:text-lg text-[#221429] mt-1 transition-all duration-300 ${
                  activeSection === "company"
                    ? "text-[#221429]"
                    : "text-gray-500 group-hover:text-gray-700"
                }`}
              >
                Companies
              </p>
              <h2
                className={`text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  activeSection === "company"
                    ? "text-[#FD2E35]"
                    : "text-gray-400"
                }`}
              >
                At Scale. With Impact.
              </h2>
              <span className={getLineClass("company")} />
            </button>

            {/* Freelance Projects Button */}
            <button
              onClick={() => {
                if (hasFreelanceProjects)
                  handleSectionChange("freelance", freelanceRef);
              }}
              disabled={!hasFreelanceProjects}
              className={`flex flex-col items-start text-left focus:outline-none transition-all duration-300 group relative pb-1 ${
                !hasFreelanceProjects ? "cursor-not-allowed" : ""
              }`}
            >
              <p
                className={`text-sm sm:text-base md:text-lg text-[#221429] mt-1 transition-all duration-300 ${
                  activeSection === "freelance" && hasFreelanceProjects
                    ? "text-[#FD2E35]"
                    : !hasFreelanceProjects
                    ? "text-gray-300"
                    : "text-gray-500 group-hover:text-gray-700"
                }`}
              >
                Freelance Projects
              </p>
              <h2
                className={`text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  activeSection === "freelance" && hasFreelanceProjects
                    ? "text-gray-500"
                    : !hasFreelanceProjects
                    ? "text-gray-300"
                    : "text-gray-400"
                }`}
              >
                Making Ideas Happen.
              </h2>
              {hasFreelanceProjects && (
                <span className={getLineClass("freelance")} />
              )}
            </button>
          </div>
        </div>

        {/* Companies Content */}
        <motion.div
          ref={companyRef}
          className="flex flex-col gap-10 md:gap-12 pt-12 scroll-mt-32"
          variants={containerVariants}
        >
          {experienceData
            .filter((job) => job.type === "Company")
            .map((job, index, arr) => (
              <JobCard
                key={index}
                job={job}
                isLast={index === arr.length - 1}
              />
            ))}
        </motion.div>

        {/* Freelance Content */}
        {hasFreelanceProjects && (
          <motion.div
            ref={freelanceRef}
            className="flex flex-col gap-10 md:gap-12 pt-20 mt-10 border-t border-gray-300 scroll-mt-32"
            variants={containerVariants}
          >
            {freelanceData
              .filter((job) => job.type === "Freelance")
              .map((job, index, arr) => (
                <JobCard
                  key={index}
                  job={job}
                  isLast={index === arr.length - 1}
                />
              ))}
          </motion.div>
        )}
      </motion.section>

      {/* ---------- Footer ---------- */}
      <Footer />
    </div>
  );
}
