import React from "react";

const Technology = () => {
    return (
        <div className="bg-black text-white min-h-screen py-12 px-4 sm:px-6 lg:px-12">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-serif text-gray-600 mb-16 text-center">
                    Technology
                </h1>

                {/* Innovation Section */}
                <div className="mb-20">
                    <p className="text-teal-500 text-lg mb-5">Innovation</p>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-5">
                                We Commit to Innovation
                            </h2>
                            <p className="text-gray-400 mb-5">
                                Seamless Technological Excellence for Unmatched Quality!
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify">
                                At Breezo Group of Company, innovation isn't just a goal — it's
                                a continuous journey toward perfection. We are committed to
                                redefining standards every single day through cutting-edge
                                technology, advanced research, and creative craftsmanship.
                            </p>
                        </div>
                        <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                                alt="Modern Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
                    {/* Modern Manufacturing */}
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-dashed border-red-600 flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif mb-3">Modern Manufacturing</h3>
                        <p className="text-gray-400 text-sm">
                            State-of-the-art manufacturing with modern machinery and digital
                            precision.
                        </p>
                    </div>

                    {/* Design Excellence */}
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-dashed border-red-600 flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif mb-3">Design Excellence</h3>
                        <p className="text-gray-400 text-sm">
                            Enhanced design quality — perfecting texture, tone, surface
                            finish, and strength.
                        </p>
                    </div>

                    {/* Aesthetic Perfection */}
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-dashed border-red-600 flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif mb-3">Aesthetic Perfection</h3>
                        <p className="text-gray-400 text-sm">
                            Every tile is a masterpiece of refined aesthetics and engineered
                            durability.
                        </p>
                    </div>

                    {/* Timeless Innovation */}
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-dashed border-red-600 flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-serif mb-3">Timeless Innovation</h3>
                        <p className="text-gray-400 text-sm">
                            Breezo embodies innovation, where technology meets timeless
                            design.
                        </p>
                    </div>
                </div>

                {/* Quality Section */}
                <div>
                    <p className="text-teal-500 text-sm mb-3">Crafted With Care</p>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-10">
                                We Promise Quality
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-10 text-justify">
                                Our designers augment technological support to craft unique
                                designs with a combination of natural hues to develop premium
                                textured tiles. It also helps us to offer tailored design
                                solutions to match the theme or vibes of your place.
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify">
                                We can probably design and manufacture anything that you dream
                                of in ceramics. Usage of high-tech raw materials ensures that
                                our clients prevail in the optimum quality at their comfort.
                            </p>
                        </div>
                        <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                                alt="Living Room Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;
