import React from 'react';
import { AppStoreIcon } from './icons/AppStoreIcon';
import { GooglePlayIcon } from './icons/GooglePlayIcon';
import { ShieldIcon } from './icons/ShieldIcon';

export const FooterCTA: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-5 lg:px-20">
        <div className="bg-rose-50 rounded-[30px] md:rounded-[50px] pb-12 md:pb-16 pt-10 md:pt-12 px-5 md:px-6 lg:px-20 relative overflow-hidden">
          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center gap-6 md:gap-7">
            {/* Clouds Image */}
            <div className="relative">
              <img
                src="/images/clouds.png"
                alt="Clouds"
                className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[512px] h-auto object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <h2 className="text-center text-black text-xl md:text-2xl lg:text-4xl font-semibold font-omnes max-w-3xl px-4">
                Join thousands of families bringing stories to life through laughter, imagination, and their own voices.
              </h2>
              <p className="text-center text-black text-sm md:text-base lg:text-lg font-normal font-inter max-w-lg px-4">
                Create moments your child will remember forever.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <a href="https://apps.apple.com/us/app/storyland-family-stories/id6749536560" className="inline-flex hover:opacity-90 transition-opacity">
                  <AppStoreIcon width={150} height={50} />
                </a>
                <a href="#" className="inline-flex hover:opacity-90 transition-opacity">
                  <GooglePlayIcon width={168} height={50} />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                <div className="flex items-center gap-1">
                  <ShieldIcon width={14} height={14} className="md:w-4 md:h-4" />
                  <span className="text-black text-[11px] md:text-xs font-normal font-nunito leading-5">
                    COPPA-compliant & kid-safe
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-400" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 1.5l2.09 4.23 4.67.68-3.38 3.29.8 4.65L8 12.15l-4.18 2.2.8-4.65L1.24 6.41l4.67-.68L8 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-black text-[11px] md:text-xs font-normal font-nunito leading-5">
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
