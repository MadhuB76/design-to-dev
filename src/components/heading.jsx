import React from 'react'
import HoverButtonGroup from '../components/button'
import profilePic from '../assets/profile.png'
import MadhuTitle from '../assets/madhu-tittle.svg'

export default function Heading() {
  return (
    <div className='relative'>
      {/* ===== Hero Section ===== */}
      <section
        className='
          relative
          flex flex-col
          justify-between
          h-screen
          px-4 md:px-12
        ' style={{ paddingRight: '0px', paddingLeft: '0px', height: 'calc(100vh - 24vh)'}}>
        {/* ===== Desktop Layout ===== */}
        <div className='hidden md:flex flex-col h-full'>
          {/* ===== Content Wrapper (Vertically Centered) ===== */}
          <div className='flex flex-1 items-center justify-end w-full max-w-xl mx-auto z-20' style={{ marginRight: '0px' }}>
            <div className='flex flex-row gap-10 items-end'>
              {/* Headings + Red Line */}
              <div className='flex flex-row gap-2 items-start'>
                <span className='w-[0.2rem] h-[2.1rem] bg-[#FD2E35]' />
                <div>
                  <h1 className='text-xl md:text-3xl sm:text-2xl font-bold text-[#221429] whitespace-nowrap'>
                    <span className='text-[#221429]'>UX/UI Designer</span>
                    <br />
                    Sometimes <span className='text-[#FD2E35]'>Structured.</span>
                  </h1>
                  <p className='text-[#221429] text-lg mt-2'>
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
          </div>

          {/* ===== Bottom: Profile + Title Image ===== */}
          <div className='relative flex justify-between items-end w-full max-w-6xl mx-auto pb-4 md:pb-8 z-0'>
            {/* MADHU Title Image (Left Bottom) */}
            <img
              src={MadhuTitle}
              alt='MADHU'
              className='w-1/3 h-auto object-cover'
            />

            {/* Profile Picture (Right Bottom) */}
            <img
              src={profilePic}
              alt="UX/UI Designer Madhu's profile photo"
              className='w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full transition-transform duration-300 hover:scale-110'
            />
          </div>
        </div>

        {/* ===== Tablet & Mobile Layout ===== */}
        <div className="flex md:hidden flex-col h-full justify-between px-4">
          {/* Title Image at Top */}
          <div className="w-full">
            <img
              src={MadhuTitle}
              alt="MADHU"
              className="w-full h-auto object-cover mb-4"
            />
          </div>

          {/* Headings */}
          <div className="flex flex-col gap-2 max-w-full mx-auto z-20">
            <div className="flex flex-row gap-3 items-start">
              {/* Red line */}
              <span className="w-0.5 h-6 bg-[#FD2E35]" />

              {/* Text */}
              <div>
                <h1 className="text-xl font-bold text-[#221429] leading-snug">
                  <span className="text-[#221429]">UX/UI Designer</span>
                  <br />
                  Sometimes <span className="text-[#FD2E35]">Structured.</span>
                </h1>
                <p className="text-[#221429] text-md mt-3">
                  Designing sense from curious chaos.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom: Profile + Mobile Button */}
          <div className="flex flex-col items-center gap-4 mb-4">
            <img
              src={profilePic}
              alt="UX/UI Designer Madhu's profile photo"
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full"
            />
            <HoverButtonGroup
              text="Schedule a call"
              arrow="→"
              onClick={() => console.log("Schedule call clicked!")}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
