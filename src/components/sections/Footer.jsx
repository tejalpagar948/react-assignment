import FacebookIcon from '../../assets/icons/facebook.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import WhatsappIcon from '../../assets/icons/whatsapp.svg';
import GoToTopIcon from '../../assets/icons/go-to-top-arrow.svg';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f3f3f3] pt-12 md:pt-16 pb-8 md:pb-10">
      <div className="wrapper">
        {/* Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start md:items-end justify-between">
          {/* Left */}
          <div className="md:col-span-2 text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-semibold">
              Key Takeaways and <br />
              Next Steps
            </h4>

            <p className="text-gray-500 mt-4 text-xs md:text-sm">
              Email Address
            </p>

            <div className="flex items-center mt-3 bg-white rounded-full p-1 max-w-md shadow-sm mx-auto md:mx-0">
              <input
                type="email"
                placeholder="name@example.com"
                className="flex-1 px-5 py-3 outline-none rounded-full text-sm"
              />

              <button className="bg-green-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-green-700 transition">
                Send
              </button>
            </div>
          </div>

          {/* Right Text */}
          <div className="text-gray-600 text-lg md:text-2xl font-light text-center md:text-right">
            We are committed to environmental conservation and climate-resilient
            economic development.
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto border-t border-gray-300 mt-10 md:mt-12 pt-8 md:pt-10">
          <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Navigate */}
            <div className="md:w-[18%]">
              <h4 className="text-gray-500 mb-4 text-base md:text-lg">
                Navigate to
              </h4>

              <ul className="space-y-2 md:space-y-3 font-medium text-lg md:text-xl">
                {['Home', 'About Us', 'Blogs', 'Faq’s', 'Contact Us'].map(
                  (item) => (
                    <li key={item}>{item}</li>
                  )
                )}
              </ul>
            </div>

            {/* Business Lines */}
            <div className="md:w-[30%]">
              <h4 className="text-gray-500 mb-4 text-base md:text-lg">
                Our Business Lines
              </h4>

              <ul className="space-y-2 md:space-y-3 font-medium text-lg md:text-xl">
                <li>Integrated Solid Waste Management</li>
                <li>Biomass Fuel & Green Energy</li>
                <li>Bio Gas – CBG Fuel</li>
              </ul>
            </div>

            {/* Office */}
            <div className="md:w-[26%]">
              <h4 className="text-gray-500 mb-4 text-base md:text-lg">
                Office Address
              </h4>

              <p className="text-base md:text-lg leading-relaxed font-medium">
                Juhu Tara Rd, Uditi <br />
                Tarang Housing Colony, <br />
                Juhu Tara, Juhu, <br />
                Mumbai, Maharashtra <br />
                400049, India
              </p>

              <p className="mt-3 md:mt-4 text-base md:text-lg font-medium">
                Example@gmail.com
              </p>
              <p className="mt-1 text-base md:text-lg font-medium">
                +91 8554865952
              </p>
            </div>

            {/* Plant */}
            <div className="md:w-[26%]">
              <h4 className="text-gray-500 mb-4 text-base md:text-lg">
                Plant Address
              </h4>

              <p className="text-base md:text-lg leading-relaxed font-medium">
                Sahar Airport Road, <br />
                Andheri - Kurla Rd, near <br />
                Mumbai International <br />
                Airport, Andheri East, <br />
                Mumbai, Maharashtra <br />
                400059, India
              </p>

              <p className="mt-3 md:mt-4 text-base md:text-lg font-medium">
                Example@gmail.com
              </p>
              <p className="mt-1 text-base md:text-lg font-medium">
                +91 8554865952 / 8554865952
              </p>
            </div>

            {/* Floating Buttons */}
            <div className="absolute bottom-0 right-0 md:top-[-16px] flex flex-row md:flex-col gap-3 z-50">
              <a
                href="https://wa.me/918554865952"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full flex items-center justify-center">
                <img src={WhatsappIcon} alt="WhatsApp" />
              </a>

              <button onClick={handleScrollTop}>
                <img src={GoToTopIcon} alt="Go to top" />
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t-[1.5px] border-gray-300 mt-8 md:mt-10 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-xs md:text-sm text-gray-600">
              <span className="cursor-pointer hover:text-black">
                Terms of Service
              </span>
              <span className="cursor-pointer hover:text-black">
                Privacy Policy
              </span>
            </div>

            {/* Right */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-600">
              {/* Socials */}
              <div className="flex gap-3">
                {[
                  { icon: FacebookIcon, alt: 'Facebook' },
                  { icon: InstagramIcon, alt: 'Instagram' },
                  { icon: TwitterIcon, alt: 'X' },
                ].map(({ icon, alt }) => (
                  <div
                    key={alt}
                    className="w-8 h-8 border border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
                    <img src={icon} alt={alt} className="w-4 h-4" />
                  </div>
                ))}
              </div>

              <span className="text-black text-sm md:text-lg text-center">
                © 2025. All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
