import Button from '../elements/Button';
import Navbar from './Navbar';
import { homeApi } from '../../api/homeApi';
import { HeroShimmer } from '../skeletons/HeroShimmer';
import PreviousArrowImg from '../../assets/icons/previous-arrow.svg';
import NextArrowImg from '../../assets/icons/next-arrow.svg';
import HeroBannerImg from '../../assets/images/hero-banner.jpg';
import HeroBottomImg from '../../assets/images/soild-waste.png';
import { useApi } from '../../hooks/useApi';
import { useSlider } from '../../hooks/useSlider';

export default function Hero() {
  const { data: banners = [], loading } = useApi(homeApi.getBanners);
  const { current, next, prev } = useSlider(banners.length);

  const getImage = (item) =>
    item?.BANNER_IMG?.url ||
    item?.BANNER_IMG ||
    item?.image ||
    item?.banner_image ||
    '';

  if (loading) return <HeroShimmer />;

  return (
    <section className="relative h-[850px] overflow-hidden">
      {/* Background Images */}
      {banners.length > 0 && (
        <div className="absolute inset-0 w-full h-full">
          {banners.map((item, index) => (
            <img
              key={item?.id}
              src={getImage(item)}
              alt={`Hero ${item?.id}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
              onError={(e) => {
                e.currentTarget.src = HeroBannerImg;
              }}
            />
          ))}
        </div>
      )}

      <Navbar />

      {/* Content Wrapper */}
      <div className="wrapper absolute top-1/2 left-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 pb-4 md:pb-6 flex flex-col justify-between">
        {/* TOP CONTENT */}
        <div className="mt-[190px] lg:mt-40">
          <h1 className="leading-none max-w-4xl">
            <span className="block text-4xl sm:text-6xl lg:text-[90px] font-extralight text-black">
              Unlocking Tomorrow's
            </span>

            <span className="block text-5xl sm:text-7xl lg:text-[115px] italic text-black text-left lg:text-right">
              Green Energy
            </span>
          </h1>

          <p className="mt-4 text-sm md:text-lg max-w-sm text-black">
            Learn how sustainable energy from organic materials can create a
            greener future.
          </p>

          <Button className="mt-6">Let's Started</Button>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-0 justify-between">
          {/* Cards Section */}
          <div className="flex gap-5 lg:w-7/12 flex-wrap md:flex-nowrap">
            {/* Service Card */}
            <div className="flex md:w-[75%] items-center gap-5 py-3 px-4 rounded-2xl bg-black/5 backdrop-blur-sm border-white/20">
              <img
                src={HeroBottomImg}
                className="w-1/3 h-[105px] lg:w-[157px] lg:h-[133px] object-cover rounded-xl"
                alt="Service"
              />

              <div className="text-white max-w-md">
                <h4 className="text-lg font-semibold mb-1">
                  Integrated Solid Waste Management
                </h4>

                <p className="text-xs mb-1.5">
                  Comprehensive approach to managing waste
                </p>

                <a href="#" className="underline text-sm">
                  Discover Our Services
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className="flex md:w-[25%] flex-col justify-center items-center py-3 px-4 rounded-2xl bg-black/5 backdrop-blur-sm text-white">
              <h3 className="text-4xl md:text-6xl mb-4">150+</h3>
              <p className="text-lg">Customers</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center lg:justify-end gap-2 mt-2 lg:mt-0">
            <button onClick={prev}>
              <img
                src={PreviousArrowImg}
                className="w-10 h-10 md:w-15 md:h-15"
                alt="Previous"
              />
            </button>

            <button onClick={next}>
              <img
                src={NextArrowImg}
                className="w-10 h-10 md:w-15 md:h-15"
                alt="Next"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
