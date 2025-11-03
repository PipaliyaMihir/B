import React from "react";

const tileData = [
    {
        category: "GVT",
        sizes: [
            { size: "60x60cm", h: 160, w: 120 },
            { size: "60x120cm", h: 240, w: 120 },
        ],
    },
    {
        category: "Double Charge Tiles",
        sizes: [
            { size: "60x60cm", h: 160, w: 100 },
            { size: "40x40cm", h: 110, w: 90 },
            { size: "30x30cm", h: 130, w: 100 },
        ],
    },
    {
        category: "Wall Tiles",
        sizes: [
            { size: "30x60cm", h: 320, w: 60 },
            { size: "25x75cm", h: 280, w: 60 },
            { size: "30x45cm", h: 180, w: 70 },
            { size: "20x60cm", h: 180, w: 110 },
            { size: "20x60cm", h: 130, w: 90 },
        ],
    },
    {
        category: "Step Riser",
        sizes: [
            { size: "30x120cm", h: 90, w: 480 },
            { size: "25x120cm", h: 70, w: 480 },
        ],
    },
    {
        category: "Floor Tiles",
        sizes: [
            { size: "30x30cm", h: 120, w: 110 },
            { size: "40x40cm", h: 140, w: 150 },
        ],
    },
    {
        category: "Parking Tiles",
        sizes: [
            { size: "45x45cm", h: 140, w: 130 },
            { size: "30x30cm", h: 110, w: 110 },
        ],
    },
    {
        category: "Full Body Tiles",
        sizes: [
            { size: "60x120cm", h: 440, w: 100 },
            { size: "60x60cm", h: 380, w: 110 },
            { size: "30x60cm", h: 310, w: 140 },
        ],
    },
];

const TileSizes = () => {
    return (
        <div className="bg-[#0e0e0e] text-white py-20 px-10 md:mx-28">
            {/* Header */}
            <p className="text-[#3ba17d] text-sm mb-4 font-medium">Our Range</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-16">
                Available Tile Sizes
            </h2>

            {/* Row 1 — GVT, Double Charge, Wall Tiles */}
            <div className="flex justify-center items-end gap-20 mb-24 flex-nowrap">
                {tileData.slice(0, 3).map((tile) => (
                    <div key={tile.category} className="flex flex-col items-center text-center">
                        <div className="flex items-end gap-1 mb-3 relative">
                            {tile.sizes.map((s, i) => (
                                <div
                                    key={i}
                                    className="bg-[#1a1a1a] border border-[#444] flex items-center justify-center text-gray-400 text-[12px]"
                                    style={{
                                        height: `${s.h}px`,
                                        width: `${s.w}px`,
                                    }}
                                >
                                    {s.size}
                                </div>
                            ))}
                            <div className="absolute -bottom-2 left-0 right-0 border-b-2 border-red-500"></div>
                        </div>
                        <p className="text-gray-300 text-sm mt-4">{tile.category}</p>
                    </div>
                ))}
            </div>

            {/* Row 2 — Step Riser */}
            {/* Step Riser Section */}
            <div className="flex justify-start items-start px-16 relative mt-10">
                {/* Tiles stacked vertically */}
                <div className="flex flex-col items-center relative pr-16">
                    {tileData[3].sizes.map((s, i) => (
                        <div
                            key={i}
                            className="bg-[#1a1a1a] border border-[#444] text-gray-400 text-sm flex items-center justify-center mb-4"
                            style={{
                                width: `${s.w}px`,
                                height: `${s.h}px`,
                            }}
                        >
                            {s.size}
                        </div>
                    ))}

                    {/* Red right border line */}
                    <div className="absolute -top-2 right-14 h-full border-r-2 border-red-500"></div>
                </div>

                {/* Category text aligned to line */}
                <p className="absolute right-[calc(100%-40rem)] top-1/2 -translate-y-1/2 text-gray-300 text-sm">
                    {tileData[3].category}
                </p>
            </div>


            {/* Row 3 — Floor, Parking, Full Body */}
            <div className="flex justify-center items-end gap-24 flex-nowrap">
                {tileData.slice(4).map((tile) => (
                    <div
                        key={tile.category}
                        className="flex flex-col items-center text-center self-end" // ✅ force bottom alignment
                        style={{ marginTop: "auto" }} // ✅ ensures alignment at same baseline
                    >
                        <div className="flex items-end gap-1 mb-3 relative h-[250px]">
                            {/* ✅ fixed height ensures equal bottom line alignment */}
                            {tile.sizes.map((s, i) => (
                                <div
                                    key={i}
                                    className="bg-[#1a1a1a] border border-[#444] flex items-center justify-center text-gray-400 text-[12px]"
                                    style={{
                                        height: `${s.h}px`,
                                        width: `${s.w}px`,
                                    }}
                                >
                                    {s.size}
                                </div>
                            ))}
                            <div className="absolute -bottom-2 left-0 right-0 border-b-2 border-red-500"></div>
                        </div>
                        <p className="text-gray-300 text-sm mt-4">{tile.category}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TileSizes;
