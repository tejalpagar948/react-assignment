import { useState, useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import { homeApi } from '../../api/homeApi';

import DownArrowImgBg from '../../assets/icons/down-arrow-bg.svg';
import UpArrowImgBg from '../../assets/icons/up-arrow-bg.svg';
import DownArrowImg from '../../assets/icons/arrow-down.svg';
import UpArrowImg from '../../assets/icons/arrow-up.svg';

import SectionHeading from '../elements/SectionHeading';
import BiomassImg from '../../assets/images/how-we-work-section-image.jpg';
import { ServicesShimmer } from '../skeletons/ServicesShimmer';

export default function Services() {
  const { data, loading, error } = useApi(homeApi.getServices);
  const [active, setActive] = useState(null);

  const services = (data ?? []).map((item, index) => ({
    id: item.id,
    number: String(index + 1).padStart(2, '0'),
    title: item.TITLE,
    description: item.DESCRIPTION,
    image: item.SERVICE_IMG,
  }));

  const toggle = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (services.length > 0) {
      setActive(services[services.length - 1].id);
    }
  }, [data]);

  if (loading) return <ServicesShimmer />;
  if (error) return <p className="p-10">Something went wrong</p>;

  return (
    <section className="my-14 md:my-20" id="services">
      <div className="wrapper">
        <SectionHeading
          label="How We Work"
          title={
            <>
              Powering a Sustainable <br className="hidden lg:block" />
              Future for India
            </>
          }
          underline
          underlineClassName="right-4 md:right-8 md:bottom-14 w-40 md:w-60 hidden lg:block"
          align="left"
        />

        <div className="space-y-8 lg:space-y-10 mt-10 lg:mt-16">
          {services.map((item, index) => {
            const isActive = active === item.id;

            return (
              <div key={item.id}>
                {/* Row */}
                <div
                  onClick={() => toggle(item.id)}
                  className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                  {/* Left */}
                  <div className="flex gap-4 lg:gap-6 cursor-pointer w-full lg:w-[65%]">
                    <span className="text-[20px] lg:text-[28px] font-medium">
                      {item.number}
                    </span>

                    <h3 className="w-full lg:w-1/2 text-[20px] lg:text-[28px] font-medium leading-snug capitalize">
                      {item.title}
                    </h3>
                  </div>

                  {/* Right */}
                  <div className="flex gap-4 lg:gap-6 cursor-pointer w-full lg:w-[45%] justify-between">
                    <p className="w-[85%] lg:w-[75%] text-gray-500 text-xs lg:text-sm">
                      {item.description}
                    </p>

                    <div className="flex justify-end">
                      <div className="relative w-8 h-8 lg:w-10 lg:h-10">
                        <img
                          src={isActive ? UpArrowImgBg : DownArrowImgBg}
                          className="w-full h-full"
                          alt="bg"
                        />

                        <img
                          src={isActive ? UpArrowImg : DownArrowImg}
                          className="absolute inset-0 m-auto w-5 h-5 lg:w-7 lg:h-7"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`w-full flex justify-center md:justify-end transition-all duration-500 overflow-hidden ${
                    isActive
                      ? 'max-h-[350px] md:max-h-[550px] opacity-100 mt-6 md:mt-10'
                      : 'max-h-0 opacity-0'
                  }`}>
                  <img
                    src={item.image || BiomassImg}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.src = BiomassImg;
                    }}
                    className="w-full md:w-11/12 h-[250px] md:h-[550px] object-cover rounded-2xl md:rounded-3xl lg:mr-8"
                  />
                </div>

                {/* Divider */}
                {index !== services.length - 1 && (
                  <div className="border-b-[1.5px] border-brandGreen mt-8 lg:mt-12" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
