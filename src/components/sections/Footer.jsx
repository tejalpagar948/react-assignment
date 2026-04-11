import FacebookIcon from '../../assets/icons/facebook.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import WhatsappIcon from '../../assets/icons/whatsapp.svg';
import GoToTopIcon from '../../assets/icons/go-to-top-arrow.svg';
export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] px-6 md:px-10 pt-16 pb-10">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-end justify-between">
        {/* Left */}
        <div className="md:col-span-2">
          <h4 className="text-3xl font-semibold">
            Key Takeaways and <br />
            Next Steps
          </h4>

          <p className="text-gray-500 mt-4 text-sm">Email Address</p>

          <div className="flex items-center mt-3 bg-white rounded-full p-1 max-w-md shadow-sm">
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

        {/* Right */}
        <div className="text-gray-600 text-2xl font-light text-right">
          We are committed to environmental conservation and climate-resilient
          economic development.
        </div>
      </div>

      {/* Top Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-300 mt-12 pt-10">
        {/* Footer Grid */}
        {/* Footer Flex */}
        <div className="relative flex flex-col md:flex-row gap-10">
          {/* Navigate */}
          <div className="md:w-[18%]">
            <h4 className="text-gray-500 mb-4 text-lg">Navigate to</h4>

            <ul className="space-y-3 font-medium text-xl">
              <li>Home</li>
              <li>About Us</li>
              <li>Blogs</li>
              <li>Faq’s</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Business Lines (BIGGER) */}
          <div className="md:w-[30%]">
            <h4 className="text-gray-500 mb-4 text-lg">Our Business Lines</h4>

            <ul className="space-y-3 font-medium text-xl">
              <li>Integrated Solid Waste Management</li>
              <li>Biomass Fuel & Green Energy</li>
              <li>Bio Gas – CBG Fuel</li>
            </ul>
          </div>

          {/* Office Address */}
          <div className="md:w-[26%]">
            <h4 className="text-gray-500 mb-4 text-lg">Office Address</h4>

            <p className="text-lg leading-relaxed font-medium">
              Juhu Tara Rd, Uditi <br />
              Tarang Housing Colony, <br />
              Juhu Tara, Juhu, <br />
              Mumbai, Maharashtra <br />
              400049, India
            </p>

            <p className="mt-4 text-lg font-medium">Example@gmail.com</p>
            <p className="mt-1 text-lg font-medium">+91 8554865952</p>
          </div>

          {/* Plant Address */}
          <div className="md:w-[26%]">
            <h4 className="text-gray-500 mb-4 text-lg">Plant Address</h4>

            <p className="text-lg leading-relaxed font-medium">
              Sahar Airport Road, <br />
              Andheri - Kurla Rd, near <br />
              Mumbai International <br />
              Airport, Andheri East, <br />
              Mumbai, Maharashtra <br />
              400059, India
            </p>

            <p className="mt-4 text-lg font-medium">Example@gmail.com</p>
            <p className="mt-1 text-lg font-medium">
              +91 8554865952 / 8554865952
            </p>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-[-16px] right-0 flex flex-col gap-3 z-50">
            {/* WhatsApp */}
            <a
              href="https://wa.me/918554865952"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full flex items-center justify-center">
              <img src={WhatsappIcon} alt="WhatsApp" className="" />
            </a>

            {/* Scroll to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="self-end">
              <img src={GoToTopIcon} alt="Go to top" className="" />
            </button>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t-[1.5px] border-gray-300 mt-10 pt-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left */}
          <div className="flex gap-6 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-black">
              Terms of Service
            </span>

            <span className="cursor-pointer hover:text-black">
              Privacy Policy
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            {/* Social Icons */}

            <div className="flex gap-3">
              <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
                <img src={FacebookIcon} alt="Facebook" className="w-4 h-4" />
              </div>

              <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
                <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
              </div>

              <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200">
                <img src={TwitterIcon} alt="X" className="w-4 h-4" />
              </div>
            </div>
            <span className="mr-10 text-lg text-black">
              © 2025. All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
