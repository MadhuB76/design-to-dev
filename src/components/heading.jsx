import React from 'react'
import HoverButtonGroup from '../components/button'
import profilePic from '../assets/picsvg.svg'
// import profilePic from '../assets/Profile.svg'
import MadhuTitle from '../assets/madhu-tittle.svg'
import AnimatedText from '../components/animatedtext'
import { motion } from "framer-motion";

export default function Heading() {
  return (
    <div className='relative'>
      {/* ===== Hero Section ===== */}
      <section
        className='relative flex flex-col justify-between px-4 md:px-12 h-screen-minus-10 md:h-screen-minus-24'
        style={{ paddingRight: '0px', paddingLeft: '0px' }}
      >
        {/* ===== Desktop Layout ===== */}
        <div className='hidden md:flex flex-col h-full'>
          {/* ===== Content Wrapper (Vertically Centered) ===== */}
          <motion.div className='flex flex-1 items-center justify-end w-full max-w-xl mx-auto z-20'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
           style={{ marginRight: '0px' }}>
            <div className='flex flex-row gap-10 items-end'>
              {/* Headings + Red Line */}
              <div className='flex flex-row gap-2 items-start'>
                <span className='w-1 h-[2.1rem] bg-[#FD2E35]' />
                <div>
                 <h1 className='text-xl md:text-3xl sm:text-2xl font-bold text-[#221429] whitespace-nowrap'>
                    <span className='text-[#221429]'>UX/UI Designer</span>
                    <br />
                    Sometimes{" "}
                    <span className='text-[#FD2E35] inline-block w-[7ch]'>
                      <AnimatedText />
                    </span>
                  </h1>
                  <p className='text-[#221429] text-xl mt-2'>
                    Designing sense from curious chaos.
                  </p>
                </div>
              </div>

              {/* Desktop CTA Button */}
              <div className='shrink-0'>
                <HoverButtonGroup
                  text='Schedule a call'
                  arrow='→'
                  onClick={() => console.log('Schedule call clicked!')}
                />
              </div>
            </div>
          </motion.div>

          {/* ===== Bottom: Profile + Title Image ===== */}
          <motion.div className='relative flex justify-between items-end w-full max-w-6xl mx-auto pb-4 md:pb-8 z-0'
          initial={{ x: 0 }}
          animate={{ x: 0 }} >
            {/* MADHU Title Image (Left Bottom) */}
            <motion.img
              src={MadhuTitle}
              alt='MADHU'
              className='w-2/3 h-auto object-cover'
              initial={{ x: '30%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            />

            {/* Profile Picture (Right Bottom) */}
            <motion.img
              src={profilePic}
              alt="UX/UI Designer Madhu's profile photo"
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full origin-bottom-right filter grayscale-[40%]"
              initial={{ x: '-30%' }}
              animate={{ x: 0 }}
              whileHover={{ scale: 1.7, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </motion.div>
        </div>

        {/* ===== Tablet & Mobile Layout ===== */}
        <motion.div className="flex md:hidden flex-col h-full justify-between items-start"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}>
          {/* Title Image at Top */}
          <div className="w-full">
            <img
              src={MadhuTitle}
              alt="MADHU"
              className="w-full h-auto object-cover mb-4"
            />
          </div>

          {/* Headings */}
          <div className="flex flex-col gap-2 max-w-full mx-auto z-20 justify-start items-start">
            <div className="flex flex-row gap-1 items-start">
              {/* Red line */}
              <span className="w-0.5 h-6 bg-[#FD2E35]" />

              {/* Text */}
              <div>
                <h1 className="text-xl font-bold text-[#221429] leading-snug">
                  <span className="text-[#221429]">UX/UI Designer</span>
                  <br />
                  Sometimes <span className="text-[#FD2E35]"> <AnimatedText /> </span>
                </h1>
                <p className="text-[#221429] text-md mt-1">
                  Designing sense from curious chaos.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom: Profile + Mobile Button */}
          <motion.div className="flex flex-row justify-between items-center w-full max-w-full mx-auto pb-4 md:pb-8 z-0"
          initial={{ y: 50, scale: 0.8 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}>
            <img
              src={profilePic}
              alt="UX/UI Designer Madhu's profile photo"
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full filter grayscale"
            />
            <HoverButtonGroup
              text="Schedule a call"
              arrow="→"
              onClick={() => console.log("Schedule call clicked!")}
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
