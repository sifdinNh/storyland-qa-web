import React, { useState } from 'react';
import { MostPopularIcon } from './icons/MostPopularIcon';
import { StarIcon } from './icons/StarIcon';

interface PricingCardProps {
  title: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  monthlyStars: number;
  yearlyStars: number;
  isPopular?: boolean;
  pricingPeriod: 'monthly' | 'yearly';
  isSelected?: boolean;
  onSelect?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  monthlyStars,
  yearlyStars,
  isPopular = false,
  pricingPeriod,
  isSelected = false,
  onSelect
}) => {
  const stars = pricingPeriod === 'monthly' ? monthlyStars : yearlyStars;
  return (
    <div
      onClick={onSelect}
      className={`w-full md:flex-1 md:max-w-md px-4 py-4 bg-white rounded-3xl shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.12)] outline outline-2 outline-offset-[-2px] ${isSelected ? 'outline-blue-900' : 'outline-neutral-200'} flex flex-col justify-start items-start gap-6 overflow-hidden cursor-pointer transition-all hover:shadow-md`}>
      <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
        {/* Badge or placeholder */}
        <div className="inline-flex justify-start items-center gap-0.5">
          {isPopular ? (
            <div className="h-5 p-2 bg-amber-100 rounded-[10px] flex justify-center items-center gap-1">
              <MostPopularIcon width={16} height={16} />
              <div className="justify-start text-amber-700 text-xs font-semibold font-space-grotesk uppercase leading-3 tracking-wide">
                most popular
              </div>
            </div>
          ) : (
            <div className="h-5 invisible">
              <div className="h-5 p-2 bg-amber-100 rounded-[10px] flex justify-center items-center gap-1">
                <MostPopularIcon width={16} height={16} />
                <div className="justify-start text-amber-700 text-xs font-semibold font-space-grotesk uppercase leading-3 tracking-wide">
                  placeholder
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch pb-3 border-b border-neutral-200 flex flex-col justify-start items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="self-stretch inline-flex justify-start items-start gap-1.5">
                  <div className="justify-start text-zinc-900 text-xl font-semibold font-omnes leading-6">
                    {title}
                  </div>
                </div>
                <div className="self-stretch justify-start text-stone-500 text-sm font-space-grotesk leading-4">
                  {description}
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-0.5 flex-wrap content-start">
                <div className="flex justify-start items-center gap-0.5">
                  <div className="justify-center text-blue-900 text-2xl font-semibold font-omnes leading-7">
                    ${pricingPeriod === 'monthly' ? monthlyPrice : yearlyPrice}
                  </div>
                  <div className="justify-center text-blue-900 text-xl font-normal font-omnes leading-6">
                    / {pricingPeriod === 'monthly' ? 'month' : 'year'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch inline-flex justify-start items-center gap-1.5">
              <StarIcon width={13} height={12} />
              <div className="flex-1 justify-center text-zinc-900 text-sm font-semibold font-inter leading-4">
                {stars.toLocaleString()} stars per {pricingPeriod === 'monthly' ? 'month' : 'year'}
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-1.5">
              <StarIcon width={13} height={12} />
              <div className="flex-1 justify-center text-zinc-900 text-sm font-normal font-inter leading-4">
                {stars.toLocaleString()} stars = {stars.toLocaleString()} minutes stories
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type PlanType = 'all-stars' | 'explorer';

export const SubscriptionPlansSection: React.FC = () => {
  const [pricingPeriod, setPricingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('all-stars');
  const [email, setEmail] = useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleGetStarted = () => {
    if (!isValidEmail(email)) return;
    const encodedEmail = encodeURIComponent(email);
    const paymentUrl = `https://pay.rev.cat/ljaknhfizwcfmciz/${encodedEmail}`;
    window.open(paymentUrl, '_blank');
  };

  const emailIsValid = isValidEmail(email);

  return (
    <section id="plans" className="py-12 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-28 flex flex-col justify-center items-center">
        {/* Header */}
        <div className="mt-8 md:mt-[60px] flex flex-col justify-center items-center gap-6 md:gap-8">
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <div className="max-w-[611px] w-full text-center text-[#D45971] text-sm md:text-base lg:text-lg font-semibold font-omnes">
              Our Plans
            </div>
            <div className="max-w-[717px] w-full text-center text-black text-xl md:text-3xl lg:text-4xl font-semibold font-omnes leading-7 md:leading-9 lg:leading-10">
              Find the Plan That Brings Your Stories to Life
            </div>
            <div className="max-w-[611px] w-full text-center text-black text-xs md:text-sm lg:text-base font-normal font-plus-jakarta">
              Turn everyday moments into personalized adventures. Create unlimited stories in your own voice or the voices of your loved ones.
            </div>
          </div>
        </div>

        {/* Pricing Toggle */}
        <div className="mt-4 flex flex-col justify-center items-center gap-3">
          <div className="inline-flex justify-center items-center gap-0 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-neutral-200 p-1">
            <button
              onClick={() => setPricingPeriod('yearly')}
              className={`px-4 py-2 rounded-full flex justify-center items-center gap-1.5 overflow-hidden transition-colors ${pricingPeriod === 'yearly'
                ? 'bg-blue-900'
                : 'bg-transparent'
                }`}
            >
              <div className={`justify-start text-sm ${pricingPeriod === 'yearly' ? 'font-semibold' : 'font-normal'} font-inter leading-6 ${pricingPeriod === 'yearly' ? 'text-white' : 'text-gray-500'
                }`}>
                Yearly
              </div>
              <div className="h-5 px-2 py-1 bg-yellow-400 rounded-[10px] flex justify-center items-center whitespace-nowrap">
                <div className="text-blue-900 text-xs font-semibold font-inter">17% off</div>
              </div>
            </button>
            <button
              onClick={() => setPricingPeriod('monthly')}
              className={`px-4 py-2 rounded-full flex justify-center items-center gap-1 overflow-hidden transition-colors ${pricingPeriod === 'monthly'
                ? 'bg-blue-900'
                : 'bg-transparent'
                }`}
            >
              <div className={`justify-start text-sm ${pricingPeriod === 'monthly' ? 'font-semibold' : 'font-normal'} font-inter leading-6 ${pricingPeriod === 'monthly' ? 'text-white' : 'text-gray-500'
                }`}>
                Monthly
              </div>
            </button>
          </div>

        </div>
        {/* Info Banner */}
        <div className="mt-4 max-w-[880px] w-full px-6 py-3 bg-yellow-50 rounded-xl flex  items-center gap-2">
          <span className="text-2xl">💡</span>
          <div className="text-gray-700 text-sm font-normal font-space-grotesk">
            <span className="font-semibold">Pay on this page</span> and <span className="font-semibold">get instant access.</span> Just sign in after payment to start using the app.
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-4 max-w-[880px] w-full flex flex-col md:flex-row justify-center items-stretch gap-3.5">
          <PricingCard
            title="All-stars Plan"
            description="Perfect for families with multiple children"
            monthlyPrice="19.99"
            yearlyPrice="199.99"
            monthlyStars={225}
            yearlyStars={3000}
            isPopular={true}
            pricingPeriod={pricingPeriod}
            isSelected={selectedPlan === 'all-stars'}
            onSelect={() => setSelectedPlan('all-stars')}
          />
          <PricingCard
            title="Explorer Plan"
            description="Perfect for single child families"
            monthlyPrice="9.99"
            yearlyPrice="99.99"
            monthlyStars={100}
            yearlyStars={1300}
            isPopular={false}
            pricingPeriod={pricingPeriod}
            isSelected={selectedPlan === 'explorer'}
            onSelect={() => setSelectedPlan('explorer')}
          />
        </div>

        {/* Email Input and CTA */}
        <div className="mt-6 max-w-[480px] w-full flex flex-col items-center gap-3">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-700 text-base font-space-grotesk placeholder-gray-400 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
          />
          <button
            onClick={handleGetStarted}
            disabled={!emailIsValid}
            className={`w-full px-6 py-3 rounded-[20px] text-base font-semibold font-inter transition-colors ${
              emailIsValid
                ? 'bg-[#1A3A77] text-white hover:bg-[#153063]'
                : 'bg-[#E6E9F0] text-[#012468] cursor-not-allowed'
            }`}
          >
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};
