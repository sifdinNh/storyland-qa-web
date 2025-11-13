import React, { useState } from 'react';

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation Header */}
      <header className="w-full px-4 sm:px-6 lg:px-20 py-3">
        <nav className="max-w-[1440px] mx-auto pl-3 lg:pl-12 pr-3 py-3 bg-white rounded-[116px] border border-gray-200 flex items-center gap-8">
          {/* Logo */}
          <div className="flex-1 flex items-start">
            <div className="w-12 h-12 bg-gradient-to-l from-red-400 to-red-500 rounded-xl shadow-[0px_8px_21px_0px_rgba(34,132,182,0.70)] overflow-hidden flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Storyland"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <a
                href="#why"
                className="text-black text-xs font-semibold font-plus-jakarta capitalize hover:text-gray-600 transition-colors"
              >
                why Storyland?
              </a>
              <a
                href="#features"
                className="text-black text-xs font-semibold font-plus-jakarta capitalize hover:text-gray-600 transition-colors"
              >
                features
              </a>
              <a
                href="#plans"
                className="text-black text-xs font-semibold font-plus-jakarta capitalize hover:text-gray-600 transition-colors"
              >
                Plans
              </a>
            </div>

            {/* Get the App Button */}
            <button className="h-11 px-6 py-4 bg-black rounded-[70px] flex items-center gap-2.5 hover:bg-gray-800 transition-colors">
              <div className="w-6 h-6 relative overflow-hidden">
                <div className="w-4 h-4 absolute left-[3.75px] top-[3px] bg-white opacity-20" />
                <div className="w-4 h-4 absolute left-[3px] top-[2.25px] bg-white" />
              </div>
              <span className="text-white text-base font-semibold font-plus-jakarta leading-5">
                Get the App
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 mx-4 sm:mx-6 bg-white rounded-2xl border border-gray-200 p-4">
            <div className="flex flex-col gap-4">
              <a
                href="#why"
                className="text-black text-sm font-semibold font-plus-jakarta hover:text-gray-600 transition-colors"
              >
                Why Storyland?
              </a>
              <a
                href="#features"
                className="text-black text-sm font-semibold font-plus-jakarta hover:text-gray-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#plans"
                className="text-black text-sm font-semibold font-plus-jakarta hover:text-gray-600 transition-colors"
              >
                Plans
              </a>
              <button className="w-full bg-black text-white py-3 rounded-[70px] hover:bg-gray-800 transition-colors flex items-center justify-center gap-2.5">
                <div className="w-5 h-5 relative">
                  <div className="w-4 h-4 absolute left-[2px] top-[2px] bg-white opacity-20" />
                  <div className="w-4 h-4 absolute left-[1px] top-[1px] bg-white" />
                </div>
                <span className="font-semibold font-plus-jakarta">Get the App</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
