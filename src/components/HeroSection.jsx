"use client";
import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const HeroSection = () => {
  // motion value for angle
  const angle = useMotionValue(90);

  React.useEffect(() => {
    const controls = animate(angle, [-10, 10, -10], {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    });
    return controls.stop;
  }, [angle]);

  // dynamic gradient background
  const background = useTransform(
    angle,
    (val) =>
      `linear-gradient(${val}deg,
      #0F0F0F 0%,
      #0F0F0F 40%,
     #AC7C00  70%,
     #AC7C00  100%)`
  );

  return (
    <motion.div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden text-white"
      style={{ background }}
    >
      {/* Centered Logo on Top */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2">
          <img
            src="https://www.techmonkey.us/_next/image?url=%2Ftechmonkeys2.png&w=640&q=75"
            alt="Logo"
            className="h-14 md:h-16"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-8 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Section: Text and Button */}
        <div className="lg:w-full text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Grow your Business with
            <span className="text-[#FFD34D]"> Tech</span>
            <p className="text-[#FFD34D]">Monkeys</p>{" "}
          </h1>
          <p className="text-md mb-8 max-w-md mx-auto lg:mx-0">
            Unlock growth, efficiency, and innovation with future-ready
            technology solutions tailored to your unique needs.
          </p>
          <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            Enquire Now
          </button>
        </div>

        {/* Right Section: Testimonials Card */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-[#FFD34D] text-black p-6 rounded-lg shadow-xl max-w-sm w-full">
            <div className="flex -space-x-2 overflow-hidden mb-4 justify-center lg:justify-start">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Founder 1"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Founder 2"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Founder 3"
              />
            </div>
            <p className="text-lg font-medium mb-4 text-center lg:text-left">
              Trusted By More than 25 Founders from Across the Globe
            </p>
            <a
              href="/testimonials"
              className="flex items-center justify-center lg:justify-start text-black hover:underline"
            >
              View Testimonials <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
