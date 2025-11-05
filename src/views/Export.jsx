import React, { useState } from "react";

const Export = () => {
    const features = [
        { img: "/e1.png", title: "Low Maintenance" },
        { img: "/e2.png", title: "Customize Packaging" },
        { img: "/e3.png", title: "Availability Assurance" },
        { img: "/e4.png", title: "Range of Surface & Size" },
        { img: "/e5.png", title: "Innovative design & Quality" },
        { img: "/e6.png", title: "Quick Customer Support" },
    ];

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
    };

    return (
        <>
            {/* --- Main Export Section --- */}
            <div className="bg-[#1e1e1e] text-white overflow-hidden">
                {/* --- Top Export Title --- */}
                <div className="relative flex justify-center items-center py-20">
                    <h1
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[150px] text-gray-600 font-bold select-none px-4"
                        style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    >
                        Export
                    </h1>
                </div>

                {/* --- Why We Best Section --- */}
                <section className="relative py-16 sm:py-20 px-4 md:px-8 lg:px-0">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-sm text-[#3ba17d] mb-2 tracking-wide text-center md:text-left">
                            Why We Best
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-normal text-gray-100 mb-12 text-center md:text-left">
                            Why import tiles from Breezo <br />
                            <span className="text-[#3ba17d]">Group of Company</span>
                        </h2>

                        {/* Feature Icons */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-16 md:gap-y-14 justify-items-center">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center text-center space-y-4"
                                >
                                    <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-md bg-neutral-900">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                        />
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-300 leading-tight w-[130px] sm:w-[150px]">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Export Globally Section --- */}
                <section className="relative py-20 sm:py-28 px-4 md:px-10 lg:px-16">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
                        {/* Left Content */}
                        <div className="relative z-10">
                            <p className="text-sm text-[#3ba17d] mb-3 tracking-wide">
                                Export Globally
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium mb-8">
                                Export Globally
                            </h2>
                            <div className="space-y-6 text-[15px] text-gray-300 leading-[1.8] tracking-wide text-justify font-light">
                                <p>
                                    A strong and ever-growing customer base across multiple
                                    countries has positioned Breezo Group of Companies as one of
                                    the leading global exporters of premium tiles and ceramics.
                                </p>
                                <p>
                                    Our brand has become a synonym for innovation, superior
                                    quality, and unmatched service in both domestic and
                                    international markets. With a clear vision to achieve global
                                    recognition, Breezo is continuously expanding its footprint to
                                    establish a solid presence in the world’s most competitive
                                    ceramic markets.
                                </p>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center items-center">
                            <img
                                src="/ebg.png"
                                alt="Export Background"
                                className="w-[300px] sm:w-[400px] md:w-[500px] h-auto object-contain opacity-90 mix-blend-screen"
                            />
                        </div>
                    </div>

                    {/* Product Categories */}
                    <div className="mt-16 sm:mt-24 text-center space-y-6 sm:space-y-8 text-lg sm:text-2xl md:text-3xl text-gray-200 font-semibold">
                        <p>Digital Wall Tiles</p>
                        <p>Digital Floor Tiles</p>
                        <p>Full Body Vitrified Tiles</p>
                        <p>GVT / PGVT</p>
                        <p>Double Charged Vitrified Tiles</p>
                        <p>Porcelain Slab</p>
                        <p>Nano Vitrified Tiles</p>
                    </div>
                </section>
            </div>

            {/* --- Contact Section --- */}
            <div className="bg-[#1e1e1e] text-white py-16 sm:py-20 px-4 md:px-12 lg:px-24">
                <section className="max-w-5xl mx-auto space-y-20">
                    {/* Global Footprint */}
                    <div>
                        <p className="text-[#3ba17d] text-sm sm:text-md mb-4 font-light">
                            Going Global
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-serif mb-8">
                            Global Footprint
                        </h2>

                        <div className="flex justify-center">
                            <div className="bg-neutral-200 w-full sm:w-[90%] h-[200px] sm:h-[300px] md:h-[400px] rounded-lg"></div>
                        </div>
                    </div>

                    {/* Get In Touch */}
                    <div>
                        <p className="text-[#3ba17d] text-sm sm:text-md mb-4 font-light">
                            Let's Connect
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-serif mb-8 text-center md:text-left">
                            Get In Touch
                        </h2>

                        <div className="flex justify-center">
                            <div className="space-y-6 w-full max-w-2xl text-left">
                                {/* Name and Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#3ba17d] transition-all duration-300"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+1234567890"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#3ba17d] transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="johndoe@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#3ba17d] transition-all duration-300"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#3ba17d] transition-all duration-300 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-[#3B6E54] hover:bg-[#3ba17d] text-white font-medium py-3 rounded transition-all duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Export;
