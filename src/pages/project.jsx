// pages/Projects.jsx
import React from "react";
import RightImage from "../assets/Projects!.svg";
import ProjectImg from "../assets/project-demo.jpg";
import Footer from "../components/footer";

export default function Projects() {
  const projects = [
    {
      id: 1,
      small: "A peek into how small ideas grew into experiences",
      title: "Designs That Spark New Stories",
      desc: "A peek into how small ideas grew into experiences that people actually enjoy using.",
      img: ProjectImg,
    },
    {
      id: 2,
      small: "A peek into how small ideas grew into experiences",
      title: "Designs That Spark New Stories",
      desc: "A peek into how small ideas grew into experiences that people actually enjoy using.",
      img: ProjectImg,
    },
    {
      id: 3,
      small: "A peek into how small ideas grew into experiences",
      title: "Designs That Spark New Stories",
      desc: "A peek into how small ideas grew into experiences that people actually enjoy using.",
      img: ProjectImg,
    },
    {
      id: 4,
      small: "A peek into how small ideas grew into experiences",
      title: "Designs That Spark New Stories",
      desc: "A peek into how small ideas grew into experiences that people actually enjoy using.",
      img: ProjectImg,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F7F4F2]">
      {/* ---------- Heading ---------- */}
      <section>
        <div className="flex items-start justify-start px-4 sm:px-6 md:px-[15%] lg:px-[15%] w-full mt-10">
          {/* Text + Image */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full">
            {/* Left: Headings with Red Line */}
            <div className="flex flex-col flex-1">
              <div className="flex flex-row gap-2 items-start md:items-strat">
                {/* Responsive Red line */}
                <span className="w-0.5 h-6 md:w-1 md:h-[2.1rem] bg-[#FD2E35]" />
                {/* Text block (all text after red line) */}
                <div>
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#221429] leading-snug">
                    <span className="text-[#221429]">Designs That Spark</span>
                    <br /> New Stories
                  </h1>
                  <p className="text-sm sm:text-md md:text-lg text-[#221429] mt-1">
                    {" "}
                    A peek into how small ideas grew into experiences that
                    <br />
                    people actually enjoy using.
                  </p>
                </div>
              </div>
            </div>
            {/* Right: SVG Image */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              {" "}
              <img
                src={RightImage}
                alt="Showing Projects!"
                className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Project Cards ---------- */}
      <section className="flex-1 w-full px-4 sm:px-6 md:px-[15%] lg:px-[15%] mt-12 mb-16 space-y-20 items-center">
        {projects.map((p) => (
          <div key={p.id} className="w-full">
            {/* Big full-width image */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover
                        transition-transform duration-500 ease-out
                        hover:scale-95"
            />
            <div className="flex flex-row gap-12 mt-6 max-w-[80%] mx-auto justify-center">
              {/* Small top text – right aligned */}
              <p className="text-sm md:text-base text-[#221429]/70 mt-3 text-right">
                {p.small}
              </p>
              <div className="flex flex-col">
                {/* Big Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#221429] mt-1">
                  {p.title}
                </h2>
                {/* Description */}
                <p className="text-base md:text-lg text-[#221429]/80 mt-2">
                  {p.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
