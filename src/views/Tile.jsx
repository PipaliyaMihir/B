import React from "react";

const AvailableTileSizes = () => {
  return (
    <div className="bg-(--bg) text-white mx-7 sm:mx-0 py-12 sm:py-16 px-4 sm:px-6 md:px-20">
      {/* Heading */}
      <div className="text-left sm:text-left">
        <p className="text-[#3ba17d] text-xs sm:text-sm mb-1 sm:mb-2">Our Range</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif">
          Available Tile Sizes
        </h2>
      </div>

      {/* Images Section */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-10">
        {/* First Image */}
        <img
          src="/image 3.png"
          alt="Available Tile Sizes Top"
          className="w-full md:w-[85%] lg:w-[75%] h-auto object-contain rounded-lg"
        />

        {/* Second Image */}
        <img
          src="/image 4.png"
          alt="Available Tile Sizes Bottom"
          className="w-full md:w-[85%] lg:w-[75%] h-auto object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default AvailableTileSizes;