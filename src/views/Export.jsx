import React, { useState } from "react";
import E1 from "../components/E1";
import E2 from "../components/E2";
import E3 from "../components/E3";
import E4 from "../components/E4";
import E5 from "../components/E5";
import E6 from "../components/E6";

const Export = () => {
  const features = [
    { icon: <E1 />, title: "Low Maintenance" },
    { icon: <E2 />, title: "Customize Packaging" },
    { icon: <E3 />, title: "Availability Assurance" },
    { icon: <E4 />, title: "Range of Surface & Size" },
    { icon: <E5 />, title: "Innovative design & Quality" },
    { icon: <E6 />, title: "Quick Customer Support" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div
      className="bg-(--bg) text-white w-[80%] mx-auto"
      style={{ fontFamily: "var(--head-font)" }}
    >
      {/* Top Export Heading */}
      <div className="relative flex justify-center items-center py-16">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[150px] text-gray-600 font-bold select-none px-4"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Export
        </h1>
      </div>

      {/* Why We Best Section */}
      <section className="py-12 px-4 sm:px-6 md:px-10 mx-auto">
        <p className="text-xl text-[#3ba17d] mb-2 text-left md:text-left tracking-wide sm:mx-0">
          Why We Best
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-[40px] text-gray-100 mb-12 text-left sm:mx-0 md:text-left">
          Why import tiles from Breezo <br />
          <span>Group of Company</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 justify-items-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 sm:space-y-4"
            >
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full">
                {item.icon}
              </div>
              <p className="text-[12px] sm:text-sm text-gray-300 leading-tight w-[110px] sm:w-[150px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Export Globally Section --- */}
      <section className="py-12 sm:py-16 sm:px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-5 sm:mx-auto">
          <div>
            <p className="text-sm text-[#3ba17d] mb-2 tracking-wide">
              Export Globally
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium mb-6">
              Export Globally
            </h2>
            <p
              className="text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide text-justify lg:pr-25"
              style={{ fontFamily: "var(--body-font)" }}
            >
              A strong and ever-growing customer base across multiple countries
              has positioned Breezo Group of Companies as one of the leading
              global exporters of premium tiles and ceramics.
            </p>
            <p
              className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide text-justify lg:pr-25"
              style={{ fontFamily: "var(--body-font)" }}
            >
              Our brand has become a synonym for innovation, superior quality,
              and unmatched service in both domestic and international markets.
              With a clear vision to achieve global recognition, Breezo is
              continuously expanding its footprint to establish a solid presence
              worldwide.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="public/export-img.png"
              alt="Export Background"
              className="w-[330px] sm:w-[400px] md:w-[500px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Product Categories */}
        <div className="mt-12 sm:mt-16 text-center space-y-10 sm:space-y-20 text-lg sm:text-2xl md:text-4xl text-gray-200 font-semibold">
          <p>Digital Wall Tiles</p>
          <p>Digital Floor Tiles</p>
          <p>Full Body Vitrified Tiles</p>
          <p>GVT / PGVT</p>
          <p>Double Charged Vitrified Tiles</p>
          <p>Porcelain Slab</p>
          <p>Nano Vitrified Tiles</p>
        </div>
      </section>

      {/* --- 🌍 Global Footprint Section (newly added) --- */}
      <section className="py-16 px-6 sm:px-10 md:px-16 bg-(--bg) rounded-2xl text-left">
        <p className="text-[#3ba17d] text-sm mb-2 tracking-wide">
          Going Global
        </p>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl text-gray-100 font-serif mb-10"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Global Footprint
        </h2>

        <div className="bg-gray-400 w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-lg flex items-center justify-center">
          <p className="text-gray-800 text-sm sm:text-base md:text-lg">
            {/* Placeholder for World Map or Export Illustration */}
            (Map or Image will go here)
          </p>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 max-w-5xl sm:mx-auto">
        <p className="text-[#3ba17d] text-sm sm:text-md mb-2 font-light">
          Let's Connect
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif mb-8 text-left md:text-left">
          Get In Touch
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#3ba17d] transition-all duration-300"
            />
            <input
              type="tel"
              name="phone"
              placeholder="+1234567890"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#3ba17d] transition-all duration-300"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#3ba17d] transition-all duration-300"
          />

          <textarea
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#3ba17d] transition-all duration-300 resize-none"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-[#3B6E54] hover:bg-[#3ba17d] text-white font-medium py-3 rounded transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Export;
