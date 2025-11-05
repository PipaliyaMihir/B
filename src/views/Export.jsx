import React, { useState } from "react";

const Export = () => {
  const features = [
    { img: "/e1.png", title: "Low Maintenance" },
    { img: "/e2.png", title: "Customize Packaging" },
    { img: "/e3.png", title: "Availability Assurance" },
    { img: "/e4.png", title: "Range of Surface & Size" },
    { img: "/e5.png", title: "Innovative design & Quality" },
    { img: "/e6.png", title: "Quick Customer Support" },
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
    <div className="bg-[#1e1e1e] text-white">
      {/* --- Top Export Heading --- */}
      <div className="relative flex justify-center items-center py-16 sm:py-43">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] text-gray-600 font-bold select-none px-4 text-center"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Export
        </h1>
      </div>

      {/* --- Why We Best Section --- */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        <p className="text-sm text-[#3ba17d] mb-2 text-left md:text-left tracking-wide mx-7 sm:mx-0">
          Why We Best
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-[32px] text-gray-100 mb-12 text-left mx-7 sm:mx-0 md:text-left">
          Why import tiles from Breezo <br />
          <span className="text-[#3ba17d]">Group of Company</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 justify-items-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 sm:space-y-4"
            >
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-md bg-neutral-900">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <p className="text-[12px] sm:text-sm text-gray-300 leading-tight w-[110px] sm:w-[150px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Export Globally Section --- */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-7 sm:mx-auto">
          {/* Left Content */}
          <div>
            <p className="text-sm text-[#3ba17d] mb-2 tracking-wide">
              Export Globally
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium mb-6">
              Export Globally
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide text-justify">
              A strong and ever-growing customer base across multiple countries
              has positioned Breezo Group of Companies as one of the leading global
              exporters of premium tiles and ceramics.
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide text-justify">
              Our brand has become a synonym for innovation, superior quality, and
              unmatched service in both domestic and international markets. With a
              clear vision to achieve global recognition, Breezo is continuously
              expanding its footprint to establish a solid presence worldwide.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/ebg.png"
              alt="Export Background"
              className="w-[320px] sm:w-[400px] md:w-[500px] h-auto object-contain opacity-90 mix-blend-screen"
            />
          </div>
        </div>

        {/* Product Categories */}
        <div className="mt-12 sm:mt-16 text-center space-y-4 sm:space-y-6 text-lg sm:text-xl md:text-2xl text-gray-200 font-semibold">
          <p>Digital Wall Tiles</p>
          <p>Digital Floor Tiles</p>
          <p>Full Body Vitrified Tiles</p>
          <p>GVT / PGVT</p>
          <p>Double Charged Vitrified Tiles</p>
          <p>Porcelain Slab</p>
          <p>Nano Vitrified Tiles</p>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 max-w-5xl mx-7 sm:mx-auto">
        <p className="text-[#3ba17d] text-sm sm:text-md mb-2 font-light">
          Let's Connect
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif mb-8 text-left md:text-left">
          Get In Touch
        </h2>

        <div className="space-y-6">
          {/* Name & Phone */}
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

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#3ba17d] transition-all duration-300"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#3ba17d] transition-all duration-300 resize-none"
          />

          {/* Submit Button */}
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