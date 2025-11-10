import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import RightImage from "../assets/Projects!.svg";
import xlr8ProjectImg from "../assets/XLR8.jpg";
import STM from "../assets/STM.jpg";
import Footer from "../components/footer";

export default function Projects() {
  const projects = [
    {
      id: 1,
      small: "Where passion for speed meets design precision",
      title: "XLR8 — The Pulse of Motorsport, Reimagined",
      desc: "A dynamic platform where racing passion meets technology, bringing F1, MotoGP, and automotive culture together in one thrilling experience.",
      img: xlr8ProjectImg,
      link: "https://www.behance.net/gallery/236896950/XLR8-Mobile-app",
    },
    {
      id: 2,
      small: "Where simplicity meets practicality in digital dining",
      title: "Supertuff Menus — A Fresh Way to Order",
      desc: "A seamless digital dining solution that makes viewing and ordering from restaurant menus effortless and instant.",
      img: STM,
      link: "https://supertuffmenus.com/",
    },
  ];

  // Interactive card: enters by moving up, and responds on mouse enter with a stronger upward motion.
  function InteractiveCard({ project }) {
    const ref = useRef(null);

    // tiny follow cursor movement for subtle interactivity
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const translateX = useTransform(mx, [-1, 1], [-8, 8]);
    const translateY = useTransform(my, [-1, 1], [-8, 8]);

    function handleMove(e) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0 - 1
      const py = (e.clientY - rect.top) / rect.height; // 0 - 1
      const cx = px * 2 - 1; // -1 to 1
      const cy = py * 2 - 1; // -1 to 1
      mx.set(cx);
      my.set(cy);
    }

    function handleLeave() {
      mx.set(0);
      my.set(0);
    }

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-lg overflow-hidden"
        >
          <motion.div
            className="relative transform-gpu will-change-transform"
            style={{ x: translateX, y: translateY }}
            // on hover: lift the whole card up and scale slightly
            whileHover={{ y: -14, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
          >
            <motion.img
              src={project.img}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover block"
              // subtle image parallax: move opposite to container for depth
              style={{
                translateX: useTransform(mx, [-1, 1], [6, -6]),
                translateY: useTransform(my, [-1, 1], [6, -6]),
              }}
            />

            {/* floating info badge (appears on hover) */}
            <motion.div
              className="absolute left-4 top-4 rounded-md bg-white/90 px-4 py-2 shadow-md backdrop-blur"
              initial={{ opacity: 0, y: -6 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-xs text-[#221429]/70">View Project</p>
            </motion.div>

            {/* subtle gradient overlay at bottom to improve readability */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-28"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
              }}
            />
          </motion.div>
        </a>

        <div className="flex flex-row gap-12 mt-6 max-w-[80%] mx-auto justify-center">
          <p className="text-sm md:text-base text-[#221429]/70 mt-3 text-right">
            {project.small}
          </p>

          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-[#221429] mt-1">
              {project.title}
            </h2>
            <p className="text-base md:text-lg text-[#221429]/80 mt-2">
              {project.desc}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

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

            {/* Right: SVG Image (subtle hover lift) */}
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

      {/* ---------- Project Cards ---------- */}
      <section className="flex-1 w-full px-4 sm:px-6 md:px-[15%] lg:px-[15%] mt-12 mb-16 space-y-20 items-center">
        {projects.map((p) => (
          <InteractiveCard key={p.id} project={p} />
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
