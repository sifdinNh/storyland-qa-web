import React from 'react';

const FeatureItem = ({ icon, title }: { icon?: string; title: string }) => {
  return (
    <div className="self-stretch flex min-w-60 flex-col items-stretch w-96 my-auto rounded-lg">
      {icon ? (
        <img
          src={icon}
          alt=""
          className="aspect-[1] object-contain w-8 self-center"
        />
      ) : (
        <div className="self-center flex min-h-8 w-8" />
      )}
      <div className="w-full overflow-hidden mt-6 px-4">
        <div className="text-gray-900">{title}</div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="items-center flex w-full flex-col text-gray-900 font-bold text-center bg-white px-28 py-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-[800px] max-w-full flex-col overflow-hidden text-[44px] tracking-[-1.1px] leading-[60px]">
        <h2 className="text-gray-900 max-md:max-w-full">
          Storyland is a personalized <br />
          storytelling app for kids.
        </h2>
      </div>
      <div className="min-h-[316px] w-[864px] max-w-full overflow-hidden text-2xl mt-16 max-md:mt-10">
        <div className="flex w-full items-center gap-[40px_94px] justify-between flex-wrap max-md:max-w-full">
          <FeatureItem
            icon="https://api.builder.io/api/v1/image/assets/65cbd1d96b3d424cbbb13fb05f357c27/234cba7ea4a2e3388b16e2671c1309eb9f3e657e?placeholderIfAbsent=true"
            title="Uses AI to create unique stories based on each child's interests"
          />
          <FeatureItem
            title="Parents can clone their own voices to narrate the stories"
          />
        </div>
        <div className="flex w-full items-center gap-[40px_94px] justify-between flex-wrap mt-[30px] max-md:max-w-full">
          <FeatureItem
            title="Includes an educational section Premium plan unlocks extra features and stories"
          />
          <FeatureItem
            title="Supports multiple languages: English, Arabic, French, Spanish"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
