import React from "react";
import { Download } from "lucide-react";

export default function CatalogueGrid() {
  const catalogueItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", title: "Mountain Vista" },
    { id: 2, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", title: "Nature Peak" },
    { id: 3, image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400", title: "Desert Dunes" },
    { id: 4, image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400", title: "Golden Sands" },
    { id: 5, image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400", title: "Sunset Bay" },
    { id: 6, image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400", title: "Ice Canyon" },
    { id: 7, image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400", title: "Frozen Valley" },
    { id: 8, image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400", title: "Winter Path" },
    { id: 9, image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400", title: "Snow Ridge" },
    { id: 10, image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400", title: "Alpine View" },
    { id: 11, image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400", title: "Arctic Trail" },
    { id: 12, image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400", title: "Glacier Point" },
  ];

  return (
    <section className="min-h-screen bg-[#0e0e0e] text-white px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Hero Title - Fully Responsive */}
        <div className="relative flex justify-center items-center py-12 sm:py-20 md:py-32 lg:py-40 pt-4 sm:pt-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[180px] font-serif font-medium text-gray-400/20 select-none tracking-wide">
            Catalogue
          </h1>
        </div>

        {/* Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-items-center">
          {catalogueItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer flex flex-col items-center w-full max-w-[280px] sm:max-w-xs md:max-w-sm"
            >
              {/* Image Container */}
              <div className="relative bg-neutral-900 overflow-hidden shadow-lg transition-all duration-500 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover group-hover:scale-105 rounded-lg transition-transform duration-500"
                />
              </div>

              {/* Info Section */}
              <div className="mt-3 sm:mt-4 text-center w-full">
                <h3 className="text-xl sm:text-2xl text-gray-300 mb-2 mt-4 sm:mt-6">{item.title}</h3>
                <button className="flex items-center justify-center gap-2 border border-[#3B6E54] text-[#3B6E54] px-5 sm:px-6 py-2 rounded-md text-sm font-semibold hover:bg-emerald-600 hover:text-black transition-all duration-300 mt-4 sm:mt-6 md:mt-8 w-full sm:w-auto mx-auto">
                  <span>Download</span>
                  <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}