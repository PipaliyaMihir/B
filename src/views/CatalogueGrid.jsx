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
    <section className="min-h-screen bg-[#0e0e0e] text-white px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative flex justify-center items-center py-40 pt-6">
          <h1 className="text-[180px] font-serif font-medium text-gray-400/20 select-none tracking-wide">
            Catalogue
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10 justify-items-center">
          {catalogueItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer flex flex-col items-center w-60 "
            >
              {/* Image */}
              <div className="relative bg-neutral-900 overflow-hidden shadow-lg transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover group-hover:scale-105 rounded-lg transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="mt-3 text-center">
                <h3 className="text-2xl text-gray-300 mb-2 mt-6">{item.title}</h3>
                <button className="flex items-center gap-2 border border-[#3B6E54] text-[#3B6E54] px-6 py-2 rounded-md text-sm font-semibold hover:bg-emerald-600 hover:text-black transition-all duration-300 mt-8">
                  <span>Download</span>
                  <Download className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}