import React from 'react';
import aboutImage from "../../public/about.png";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook

const About = () => {
    const navigate = useNavigate(); // ✅ initialize navigate

    return (
        <>
            {/* About Section */}
            <div className="mx-6 md:mx-28 px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                {/* Left side text */}
                <div>
                    <p className="text-[#3ba17d] text-sm mb-3">About Us</p>
                    <h2 className="text-3xl md:text-[40px] font-serif mb-6 leading-snug">
                        Breezo Group of Company <br />
                        Where Innovation Meets Perfection
                    </h2>
                    <div className="relative group">
                        <img
                            src={aboutImage}
                            alt="Interior Design"
                            className="rounded-lg opacity-80 group-hover:opacity-100 transition-all duration-500 h-[284px] w-[568px]"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"></div>
                    </div>
                </div>

                {/* Right side description */}
                <div className="text-gray-300 leading-relaxed">
                    <p className="text-[#d3d3d3] text-[14px] leading-[1.8rem] tracking-[0.2px] text-justify">
                        Breezo Group of Company stands tall among leading pioneers dedicated
                        to excellence, innovation, and design precision. We specialize in
                        curating a diverse range of premium products that blend aesthetic
                        brilliance with functional superiority, redefining the standards of
                        modern living and architecture.
                    </p>

                    {/* ✅ Button that opens /usabout page */}
                    <button
                        onClick={() => navigate("/usabout")}
                        className="mt-8 bg-[#3ba17d] hover:bg-[#2d7d61] text-white px-6 py-3 rounded transition-all duration-300 text-lg"
                    >
                        Know More →
                    </button>
                </div>
            </div>
        </>
    );
};

export default About;
