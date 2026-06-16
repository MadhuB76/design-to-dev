import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RightImage from "../assets/Projects!.svg";

import { categories, projects } from "../data/projects";
import Footer from "../components/footer";

const ease = [0.22, 1, 0.36, 1];

// Single project card — ported from the :3000 ProjectCard and re-skinned
// to the light portfolio palette (#221429 ink, #FD2E35 accent).
function ProjectCard({ project, size = "large" }) {
  const isLarge = size === "large";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ duration: 0.45, ease }}
      className="group relative flex h-full flex-col"
    >
      <Link to={`/projects/${project.id}`} className="block rounded-2xl">
        <div
          className={`relative overflow-hidden rounded-2xl border border-[#221429]/10 bg-[#E9E4E0] ${
            isLarge ? "aspect-[16/10]" : "aspect-[4/5]"
          }`}
        >
          <img
            src={project.image}
            alt={`${project.title} — ${project.client}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#221429]/70 via-[#221429]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* {project.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-[#221429] backdrop-blur-sm">
              Featured
            </span>
          )} */}

          <span className="absolute right-3 top-3 flex size-9 translate-y-2 items-center justify-center rounded-full bg-white text-[#221429] opacity-0 shadow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="size-4" />
          </span>

          {/* slide-up tags */}
          <div className="absolute inset-x-3 bottom-3 flex translate-y-3 flex-wrap gap-1.5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-[#221429] backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 font-mono text-xs uppercase tracking-wider text-[#FD2E35]">
              {project.client}
            </p>
            <h3
              className={`flex items-center gap-1.5 font-semibold tracking-tight text-[#221429] ${
                isLarge ? "text-2xl md:text-3xl" : "text-lg"
              }`}
            >
              {project.title}
              <ArrowUpRight
                className={`text-[#221429]/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FD2E35] ${
                  isLarge ? "size-5" : "size-4"
                }`}
              />
            </h3>
            <p
              className={`mt-2 leading-relaxed text-[#221429]/65 ${
                isLarge ? "max-w-lg text-base" : "max-w-md text-sm"
              }`}
            >
              {project.description}
            </p>
          </div>
          <span className="shrink-0 font-mono text-xs text-[#221429]/50">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  // Pair projects into golden-ratio rows (large 1.618fr + small 1fr),
  // alternating which side carries the large card.
  const rows = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < filtered.length; i += 2) {
      pairs.push(filtered.slice(i, i + 2));
    }
    return pairs;
  }, [filtered]);

  return (
    <div className="flex flex-col w-full bg-[#F7F4F2] relative">
      {/* ---------- Heading ---------- */}
      <section>
        <div className="flex items-start justify-start px-4 sm:px-6 md:px-[15%] lg:px-[15%] w-full mt-10">
          {/* Text + Image */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full">
            {/* Left: Headings with Red Line */}
            <div className="flex flex-col flex-1">
              <div className="flex flex-row gap-2 items-start md:items-strat">
                <span className="w-0.5 h-6 md:w-1 md:h-[2.1rem] bg-[#FD2E35]" />
                <div>
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#221429] leading-snug">
                    <span className="text-[#221429]">Designs That Spark</span>
                    <br /> New Stories
                  </h1>
                  <p className="text-sm sm:text-md md:text-lg text-[#221429] mt-1">
                    A peek into how small ideas grew into experiences that
                    <br />
                    people actually enjoy using.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: SVG Image (subtle hover lift preserved) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start"
            >
              <motion.img
                src={RightImage}
                alt="Showing Projects!"
                className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- Filter + Project Grid (ported from :3000) ---------- */}
      <section className="w-full px-4 sm:px-6 md:px-[15%] mt-12 mb-24">
        {/* filter bar */}
        <div className="mb-10 rounded-full border border-[#221429]/12 bg-[#F7F4F2]/80 px-3 py-2 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1">
              {categories.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#F7F4F2]"
                        : "text-[#221429]/55 hover:text-[#221429]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="filter-pill"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                        className="absolute inset-0 rounded-full bg-[#221429]"
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
            <span className="hidden shrink-0 pr-2 font-mono text-xs text-[#221429]/50 sm:block">
              {filtered.length.toString().padStart(2, "0")} projects
            </span>
          </div>
        </div>

        {/* golden-ratio rows */}
        <LayoutGroup>
          <motion.div layout className="flex flex-col gap-12 md:gap-20">
            <AnimatePresence mode="popLayout">
              {rows.map((pair, i) => {
                const [a, b] = pair;
                const reverse = i % 2 === 1;
                const cols = !b
                  ? "md:grid-cols-1"
                  : reverse
                    ? "md:grid-cols-[1fr_1.618fr]"
                    : "md:grid-cols-[1.618fr_1fr]";

                return (
                  <motion.div
                    key={`${a.id}-${b?.id ?? "solo"}`}
                    layout
                    className={`grid grid-cols-1 items-center gap-8 md:gap-10 ${cols}`}
                  >
                    {reverse && b ? (
                      <>
                        <ProjectCard project={b} size="small" />
                        <ProjectCard project={a} size="large" />
                      </>
                    ) : (
                      <>
                        <ProjectCard project={a} size="large" />
                        {b && <ProjectCard project={b} size="small" />}
                      </>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </section>

      <section className="w-full px-4 sm:px-6 md:px-[15%] mb-24">
        <div className="relative overflow-hidden rounded-[32px] border border-[#221429]/10 bg-white">
          ```
          {/* background sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {/* <div className="absolute left-[10%] top-[20%] text-[#FD2E35]/20 text-2xl">
              ✦
            </div> */}
            {/* <div className="absolute right-[20%] top-[30%] text-[#FD2E35]/20 text-lg">
              ✦
            </div> */}
            <div className="absolute left-[55%] bottom-[25%] text-[#FD2E35]/20 text-xl">
              ✦
            </div>
          </div>
          <div className="grid md:grid-cols-[1.3fr_1fr] items-center gap-8 px-8 py-10 md:px-12 md:py-12">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#FD2E35] text-xl">✦</span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#221429]/50">
                  Experimental Lab
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#221429]">
                Something’s <span className="text-[#FD2E35]">cooking</span>
              </h2>

              <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-[#221429]/65">
                New ideas are simmering, experiments are in motion, and a few
                ambitious concepts are slowly taking shape. Not everything needs
                to be polished before it deserves attention.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Late Night Ideas",
                  "Random Sketches",
                  "Future Products",
                  "Creative Experiments",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#221429]/10 px-3 py-1 text-xs text-[#221429]/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative flex justify-center items-center">
              <img
                src="/src/assets/Coming Soon.svg"
                alt="Something's cooking"
                className="w-full max-w-[420px] h-auto select-none"
                draggable={false}
              />
            </div>
          </div>
          ```
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
