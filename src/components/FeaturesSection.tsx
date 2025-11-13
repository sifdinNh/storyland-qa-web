import React from 'react';

interface Feature {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const features: Feature[] = [
  {
    title: 'Create Stories\nIn Seconds',
    imageSrc: '/images/bear.png',
    imageAlt: 'Story creation scene',
  },
  {
    title: 'Add Family Voices\nFor Extra Magic',
    imageSrc: '/images/voice.png',
    imageAlt: 'Family voices illustration',
  },
  {
    title: 'Explore In Arabic,\nEnglish, French & More',
    imageSrc: '/images/Languages.png',
    imageAlt: 'Multiple languages',
  },
  {
    title: 'Educational Games\nthat grow young minds',
    imageSrc: '/images/language-glob.png',
    imageAlt: 'Educational games language globe',
  },
];

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="bg-white rounded-[34px] p-10 shadow-lg flex flex-col items-center gap-9 w-full lg:min-w-[320px] lg:w-[320px] lg:flex-shrink-0">
      <h3 className="text-black text-xl font-medium font-inter text-center whitespace-pre-line">
        {feature.title}
      </h3>
      <div className="relative w-full h-48 flex items-center justify-center">
        <img
          src={feature.imageSrc}
          alt={feature.imageAlt}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-rose-50 rounded-[50px] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header with Castle Image */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <img
              src="/images/castle.png"
              alt="Magical castle"
              className="w-[640px] h-auto object-contain"
            />
          </div>
          <p className="text-red-400 text-lg font-semibold font-omnes mb-2">Features</p>
          <h2 className="text-black text-4xl font-semibold font-omnes leading-10 mb-4">
            A Magical Storytelling App<br />for the Whole Family
          </h2>
          <p className="text-black text-base font-normal font-inter max-w-2xl mx-auto">
            Storyland lets you turn everyday moments into personalized<br className="hidden md:block" />
            adventures, using your own voice, or the voices of loved ones.
          </p>
        </div>

        {/* Feature Cards - Vertical on Mobile, Horizontal Slider on Desktop */}
        <div className="lg:overflow-x-auto lg:-mx-20 lg:scroll-smooth lg:snap-x lg:snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex flex-col lg:flex-row gap-7 lg:px-20 lg:pb-4">
            {features.map((feature, index) => (
              <div key={index} className="lg:snap-center">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
