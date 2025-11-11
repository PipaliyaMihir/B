// import React from "react";

// const OurSpecialities = () => {
//   const features = [
//     { img: "/f1.png", title: "Scratch Proof" },
//     { img: "/f2.png", title: "Waterproof" },
//     { img: "/f3.png", title: "High Durable" },
//     { img: "/f4.png", title: "Hygienic" },
//     { img: "/f5.png", title: "HD Design" },
//     { img: "/f6.png", title: "Dimension Stability" },
//   ];

//   return (
//     <div className="bg-[#1e1e1e] mx-7 sm:mx-0 text-white py-12 sm:py-16 px-4 sm:px-10 md:px-20 lg:px-28">
//       {/* Heading */}
//       <div className="text-left sm:text-left mb-10 sm:mb-12">
//         <p className="text-[#3ba17d] text-xs sm:text-sm mb-1 sm:mb-2 font-medium tracking-wide uppercase">
//           Our Specialities
//         </p>
//         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif">
//           The Breezo Difference
//         </h2>
//       </div>

//       {/* Features */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-10 lg:gap-14 mt-8 sm:mt-10 justify-items-center">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
//           >
//             <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4">
//               <img
//                 src={feature.img}
//                 alt={feature.title}
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <p className="text-xs sm:text-sm text-gray-300 leading-tight">
//               {feature.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurSpecialities;

import React from "react";
import O1 from "../components/O1";
import O2 from "../components/O2";
import O3 from "../components/O3";
import O4 from "../components/O4";
import O5 from "../components/O5";
import O6 from "../components/O6";

const OurSpecialities = () => {
  const features = [
    { icon: <O1 />, title: "Scratch Proof" },
    { icon: <O2 />, title: "Waterproof" },
    { icon: <O3 />, title: "High Durable" },
    { icon: <O4 />, title: "Hygienic" },
    { icon: <O5 />, title: "HD Design" },
    { icon: <O6 />, title: "Dimension Stability" },
  ];

  return (
    <div className="bg-(--bg) mx-7 sm:mx-0 text-white py-12 sm:py-16 px-4 sm:px-10 md:px-20 lg:px-28">
      {/* Heading */}
      <div className="text-left sm:text-left mb-10 sm:mb-12">
        <p className="text-[#3ba17d] text-xs sm:text-sm mb-1 sm:mb-2 font-medium tracking-wide uppercase"
        style={{ fontFamily: "var(--head-font)" }}>
          Our Specialities
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif"
        style={{ fontFamily: "var(--head-font)" }}>
          The Breezo Difference
        </h2>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-10 lg:gap-14 mt-8 sm:mt-10 justify-items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
            style={{ fontFamily: "var(--body-font)" }}
          >
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4">
              {feature.icon} {/* Render the component here */}
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-tight">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecialities;