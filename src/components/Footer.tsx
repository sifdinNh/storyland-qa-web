import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-5 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="self-stretch py-8 bg-white flex justify-between items-center">
          <div className="text-black text-base font-normal font-inter">
            © 2025 Storyland. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-black text-base font-normal font-inter underline hover:opacity-70 transition-opacity">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-black text-base font-normal font-inter underline hover:opacity-70 transition-opacity">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
