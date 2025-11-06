import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="backdrop-blur-md bg-[#1e1e1e]/40 text-white h-19 w-full fixed top-0 left-0 z-50 shadow-lg border-b border-white/10">
      <div className="flex justify-between items-center px-6 sm:px-10 md:px-20 lg:px-28 py-4">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center justify-center">
          <img src="/logo.svg" alt="BREEZO" className="h-10 sm:h-12 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-10 text-sm font-medium relative">
          <Link to="/" className="text-gray-200 hover:text-white transition flex items-center justify-center">
            Home
          </Link>
          <Link to="/usabout" className="text-gray-200 hover:text-white transition flex items-center justify-center">
            About Us
          </Link>

          {/* Collections Dropdown */}
          <div
            className="relative group flex items-center justify-center"
            onMouseEnter={() => {
              clearTimeout(window.dropdownTimeout);
              setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              window.dropdownTimeout = setTimeout(() => {
                setDropdownOpen(false);
              }, 150);
            }}
          >
            <button className="flex items-center justify-center gap-1 text-gray-200 hover:text-white transition relative z-10">
              Collections
              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Fixed Positioned Dropdown */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-[#1E1E1E] rounded-lg shadow-lg z-50 transition-all duration-300 transform origin-top ${dropdownOpen
                ? "opacity-100 scale-100 translate-y-0 visible"
                : "opacity-0 scale-95 -translate-y-2 invisible"
                }`}
            >
              <ul className="py-2 text-sm text-gray-200 flex flex-col items-center justify-center">
                {[
                  ["Wall Tiles", "/collections/wall-tiles"],
                  ["Slab Tiles", "/collections/slab-tiles"],
                  ["Parking Tiles", "/collections/parking-tiles"],
                  ["Full Body Tiles", "/collections/full-body-tiles"],
                  ["Vitrified Tiles", "/collections/vitrified-tiles"],
                  ["Glazed Vitrified Tiles", "/collections/glazed-vitrified-tiles"],
                  ["Sanitary Ware", "/collections/sanitary-ware"],
                ].map(([label, path]) => (
                  <li key={path} className="w-full text-center">
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
          </div>


          <Link to="/export" className="text-gray-200 hover:text-white transition flex items-center justify-center">
            Export
          </Link>
          <Link to="/catalogue" className="text-gray-200 hover:text-white transition flex items-center justify-center">
            E-Catalogues
          </Link>
          <Link to="/tec" className="text-gray-200 hover:text-white transition flex items-center justify-center">
            Technology
          </Link>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:flex items-center justify-center">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-[#3B6E54]/80 backdrop-blur-sm text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#3B6E54] transition"
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
          className="md:hidden text-gray-200 focus:outline-none flex items-center justify-center"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#1E1E1E] flex flex-col items-center justify-center gap-6 py-6 transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <Link to="/company" onClick={closeMenu} className="text-gray-200 hover:text-white transition flex items-center justify-center">
          Company
        </Link>

        {/* Mobile Dropdown */}
        <div className="w-full flex flex-col items-center justify-center">
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
            <div className="flex flex-col items-center justify-center mt-3 space-y-2 w-full bg-[#1E1E1E] border border-white/20 py-3 rounded-md">
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
                  className="text-gray-300 hover:text-white text-sm transition flex items-center justify-center"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/export" onClick={closeMenu} className="text-gray-200 hover:text-white transition flex items-center justify-center">
          Export
        </Link>
        <Link to="/catalogue" onClick={closeMenu} className="text-gray-200 hover:text-white transition flex items-center justify-center">
          E-Catalogues
        </Link>
        <Link to="/tec" onClick={closeMenu} className="text-gray-200 hover:text-white transition flex items-center justify-center">
          Technology
        </Link>

        {/* Contact Button (Mobile) */}
        <Link
          to="/contact"
          onClick={closeMenu}
          className="bg-[#3B6E54] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#3B6E54] transition flex items-center justify-center"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;