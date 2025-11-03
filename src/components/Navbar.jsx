import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-28 py-4 bg-linear-to-r bg-black text-white">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/logo.svg" alt="BREEZO" className="h-12 w-auto" />
        </Link>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-10 text-sm font-medium">
        <Link to="/company" className="text-gray-300 hover:text-white transition">
          Company
        </Link>
        <Link to="/collections" className="text-gray-300 hover:text-white transition">
          Collections
        </Link>
        <Link to="/export" className="text-gray-300 hover:text-white transition">
          Export
        </Link>
        <Link to="/catalogue" className="text-gray-300 hover:text-white transition">
          E-Catalogues
        </Link>
        <Link to="/technology" className="text-gray-300 hover:text-white transition">
          Technology
        </Link>
      </div>

      {/* Contact Button */}
      <Link
        to="/contact"
        className="flex items-center gap-2 bg-[#3B6E54] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#3f7559] transition"
      >
        Contact Us
        <span className="flex items-center justify-center w-5 h-5 bg-white rounded-full">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="#2f5f46"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;