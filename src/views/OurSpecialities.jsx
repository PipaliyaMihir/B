import React from "react";

const OurSpecialities = () => {
  const features = [
    { img: "/f1.png", title: "Scratch Proof" },
    { img: "/f2.png", title: "Waterproof" },
    { img: "/f3.png", title: "High Durable" },
    { img: "/f4.png", title: "Hygienic" },
    { img: "/f5.png", title: "HD Design" },
    { img: "/f6.png", title: "Dimension Stability" },
  ];

  return (
    <div className="bg-[#1e1e1e] text-white py-16 px-6 sm:px-10 md:px-20 lg:px-28">
      {/* Heading */}
      <div className="text-center md:text-left mb-12">
        <p className="text-[#3ba17d] text-sm mb-2 font-medium tracking-wide uppercase">
          Our Specialities
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif">
          The Breezo Difference
        </h2>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 sm:gap-14 mt-10 justify-items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-4">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-tight">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecialities;
