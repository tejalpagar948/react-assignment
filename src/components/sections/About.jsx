import Button from '../Button';
import AboutImg1 from '../../assets/images/about section image 1.jpg';
import AboutImg2 from '../../assets/images/about section image 2.jpg';
import SectionHeading from '../SectionHeading';
import LineSvg from '../../assets/icons/line.svg';

export default function About() {
  return (
    <section className="py-24 px-6" id="about">
      <div className="wrapper">
        {/* Header Center */}
        <SectionHeading
          label="About Us"
          title={
            <>
              We see a growing business <br />
              where the world see’s waste
            </>
          }
          underline
          underlineClassName="right-0 w-50"
        />

        {/* 3 Column Layout */}
        <div className="mt-7 flex flex-col md:flex-row items-center justify-between">
          {/* LEFT IMAGE */}
          <div className=" flex justify-center md:justify-start">
            <img
              src={AboutImg1}
              alt="Pellets"
              className="w-[240px] h-[320px] object-cover rounded-2xl"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="md:w-[42%] self-start">
            <div className=" text-center flex flex-col items-center">
              <p className="text-xl font-semibold text-gray-800">
                We are committed to environmental conservation and
                climate-resilient economic development.
              </p>

              <p className="mt-4 text-gray-500 text-base leading-relaxed">
                Explores building an ecosystem for sustainable operations. Ours
                is a leading waste management and labor conglomerate, offering
                sustainable solutions with innovative technologies and a
                comprehensive approach to waste treatment.
              </p>

              <Button className="md:mt-10">About Us</Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className=" flex justify-center md:justify-end self-end">
            <img
              src={AboutImg2}
              alt="Green plant"
              className="w-[240px] h-[240px] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
