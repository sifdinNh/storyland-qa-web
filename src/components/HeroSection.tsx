import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white flex w-full items-center gap-[40px_46px] overflow-hidden justify-between flex-wrap px-[120px] py-8 max-md:max-w-full max-md:px-5">
      <div className="self-stretch min-w-60 overflow-hidden w-[696px] my-auto pr-12 max-md:max-w-full">
        <div className="w-full overflow-hidden max-md:max-w-full">
          <h1 className="text-gray-900 text-6xl font-bold leading-[72px] tracking-[-1.5px] max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
            Instantly Create Personalized Stories for Your Child
          </h1>
          <p className="text-gray-700 text-lg font-normal leading-7 mt-4 max-md:max-w-full">
            Create personalized stories in the voices of your loved ones {" "}
            <br />— and bring them to life through AI magic.
          </p>
        </div>
        <div className="flex w-full flex-col text-base text-white font-semibold leading-none justify-center mt-8 max-md:max-w-full">
          <button className="justify-center items-center flex w-[218px] max-w-full gap-2.5 bg-[#012468] px-6 py-4 rounded-[70px] max-md:px-5 hover:bg-[#013a7a] transition-colors">
            <div className="self-stretch my-auto">
              Coming Soon
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex min-w-60 min-h-[481px] flex-col overflow-hidden items-center justify-center w-[458px] my-auto rounded-[38px] max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/65cbd1d96b3d424cbbb13fb05f357c27/7f8ba3b4a9b9f5408166754d49116a8a13737f4b?placeholderIfAbsent=true"
          alt="Storyland App Preview"
          className="aspect-[1.03] object-contain w-[393px] max-w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
