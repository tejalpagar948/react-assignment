import Thumbnail from '../../assets/images/video-section-image.jpg';
import PlayIcon from '../../assets/icons/play.svg';

export default function HeroSection() {
  return (
    <section className="bg-brandGreen pt-12 lg:pt-16 pb-20 lg:pb-28 relative rounded-t-3xl overflow-hidden">
      <div className="wrapper">
        {/* Top Text */}
        <div className="max-w-7xl mx-auto text-white flex flex-col lg:flex-row justify-between items-start gap-3 lg:gap-0">
          <p className="lg:max-w-md text-[18px] md:text-[30px] leading-[24px] md:leading-[32px] opacity-90">
            At BioEnergy Solutions, we are dedicated to advancing the
            development.
          </p>

          <p className="lg:max-w-sm text-sm md:text-base opacity-80">
            We manage waste, labor, and produce biomass fuel. Our diversified
            pellets and animal stock come from agriculture waste.
          </p>
        </div>

        {/* Heading */}
        <h2 className="leading-none max-w-3xl lg:mx-auto relative z-10 mt-6 lg:-mt-24 lg:top-[109px]">
          {/* Mobile */}
          <span className="block lg:hidden text-[34px] font-extralight text-white">
            Turning Waste into Gold
          </span>

          {/* Desktop */}
          <div className="hidden lg:block">
            <span className="block text-[34px] sm:text-[50px] lg:text-[90px] font-extralight text-white">
              Turning Waste
            </span>

            <span className="block text-[40px] sm:text-[60px] lg:text-[115px] italic text-white text-right">
              into Gold
            </span>
          </div>
        </h2>

        {/* Video Card */}
        <div className="max-w-7xl mx-auto mt-8 lg:mt-10 relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src={Thumbnail}
            alt="factory"
            className="w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 lg:w-20 lg:h-20 bg-black/50 rounded-full flex items-center justify-center">
              <img
                src={PlayIcon}
                alt="Play"
                className="w-4 h-4 lg:w-6 lg:h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
