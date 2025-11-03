import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Usabout = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-black text-white font-serif overflow-hidden ">
            {/* Hero Section */}
            <section className="relative text-center py-20 md:py-28">
                <h1 className="text-[80px] md:text-[150px] text-gray-600  font-bold select-none">
                    About Us
                </h1>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-20 items-start">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Breezo Group of Company
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            stands as a symbol of innovation, elegance, and fine craftsmanship
                            in the ceramic tile industry. We offer a diverse range of tiles –
                            from Digital Wall and Floor Tiles to Full Body, GVT/PGVT, Slab
                            Tiles, and Sanitaryware — each designed to bring style, strength,
                            and sophistication to every space.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="\logo.svg"
                            alt="Breezo Logo"
                            className="w-64 md:w-80"
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-20 items-start">
                    <div>
                        <img
                            src="/woman-choosing-marble-tiles 1.png"
                            alt="Choosing Tiles"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            At Breezo, we blend artistry with engineering
                        </h3>
                        <ul className="space-y-20">
                            <li className="flex items-start gap-3">
                                <FaArrowRight className="text-red-600 mt-1" />
                                <span>
                                    Our expert designers and ceramic specialists constantly
                                    explore new materials and finishes.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaArrowRight className="text-red-600 mt-1" />
                                <span>
                                    Every product is crafted with precision to deliver both beauty
                                    and long-lasting performance.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaArrowRight className="text-red-600 mt-1" />
                                <span>
                                    Innovation and quality are at the heart of everything we
                                    create.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="grid md:grid-cols-2 gap-30 items-start">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            We believe tiles do more than cover surfaces — they transform
                            spaces:
                        </h3>
                        <ul className="space-y-20">
                            <li className="flex items-start gap-3">
                                <FaArrowRight className="text-red-600 mt-1" />
                                <span>
                                    Each Breezo tile adds a unique statement of style and
                                    sophistication to your space.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaArrowRight className="text-red-600 mt-1" />
                                <span>
                                    Designed to meet international standards of durability and
                                    aesthetics.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaArrowRight className="text-red-600 mt-1" />
                                <span>
                                    Built to withstand wear and tear while retaining their
                                    elegance over time.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaArrowRight className="text-red-600 mt-1" />
                                <span>
                                    Ideal for both modern homes and grand commercial environments.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img
                            src="/luxurious-modern-entryway-with-sculpture-reflecting-pool 1.png"
                            alt="Tile Space"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-10 pt-10 text-center md:text-left">
                    {/* Vision */}
                    <div
                        className="relative bg-[#0a0a0a] p-8 rounded-lg overflow-hidden"
                    >
                        <img
                            src="/Group 135.png"
                            alt="Vision Background"
                            className="absolute right-6 bottom-4 w-32 md:w-40 select-none"
                        />
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 relative z-10">
                            Our Vision
                        </h3>
                        <p className="text-gray-300 leading-snug text-sm md:text-base relative z-10">
                            To be a globally recognized leader in ceramics — setting new benchmarks in
                            design, functionality, sustainability, and customer trust.
                        </p>
                    </div>

                    {/* Mission */}
                    <div
                        className="relative bg-[#0a0a0a] p-8 rounded-lg overflow-hidden"
                    >
                        <img
                            src="/Group 136.png"
                            alt="Mission Background"
                            className="absolute right-6 bottom-4 w-32 md:w-40 select-none"
                        />
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 relative z-10">
                            Our Mission
                        </h3>
                        <p className="text-gray-300 leading-snug text-sm md:text-base relative z-10">
                            Our mission is to deliver innovative, durable, and visually inspiring tile
                            collections, while embracing eco-friendly practices and ensuring
                            exceptional quality, consistency, and value for every customer.
                        </p>
                    </div>
                </div>


                {/* Applications */}
                <div className="pt-16">
                    <h3 className="text-2xl font-semibold mb-6">
                        Applications: Multipurpose Tiles
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        Immense intricate details and expert craftsmanship are what
                        replicate through the Breezo tiling solutions. Ranging from
                        bathrooms, kitchens, living space, flooring, and cladding, there are
                        endless tiling options listed with Breezo Group of Company. Our
                        designers create a fusion of multipurpose ceramic tiles available in
                        vibrant hues, patterns, various surfaces, and sizes.
                    </p>
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left Image */}
                        <div className="flex justify-center mb-12">
                            <img
                                src="/image 8.png"
                                alt="Tile Chart"
                                className="rounded-lg w-full max-w-md md:max-w-lg"
                            />
                        </div>

                        {/* Centered List */}
                        <div className="overflow-x-auto my-10">
                            <table className="text-gray-300 text-lg leading-7 mx-auto">
                                <tr className="text-center">
                                    <td className="py-3 px-8">Glossy</td>
                                    <td className="py-3 px-8">Wall Tiles</td>
                                    <td className="py-3 px-8">20X60CM</td>
                                </tr>
                                <tr className="text-center">
                                    <td className="py-3 px-8">Carving</td>
                                    <td className="py-3 px-8">Floor Tiles</td>
                                    <td className="py-3 px-8">20X100CM</td>
                                </tr>
                                <tr className="text-center">
                                    <td className="py-3 px-8">High Gloss</td>
                                    <td className="py-3 px-8">GVT/PGVT</td>
                                    <td className="py-3 px-8">30X45CM</td>
                                </tr>
                                <tr className="text-center">
                                    <td className="py-3 px-8">Matt</td>
                                    <td className="py-3 px-8">Slab Tiles</td>
                                    <td className="py-3 px-8">30X80CM</td>
                                </tr>
                                <tr className="text-center">
                                    <td className="py-3 px-8">Rustic</td>
                                    <td className="py-3 px-8">Parking Tiles</td>
                                    <td className="py-3 px-8">60X120CM</td>
                                </tr>
                                <tr className="text-center">
                                    <td className="py-3 px-8">Sugar</td>
                                    <td className="py-3 px-8">Sanitary Ware</td>
                                    <td className="py-3 px-8">120X180CM</td>
                                </tr>
                                <tr className="text-center">
                                    <td className="py-3 px-8">Vitrified</td>
                                    <td className="py-3 px-8">Tiles</td>
                                    <td className="py-3 px-8">80X160CM</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                </div>

                {/* Core Values */}
                <div className="pt-1 text-left">
                    <h3 className="text-4xl font-semibold mb-12">Our Core Values</h3>
                    <div className="flex md:grid-cols-3 gap-10">
                        <img src="\Frame 70.png" alt="" className="mx-auto mb-4" />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section
                className="relative bg-cover bg-center py-14 md:py-20 mt-20"
                style={{
                    backgroundImage: "url('/Screenshot 2025-11-01 124249.png')",
                }}
            >
                <section
                    className="relative opacity-100 bg-cover bg-center py-14 md:py-20 mt-20"
                    style={{
                        backgroundImage: "url('/b2.png')", // 👈 set your image as background
                    }}
                >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Stats content */}
                    <div className="relative z-10 max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between text-center text-white px-6">
                        <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
                            <p className="text-3xl md:text-4xl font-bold text-[#ff1f1f] mb-1">
                                15+
                            </p>
                            <p>Year of experience</p>
                        </div>

                        <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
                            <p className="text-3xl md:text-4xl font-bold text-[#ff1f1f] mb-1">
                                25+
                            </p>
                            <p>Country we export</p>
                        </div>

                        <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
                            <p className="text-3xl md:text-4xl font-bold text-[#ff1f1f] mb-1">
                                30000+
                            </p>
                            <p>Box productions</p>
                        </div>

                        <div className="w-1/2 md:w-1/4">
                            <p className="text-3xl md:text-4xl font-bold text-[#ff1f1f] mb-1">
                                150+
                            </p>
                            <p>Attractive Designs</p>
                        </div>
                    </div>
                </section>

            </section>
        </div>
    );
};

export default Usabout;
