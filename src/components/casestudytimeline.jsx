import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Check } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

// Ported from the :3000 CaseStudyTimeline, re-skinned to the light palette.
export default function CaseStudyTimeline({ sections, mode }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const containerRef = useRef(null);
  const sectionRefs = useRef({});

  // Progress bar tied to the content column scroll position.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    const nodes = Object.values(sectionRefs.current).filter(Boolean);
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const activeIndex = sections.findIndex((s) => s.id === active);

  // AXLR8 Presentation Mode
  if (mode === "presentation") {
    return (
      <div className="w-full">
        {sections.map((section, index) => {
          if (section.type === "video") {
            return (
              <video
                key={index}
                autoPlay
                muted
                loop
                playsInline
                className="block w-full"
              >
                <source src={section.src} type="video/mp4" />
              </video>
            );
          }

          return (
            <img
              key={index}
              src={section.image}
              alt=""
              className="block w-full"
              loading="lazy"
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
      {/* Left timeline */}
      <aside className="lg:sticky lg:top-28 lg:h-fit">
        <p className="mb-6 font-mono text-xs uppercase tracking-wider text-[#221429]/60">
          Case Study
        </p>
        <nav className="relative">
          {/* track */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#221429]/12" />
          {/* progress fill */}
          <motion.div
            style={{ scaleY: progress }}
            className="absolute left-[11px] top-2 bottom-2 w-px origin-top bg-[#FD2E35]"
          />

          <ul className="flex flex-col gap-1">
            {sections.map((section, i) => {
              const isActive = section.id === active;
              const isDone = i < activeIndex;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => scrollTo(section.id)}
                    className="group flex w-full items-center gap-4 rounded-lg py-2 pr-2 text-left transition-colors"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={`relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 ${
                        isActive
                          ? "border-[#FD2E35] bg-[#FD2E35] text-white scale-110"
                          : isDone
                            ? "border-[#FD2E35] bg-[#FD2E35]/15 text-[#FD2E35]"
                            : "border-[#221429]/15 bg-white text-[#221429]/60"
                      }`}
                    >
                      {isDone ? <Check className="size-3" /> : section.phase}
                    </span>
                    <span
                      className={`text-sm transition-colors duration-300 ${
                        isActive
                          ? "font-semibold text-[#221429]"
                          : "text-[#221429]/60 group-hover:text-[#221429]"
                      }`}
                    >
                      {section.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Right content */}
      <div ref={containerRef} className="flex flex-col gap-20 lg:gap-28">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            className="scroll-mt-28"
          >
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-[#FD2E35]">
                  {section.phase}
                </span>
                <span className="h-px w-8 bg-[#FD2E35]/40" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#221429]/60">
                  {section.label}
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-[#221429] md:text-4xl">
                {section.heading}
              </h2>

              {section.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="mt-8 overflow-hidden rounded-3xl border border-[#221429]/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              )}

              <div className="mt-8 flex flex-col gap-4">
                {section.body.map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-[#221429]/65 md:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {section.highlights && (
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {section.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-[#221429]/12 bg-white px-4 py-3 text-sm"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-[#FD2E35]" />
                      <span className="text-[#221429]">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}
