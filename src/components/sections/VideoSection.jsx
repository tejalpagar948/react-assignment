import Thumbnail from '../../assets/images/video section image.jpg';
import PlayIcon from '../../assets/icons/play.svg';

export default function HeroSection() {
  return (
    <section className="bg-brandGreen pt-16 pb-28 px-6 lg:px-16 relative rounded-t-3xl">
      {/* Top Text */}
      <div className="max-w-7xl mx-auto text-white flex justify-between items-start">
        <p className="max-w-md text-[30px] leading-[32px] opacity-90">
          At BioEnergy Solutions, we are dedicated to advancing the development.
        </p>

        <p className="max-w-sm text-base opacity-80">
          We manage waste, labor, and produce biomass fuel. Our diversified
          pellets and animal stock come from agriculture waste.
        </p>
      </div>

      {/* 🔥 OUTSIDE OVERLAPPING TEXT */}
      <h2 className="leading-none max-w-3xl mx-auto -mt-24 relative z-10 top-[109px]">
        <span className="block text-[60px] md:text-[90px] font-extralight text-white">
          Turning Waste
        </span>

        <span className="block text-[70px] md:text-[115px] italic text-white text-right">
          into Gold
        </span>
      </h2>
      {/* Image Card */}
      <div className="max-w-7xl mx-auto mt-10 relative rounded-2xl overflow-hidden shadow-xl">
        <img
          src={Thumbnail}
          className="w-full h-[500px] object-cover"
          alt="factory"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-black/50 rounded-full flex items-center justify-center">
            <img src={PlayIcon} alt="Play" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
