import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-rose-50 rounded-[50px] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-red-400 text-lg font-semibold font-omnes mb-2">Features</p>
          <h2 className="text-black text-4xl font-semibold font-omnes leading-10 mb-4">
            A Magical Storytelling App<br />for the Whole Family
          </h2>
        </div>

        {/* Feature Cards - Mobile Slider / Desktop Grid */}
        <div className="overflow-x-auto lg:overflow-visible -mx-6 lg:mx-0">
          <div className="flex lg:grid lg:grid-cols-2 gap-7 px-6 lg:px-0 max-w-6xl lg:mx-auto">
            {/* Feature 1 - Create Stories */}
            <div className="bg-white rounded-[34px] p-10 shadow-lg flex flex-col items-center gap-9 min-w-[280px] flex-shrink-0 lg:min-w-0">
              <h3 className="text-black text-xl font-medium font-inter text-center">
                Create stories<br />in seconds
              </h3>
              <div className="relative w-full h-48 flex items-center justify-center">
                <img
                  src="/images/bear.png"
                  alt="Story creation scene"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Feature 2 - Add Family Voices */}
            <div className="bg-white rounded-[34px] p-10 shadow-lg flex flex-col items-center gap-9 min-w-[280px] flex-shrink-0 lg:min-w-0">
              <h3 className="text-black text-xl font-medium font-inter text-center">
                Add family voices<br />for extra magic
              </h3>
              <div className="relative w-full h-48 flex items-center justify-center">
                <img
                  src="/images/voice.png"
                  alt="Family voices illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Feature 3 - Multiple Languages */}
            <div className="bg-white rounded-[34px] p-10 shadow-lg flex flex-col items-center gap-9 min-w-[280px] flex-shrink-0 lg:min-w-0">
              <h3 className="text-black text-xl font-medium font-inter text-center">
                Multiple languages<br />& cultures
              </h3>
              <div className="relative w-full h-48 flex items-center justify-center">
                <img
                  src="/images/Languages.png"
                  alt="Multiple languages"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Feature 4 - Educational Games */}
            <div className="bg-white rounded-[34px] p-10 shadow-lg flex flex-col items-center gap-9 min-w-[280px] flex-shrink-0 lg:min-w-0">
              <h3 className="text-black text-xl font-medium font-inter text-center">
                Educational Games that grow<br />young minds
              </h3>
              <div className="relative w-full h-48 flex items-center justify-center">
                <img
                  src="/images/language-glob.png"
                  alt="Educational games language globe"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
