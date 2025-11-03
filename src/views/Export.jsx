import React, { useState } from "react";
import imageUrl from "../../public/ebg.png";

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
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <>
            <div className="bg-[#0e0e0e] text-white overflow-hidden">
                {/* --- Top Export Title --- */}
                <div className="relative flex justify-center items-center py-20">
                    <h1 className="text-[180px] font-serif font-bold text-gray-400/20 select-none tracking-wide">
                        Export
                    </h1>
                </div>

                {/* --- Why We Best Section --- */}
                <section className="relative text-start py-20">
                    <div className="max-w-6xl mx-auto px-6 md:px-0">
                        <p className="text-sm text-[#3ba17d] mb-2 tracking-wide text-center md:text-left">
                            Why We Best
                        </p>
                        <h2 className="text-2xl md:text-[36px] font-normal text-gray-100 mb-16 text-center md:text-left">
                            Why import tiles from Breezo <br />
                            <span>Group of Company</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-14 justify-items-center">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center text-center space-y-4"
                                >
                                    <div className="flex items-center justify-center w-24 h-24 rounded-full shadow-md">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-12 h-12 object-contain"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-300 leading-tight w-[150px]">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Export Globally Section --- */}
                <section className="relative py-28 px-6 md:px-16">
                    <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto relative">
                        {/* Left Paragraph Section */}
                        <div className="relative z-10">
                            <p className="text-sm text-[#3ba17d] mb-3 tracking-wide">
                                Export Globally
                            </p>
                            <h2 className="text-3xl font-serif font-medium mb-8">
                                Export Globally
                            </h2>
                            <div className="space-y-6 text-[15px] text-gray-300 leading-[1.8] tracking-wide text-justify font-light">
                                <p>
                                    A strong and ever-growing customer base across multiple
                                    countries has positioned Breezo Group of Companies as one of the
                                    leading global exporters of premium tiles and ceramics.
                                </p>
                                <p>
                                    Our brand has become a synonym for innovation, superior quality,
                                    and unmatched service in both domestic and international
                                    markets. With a clear vision to achieve global recognition,
                                    Breezo is continuously expanding its footprint to establish a
                                    solid presence in the world’s most competitive ceramic markets.
                                </p>
                            </div>
                        </div>

                        {/* Right Background Image */}
                        <div className="relative flex justify-center items-center mt-12">
                            {/* Left & right shadow only */}
                            <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black blur-2xl opacity-70 z-10"></div>

                            {/* Image */}
                            <img
                                src={imageUrl}
                                alt="Uploaded Preview"
                                className="w-[500px] h-auto object-contain opacity-90 mix-blend-screen transition-all duration-700"
                            />
                        </div>


                    </div>

                    {/* Product Categories */}
                    <div className="mt-24 text-center space-y-20 text-lg md:text-3xl text-gray-200 font-semiboldbold">
                        <p>Digital Wall Tiles</p>
                        <p>Digital Floor Tiles</p>
                        <p>Full Body Vitrified Tiles</p>
                        <p>GVT/PGVT</p>
                        <p>Double Charged Vitrified Tiles</p>
                        <p>Porcelain Slab</p>
                        <p>Nano Vitrified Tiles</p>
                    </div>
                </section>
            </div>



            <div className="min-h-screen bg-[#0e0e0e] text-white p-8 md:p-16">
                <div className="mx-28">

                    {/* Global Footprint Section */}
                    <section className="mb-40">
                        <p className="text-[#3ba17d] text-md mb-4 font-light">Going Global</p>
                        <h2 className="text-3xl font-serif mb-6">Global Footprint</h2>

                        <div className="flex justify-center mt-16">
                            <div className="bg-neutral-200 w-[80%] md:w-[85%] h-[400px]"></div>
                        </div>
                    </section>


                    {/* Get In Touch Section */}
                    <section>
                        <p className="text-[#3ba17d] text-md mb-4 font-light">Let's Connect</p>
                        <h2 className="text-3xl font-serif mb-6">
                            Get In Touch
                        </h2>
                        <div className="flex justify-center mt-24">
                            <div className="space-y-6 w-full max-w-2xl text-left">
                                {/* Name and Phone Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neutral-700 transition-all duration-300"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+1234567890"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neutral-700 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="johndoe@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neutral-700 transition-all duration-300"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neutral-700 transition-all duration-300 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-[#3B6E54] cursor-pointer text-white font-medium py-3 rounded transition-all duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    );
};

export default Export;