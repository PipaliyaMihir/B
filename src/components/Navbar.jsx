import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // for desktop
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // for mobile

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="backdrop-blur-md bg-[#1e1e1e]/40 text-white w-full h-18 fixed top-0 left-0 z-50 shadow-lg border-b border-white/10">
      <div className="flex justify-between items-center px-6 sm:px-10 md:px-20 lg:px-28 py-4">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.svg" alt="BREEZO" className="h-10 sm:h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-sm font-medium items-center relative">
          <Link to="/company" className="text-gray-200 hover:text-white transition">
            Company
          </Link>

          {/* Collections with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-200 hover:text-white transition">
              Collections
              <FaChevronDown
                className={`text-xs transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-[#1E1E1E] rounded-lg shadow-lg z-50">
                <ul className="py-2 text-sm text-gray-200">
                  {[
                    ["Wall Tiles", "/collections/wall-tiles"],
                    ["Slab Tiles", "/collections/slab-tiles"],
                    ["Parking Tiles", "/collections/parking-tiles"],
                    ["Full Body Tiles", "/collections/full-body-tiles"],
                    ["Vitrified Tiles", "/collections/vitrified-tiles"],
                    ["Glazed Vitrified Tiles", "/collections/glazed-vitrified-tiles"],
                    ["Sanitary Ware", "/collections/sanitary-ware"],
                  ].map(([label, path]) => (
                    <li key={path}>
                      <Link
                        to={path}
                        onClick={closeMenu}
                        className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition rounded-md"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          <Link to="/export" className="text-gray-200 hover:text-white transition">
            Export
          </Link>
          <Link to="/catalogue" className="text-gray-200 hover:text-white transition">
            E-Catalogues
          </Link>
          <Link to="/tec" className="text-gray-200 hover:text-white transition">
            Technology
          </Link>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-[#3B6E54]/80 backdrop-blur-sm text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#3B6E54] transition"
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
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden backdrop-blur-md bg-black/60 flex flex-col items-center gap-6 py-6 transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <Link to="/company" onClick={closeMenu} className="text-gray-200 hover:text-white transition">
          Company
        </Link>

        {/* Collections Dropdown (Mobile) */}
        <div className="w-full flex flex-col items-center">
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="flex items-center justify-center gap-2 text-gray-200 hover:text-white transition"
          >
            Collections
            <FaChevronDown
              className={`text-xs transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {mobileDropdownOpen && (
            <div className="flex flex-col items-center mt-3 space-y-2 w-full backdrop-blur-md bg-white/10 border border-white/20 py-3 rounded-md">
              {[
                ["Wall Tiles", "/collections/wall-tiles"],
                ["Slab Tiles", "/collections/slab-tiles"],
                ["Parking Tiles", "/collections/parking-tiles"],
                ["Full Body Tiles", "/collections/full-body-tiles"],
                ["Vitrified Tiles", "/collections/vitrified-tiles"],
                ["Glazed Vitrified Tiles", "/collections/glazed-vitrified-tiles"],
                ["Sanitary Ware", "/collections/sanitary-ware"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/export" onClick={closeMenu} className="text-gray-200 hover:text-white transition">
          Export
        </Link>
        <Link to="/catalogue" onClick={closeMenu} className="text-gray-200 hover:text-white transition">
          E-Catalogues
        </Link>
        <Link to="/tec" onClick={closeMenu} className="text-gray-200 hover:text-white transition">
          Technology
        </Link>

        {/* Contact Button (Mobile) */}
        <Link
          to="/contact"
          onClick={closeMenu}
          className="bg-[#3B6E54]/80 backdrop-blur-sm text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#3B6E54] transition"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
