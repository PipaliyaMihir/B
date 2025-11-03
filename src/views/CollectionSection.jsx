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
    <div className="bg-[#0e0e0e] text-white py-20 px-8 mx-28">
      {/* Section Header */}
      <p className="text-[#3ba17d] text-sm mb-6 font-medium">Our Collection</p>
      <h2 className="text-3xl md:text-4xl font-serif mb-14 max-w-3xl">
        Breezo - Experience a collection crafted with elegance, precision, and
        timeless design.
      </h2>

      {/* First Row - 2 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
        {collections.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-20"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <p className="text-sm text-gray-200">{item.title}</p>
              <p className="text-xs text-gray-300 tracking-widest uppercase">
                Luxurious
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - 4 Images */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {collections.slice(2, 6).map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-20"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <p className="text-sm text-gray-200">{item.title}</p>
              <p className="text-xs text-gray-300 tracking-widest uppercase">
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