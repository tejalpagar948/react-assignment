import { useState } from 'react';
import Button from '../Button';
import Navbar from './Navbar';

import HeroBannerImg from '../../assets/images/Hero Banner.jpg';
import HeroBannerImg2 from '../../assets/images/soild waste.png';

import PreviousArrowImg from '../../assets/icons/previous-arrow.svg';
import NextArrowImg from '../../assets/icons/next-arrow.svg';

export default function Hero() {
  const images = [HeroBannerImg, HeroBannerImg2];
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-screen md:h-[850px] overflow-hidden">
      {/* Background Image (Dynamic) */}
      <img
        src={images[current]}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content Wrapper */}
      <div className="wrapper absolute top-1/2 left-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 pb-6 flex flex-col justify-between">
        {/* Top Content */}
        <div className="mt-40">
          <h1 className="leading-none max-w-4xl">
            <span className="block text-[90px] font-extralight text-black">
              Unlocking Tomorrow's
            </span>

            <span className="block text-[115px] italic text-black text-right">
              Green Energy
            </span>
          </h1>

          <p className="mt-4 text-lg max-w-sm text-black">
            Learn how sustainable energy from organic materials can create a
            greener future.
          </p>

          <Button className="mt-6">Let's Started</Button>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between">
          {/* Cards */}
          <div className="flex gap-5 w-7/12">
            {/* Left Card */}
            <div className="flex w-[75%] items-center gap-5 py-3 px-4 rounded-2xl bg-black/5 backdrop-blur-sm border-white/20">
              <img
                src={HeroBannerImg2}
                alt="Service"
                className="w-[157px] h-[133px] object-cover rounded-xl flex-shrink-0"
              />

              <div className="text-white max-w-md">
                <h4 className="text-lg font-semibold mb-1">
                  Integrated Solid Waste Management
                </h4>

                <p className="text-xs mb-1.5">
                  Comprehensive approach to managing waste that combines various
                  waste management
                </p>

                <a href="#" className="underline font-medium text-sm">
                  Discover Our Services
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div className="flex w-[25%] flex-col justify-center items-center py-3 px-4 rounded-2xl bg-black/5 backdrop-blur-sm border-white/20 text-white">
              <h3 className="text-6xl mb-4">150+</h3>
              <p className="text-lg">Customers</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button type="button" onClick={handlePrev}>
              <img
                src={PreviousArrowImg}
                alt="Previous"
                className="w-15 h-15 object-contain"
              />
            </button>

            <button type="button" onClick={handleNext}>
              <img
                src={NextArrowImg}
                alt="Next"
                className="w-15 h-15 object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
