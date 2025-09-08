import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="justify-center items-center bg-white self-center flex w-full flex-col px-[70px] py-[18px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1216px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
        <div className="flex items-center gap-8 my-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/65cbd1d96b3d424cbbb13fb05f357c27/79a1d204d62004de8b84640217827c5f6cfdbd7e?placeholderIfAbsent=true"
            alt="Storyland Logo"
            className="aspect-[1] object-contain w-9 shadow-[0px_6px_15px_rgba(34,132,182,0.7)] self-stretch my-auto rounded-[9px]"
          />
        </div>
        <nav className="flex items-center gap-3 overflow-hidden text-sm font-semibold flex-wrap max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-2 overflow-hidden text-gray-900 leading-none my-auto">
            <Link to="/" className="self-stretch flex items-center gap-1 whitespace-nowrap my-auto px-2 py-1 hover:bg-gray-100 rounded transition-colors">
              <div className="text-gray-900 self-stretch my-auto">
                Home
              </div>
            </Link>
            <Link to="/privacy" className="self-stretch flex items-center gap-1 my-auto px-2 py-1 hover:bg-gray-100 rounded transition-colors">
              <div className="text-gray-900 self-stretch my-auto">
                Privacy Policy
              </div>
            </Link>
            <Link to="/terms" className="self-stretch flex items-center gap-1 my-auto px-2 py-1 hover:bg-gray-100 rounded transition-colors">
              <div className="text-gray-900 self-stretch my-auto">
                Terms & Conditions
              </div>
            </Link>
            <Link to="/support" className="self-stretch flex items-center gap-1 my-auto px-2 py-1 hover:bg-gray-100 rounded transition-colors">
              <div className="text-gray-900 self-stretch my-auto">
                Support
              </div>
            </Link>
          </div>
          <button className="justify-center items-center self-stretch flex gap-2 text-white leading-none w-[162px] bg-[#012468] my-auto px-5 py-[13px] rounded-[57.798px] hover:bg-[#013a7a] transition-colors">
            <div className="self-stretch my-auto">
              Coming Soon
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
