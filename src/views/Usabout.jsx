import React from "react";
import { ArrowRight } from "lucide-react";

const Usabout = () => {
    return (
        <div className="bg-[#1e1e1e] relative mx-auto w-[90%] text-white font-serif overflow-hidden">
            {/* Hero Section - Fully Responsive */}
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
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
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
                            className="w-48 sm:w-56 md:w-64 lg:w-80"
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
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                            At Breezo, we blend artistry with engineering
                        </h3>
                        <ul className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
                            <li className="flex items-start gap-3">
                                <ArrowRight className="text-red-600 mt-1 shrink-0 w-5 h-5" />
                                <span className="text-sm sm:text-base text-gray-300">
                                    Our expert designers and ceramic specialists constantly
                                    explore new materials and finishes.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight className="text-red-600 mt-1 shrink-0 w-5 h-5" />
                                <span className="text-sm sm:text-base text-gray-300">
                                    Every product is crafted with precision to deliver both beauty
                                    and long-lasting performance.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight className="text-red-600 mt-1 shrink-0 w-5 h-5" />
                                <span className="text-sm sm:text-base text-gray-300">
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
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                            We believe tiles do more than cover surfaces — they transform
                            spaces:
                        </h3>
                        <ul className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
                            <li className="flex items-start gap-3">
                                <ArrowRight className="text-red-600 mt-1 shrink-0 w-5 h-5" />
                                <span className="text-sm sm:text-base text-gray-300">
                                    Each Breezo tile adds a unique statement of style and
                                    sophistication to your space.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight className="text-red-600 mt-1 shrink-0 w-5 h-5" />
                                <span className="text-sm sm:text-base text-gray-300">
                                    Designed to meet international standards of durability and
                                    aesthetics.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight className="text-red-600 mt-1 shrink-0 w-5 h-5" />
                                <span className="text-sm sm:text-base text-gray-300">
                                    Built to withstand wear and tear while retaining their
                                    elegance over time.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <ArrowRight className="text-red-600 mt-1 shrink-0 w-5 h-5" />
                                <span className="text-sm sm:text-base text-gray-300">
                                    Ideal for both modern homes and grand commercial environments.
                                </span>
                            </li>
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

                {/* Vision & Mission - Responsive Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 pt-6 sm:pt-8 md:pt-10">
                    {/* Vision */}
                    <div className="relative bg-[#0a0a0a] p-6 sm:p-8 rounded-lg overflow-hidden">
                        <img
                            src="/Group 135.png"
                            alt="Vision Background"
                            className="absolute right-4 sm:right-6 bottom-3 sm:bottom-4 w-24 sm:w-32 md:w-40 select-none"
                        />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 relative z-10">
                            Our Vision
                        </h3>
                        <p className="text-gray-300 leading-snug text-xs sm:text-sm md:text-base relative z-10">
                            To be a globally recognized leader in ceramics — setting new benchmarks in
                            design, functionality, sustainability, and customer trust.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="relative bg-[#0a0a0a] p-6 sm:p-8 rounded-lg overflow-hidden">
                        <img
                            src="/Group 136.png"
                            alt="Mission Background"
                            className="absolute right-4 sm:right-6 bottom-3 sm:bottom-4 w-24 sm:w-32 md:w-40 select-none"
                        />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 relative z-10">
                            Our Mission
                        </h3>
                        <p className="text-gray-300 leading-snug text-xs sm:text-sm md:text-base relative z-10">
                            Our mission is to deliver innovative, durable, and visually inspiring tile
                            collections, while embracing eco-friendly practices and ensuring
                            exceptional quality, consistency, and value for every customer.
                        </p>
                    </div>
                </div>

                {/* Applications - Responsive Table */}
                <div className="pt-8 sm:pt-12 md:pt-16">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                        Applications: Multipurpose Tiles
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8">
                        Immense intricate details and expert craftsmanship are what
                        replicate through the Breezo tiling solutions. Ranging from
                        bathrooms, kitchens, living space, flooring, and cladding, there are
                        endless tiling options listed with Breezo Group of Company. Our
                        designers create a fusion of multipurpose ceramic tiles available in
                        vibrant hues, patterns, various surfaces, and sizes.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
                        {/* Left Image */}
                        <div className="flex justify-center">
                            <img
                                src="/image 8.png"
                                alt="Tile Chart"
                                className="rounded-lg w-full max-w-md lg:max-w-lg"
                            />
                        </div>

                        {/* Responsive Table */}
                        <div className="overflow-x-auto">
                            <table className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg w-full min-w-[400px]">
                                <tbody>
                                    <tr className="text-center">
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">Glossy</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">Wall Tiles</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">20X60CM</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">Carving</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">Floor Tiles</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">20X100CM</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">High Gloss</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">GVT/PGVT</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">30X45CM</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">Matt</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">Slab Tiles</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">30X80CM</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">Rustic</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">Parking Tiles</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">60X120CM</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">Sugar</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">Sanitary Ware</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">120X180CM</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">Vitrified</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">Tiles</td>
                                        <td className="py-2 sm:py-3 px-3 sm:px-6 md:px-8">80X160CM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Core Values - Responsive Grid */}
                <div className="pt-8 sm:pt-12 md:pt-16">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-8 sm:mb-12 md:mb-16">
                        Our Core Values
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
                        {/* Value 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-red-600 flex items-center justify-center mb-4 sm:mb-6">
                                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-neutral-800 flex items-center justify-center">
                                    <img src="public/innovation.png" alt="Innovation" className="w-12 h-12 sm:w-14 sm:h-14" />
                                </div>
                            </div>
                            <h3 className="text-sm sm:text-base md:text-lg text-white font-light">
                                Driven by Innovation
                            </h3>
                        </div>

                        {/* Value 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-red-600 flex items-center justify-center mb-4 sm:mb-6">
                                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-neutral-800 flex items-center justify-center">
                                    <img src="public/quality.png" alt="Quality" className="w-12 h-12 sm:w-14 sm:h-14" />
                                </div>
                            </div>
                            <h3 className="text-sm sm:text-base md:text-lg text-white font-light">
                                Commitment to Quality
                            </h3>
                        </div>

                        {/* Value 3 */}
                        <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-red-600 flex items-center justify-center mb-4 sm:mb-6">
                                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-neutral-800 flex items-center justify-center">
                                    <img src="public/real value.png" alt="Real Value" className="w-12 h-12 sm:w-14 sm:h-14" />
                                </div>
                            </div>
                            <h3 className="text-sm sm:text-base md:text-lg text-white font-light">
                                Provide Real Value
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Fully Responsive */}
            <section
                className="relative bg-cover bg-center py-10 sm:py-14 md:py-20 mt-12 sm:mt-16 md:mt-20 lg:mt-24"
                style={{
                    backgroundImage: "url('/b2.png')",
                }}
            >
                <div className="absolute inset-0"></div>

                <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center text-white px-4 sm:px-6">
                    <div>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff1f1f] mb-1 sm:mb-2">
                            15+
                        </p>
                        <p className="text-xs sm:text-sm md:text-base">Year of experience</p>
                    </div>

                    <div>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff1f1f] mb-1 sm:mb-2">
                            25+
                        </p>
                        <p className="text-xs sm:text-sm md:text-base">Country we export</p>
                    </div>

                    <div>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff1f1f] mb-1 sm:mb-2">
                            30000+
                        </p>
                        <p className="text-xs sm:text-sm md:text-base">Box productions</p>
                    </div>

                    <div>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff1f1f] mb-1 sm:mb-2">
                            150+
                        </p>
                        <p className="text-xs sm:text-sm md:text-base">Attractive Designs</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Usabout;