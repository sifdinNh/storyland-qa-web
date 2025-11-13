import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full px-5 lg:px-20 py-5">
      <div className="max-w-[1440px] mx-auto bg-rose-50 rounded-[50px] py-16 lg:py-16 px-6 lg:pl-20 lg:pr-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-[584px] flex flex-col justify-center items-start gap-8">
            <div className="w-full flex flex-col justify-start items-start gap-5">
              <h1 className="w-full text-black text-4xl lg:text-6xl font-semibold font-omnes leading-tight lg:leading-[63px]">
                Instantly Create Personalized Stories<br />for Your Child
              </h1>
              <p className="w-full lg:w-[511px] text-black text-lg font-medium font-inter">
                Create personalized stories in the voices of your loved ones — and bring them to life through AI magic.
              </p>
            </div>

            <div className="flex flex-col justify-start items-start gap-3">
              {/* App Store Buttons */}
              <div className="flex gap-3">
                <a href="#" className="inline-flex">
                  <img
                    src="/images/app-store-badge.png"
                    alt="Download on the App Store"
                    className="h-11"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <button className="hidden bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2.5 hover:bg-gray-800 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </button>
                </a>
                <a href="#" className="inline-flex">
                  <img
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    className="h-11"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <button className="hidden bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2.5 hover:bg-gray-800 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </button>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-orange-400" viewBox="0 0 16 16" fill="none">
                    <rect x="2.67" y="1.33" width="10" height="14" stroke="currentColor" strokeWidth="1.33" />
                  </svg>
                  <span className="text-black text-xs font-normal font-nunito leading-5">
                    COPPA-compliant & kid-safe
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-orange-400" viewBox="0 0 16 16" fill="none">
                        <rect x="1.33" y="1.33" width="14" height="12" fill="currentColor" stroke="currentColor" strokeWidth="1.33" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-black text-xs font-normal font-nunito leading-5">
                    4.9/5 - 2,000+ happy families
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative w-full lg:w-[556px] h-[400px] lg:h-[564px] flex items-center justify-center lg:justify-end overflow-hidden">
            <img
              src="/images/header.png"
              alt="Happy children reading stories"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
