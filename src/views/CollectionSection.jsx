import React from "react";

const collections = [
  { id: 1, title: "Classic Collection", image: "wall.png" },
  { id: 2, title: "Modern Collection", image: "wall.png" },
  { id: 3, title: "Elegant Design", image: "wall.png" },
  { id: 4, title: "Luxury Series", image: "wall.png" },
  { id: 5, title: "Premium Look", image: "wall.png" },
  { id: 6, title: "Artistic Finish", image: "wall.png" },
];

const CollectionSection = () => {
  return (
    <div className="bg-[#1e1e1e] text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-20 xl:mx-28">
      {/* Section Header */}
      <p className="text-[#3ba17d] text-xs sm:text-sm mb-4 sm:mb-6 font-medium text-center sm:text-left">
        Our Collection
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-10 sm:mb-14 max-w-3xl mx-auto sm:mx-0 text-center sm:text-left leading-snug">
        Breezo - Experience a collection crafted with elegance, precision, and
        timeless design.
      </h2>

      {/* First Row - 2 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
        {collections.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-20"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
              <p className="text-sm text-gray-200">{item.title}</p>
              <p className="text-xs text-gray-300 tracking-widest uppercase">
                Luxurious
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - 4 Images */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
        {collections.slice(2, 6).map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 sm:h-64 md:h-80 lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-20"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-2 sm:p-4">
              <p className="text-xs sm:text-sm text-gray-200">{item.title}</p>
              <p className="text-[10px] sm:text-xs text-gray-300 tracking-widest uppercase">
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
