import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DownloadIcon } from './icons/DownloadIcon';
import { ShieldIcon } from './icons/ShieldIcon';

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string, hash?: string) => {
    if (hash) {
      navigate(path);
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Header */}
      <header className="w-full px-4 sm:px-6 lg:px-20 py-3">
        <nav className="max-w-[1440px] mx-auto pl-3 lg:pl-12 pr-3 py-3 bg-white rounded-[116px] border border-gray-200 flex items-center gap-8">
          {/* Logo */}
          <div className="flex-1 flex items-start">
            <Link to="/" className="w-12 h-12 bg-gradient-to-l from-red-400 to-red-500 rounded-xl shadow-[0px_8px_21px_0px_rgba(34,132,182,0.70)] overflow-hidden flex items-center justify-center hover:opacity-90 transition-opacity">
              <img
                src="/images/logo.png"
                alt="Storyland"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => handleNavigation('/', '#why')}
                className="text-black text-xs font-semibold font-plus-jakarta capitalize hover:text-gray-600 transition-colors cursor-pointer"
              >
                why Storyland?
              </button>
              <button
                onClick={() => handleNavigation('/', '#features')}
                className="text-black text-xs font-semibold font-plus-jakarta capitalize hover:text-gray-600 transition-colors cursor-pointer"
              >
                features
              </button>
              <button
                onClick={() => handleNavigation('/', '#plans')}
                className="text-black text-xs font-semibold font-plus-jakarta capitalize hover:text-gray-600 transition-colors cursor-pointer"
              >
                Plans
              </button>
            </div>


            {/* Get the App Button */}
            <button className="h-11 px-6 py-4 bg-black rounded-[70px] flex items-center gap-2.5 hover:bg-gray-800 transition-colors">
              <DownloadIcon width={20} height={20} />
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
              <button
                onClick={() => handleNavigation('/', '#why')}
                className="text-black text-sm font-semibold font-plus-jakarta hover:text-gray-600 transition-colors text-left"
              >
                Why Storyland?
              </button>
              <button
                onClick={() => handleNavigation('/', '#features')}
                className="text-black text-sm font-semibold font-plus-jakarta hover:text-gray-600 transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => handleNavigation('/', '#plans')}
                className="text-black text-sm font-semibold font-plus-jakarta hover:text-gray-600 transition-colors text-left"
              >
                Plans
              </button>
              <div className="flex items-center gap-2 py-2">
                <ShieldIcon width={16} height={16} />
                <span className="text-black text-sm font-medium font-plus-jakarta">
                  COPPA Compliant
                </span>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-[70px] hover:bg-gray-800 transition-colors flex items-center justify-center gap-2.5">
                <DownloadIcon width={20} height={20} />
                <span className="font-semibold font-plus-jakarta">Get the App</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
