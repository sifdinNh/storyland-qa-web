import React from 'react';

interface Feature {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

const features: Feature[] = [
  {
    title: 'Create Stories In Seconds',
    subtitle: 'Type a simple idea and watch it turn into a magical adventure with beautiful visuals.',
    imageSrc: '/images/bear.png',
    imageAlt: 'Story creation scene',
  },
  {
    title: 'Add Family Voices For Extra Magic',
    subtitle: 'Let mom, dad, grandparents, or siblings tell the story. Your child hears real love in every line.',
    imageSrc: '/images/voice.png',
    imageAlt: 'Family voices illustration',
  },
  {
    title: 'Explore In Arabic,English, French & More',
    subtitle: 'Stories feel familiar, comforting, and natural in your home\'s main language.',
    imageSrc: '/images/Languages.png',
    imageAlt: 'Multiple languages',
  },
  {
    title: 'Educational Games that grow young minds',
    subtitle: 'Interactive games and activities designed to make learning fun while developing essential skills.',
    imageSrc: '/images/language-glob.png',
    imageAlt: 'Educational games language globe',
  },
];

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="bg-white rounded-[24px] md:rounded-[34px] p-5 md:p-6 shadow-lg flex flex-col justify-between w-full h-full lg:min-w-[320px] lg:w-[320px] lg:h-[320px] lg:flex-shrink-0">
      <div className="flex flex-col gap-2 text-left">
        <h3 className="text-black text-lg md:text-xl font-medium font-inter whitespace-pre-line">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base font-normal font-inter leading-snug md:leading-none tracking-normal align-middle">
          {feature.subtitle}
        </p>
      </div>
      <div className="relative w-full h-28 md:h-32 flex items-center justify-center flex-shrink-0">
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
    <section id="features" className="py-12 md:py-16 bg-rose-50 rounded-[30px] md:rounded-[50px] overflow-hidden">
      <div className="container mx-auto px-5 md:px-6 lg:px-20">
        {/* Header with Castle Image */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex justify-center mb-5 md:mb-6">
            <img
              src="/images/castle.png"
              alt="Magical castle"
              className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[640px] h-auto object-contain"
            />
          </div>
          <p className="text-[#D45971] text-sm md:text-base lg:text-lg font-semibold font-omnes mb-2">Our Features</p>
          <h2 className="text-black text-xl md:text-2xl lg:text-4xl font-semibold font-omnes leading-tight mb-3 md:mb-4 px-4">
            A Storytelling App That Brings<br />Families Closer
          </h2>
          <p className="text-black text-xs md:text-sm lg:text-base font-normal font-inter max-w-3xl mx-auto leading-relaxed px-4">
            Storyland turns small moments into memories your child will hold onto.<br className="hidden md:block" />
            Every story feels personal because it's narrated in the voices they love most.
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
