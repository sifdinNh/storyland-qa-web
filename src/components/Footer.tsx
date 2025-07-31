import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white flex w-full items-center gap-[40px_100px] text-black justify-between flex-wrap px-[120px] py-9 border-[rgba(222,222,222,1)] border-t max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 items-stretch gap-8 my-auto max-md:max-w-full">
        <div className="text-lg font-bold leading-none">
          © 2025 Storyland
        </div>
        <nav className="flex min-w-60 items-center gap-5 text-base font-normal justify-center h-full">
          <div className="self-stretch my-auto">
            Privacy Policy 
          </div>
          <div className="self-stretch my-auto">
            Terms & Conditions
          </div>
        </nav>
      </div>
      <address className="text-base font-normal self-stretch my-auto max-md:max-w-full not-italic">
        Meydan Grandstand, 6th floor, Meydan Road, Nad Al - Sheba, Dubai, U.A.E.
      </address>
    </footer>
  );
};

export default Footer;
