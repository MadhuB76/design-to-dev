import React from "react";
import Heading from "../components/heading";
import MeDoodle from "../assets/medoodle.svg";
import HoverButtonGroup from '../components/button'

export default function Home() {
  return (
    <div className="home-page bg-[#F7F4F2] min-h-screen flex flex-col items-center justify-center">
      <div className="px-6 md:px-[15%] lg:px-[15%] w-full">
        <Heading />
      </div>

      {/* Quirky Superpowers Section */}
      <div className="relative w-full bg-[#FD2E35] text-center min-h-screen 
                      flex flex-col justify-center items-center
                      pt-[env(safe-area-inset-top)] 
                      pb-[env(safe-area-inset-bottom)] 
                      pl-[env(safe-area-inset-left)] 
                      pr-[env(safe-area-inset-right)] mt-16">

        {/* Illustration */}
        <div className="py-20 flex flex-col items-center justify-center w-full">
        <img
          src={MeDoodle}
          alt="My Quirky Superpowers Illustration"
          className="w-full max-w-[70%] h-auto"
        />

        {/* Headings */}
        <h2 className="text-white text-3xl md:text-4xl font-semibold leading-snug">
          My Quirky
        </h2>
        <h3 className="text-[#221429] text-4xl md:text-5xl font-bold mb-6">
          Superpowers
        </h3>

        {/* Paragraph */}
        <p className="text-white text-base md:text-lg leading-relaxed w-full max-w-[60%] px-4">
          I can obsess over button radius at 2 AM without breaking a sweat,
          doodle entire concepts on random napkins, rant endlessly about
          brutalist design while sipping lemon tea, and — if that’s not
          enough — I can even recite the alphabet backwards.
        </p>
      </div>
      </div>

      {/* About Section */}
      <section
        className="
          relative w-full text-center
          min-h-screen
          flex flex-col justify-center items-center
          pt-[64px] pb-[64px]
          md:pt-[env(safe-area-inset-top)]
          md:pb-[env(safe-area-inset-bottom)]
          pl-[env(safe-area-inset-left)]
          pr-[env(safe-area-inset-right)]
          max-w-[70%]
        "
      >
        <div
          className="
            max-w-6xl mx-auto
            flex flex-col md:flex-row
            items-stretch md:items-stretch
            gap-12
          "
        >
          {/* ===== Left : Video ===== */}
          <div
            className="
              order-6 md:order-1
              w-full md:w-1/3
              flex
            "
          >
            <div className="relative w-full aspect-[9/16] md:aspect-auto md:flex-1">
              <video
                className="absolute md:relative inset-0 w-full h-full object-cover rounded-xl shadow-md"
                src="../assets/medoodle.svg"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          {/* ===== Right : Content ===== */}
          <div
            className="
              order-1 md:order-2
              w-full md:w-2/3
              flex flex-col justify-center
              h-full
            "
          >
            <div className="relative max-w-3xl mx-auto md:mx-0">
              {/* [ABOUT] */}
              <p
                className="
                  absolute -top-6 lg:-top-0 left-0
                  text-sm md:text-base font-semibold uppercase text-gray-700
                  z-20
                "
              >
                [ABOUT]
              </p>

              {/* Main Heading */}
              <h2
                className="
                  text-xl sm:text-2xl md:text-3xl
                  font-bold text-[#221429] leading-snug mb-6
                  relative z-10
                "
              >
                <span className="inline-block">Hi,</span>{" "}
                <span className="inline-block">I’m</span>{" "}
                <span className="inline-block">Madhu.</span>{" "}
                <span className="inline-block">I</span>{" "}
                <span className="inline-block">chase</span>{" "}
                <br className="hidden sm:block" />
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
                <span className="inline-block">designs.</span>
              </h2>
            </div>

            {/* ===== My Life + Freelance Row ===== */}
            <div
              className="
                flex flex-col md:flex-row md:justify-between md:items-start
                gap-8 md:gap-12
                mb-8
              "
            >
              <div className="w-full md:w-1/2 text-left">
                <h3 className="uppercase text-sm font-bold text-[#221429] mb-1">My Life</h3>
                <p className="text-sm md:text-base text-[#221429]/80 leading-relaxed">
                  I’m born in 2002. I live in India. I’m a guy. I love chaos. I doodle.
                  I hum songs. I lift at the gym. I sip lemon tea. I like glitches.
                  I chase ideas. I read. I’m cool.
                </p>
              </div>

              <div className="w-full md:w-1/2 text-left">
                <h3 className="uppercase text-sm font-bold text-[#221429] mb-1">Freelance</h3>
                <p className="text-sm md:text-base text-[#221429]/80 leading-relaxed">
                  I took my first client gig when I was 20, and it felt unreal. Then, I kept going.
                  The goal is to build my craft (take care of the people I love).
                </p>
              </div>
            </div>

            {/* ===== Socials + Button ===== */}
            <div
              className="
                flex flex-col md:flex-row md:justify-end md:items-end
                gap-4
              "
            >
              <div className="flex justify-center md:justify-end gap-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#221429] hover:bg-[#FD2E35] hover:text-white transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#221429] hover:bg-[#FD2E35] hover:text-white transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-[#221429] hover:bg-[#FD2E35] hover:text-white transition">
                  <i className="fab fa-x-twitter"></i>
                </a>
              </div>

              <div className="flex justify-center md:justify-end">
                <HoverButtonGroup
                  text="Schedule a call"
                  arrow="→"
                  onClick={() => console.log("Schedule call clicked!")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
