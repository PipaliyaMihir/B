// import React from "react";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaXTwitter,
//   FaLinkedinIn,
//   FaWhatsapp,
// } from "react-icons/fa6";

// const SocialBar = () => {
//   return (
//     <div
//       className="
//         fixed 
//         top-1/3 
//         left-0 
//         z-40 
//         flex 
//         flex-col 
//         gap-3 
//         sm:gap-3 
//         xs:gap-2 
//         p-1 
//         sm:p-0
//       "
//     >
//       {/* Instagram */}
//       <a
//         href="https://www.instagram.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 sm:p-2.5 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
//       >
//         <FaInstagram size={18} className="sm:size-[18px] size-[15px]" />
//       </a>

//       {/* Facebook */}
//       <a
//         href="https://www.facebook.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 sm:p-2.5 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
//       >
//         <FaFacebookF size={18} className="sm:size-[18px] size-[15px]" />
//       </a>

//       {/* X (Twitter) */}
//       <a
//         href="https://x.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 sm:p-2.5 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
//       >
//         <FaXTwitter size={18} className="sm:size-[18px] size-[15px]" />
//       </a>

//       {/* LinkedIn */}
//       <a
//         href="https://www.linkedin.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 sm:p-2.5 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
//       >
//         <FaLinkedinIn size={18} className="sm:size-[18px] size-[15px]" />
//       </a>

//       {/* WhatsApp */}
//       <a
//         href="https://wa.me/1234567890"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 sm:p-2.5 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
//       >
//         <FaWhatsapp size={18} className="sm:size-[18px] size-[15px]" />
//       </a>
//     </div>
//   );
// };

// export default SocialBar;


import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

const SocialBar = () => {
  return (
    <div
      className="
        fixed 
        top-1/3 
        left-0 
        z-40 
        flex 
        flex-col 
        gap-2 
        p-1
      "
    >
      {/* Instagram */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3b6e54] hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </div>
  );
};

export default SocialBar;