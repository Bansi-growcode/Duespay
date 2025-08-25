import { FaLinkedinIn, FaTwitter, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import resorpaylogo from "../images/resorpay.png";

const Footer = () => (
  <footer className="bg-[#232323] pt-12">
    {/* Top Section */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 px-6 pb-12">
      {/* Left: Contact Info & Social */}
      <div className="flex flex-col gap-4 md:w-1/3 text-center md:text-left">
        <p className="text-white text-base">
          Address: 123, Tech Park, Bengaluru, India
        </p>
        <p className="text-white text-base">
          Email: hello@your.company.com
        </p>
        <div className="flex justify-center md:justify-start items-center gap-2 text-white text-base">
          <FaPhoneAlt /> +91-987654210
        </div>

        {/* Razorpay + Made in India */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 items-center justify-center md:justify-start">
          <div className="flex justify-center items-center bg-white h-10 w-36 rounded-full">
            <img
              src={resorpaylogo}
              alt="Razorpay"
              className="transform scale-90 origin-center"
            />
          </div>
          <button className="border border-white text-white rounded-full px-5 py-1.5 text-sm font-semibold">
            MADE IN INDIA
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <a
            href="#"
            className="bg-white text-black rounded-full p-2 transition hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="bg-white text-black rounded-full p-2 transition hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="bg-white text-black rounded-full p-2 transition hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Center & Right: Links */}
      <div className="flex flex-1 sm:justify-between flex-wrap gap-10 text-center justify-center sm:text-left">
        <div className="flex flex-col gap-2 min-w-[150px]">
          <h4 className="text-white text-lg font-semibold mb-2">About Us</h4>
          <a href="#" className="text-white text-base hover:underline">Blog</a>
          <a href="#" className="text-white text-base hover:underline">FAQs</a>
          <a href="#" className="text-white text-base hover:underline">Careers</a>
          <a href="#" className="text-white text-base hover:underline">Terms & Conditions</a>
        </div>

        <div className="flex flex-col gap-2 min-w-[150px]">
          <h4 className="text-white text-lg font-semibold mb-2">Privacy Policy</h4>
          <a href="#" className="text-white text-base hover:underline">Pricing</a>
          <a href="#" className="text-white text-base hover:underline">Features</a>
          <a href="#" className="text-white text-base hover:underline">API Access</a>
          <a href="#" className="text-white text-base hover:underline">Support Center</a>
        </div>

        <div className="flex flex-col gap-2 min-w-[150px]">
          <h4 className="text-white text-lg font-semibold mb-2">Terms</h4>
          <a href="#" className="text-white text-base hover:underline">Demo</a>
          <a href="#" className="text-white text-base hover:underline">Contact</a>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="bg-[#F5F5F5] text-black flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-4 rounded-b-2xl">
      <p className="text-sm sm:text-base font-medium text-center md:text-left">
        © 2025 Company. All rights reserved.
      </p>
      <button className="bg-[#FF0000] text-white text-sm sm:text-lg font-semibold rounded-full px-6 sm:px-8 py-2 transition hover:bg-red-700">
        Get Started
      </button>
    </div>
  </footer>
);

export default Footer;
