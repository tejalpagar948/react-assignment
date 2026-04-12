import Button from '../elements/Button';
import AboutImg1 from '../../assets/images/about-section-image-1.jpg';
import AboutImg2 from '../../assets/images/about-section-image-2.jpg';
import SectionHeading from '../elements/SectionHeading';

export default function About() {
  return (
    <section className="my-8 md:my-14" id="about">
      <div className="wrapper">
        {/* Header */}
        <SectionHeading
          label="About Us"
          title={
            <>
              We see a growing business
              <br className="hidden lg:block" />
              where the world see’s waste
            </>
          }
          underline
          underlineClassName="right-[25%] md:right-0 w-48 lg:w-96"
        />

        {/* Content */}
        <div className="mt-9 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={AboutImg1}
              alt="Pellets"
              className="w-screen lg:w-[240px] h-[200px] lg:h-[320px] object-cover rounded-2xl"
            />
          </div>

          {/* Center Content */}
          <div className="lg:w-[42%] self-start">
            <div className="text-center flex flex-col items-center mt-5 lg:mt-0">
              <p className="text-xl font-semibold text-gray-800">
                We are committed to environmental conservation and
                climate-resilient economic development.
              </p>

              <p className="mt-4 text-gray-500 text-base leading-[1.2]">
                Explores building an ecosystem for sustainable operations. Ours
                is a leading waste management and labor conglomerate, offering
                sustainable solutions with innovative technologies and a
                comprehensive approach to waste treatment.
              </p>

              <Button className="mt-6 lg:mt-14">About Us</Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end lg:self-end mt-7 lg:mt-0">
            <img
              src={AboutImg2}
              alt="Green plant"
              className="w-screen lg:w-[240px] h-[200px] lg:h-[240px] object-cover rounded-2xl lg:rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
