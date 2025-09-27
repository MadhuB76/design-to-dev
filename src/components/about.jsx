import React from "react";
import { motion } from "framer-motion";
import HoverButtonGroup from "../components/button";
// import aboutVideo from "../assets/about-video.mp4";

export default function AboutSection() {
  return (
    <section
      className="
        relative w-full text-center 
        min-h-screen
        flex flex-col md:flex-row
        justify-center items-center
        px-6 md:px-12 lg:px-20
        pt-[64px] pb-[64px]
      "
    >
      <div
        className="
          max-w-6xl mx-auto
          flex flex-col md:flex-row
          items-stretch
          gap-12
        "
      >
        {/* ===== Left : Video ===== */}
        <div className="order-6 md:order-1 w-full md:w-1/3 flex justify-center">
          <div className="relative w-full max-w-[350px] aspect-[9/16]">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-md"
              // src={aboutVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        {/* ===== Right : Content ===== */}
        <div className="order-1 md:order-2 w-full md:w-2/3 flex flex-col justify-center ">
          {/* ABOUT Heading */}
          <motion.div
            className="relative max-w-3xl mx-auto md:mx-0"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }} // 👈 plays only first time
            transition={{ duration: 1, ease: "easeOut", delay: 0 }}
          >
            <p className="absolute -top-6 lg:-top-0 left-0 text-sm md:text-base font-semibold uppercase text-gray-700 z-20">
              [ABOUT]
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#221429] leading-snug mb-6 relative z-10">
              <span className="inline-block">Hi,</span>{" "}
              <span className="inline-block">I’m</span>{" "}
              <span className="inline-block">Madhu.</span>{" "}
              <span className="inline-block">I</span>{" "}
              <span className="inline-block">chase</span> <br />
              <span className="inline-block">scribbles</span>{" "}
              <span className="inline-block">across</span>{" "}
              <span className="inline-block">screens.</span>{" "}
              <span className="inline-block">Now</span>{" "}
              <span className="inline-block">I’m</span>{" "}
              <span className="inline-block">tryna</span>{" "}
              <span className="inline-block">turn</span>{" "}
              <span className="inline-block">imagination</span>{" "}
              <span className="inline-block">into</span>{" "}
              <span className="inline-block">living</span>{" "}
              <span className="inline-block">designs.</span>{" "}
            </h2>
          </motion.div>

          {/* ===== My Life + Freelance Row ===== */}
          <div
            className="
              flex flex-col md:flex-row md:justify-between
              gap-8 md:gap-12 mb-8
            "
          >
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left lg:text-left"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              <h3 className="uppercase text-sm font-bold text-[#221429] mb-1">
                My Life
              </h3>
              <p className="text-sm md:text-base text-[#221429]/80 leading-relaxed">
                I’m born in 2002. I live in India. I’m a guy. I love chaos. I
                doodle. I hum songs. I lift at the gym. I sip lemon tea. I like
                glitches. I chase ideas. I read. I’m cool.
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 text-center md:text-left lg:text-left"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            >
              <h3 className="uppercase text-sm font-bold text-[#221429] mb-1">
                Freelance
              </h3>
              <p className="text-sm md:text-base text-[#221429]/80 leading-relaxed">
                I took my first client gig when I was 20, and it felt unreal.
                Then, I kept going. The goal is to build my craft (take care of
                the people I love).
              </p>
            </motion.div>
          </div>

          {/* ===== Socials + Button ===== */}
          <motion.div
            className="flex flex-col md:flex-row md:justify-end md:items-end gap-0 md:gap-2 lg:gap-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          >
            <div className="flex justify-end md:justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#221429] hover:bg-[#FD2E35] hover:text-white transition"
              >
                <i
                  href="https://www.instagram.com/madhu.bavireddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fab fa-instagram"
                ></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#221429] hover:bg-[#FD2E35] hover:text-white transition"
              >
                <i
                  href="www.linkedin.com/in/madhu-bavireddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fab fa-linkedin-in"
                ></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#221429] hover:bg-[#FD2E35] hover:text-white transition"
              >
                <i
                  href="https://x.com/BavireddyM34094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fab fa-x-twitter"
                ></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#221429] hover:bg-[#FD2E35] hover:text-white transition"
              >
                <i
                  href="https://www.behance.net/MadhuBavireddy76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fab fa-behance"
                ></i>
              </a>
            </div>
            <div className="flex justify-end md:justify-end">
              <HoverButtonGroup
                text="Schedule a call"
                arrow="→"
                onClick={() => console.log("Schedule call clicked!")}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
