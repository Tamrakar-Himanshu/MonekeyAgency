import React, { useState, useEffect } from "react";

const AboutUsSection = () => {
  const [totalClients, setTotalClients] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [testimonials, setTestimonials] = useState(0);

  // Counter animation effect
  useEffect(() => {
    const animateCounter = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16); // 60fps

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(counter);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    // Start animations with slight delays
    setTimeout(() => animateCounter(setTotalClients, 77), 200);
    setTimeout(() => animateCounter(setTotalProjects, 77), 400);
    setTimeout(() => animateCounter(setTestimonials, 77), 600);
  }, []);

  // Define the reusable style for the top gradient border
  const topBorderStyles = {
    border: "1px solid",
    borderImage:
      "linear-gradient(to top, transparent 0%, #FFD700 50%, #FFD700 80%, transparent 100%)",
    borderImageSlice: 1,
  };

  return (
    <div className="bg-[#0F0F0F] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
        </div>

        {/* About Description */}
        <div className="mb-16">
          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-5xl mx-auto">
            Tech Monkey is a dynamic tech company founded by Varun, an Oxford MBA
            with extensive expertise in entrepreneurship, and Jainam, a visionary
            entrepreneur who co-built and sold their IT startup to Amazon
            alongside Varun. Together, they bring over eight years of combined
            experience in IT, sales, and CRM, creating a foundation of
            innovation and excellence. Headquartered in Dubai, with offices in
            the United Kingdom and the United States, Tech Monkey specializes in
            developing customized technology solutions tailored to the needs of
            modern businesses. Our mission is to empower organizations to thrive
            in a digital-first world by streamlining processes, enhancing
            customer experiences, and driving sustainable growth. At Tech Monkey,
            Varun and Jainam's unique blend of technical expertise and strategic
            insight fuels our commitment to delivering cutting-edge solutions.
            Together, they lead a team dedicated to shaping the future of IT
            with creativity, precision, and impact.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Total Clients Card */}
          <div
            className="relative bg-zinc-900 rounded-xl p-8 text-center gradient-border-box "
          >
            <h3 className="text-gray-400 text-lg mb-4 font-medium">
              Total Clients
            </h3>
            <div className="text-4xl md:text-5xl font-bold text-white">
              {totalClients}
              <span className="text-gray-400 ml-1">+</span>
            </div>
          </div>

          {/* Total Projects Card */}
          <div
            className="relative bg-zinc-900 rounded-2xl p-8 text-center gradient-border-box "
        
          >
            <h3 className="text-gray-400 text-lg mb-4 font-medium">
              Total Projects
            </h3>
            <div className="text-4xl md:text-5xl font-bold text-white">
              {totalProjects}
              <span className="text-gray-400 ml-1">+</span>
            </div>
          </div>

          {/* Testimonials Card */}
          <div
            className="relative bg-zinc-900 rounded-2xl p-8 text-center gradient-border-box "
          >
            <h3 className="text-gray-400 text-lg mb-4 font-medium">
              Testimonials
            </h3>
            <div className="text-4xl md:text-5xl font-bold text-white">
              {testimonials}
              <span className="text-gray-400 ml-1">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;