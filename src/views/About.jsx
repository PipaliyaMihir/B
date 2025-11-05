import React from "react";
import { useNavigate } from "react-router-dom";

// ✅ Use relative public path correctly (no need to import from /public)
const aboutImage = "/about.png";

const About = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* About Section */}
            <div className="bg-[#1E1E1E] text-white mx-7 sm:mx-8 lg:mx-28 px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                {/* Left side text + image */}
                <div>
                    <p className="text-[#3ba17d] text-xs sm:text-sm mb-3">About Us</p>
                    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-serif mb-6 leading-snug">
                        Breezo Group of Company <br />
                        Where Innovation Meets Perfection
                    </h2>

                    <div className="relative group w-full max-w-[568px] mx-auto">
                        <img
                            src={aboutImage}
                            alt="Interior Design"
                            className="rounded-lg w-full h-auto md:h-[284px] object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"></div>
                    </div>
                </div>

                {/* Right side description */}
                <div className="text-gray-300 leading-relaxed">
                    <p className="text-gray-300 text-xs sm:text-sm sm:text-[14px] md:text-base leading-[1.6rem] sm:leading-[1.8rem] tracking-[0.2px] text-justify">
                        Breezo Group of Company stands tall among leading pioneers dedicated
                        to excellence, innovation, and design precision. We specialize in
                        curating a diverse range of premium products that blend aesthetic
                        brilliance with functional superiority, redefining the standards of
                        modern living and architecture.
                    </p>

                    {/* ✅ Button that navigates to /usabout */}
                    <button
                        onClick={() => navigate("/usabout")}
                        className="mt-8 bg-[#3ba17d] hover:bg-[#2d7d61] text-white px-6 py-3 rounded-md transition-all duration-300 text-xs sm:text-sm md:text-base font-medium"
                    >
                        Know More →
                    </button>
                </div>
            </div>
        </>
    );
};

export default About;