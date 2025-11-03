import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const SocialBar = () => {
  return (
    <div className="fixed top-1/3 z-50 flex flex-col gap-3">
      {/* Instagram */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaInstagram size={18} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaFacebookF size={18} />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaXTwitter size={18} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaLinkedinIn size={18} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaWhatsapp size={18} />
      </a>
    </div>
  );
};

export default SocialBar;