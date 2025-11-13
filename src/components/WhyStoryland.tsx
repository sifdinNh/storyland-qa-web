import React from 'react';

export const WhyStoryland: React.FC = () => {
  const painPoints = [
    {
      emoji: '👨',
      text: 'Tired Of Reading The Same Books Every Night?'
    },
    {
      emoji: '👩',
      text: "Can't Always Be There To Read To Your Kids?"
    },
    {
      emoji: '👴',
      text: 'Wish Grandma Or Grandpa Could Tell Them A Story?'
    }
  ];

  return (
    <section className="w-full px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-pink-500 text-lg md:text-xl font-medium">
            Why Storyland?
          </p>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-10 md:mb-16 leading-tight">
          Same Stories. Same<br className="md:hidden" />
          Routine. Not Enough<br className="md:hidden" />
          Time Together?
        </h2>

        {/* Book Illustration */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="w-64 h-64 md:w-80 md:h-80">
            <img
              src="/images/book-illustraction.png"
              alt="Book illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {painPoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full pt-10 md:pt-12">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center z-10 shadow-sm">
                  <span className="text-4xl md:text-5xl">{point.emoji}</span>
                </div>
                <div className="bg-gray-100 rounded-3xl p-6 md:p-8 pt-16 md:pt-20">
                  <h3
                    className="font-inter font-medium text-[18px] leading-[100%] tracking-normal text-center align-middle capitalize text-gray-900"
                  >
                    {point.text}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};