import React from "react";
import Heading from "../components/heading";
import MeDoodle from "../assets/medoodle.svg";

export default function Home() {
  return (
    <div className="home-page bg-[#F7F4F2] min-h-screen flex flex-col items-center justify-center">
      <div className="px-6 md:px-[15%] w-full">
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


    </div>
  );
}
