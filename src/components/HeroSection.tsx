import React from 'react';
import { StarIcon } from './icons/StarIcon';
import { AppStoreIcon } from './icons/AppStoreIcon';
import { GooglePlayIcon } from './icons/GooglePlayIcon';
import { ShieldIcon } from './icons/ShieldIcon';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full px-5 lg:px-20 py-5">
      <div className="max-w-[1440px] mx-auto bg-rose-50 rounded-[50px] py-16 lg:py-16 px-6 lg:pl-20 lg:pr-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-[584px] flex flex-col justify-center items-start gap-8">
            <div className="w-full flex flex-col justify-start items-start gap-5">
              <h1
                className="w-full text-black font-omnes font-semibold text-[63px] leading-[100%] tracking-[0] align-middle"
              >
                Stories Told in the Voices Your Child Loves Most
              </h1>
              <p className="w-full lg:w-[511px] font-inter font-medium text-[18px] leading-[100%] tracking-[0] align-middle text-black">
                Create magical, personalized stories for your child—narrated by you, your partner, or any family member. Turn simple moments into memories they'll keep forever.
              </p>
            </div>

            <div className="flex flex-col justify-start items-start gap-3">
              {/* App Store Buttons */}
              <div className="flex gap-3">
                <a href="#" className="inline-flex hover:opacity-90 transition-opacity">
                  <AppStoreIcon width={150} height={50} />
                </a>
                <a href="#" className="inline-flex hover:opacity-90 transition-opacity">
                  <GooglePlayIcon width={168} height={50} />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  <ShieldIcon width={16} height={16} />
                  <span className="text-black text-xs font-normal font-nunito leading-5">
                    COPPA-compliant & kid-safe
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} width={13} height={12} />
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
