import React from 'react';
import { AppStoreIcon } from './icons/AppStoreIcon';
import { GooglePlayIcon } from './icons/GooglePlayIcon';

export const FooterCTA: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
        <div className="bg-rose-50 rounded-[50px] pb-16 pt-12 px-6 lg:px-20 relative overflow-hidden">
          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center gap-7">
            {/* Clouds Image */}
            <div className="relative">
              <img
                src="/images/clouds.png"
                alt="Clouds"
                className="w-[512px] h-auto object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-center text-black text-4xl font-semibold font-omnes max-w-3xl">
                Start Creating Magical Memories Today
              </h2>
              <p className="text-center text-black text-lg font-normal font-inter max-w-lg">
                Join families everywhere bringing stories to life through love, laughter, and their own voices.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-3">
                <a href="#" className="inline-flex hover:opacity-90 transition-opacity">
                  <AppStoreIcon width={150} height={50} />
                </a>
                <a href="#" className="inline-flex hover:opacity-90 transition-opacity">
                  <GooglePlayIcon width={168} height={50} />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-4">
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
                      <svg key={i} className="w-4 h-4 text-orange-400" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 1.5l2.09 4.23 4.67.68-3.38 3.29.8 4.65L8 12.15l-4.18 2.2.8-4.65L1.24 6.41l4.67-.68L8 1.5z" />
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
        </div>
      </div>
    </section>
  );
};
