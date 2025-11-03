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
    <div className="bg-[#0f0f0f] text-white py-16 px-10 md:mx-28 text-left">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-[#3ba17d] text-sm mb-2 font-light">Our Specialities</p>
        <h2 className="text-3xl font-serif">The Breezo Difference</h2>
      </div>

      {/* Feature Icons */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-22 mt-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-28 group transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-sm text-gray-300 text-center leading-tight text-light">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecialities;
