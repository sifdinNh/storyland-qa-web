import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 md:px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="self-stretch py-6 md:py-8 bg-white flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-black text-sm md:text-base font-normal font-inter text-center md:text-left">
            © 2025 Storyland. All rights reserved.
          </div>
          <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
            <Link to="/terms" className="text-black text-sm md:text-base font-normal font-inter underline hover:opacity-70 transition-opacity">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-black text-sm md:text-base font-normal font-inter underline hover:opacity-70 transition-opacity">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
