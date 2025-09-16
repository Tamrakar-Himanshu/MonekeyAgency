import React, { useState } from "react";

const VideoCarouselSection = ({ projects = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Default data if no projects passed
  const defaultProjects = [
    {
      id: 1,
      badge: "Explore Our Portfolio",
      title: "Website Redesign for Sartawi Properties",
      description:
        "Unlock growth, efficiency, and innovation with future-ready technology solutions tailored to your unique needs.",
      buttonText: "View Project",
      videoPreview: {
        thumbnail: "sartawi-preview.jpg",
        brandName: "sartawi",
        heroTitle: "Discover Your Dream Property",
        heroSubtitle: "with Sartawi",
        navigation: ["Overview", "About Us"],
      },
      services: [
        {
          icon: "🏠",
          title: "Homes for Sale",
          description:
            "Browse our extensive collection of luxury homes for sale and find your perfect property with professional guidance.",
        },
        {
          icon: "🏢",
          title: "Property Management",
          description:
            "Comprehensive property management services to maximize your real estate investment returns and maintain property value.",
        },
      ],
    },
    {
      id: 2,
      badge: "Explore Our Portfolio",

      title: "E-Commerce Mobile App Development",
      description:
        "Transform your business with cutting-edge mobile commerce solutions that drive sales and enhance customer experience.",
      buttonText: "View Project",
      videoPreview: {
        thumbnail: "ecommerce-preview.jpg",
        brandName: "shopify",
        heroTitle: "Build Your Online Store",
        heroSubtitle: "with Shopify",
        navigation: ["Products", "Solutions"],
      },
      services: [
        {
          icon: "🛒",
          title: "Online Store",
          description:
            "Create beautiful, mobile-responsive online stores that convert visitors into loyal customers.",
        },
        {
          icon: "💳",
          title: "Payment Solutions",
          description:
            "Secure, fast payment processing with multiple payment methods and global currency support.",
        },
      ],
    },
  ];

  const projectsData = projects.length > 0 ? projects : defaultProjects;
  const currentProject = projectsData[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!currentProject) return null;

  return (
    <div className="bg-black min-h-screen flex flex-col p-10 justify-center relative overflow-hidden">
      {/* Main Content - Full Width Yellow Background */}
      <div className="bg-gradient-to-t from-[#B48700] to-[#FFD34D] flex-1 flex items-center rounded-2xl">
        <div className="max-w-7xl mx-auto w-full px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content Panel */}
            <div className="relative">
              {/* Top Badge */}
              <div className="inline-block bg-[#FFD34D] text-black px-4 py-2 rounded-full text-sm font-medium mb-8 neumorphic-shadow custom-border">
                {currentProject.badge}
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                  {currentProject.title}
                </h1>

                <p className="text-black text-lg leading-relaxed opacity-80 max-w-md">
                  {currentProject.description}
                </p>

                <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  {currentProject.buttonText}
                </button>
              </div>

              {/* Navigation Dots - Bottom Left */}
              <div className="flex gap-3 mt-12">
                {projectsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-12 bg-black"
                        : "w-3 bg-black bg-opacity-30 hover:bg-opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Content - Video Preview */}
            <div className="space-y-6">
              {/* Video/Image Preview */}
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
                {/* Browser Header */}
                {/* <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1"></div>
                    <div className="text-white text-sm font-medium">
                      {currentProject.videoPreview.brandName}
                    </div>
                  </div>
                </div> */}

                {/* Main Preview Content */}
                <div
                  className="flex-1 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center relative"
                  style={{ minHeight: "300px" }}
                >
                  {/* City skyline background effect */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-8 right-16 w-12 h-24 bg-gray-600 opacity-40"></div>
                    <div className="absolute bottom-8 right-32 w-8 h-32 bg-gray-500 opacity-50"></div>
                    <div className="absolute bottom-8 right-44 w-16 h-28 bg-gray-600 opacity-30"></div>
                  </div>

                  <div className="relative z-10 text-center space-y-4">
                    <h2 className="text-white text-2xl lg:text-3xl font-bold">
                      {currentProject.videoPreview.heroTitle}
                    </h2>
                    <p className="text-white text-lg">
                      {currentProject.videoPreview.heroSubtitle}
                    </p>

                    {/* Search/Action Bar */}
                    <div className="flex bg-white rounded-full overflow-hidden shadow-lg mt-6 max-w-md mx-auto">
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 text-sm font-medium">
                        Buy
                      </button>
                      <button className="bg-white text-gray-700 px-4 py-2 text-sm">
                        Rent
                      </button>
                      <input
                        type="text"
                        placeholder="Search for properties..."
                        className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none min-w-0"
                      />
                      <button className="bg-black text-white px-4 py-2 text-sm font-medium">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Logos Strip */}
              <div className="flex items-center justify-between bg-gray-900 rounded-xl px-8 py-4">
                {/* {currentProject.clientLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="text-white text-lg font-bold tracking-wider"
                  >
                    {logo}
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarouselSection;
