import { useState } from 'react';
import DownArrowImgBg from '../../assets/icons/down-arrow-bg.svg';
import UpArrowImgBg from '../../assets/icons/up-arrow-bg.svg';
import DownArrowImg from '../../assets/icons/arrow-down.svg';
import UpArrowImg from '../../assets/icons/arrow-up.svg';
import BiomassImg from '../../assets/images/how we work section image.jpg';
import SectionHeading from '../SectionHeading';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Integrated Solid Waste Management',
    description:
      'is a comprehensive approach to managing waste that combines various waste management techniques to minimize environmental impact and promote sustainability.',
    image: '/waste.jpg',
  },
  {
    id: 2,
    number: '02',
    title: 'Biomass Fuel & Green Energy',
    description:
      'Biomass fuel is a renewable energy source derived from organic materials such as plants, agricultural and forestry residues, animal waste, and industrial by-products.',
    image: BiomassImg,
  },
  {
    id: 3,
    number: '03',
    title: 'Bio Gas – CBG Fuel',
    description:
      'Bio gas is a renewable fuel produced from the anaerobic digestion of organic materials such as agricultural waste, animal manure, food waste, and sewage sludge.',
    image: '/biogas.jpg',
  },
];

export default function Services() {
  const [active, setActive] = useState(2);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="px-6 md:px-16 py-20" id="services">
      <SectionHeading
        label="How We Work"
        title={
          <>
            Powering a Sustainable <br />
            Future for India
          </>
        }
        underline
        underlineClassName="right-8 bottom-14 w-60"
        align="left"
      />

      <div className="space-y-10 mt-16">
        {services.map((item, index) => (
          <div key={item.id}>
            {/* ROW */}
            <div
              onClick={() => toggle(item.id)}
              className="flex justify-between">
              <div className="flex gap-6 cursor-pointer w-[65%]">
                {/* Number */}
                <span className="text-[28px] font-medium">{item.number}</span>

                {/* Title */}
                <h3 className="w-1/2 text-[28px] font-medium">{item.title}</h3>
              </div>
              <div className="flex gap-6 cursor-pointer w-[45%] justify-between">
                {/* Description */}
                <p className="w-[75%] text-gray-500 text-sm">
                  {item.description}
                </p>

                {/* Arrow */}
                <div className=" flex justify-end">
                  <div className="relative w-10 h-10">
                    <img
                      src={active === item.id ? UpArrowImgBg : DownArrowImgBg}
                      className="w-full h-full"
                      alt="bg"
                    />

                    <img
                      src={active === item.id ? UpArrowImg : DownArrowImg}
                      className="absolute inset-0 m-auto w-7 h-7"
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div
              className={`w-full flex justify-end transition-all duration-500 overflow-hidden ${
                active === item.id
                  ? 'max-h-[550px] opacity-100 mt-10'
                  : 'max-h-0 opacity-0'
              }`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-11/12 h-[550px] object-cover rounded-3xl mr-8"
              />
            </div>

            {/* Divider (ONLY if not last item) */}
            {index !== services.length - 1 && (
              <div className="border-b-[1.5px] border-brandGreen mt-16" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
