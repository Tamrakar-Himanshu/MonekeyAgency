import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-400 px-6 md:px-16 py-12">
      {/* ===== Top CTA Section ===== */}
      <div className="max-w-7xl mx-auto text-center px-12 md:text-left">
        <h2 className="text-3xl font-semibold text-white">
          Do you have <br /> any questions?
        </h2>
        <p className="mt-3">
          Feel free to send us your questions or request a free consultation.
        </p>
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-2 rounded-md">
          SEND A MESSAGE
        </button>
      </div>

      <hr className="my-10 mx-12 border-gray-700" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-1 flex flex-col md:flex-row md:justify-between md:items-start">
        <p className="text-sm text-gray-300 mb-6 cursor-pointer hover:text-white">
          Disclaimer +
        </p>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row md:justify-between md:items-start">
        {/* LEFT COLUMN: Disclaimer + Nav + Contacts */}
        <div className="md:flex-1">
          {/* Disclaimer */}

          {/* Navigation */}
          <nav className="flex gap-12 text-sm text-gray-300 mb-10">
            <a href="#" className="hover:text-white">
              Services
            </a>
            <a href="#" className="hover:text-white">
              Pricing
            </a>
            <a href="#" className="hover:text-white flex items-center gap-1">
              Sale <span aria-hidden>🔥</span>
            </a>
            <a href="#" className="hover:text-white">
              Blog
            </a>
            <a href="#" className="hover:text-white">
              Contacts
            </a>
          </nav>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-12">
            {/* Phone + Email */}
            <div>
              <p className="text-xs text-gray-500 uppercase mb-2">Sign up</p>
              <p className="text-white text-sm font-medium">+1 890 123-52-61</p>

              <div className="mt-6">
                <p className="text-xs text-gray-500 uppercase mb-2">Email</p>
                <p className="text-white text-sm font-medium">
                  info@logoipsum.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <p className="text-xs text-gray-500 uppercase mb-2">
                Opening hours
              </p>
              <p className="text-white text-sm font-medium">24/7</p>
            </div>

            {/* Spacer */}
            <div className="hidden sm:block" aria-hidden></div>
          </div>
        </div>

        {/* RIGHT COLUMN: Logo + Tagline + Copyright */}
        <div className="mt-12 md:mt-0 md:w-64 flex flex-col items-end">
          {/* Logo */}
          <div className="w-10 h-10 mb-4 text-gray-400" aria-hidden>
            <svg
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="none"
              className="block"
            >
              <g fill="currentColor">
                <circle cx="6" cy="6" r="1.6" />
                <circle cx="12" cy="6" r="1.6" />
                <circle cx="18" cy="6" r="1.6" />
                <circle cx="6" cy="12" r="1.6" />
                <circle cx="12" cy="12" r="1.6" />
                <circle cx="18" cy="12" r="1.6" />
                <circle cx="6" cy="18" r="1.6" />
                <circle cx="12" cy="18" r="1.6" />
                <circle cx="18" cy="18" r="1.6" />
              </g>
            </svg>
          </div>

          {/* Tagline */}
          <p className="text-right text-sm leading-relaxed">
            Don’t know where to get your car tinted?
            <br />
            Logoipsum — practical, safe, and affordable.
          </p>

          {/* Copyright */}
          <p className="text-xs text-gray-500 mt-4">© 2023 — Copyright</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
