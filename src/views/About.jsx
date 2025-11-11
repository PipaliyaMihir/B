import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* About Section */}
            <div
                className="text-white px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-15 items-center"
                style={{
                    backgroundColor: "var(--bg)",
                    width: "80%",
                    margin: "0 auto", // centers the section horizontally
                }}
            >
                {/* Left side text + image */}
                <div>
                    <p
                        className="text-[#3ba17d] text-xs sm:text-sm mb-3"
                        style={{ fontFamily: "var(--head-font)" }}
                    >
                        About Us
                    </p>

                    <h2
                        className="text-2xl sm:text-3xl md:text-[40px] mb-6 leading-snug"
                        style={{ fontFamily: "var(--head-font)", fontWeight: "900" }}
                    >
                        Breezo Group of Company <br />
                        Where Innovation Meets Perfection
                    </h2>

                    <div className="relative group w-full max-w-[568px] mx-auto">
                        <img
                            src="public/home-img.png"
                            alt="Interior Design"
                            className="rounded-lg w-full h-auto md:h-[284px] object-cover"
                        />
                    </div>
                </div>

                {/* Right side description */}
                <div className="text-gray-300 leading-relaxed lg:pl-[90px]">
                    <p
                        className="text-gray-300 text-xs sm:text-sm sm:text-[14px] md:text-base leading-[1.6rem] sm:leading-[1.8rem] tracking-[0.2px] text-justify"
                        style={{ fontFamily: "var(--body-font)" }}
                    >
                        Breezo Group of Company stands tall among leading pioneers dedicated
                        to excellence, innovation, and design precision. We specialize in
                        curating a diverse range of premium products that blend aesthetic
                        brilliance with functional superiority, redefining the standards of
                        modern living and architecture.
                    </p>

                    <button
                        onClick={() => navigate("/usabout")}
                        className="mt-8 bg-[#3B6E54] text-white px-6 py-3 rounded-md transition-all duration-300 text-xs sm:text-sm md:text-base font-medium "
                    >
                        Know More
                    </button>
                </div>
            </div>
        </>
    );
};

export default About;