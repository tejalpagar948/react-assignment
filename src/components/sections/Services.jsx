import { useState, useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import { homeApi } from '../../api/homeApi';
import DownArrowImgBg from '../../assets/icons/down-arrow-bg.svg';
import UpArrowImgBg from '../../assets/icons/up-arrow-bg.svg';
import DownArrowImg from '../../assets/icons/arrow-down.svg';
import UpArrowImg from '../../assets/icons/arrow-up.svg';
import SectionHeading from '../SectionHeading';
import BiomassImg from '../../assets/images/how we work section image.jpg';
import { ServicesShimmer } from '../skeletons/ServicesShimmer';

export default function Services() {
  const { data, loading, error } = useApi(homeApi.getServices);

  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  // ✅ convert API data → UI format
  const services = (data || []).map((item, index) => ({
    id: item.id,
    number: String(index + 1).padStart(2, '0'),
    title: item.TITLE,
    description: item.DESCRIPTION,
    image: item.SERVICE_IMG,
  }));

  // ✅ open LAST item by default after API loads
  useEffect(() => {
    if (data && data.length > 0) {
      setActive(data[data.length - 1]?.id);
    }
  }, [data]);

  // ✅ loading
  if (loading) return <ServicesShimmer />;

  // ✅ error
  if (error) return <p className="p-10">Something went wrong</p>;

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
                <span className="text-[28px] font-medium">{item.number}</span>
                <h3 className="w-1/2 text-[28px] font-medium">{item.title}</h3>
              </div>

              <div className="flex gap-6 cursor-pointer w-[45%] justify-between">
                <p className="w-[75%] text-gray-500 text-sm">
                  {item.description}
                </p>

                <div className="flex justify-end">
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
                src={item.image || BiomassImg}
                alt={item.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = BiomassImg;
                }}
                className="w-11/12 h-[550px] object-cover rounded-3xl mr-8"
              />
            </div>

            {/* Divider */}
            {index !== services.length - 1 && (
              <div className="border-b-[1.5px] border-brandGreen mt-16" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
