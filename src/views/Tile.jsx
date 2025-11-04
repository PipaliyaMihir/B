import React from "react";

const AvailableTileSizes = () => {
    return (
        <div className="bg-[#1E1E1E] text-white py-16 px-6 md:px-20">
            {/* Heading */}
            <div>
                <p className="text-[#3ba17d] px-15 text-sm mb-2">Our Range</p>
                <h2 className="text-3xl md:text-4xl px-15 font-serif">
                    Available Tile Sizes
                </h2>
            </div>

            {/* Images Section */}
            <div className="flex flex-col items-center justify-center gap-10 mt-10">
                {/* First Image */}
                <img
                    src="public/image 3.png"
                    alt="Available Tile Sizes Top"
                    className="w-full md:w-[85%] lg:w-[75%] h-auto object-contain rounded-lg"
                />

                {/* Second Image */}
                <img
                    src="public/image 4.png"
                    alt="Available Tile Sizes Bottom"
                    className="w-full md:w-[85%] lg:w-[75%] h-auto object-contain rounded-lg"
                />
            </div>
        </div>
    );
};

export default AvailableTileSizes;
