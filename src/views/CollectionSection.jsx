import React from "react";

const collections = [
  { id: 1, title: "Classic Collection", image: "public/psdmarchpang46 1.png" },
  { id: 2, title: "Modern Collection", image: "public/psdmarchpang46 1.png" },
  { id: 3, title: "Elegant Design", image: "public/psdmarchpang46 1.png" },
  { id: 4, title: "Luxury Series", image: "public/psdmarchpang46 1.png" },
  { id: 5, title: "Premium Look", image: "public/psdmarchpang46 1.png" },
  { id: 6, title: "Artistic Finish", image: "public/psdmarchpang46 1.png" },
];

const CollectionSection = () => {
  return (
    <div className="bg-(--bg)] text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-20 mx-7 sm:mx-28"
      style={{ fontFamily: "var(--head-font)" }}>
      {/* Section Header */}
      <p className="text-[#3ba17d] text-xs sm:text-sm mb-3 sm:mb-4 font-medium">
        Our Collection
      </p>
      <h2 className=" text-xl sm:text-2xl md:text-3xl font-serif mb-8 sm:mb-10 max-w-3xl mx-auto sm:mx-0 leading-snug">
        Breezo - Experience a collection crafted with elegance, precision, and
        timeless design.
      </h2>

      {/* First Row - 2 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-8">
        {collections.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-60"></div>

            {/* Top Text */}
            <div
              className="absolute top-2 sm:top-4 left-3 sm:left-4 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100
              translate-y-0 sm:group-hover:translate-y-1
              transition-all duration-700 delay-150"
            >
              <p className="text-xs sm:text-sm text-gray-200">{item.title}</p>
            </div>

            {/* Bottom Text */}
            <div
              className="absolute bottom-2 sm:bottom-4 left-3 sm:left-4 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100
              translate-y-0 sm:group-hover:-translate-y-1
              transition-all duration-700 delay-300"
            >
              <p className="text-[9px] sm:text-xs text-gray-300 tracking-widest uppercase">
                Luxurious
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - 4 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 ">
        {collections.slice(2, 6).map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-48 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-60"></div>

            {/* Top Text */}
            <div
              className="absolute top-2 sm:top-3 left-2 sm:left-3 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100
              translate-y-0 sm:group-hover:translate-y-1
              transition-all duration-700 delay-150"
            >
              <p className="text-[10px] sm:text-sm text-gray-200">
                {item.title}
              </p>
            </div>

            {/* Bottom Text */}
            <div
              className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100
              translate-y-0 sm:group-hover:-translate-y-1
              transition-all duration-700 delay-300"
            >
              <p className="text-[8px] sm:text-[10px] text-gray-300 tracking-widest uppercase">
                Luxurious
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;
