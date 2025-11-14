import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldIcon } from './icons/ShieldIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left Side - Copyright and Legal Links */}
          <div className="flex flex-col gap-1.5">
            <p className="text-black text-base font-medium font-plus-jakarta">
              © 2025 Storyland. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/terms" className="text-neutral-700 text-sm font-normal font-plus-jakarta underline hover:text-black transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-neutral-700 text-sm font-normal font-plus-jakarta underline hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <div className="flex items-center gap-1.5">
                <ShieldIcon width={16} height={16} />
                <span className="text-neutral-700 text-sm font-medium font-plus-jakarta">
                  COPPA Compliant
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Made with Love by Obytes */}
          <div className="flex items-center gap-1.5">
            <span className="text-black/80 text-base font-medium font-plus-jakarta">
              Made with
            </span>
            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-black/80 text-base font-medium font-plus-jakarta">
              by
            </span>
            <a
              href="https://obytes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-base font-medium font-plus-jakarta hover:text-black transition-colors"
            >
              Obytes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
