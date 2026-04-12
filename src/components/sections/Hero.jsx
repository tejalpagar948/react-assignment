import Button from '../Button';
import Navbar from './Navbar';
import { homeApi } from '../../api/homeApi';
import { HeroShimmer } from '../skeletons/HeroShimmer';
import PreviousArrowImg from '../../assets/icons/previous-arrow.svg';
import NextArrowImg from '../../assets/icons/next-arrow.svg';
import HeroBannerImg from '../../assets/images/Hero Banner.jpg';
import HeroBottomImg from '../../assets/images/soild waste.png';
import { useApi } from '../../hooks/useApi';
import { useSlider } from '../../hooks/useSlider';

export default function Hero() {
  const { data: banners, loading } = useApi(homeApi.getBanners);

  const { current, next, prev } = useSlider(banners.length);

  const getImage = (item) => {
    return (
      item?.BANNER_IMG?.url ||
      item?.BANNER_IMG ||
      item?.image ||
      item?.banner_image ||
      ''
    );
  };

  if (loading) {
    if (loading) {
      return <HeroShimmer />;
    }
  }
  console.log('Banners:', banners[0].id);
  return (
    <section className="relative h-screen md:h-[850px] overflow-hidden">
      {/* Background */}
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
                e.target.src = HeroBannerImg;
              }}
            />
          ))}
        </div>
      )}

      <Navbar />

      {/* Content */}
      <div className="wrapper absolute top-1/2 left-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 pb-6 flex flex-col justify-between">
        {/* TOP */}
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

        {/* BOTTOM */}
        <div className="flex justify-between">
          {/* Cards */}
          <div className="flex gap-5 w-7/12">
            <div className="flex w-[75%] items-center gap-5 py-3 px-4 rounded-2xl bg-black/5 backdrop-blur-sm border-white/20">
              <img
                src={HeroBottomImg}
                className="w-[157px] h-[133px] object-cover rounded-xl"
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

            <div className="flex w-[25%] flex-col justify-center items-center py-3 px-4 rounded-2xl bg-black/5 backdrop-blur-sm text-white">
              <h3 className="text-6xl mb-4">150+</h3>
              <p className="text-lg">Customers</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button onClick={prev}>
              <img src={PreviousArrowImg} className="w-15 h-15" />
            </button>

            <button onClick={next}>
              <img src={NextArrowImg} className="w-15 h-15" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
