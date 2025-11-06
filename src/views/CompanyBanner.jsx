import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Dummy images
const images = [
    "public/bg.jpg",
    "public/bg.jpg",
    "public/bg.jpg",
];

const CompanyBanner = () => {
    return (
        <div className="relative w-full mx-auto overflow-hidden">
            {/* Custom pagination dot color */}
            <style>{`
        .swiper-pagination-bullet {
          background-color: #3B6E54 !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: #3B6E54 !important;
          opacity: 1;
        }
      `}</style>

            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000, // 5 seconds
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-[250px] sm:h-[350px] md:h-[480px] lg:h-[600px]"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full">
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CompanyBanner;
