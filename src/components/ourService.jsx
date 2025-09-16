import React from 'react';

const ServicesComponent = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
            At Tech Monkey, we deliver innovative, tailored solutions to meet your business needs. Our experienced team 
            ensures every solution addresses current demands and supports future growth. We specialize in key tech areas 
            that help your business stay competitive and thrive in a digital-first world.
          </p>
        </div>

        {/* Services Grid - 1 large card left, 4 small cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          
          {/* Large Card - Web Development (Left side, spans full height) */}
          <div className="lg:col-span-1 lg:row-span-2 bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-700/80 transition-all duration-300 border border-gray-700/50 flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">Web Development and Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unlock growth, efficiency, and innovation with future-ready technology solutions tailored to your unique needs.
              </p>
            </div>
            <div className="flex-1 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl flex items-center justify-center border border-gray-600/30 min-h-48">
              {/* Browser window mockup */}
              <div className="w-32 h-20 bg-gray-800 rounded-lg border border-gray-600 shadow-lg relative">
                <div className="flex items-center p-1 border-b border-gray-600">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-2 space-y-2">
                  <div className="h-1 bg-gray-600 rounded w-full"></div>
                  <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-600 rounded w-5/6"></div>
                  <div className="flex space-x-1">
                    <div className="h-3 bg-gray-600 rounded w-8"></div>
                    <div className="h-3 bg-gray-600 rounded w-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - 2x2 Grid of smaller cards */}
          
          {/* Mobile App Development - Top Right */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-700/80 transition-all duration-300 border border-gray-700/50">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-3 text-white">Mobile App Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unlock growth, efficiency, and innovation with future-ready technology solutions tailored to your unique needs.
              </p>
            </div>
            <div className="h-24 bg-gradient-to-br from-amber-900/20 to-amber-800/20 rounded-xl flex items-center justify-center border border-gray-600/30">
              <div className="w-12 h-18 bg-gray-800 rounded-lg border border-gray-600 relative shadow-lg">
                <div className="w-full h-3 bg-gray-700 rounded-t-lg"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-600 rounded-full"></div>
                <div className="p-1 space-y-1">
                  <div className="h-0.5 bg-gray-600 rounded w-3/4"></div>
                  <div className="h-0.5 bg-gray-600 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Real Estate Solutions - Top Far Right */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-700/80 transition-all duration-300 border border-gray-700/50">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-3 text-white">Real Estate Solutions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unlock growth, efficiency, and innovation with future-ready technology solutions tailored to your unique needs.
              </p>
            </div>
            <div className="h-24 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl flex items-center justify-center border border-gray-600/30">
              <div className="flex items-end space-x-1">
                {[8, 12, 16, 10, 14, 18, 12, 8].map((height, i) => (
                  <div 
                    key={i} 
                    className="bg-gradient-to-t from-gray-600 to-gray-500 rounded-t-sm" 
                    style={{ width: '3px', height: `${height}px` }}
                  >
                    <div className="w-full h-0.5 bg-amber-400/60 rounded-t-sm"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* E Commerce Solutions - Bottom Right */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-700/80 transition-all duration-300 border border-gray-700/50">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-3 text-white">E Commerce Solutions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unlock growth, efficiency, and innovation with future-ready technology solutions tailored to your unique needs.
              </p>
            </div>
            <div className="h-24 bg-gradient-to-br from-green-900/20 to-emerald-800/20 rounded-xl flex items-center justify-center border border-gray-600/30 relative">
              <div className="w-16 h-12 bg-gray-800 rounded border border-gray-600 shadow-lg">
                <div className="flex items-center p-0.5 border-b border-gray-600">
                  <div className="flex space-x-0.5">
                    <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-1 space-y-1">
                  <div className="h-0.5 bg-gray-600 rounded w-full"></div>
                  <div className="flex justify-between">
                    <div className="h-0.5 bg-gray-600 rounded w-1/3"></div>
                    <div className="h-0.5 bg-green-500 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">$</div>
            </div>
          </div>

          {/* Tech Support Consulting - Bottom Far Right */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-700/80 transition-all duration-300 border border-gray-700/50">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-3 text-white">Tech Support Consulting</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unlock growth, efficiency, and innovation with future-ready technology solutions tailored to your unique needs.
              </p>
            </div>
            <div className="h-24 bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-xl flex items-center justify-center border border-gray-600/30 relative">
              {/* Network diagram */}
              <div className="relative w-16 h-16">
                {/* Central node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                
                {/* Outer nodes */}
                {[0, 72, 144, 216, 288].map((angle, i) => {
                  const radian = (angle * Math.PI) / 180;
                  const x = Math.cos(radian) * 20;
                  const y = Math.sin(radian) * 20;
                  return (
                    <div key={i}>
                      {/* Connection line */}
                      <div 
                        className="absolute top-1/2 left-1/2 bg-blue-400/50 origin-left"
                        style={{
                          width: '20px',
                          height: '0.5px',
                          transform: `translate(-50%, -50%) rotate(${angle}deg)`
                        }}
                      ></div>
                      {/* Node */}
                      <div 
                        className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
                        style={{
                          top: `calc(50% + ${y}px - 3px)`,
                          left: `calc(50% + ${x}px - 3px)`
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;