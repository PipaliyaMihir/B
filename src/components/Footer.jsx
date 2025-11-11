import React from "react";
import { FaInstagram, FaFacebookF, FaGlobe, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Instagram Header Section */}
      <div className="bg-(--bg) flex flex-col items-center justify-center py-6 sm:py-8 px-4">
        <div className="flex flex-row sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <span className="text-gray-300 text-sm sm:text-lg italic leading-tight">
            Follow <br className="sm:block" /> us on
          </span>
          <div className="flex items-center justify-center">
            <img
              src="/footer.png"
              alt="Instagram"
              className="w-[150px] sm:w-[250px] h-10 sm:h-16 hover:opacity-80 cursor-pointer transition"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#131313] text-gray-300 py-10 sm:py-12 px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start text-center lg:text-left gap-8 sm:gap-16 max-w-7xl mx-auto">
          {/* Left - Logo & Socials */}
          <div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-6">
            <Link to="/">
              <img src="/logo.svg" alt="BREEZO" className="h-12 sm:h-16 w-auto" />
            </Link>

            <div className="flex space-x-4 sm:space-x-6 text-white text-lg sm:text-xl">
              <FaInstagram className="hover:text-red-500 cursor-pointer transition" />
              <FaGlobe className="hover:text-red-500 cursor-pointer transition" />
              <FaEnvelope className="hover:text-red-500 cursor-pointer transition" />
              <FaFacebookF className="hover:text-red-500 cursor-pointer transition" />
            </div>
          </div>

          {/* Center - Links & Map */}
          <div className="flex flex-col items-center lg:items-center mt-6 lg:mt-0">
            <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-2 sm:gap-y-4 mb-4 sm:mb-6 text-xs sm:text-sm">
              <a href="#" className="hover:text-white transition">About Us</a>
              <a href="#" className="hover:text-white transition">Why Breezo</a>
              <a href="#" className="hover:text-white transition">Export</a>
              <a href="#" className="hover:text-white transition">Technology</a>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-gray-800 w-[220px] sm:w-[300px] md:w-[460px] lg:w-[490px] h-[150px] sm:h-[200px] md:h-[220px] rounded-md overflow-hidden shadow-md">
              <iframe
                title="Breezo Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.123456789!2d72.54321!3d23.030321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b123456789%3A0xabcdefabcdef!2sMahesana%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1696500000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm text-center lg:text-left max-w-xs mt-6 lg:mt-0">
            <div>
              <h4 className="font-semibold text-white mb-1">Address</h4>
              <p>
                28, Laxmi Business Center, <br />
                Maheshwari Nagar Chokdi, Morbi - 363642, Gujarat, India
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Mail Us</h4>
              <a
                href="mailto:breezogroupofcompany@gmail.com"
                className="hover:text-white transition"
              >
                breezogroupofcompany@gmail.com
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Call Us</h4>
              <p>+91 7600432823</p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-gray-500 mt-8 sm:mt-10 text-[10px] sm:text-xs">
          <p>© 2025 Breezo Group of Company | All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;