import React, { useState } from 'react';

export const SubscriptionPlansSection: React.FC = () => {
  const [pricingPeriod, setPricingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-28 flex flex-col justify-center items-center gap-14">
        {/* Header */}
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <div className="max-w-[611px] w-full text-center text-red-400 text-lg font-semibold font-omnes">
              Subscription Plans
            </div>
            <div className="max-w-[717px] w-full text-center text-black text-3xl md:text-4xl font-semibold font-omnes leading-10">
              Find the Plan That Fits Your Tale
            </div>
            <div className="max-w-[611px] w-full text-center text-black text-base md:text-lg font-normal font-plus-jakarta">
              Storyland lets you turn everyday moments into personalized adventures, using your own voice, or the voices of loved ones.
            </div>
          </div>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center items-start gap-2.5">
          <button
            onClick={() => setPricingPeriod('yearly')}
            className={`w-32 self-stretch rounded-[50px] flex justify-center items-center ${pricingPeriod === 'yearly'
                ? 'bg-blue-900'
                : 'outline outline-1 outline-offset-[-1px] outline-neutral-200'
              }`}
          >
            <div className="px-4 py-2 rounded-[50px] flex justify-center items-center gap-1.5 overflow-hidden">
              <div className="flex justify-center items-center gap-1">
                <div className={`justify-start text-sm font-${pricingPeriod === 'yearly' ? 'semibold' : 'normal'} font-inter leading-6 ${pricingPeriod === 'yearly' ? 'text-white' : 'text-gray-500'
                  }`}>
                  Yearly
                </div>
              </div>
              {pricingPeriod === 'yearly' && (
                <div className="h-5 p-2 bg-yellow-400 rounded-[10px] flex justify-center items-center gap-1">
                  <div className="justify-start text-blue-900 text-xs font-semibold font-inter">17% off</div>
                </div>
              )}
            </div>
          </button>
          <button
            onClick={() => setPricingPeriod('monthly')}
            className={`w-32 self-stretch px-4 py-2 rounded-[50px] flex justify-center items-center gap-1 overflow-hidden ${pricingPeriod === 'monthly'
                ? 'bg-blue-900'
                : 'outline outline-1 outline-offset-[-1px] outline-neutral-200'
              }`}
          >
            <div className={`justify-start text-sm font-${pricingPeriod === 'monthly' ? 'semibold' : 'normal'} font-inter leading-6 ${pricingPeriod === 'monthly' ? 'text-white' : 'text-gray-500'
              }`}>
              Monthly
            </div>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-[880px] w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-3.5">
          {/* Family Plan - Most Popular */}
          <div className="flex-1 max-w-md px-4 py-4 bg-white rounded-3xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.12)] outline outline-1 outline-offset-[-1px] outline-neutral-200 flex flex-col justify-start items-start gap-6 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
              <div className="inline-flex justify-start items-center gap-0.5">
                <div className="h-5 p-2 bg-amber-100 rounded-[10px] flex justify-center items-center gap-1">
                  <div className="w-4 h-4 relative overflow-hidden">
                    <div className="w-2.5 h-3.5 left-[2.50px] top-[1px] absolute bg-red-600" />
                  </div>
                  <div className="justify-start text-amber-700 text-xs font-semibold font-space-grotesk uppercase leading-3 tracking-wide">
                    most popular
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch pb-3 border-b border-neutral-200 flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                      <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                        <div className="justify-start text-zinc-900 text-xl font-semibold font-omnes leading-6">
                          Family Plan
                        </div>
                      </div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-space-grotesk leading-4">
                        Perfect for families with multiple children
                      </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start gap-0.5 flex-wrap content-start">
                      <div className="flex justify-start items-center gap-0.5">
                        <div className="justify-center text-blue-900 text-2xl font-semibold font-omnes leading-7">
                          ${pricingPeriod === 'monthly' ? '14.99' : '12.49'}
                        </div>
                        <div className="justify-center text-blue-900 text-xl font-normal font-omnes leading-6">
                          / month
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch inline-flex justify-start items-center gap-1.5">
                    <div className="flex-1 justify-center text-zinc-900 text-sm font-semibold font-inter leading-4">
                      140 stars per month
                    </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-1.5">
                    <div className="flex-1 justify-center text-zinc-900 text-sm font-normal font-inter leading-4">
                      140 stars = 140 minutes stories
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-2">
              <button className="self-stretch px-6 py-3 bg-blue-900 rounded-full outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-1.5 hover:bg-blue-800 transition-colors">
                <div className="w-4 h-2 bg-white" />
                <div className="w-2.5 h-2.5 bg-white" />
                <div className="text-center justify-center text-white text-base font-space-grotesk capitalize leading-5">
                  Unlock now
                </div>
              </button>
            </div>
          </div>

          {/* Explorer Plan */}
          <div className="flex-1 max-w-md px-4 py-4 bg-white rounded-3xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.12)] outline outline-1 outline-offset-[-1px] outline-neutral-200 flex flex-col justify-between items-start gap-6 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch pb-3 border-b border-neutral-200 flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                      <div className="justify-start text-zinc-900 text-xl font-semibold font-omnes leading-6">
                        Explorer Plan
                      </div>
                    </div>
                    <div className="self-stretch justify-start text-stone-500 text-sm font-space-grotesk leading-4">
                      Perfect for single child families
                    </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-0.5 flex-wrap content-start">
                    <div className="flex justify-start items-center gap-0.5">
                      <div className="justify-center text-blue-900 text-2xl font-semibold font-omnes leading-7">
                        ${pricingPeriod === 'monthly' ? '7.99' : '6.65'}
                      </div>
                      <div className="justify-center text-blue-900 text-xl font-normal font-omnes leading-6">
                        / month
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
                  <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                    <div className="self-stretch inline-flex justify-start items-center gap-1.5">
                      <div className="flex-1 justify-center text-zinc-900 text-sm font-semibold font-inter leading-4">
                        75 stars per month
                      </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-1.5">
                      <div className="flex-1 justify-center text-zinc-900 text-sm font-normal font-inter leading-4">
                        75 stars = 75 minutes stories
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-2">
              <button className="self-stretch px-6 py-3 bg-blue-900 rounded-full outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-1.5 hover:bg-blue-800 transition-colors">
                <div className="w-4 h-2 bg-white" />
                <div className="w-2.5 h-2.5 bg-white" />
                <div className="text-center justify-center text-white text-base font-space-grotesk capitalize leading-5">
                  Unlock now
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
