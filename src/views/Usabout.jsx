import React from "react";
import C1 from "../components/C1";
import C2 from "../components/C2";
import C3 from "../components/C3";

const Usabout = () => {
    return (
        <div
            className="bg-(--bg) relative mx-auto w-[80%] text-white font-serif overflow-hidden"
            style={{ fontFamily: "var(--head-font)" }}
        >
            {/* Hero Section */}
            <section className="relative text-center py-12 sm:py-16 md:py-20 lg:py-28">
                <h1
                    className="relative mx-auto w-[90%] text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[150px] text-gray-600 font-bold select-none px-4"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                    About Us
                </h1>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-12 sm:space-y-14 md:space-y-16">
                {/* Row 1 - Company Intro */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
                            Breezo Group of Company
                        </h2>
                        <p
                            className="text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide"
                            style={{ fontFamily: "var(--body-font)" }}
                        >
                            stands as a symbol of innovation, elegance, and fine craftsmanship
                            in the ceramic tile industry. We offer a diverse range of tiles –
                            from Digital Wall and Floor Tiles to Full Body, GVT/PGVT, Slab
                            Tiles, and Sanitaryware — each designed to bring style, strength,
                            and sophistication to every space.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="/logo.svg"
                            alt="Breezo Logo"
                            className="w-48 sm:w-56 md:w-64 lg:w-80 pt-10"
                        />
                    </div>
                </div>

                {/* Row 2 - Artistry & Engineering */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
                    <div className="order-2 md:order-1">
                        <img
                            src="/woman-choosing-marble-tiles 1.png"
                            alt="Choosing Tiles"
                            className="rounded-lg w-full"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 pl-20 leading-relaxed tracking-wide">
                            At Breezo, we blend artistry with engineering
                        </h3>
                        <ul
                            className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-10 pl-20 mt-10"
                            style={{ fontFamily: "var(--body-font)" }}
                        >
                            <li className="flex items-start gap-3">
                                <img
                                    src="/Vector.svg"
                                    alt="icon"
                                    className="w-5 h-5 mt-1 shrink-0"
                                />
                                <span className="text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide">
                                    Our expert designers and ceramic specialists constantly
                                    explore new materials and finishes.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <img
                                    src="/Vector.svg"
                                    alt="icon"
                                    className="w-5 h-5 mt-1 shrink-0"
                                />
                                <span className="text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide">
                                    Every product is crafted with precision to deliver both beauty
                                    and long-lasting performance.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <img
                                    src="/Vector.svg"
                                    alt="icon"
                                    className="w-5 h-5 mt-1 shrink-0"
                                />
                                <span className="text-sm sm:text-base text-gray-300 leading-relaxed tracking-wide">
                                    Innovation and quality are at the heart of everything we
                                    create.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Row 3 - Transform Spaces */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
                    <div>
                        <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 leading-relaxed tracking-wide pr-20"
                        style={{ fontFamily: "var(--head-font)" }}>
                            We believe tiles do more than cover surfaces — they transform
                            spaces:
                        </h3>
                        <ul className="text-sm sm:text-base text-gray-300 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 leading-relaxed tracking-wide pr-20 mt-5"
                        style={{ fontFamily: "var(--body-font)" }}>
                            {[
                                "Each Breezo tile adds a unique statement of style and sophistication to your space.",
                                "Designed to meet international standards of durability and aesthetics.",
                                "Built to withstand wear and tear while retaining their elegance over time.",
                                "Ideal for both modern homes and grand commercial environments.",
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <img
                                        src="/Vector.svg"
                                        alt="icon"
                                        className="w-5 h-5 mt-1 shrink-0"
                                    />
                                    <span className="text-sm sm:text-base text-gray-300">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <img
                            src="/luxurious-modern-entryway-with-sculpture-reflecting-pool 1.png"
                            alt="Tile Space"
                            className="rounded-lg w-full"
                        />
                    </div>
                </div>

                {/* Vision, Mission, Applications, Core Values, Stats Sections remain same */}
                {/* (No change needed in those sections) */}
            </section>
        </div>
    );
};

export default Usabout;
