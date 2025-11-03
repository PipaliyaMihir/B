import React from "react";
import { FaUsers, FaBrain, FaThLarge, FaChartLine } from "react-icons/fa";

const Advantage = () => {
  return (
    <div className="bg-[#0e0e0e] text-white py-20 px-6">
      <div className="mx-28 text-left">
        {/* Section Header */}
        <p className="text-[#3ba17d] text-sm mb-2 font-medium">Advantage</p>
        <h2 className="text-3xl md:text-4xl font-serif mb-34">
          What Sets Us Apart ?
        </h2>

        {/* 3 Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* 1️⃣ Growing Group */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="border-2 border-dashed border-red-500 rounded-full p-5 w-20 h-20 flex items-center justify-center">
              <FaChartLine className="text-white text-4xl" />
            </div>
            <h3 className="text-lg">Growing Group</h3>
            <p className="text-gray-400 text-sm max-w-xs leading-[1.8rem] tracking-[0.2px] text-justify">
              With the trust of customers and consistent efforts towards
              perfection, Breezo Ceramics is emerging as a hub of top-class
              ceramic products that settle for nothing less than the BEST. Class
              and luxury pinnacle is the gist of our affordable product range.
            </p>
          </div>

          {/* 2️⃣ Young Mindset */}
          <div className="flex flex-col items-center text-center space-y-4 md:-mt-18">
            <div className="border-2 border-dashed border-red-500 rounded-full p-5 w-20 h-20 flex items-center justify-center">
              <FaBrain className="text-white text-5xl relative z-10" />
            </div>
            <h3 className="text-2xl">Young Mindset</h3>
            <p className="text-gray-400 text-md leading-[1.8rem] tracking-[0.2px] text-justify max-w-xs">
              We relate to modern-day décor expectations and prepare fresh
              styles that blend well with your theme and décor your space. Every
              bit of our export quality products is curated, keeping in mind the
              design, appearance and exclusiveness you desire.
            </p>
          </div>

          {/* 3️⃣ Largest Collection of Tiles */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="border-2 border-dashed border-red-500 rounded-full p-5 w-20 h-20 flex items-center justify-center">
              <FaThLarge className="text-white text-5xl relative z-10" />
            </div>
            <h3 className="text-lg">Largest Collection of Tiles</h3>
            <p className="text-gray-400 text-sm leading-[1.8rem] tracking-[0.2px] text-justify max-w-xs">
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
