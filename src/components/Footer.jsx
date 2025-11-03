import React from "react";
import { FaInstagram, FaFacebookF, FaGlobe, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Instagram Header Section */}
      <div className="bg-[#0e0e0e] flex flex-col items-center justify-center py-8">
        <div className="flex flex-col md:flex-row items-center space-x-3 text-center md:text-left">
          <span className="text-gray-300 text-lg italic leading-tight mb-2 md:mb-0">
            Follow <br /> us on
          </span>
          <div className="flex items-center justify-center space-x-2">
            <img
              src="/footer.png"
              alt="Instagram"
              className="w-[300px] h-20 hover:opacity-80 cursor-pointer transition"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-gray-300 py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left gap-16 md:gap-28">
          
          {/* Left - Logo & Socials */}
          <div className="flex flex-col items-center md:items-center space-y-6">
            <Link to="/">
              <img src="/logo.svg" alt="BREEZO" className="h-16 w-auto" />
            </Link>

            <div className="flex space-x-6 text-white text-xl">
              <FaInstagram className="hover:text-red-500 cursor-pointer transition" />
              <FaGlobe className="hover:text-red-500 cursor-pointer transition" />
              <FaEnvelope className="hover:text-red-500 cursor-pointer transition" />
              <FaFacebookF className="hover:text-red-500 cursor-pointer transition" />
            </div>
          </div>

          {/* Center - Links & Map */}
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-wrap justify-center space-x-10 gap-8 mb-6 text-md">
              <a href="#" className="hover:text-white">About Us</a>
              <a href="#" className="hover:text-white">Why Breezo</a>
              <a href="#" className="hover:text-white">Export</a>
              <a href="#" className="hover:text-white">Technology</a>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-gray-800 w-[320px] sm:w-[400px] md:w-[490px] h-[220px] rounded-md overflow-hidden shadow-md">
              <iframe
                title="Breezo Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.123456789!2d72.54321!3d23.030321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b123456789%3A0xabcdefabcdef!2sMahesana%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1696500000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-8 text-sm text-center md:text-left">
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
                className="hover:text-white"
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
        <div className="text-center text-gray-500 mt-10 text-xs">
          <p>© 2025 Breezo Group of Company | All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;