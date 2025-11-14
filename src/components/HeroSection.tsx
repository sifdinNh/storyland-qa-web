import React from 'react';
import { StarIcon } from './icons/StarIcon';
import { AppStoreIcon } from './icons/AppStoreIcon';
import { GooglePlayIcon } from './icons/GooglePlayIcon';
import { ShieldIcon } from './icons/ShieldIcon';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-5 lg:px-20 py-4 md:py-5">
      <div className="max-w-[1440px] mx-auto bg-rose-50 rounded-[30px] md:rounded-[50px] py-12 md:py-16 px-5 md:px-6 lg:pl-20 lg:pr-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Illustration - First on mobile, second on desktop */}
          <div className="relative w-full lg:w-[556px] h-[280px] sm:h-[320px] md:h-[400px] lg:h-[564px] flex items-center justify-center lg:justify-end overflow-hidden order-1 lg:order-2">
            <img
              src="/images/header.png"
              alt="Happy children reading stories"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Left Content - Second on mobile, first on desktop */}
          <div className="w-full lg:w-[584px] flex flex-col justify-center items-start gap-6 md:gap-8 order-2 lg:order-1">
            <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-5">
              <h1
                className="w-full text-black font-omnes font-semibold text-[26px] sm:text-[32px] md:text-[48px] lg:text-[63px] leading-[115%] sm:leading-[110%] md:leading-[105%] lg:leading-[100%] tracking-[0] align-middle"
              >
                Stories Told in the Voices Your Child Loves Most
              </h1>
              <p className="w-full lg:w-[511px] font-inter font-medium text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-[145%] sm:leading-[140%] md:leading-[120%] lg:leading-[100%] tracking-[0] align-middle text-black">
                Create magical, personalized stories for your child—narrated by you, your partner, or any family member. Turn simple moments into memories they'll keep forever.
              </p>
            </div>

            <div className="flex flex-col justify-start items-start gap-3">
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                <a href="https://apps.apple.com/us/app/storyland-family-stories/id6749536560" className="inline-flex hover:opacity-90 transition-opacity">
                  <AppStoreIcon width={140} height={46} className="sm:w-[150px] sm:h-[50px]" />
                </a>
                <a href="#" className="inline-flex hover:opacity-90 transition-opacity">
                  <GooglePlayIcon width={156} height={46} className="sm:w-[168px] sm:h-[50px]" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <div className="flex items-center gap-1">
                  <ShieldIcon width={14} height={14} className="md:w-4 md:h-4" />
                  <span className="text-black text-[11px] md:text-xs font-normal font-nunito leading-5">
                    COPPA-compliant & kid-safe
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} width={12} height={11} className="md:w-[13px] md:h-[12px]" />
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
