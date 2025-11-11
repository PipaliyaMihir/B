import React from "react";
import { FaUsers, FaBrain, FaThLarge, FaChartLine } from "react-icons/fa";
import A1 from "./A1";
import A2 from "./A2";
import A3 from "./A3";

const Advantage = () => {
  return (
    <div className="bg-(--bg) text-white py-10 px-4 sm:px-6 md:px-10 lg:px-28">
      <div className="text-left max-w-7xl mx-7 sm:mx-auto">
        {/* Section Header */}
        <p className="text-[#3ba17d] text-xs sm:text-sm mb-2 font-medium">
          Advantage
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-10 sm:mb-12">
          What Sets Us Apart ?
        </h2>

        {/* Cards */}
        <div className=" w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 place-items-center">
          {/* 1️⃣ Growing Group */}
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 w-full sm:max-w-xs">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full border-4 border-dashed border-red-500 flex items-center justify-center group-hover:border-red-700 transition-colors duration-300">
              <A1 />
            </div>
            <h3 className="text-base sm:text-lg"
              style={{ fontFamily: "var(--head-font)" }}>Growing Group</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed tracking-wide text-justify"
              style={{ fontFamily: "var(--body-font)" }}>
              With the trust of customers and consistent efforts towards
              perfection, Breezo Ceramics is emerging as a hub of top-class
              ceramic products that settle for nothing less than the BEST. Class
              and luxury pinnacle is the gist of our affordable product range.
            </p>
          </div>

          {/* 2️⃣ Young Mindset */}
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 w-full sm:max-w-xs mt-6 sm:mt-0 
  transform scale-105 z-12 mb-30">

            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full border-4 border-dashed border-red-500 flex items-center justify-center transition-colors duration-300">
              <A2 />
            </div>

            <h3 className="text-lg sm:text-xl md:text-3xl"
              style={{ fontFamily: "var(--head-font)" }}>
              Young Mindset
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed tracking-wide text-justify"
              style={{ fontFamily: "var(--body-font)" }}>
              We relate to modern-day décor expectations and prepare fresh
              styles that blend well with your theme and décor your space. Every
              bit of our export quality products is curated, keeping in mind the
              design, appearance and exclusiveness you desire.
            </p>
          </div>

          {/* 3️⃣ Largest Collection of Tiles */}
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 w-full sm:max-w-xs mt-6 sm:mt-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full border-4 border-dashed border-red-500 flex items-center justify-center group-hover:border-red-700 transition-colors duration-300">
              <A3 />
            </div>
            <h3 className="text-base sm:text-lg"
              style={{ fontFamily: "var(--head-font)" }}>Largest Collection of Tiles</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed tracking-wide text-justify"
              style={{ fontFamily: "var(--body-font)" }}>
              Get a breakthrough in the unique collection of ceramic tiles with
              us. Start browsing through endless styles, designs and tiling
              options to revamp your space with sophisticated ceramic solutions
              that upgrade the space dynamics!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;