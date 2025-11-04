import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-black text-white w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-6 sm:px-10 md:px-20 lg:px-28 py-4">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.svg" alt="BREEZO" className="h-10 sm:h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-sm font-medium">
          <Link to="/company" className="text-gray-300 hover:text-white transition">Company</Link>
          <Link to="/collections" className="text-gray-300 hover:text-white transition">Collections</Link>
          <Link to="/export" className="text-gray-300 hover:text-white transition">Export</Link>
          <Link to="/catalogue" className="text-gray-300 hover:text-white transition">E-Catalogues</Link>
          <Link to="/technology" className="text-gray-300 hover:text-white transition">Technology</Link>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
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
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-black flex flex-col items-center gap-6 py-6 transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <Link to="/company" onClick={closeMenu} className="text-gray-300 hover:text-white transition">Company</Link>
        <Link to="/collections" onClick={closeMenu} className="text-gray-300 hover:text-white transition">Collections</Link>
        <Link to="/export" onClick={closeMenu} className="text-gray-300 hover:text-white transition">Export</Link>
        <Link to="/catalogue" onClick={closeMenu} className="text-gray-300 hover:text-white transition">E-Catalogues</Link>
        <Link to="/technology" onClick={closeMenu} className="text-gray-300 hover:text-white transition">Technology</Link>

        {/* Contact Button (Mobile) */}
        <Link
          to="/contact"
          onClick={closeMenu}
          className="bg-[#3B6E54] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#3f7559] transition"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
