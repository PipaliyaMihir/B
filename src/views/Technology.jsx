import React from "react";

const Technology = () => {
  return (
    <div className="bg-[#1E1E1E] relative mx-auto w-[90%] text-white overflow-hidden">
      {/* --- Top Export Title --- */}
      <div className="relative flex justify-center items-center py-45">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[150px] text-gray-600 font-bold select-none px-4"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Technology
        </h1>
      </div>

      {/* Innovation Section */}
      <section className="mb-20 mx-7 sm:mx-0">
        <p className="text-teal-500 text-base mb-4 font-medium uppercase tracking-wide">
          Innovation
        </p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif mb-5 leading-tight">
              We Commit to Innovation
            </h2>
            <p className="text-gray-400 mb-4 text-base">
              Seamless Technological Excellence for Unmatched Quality!
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-justify">
              At Breezo Group of Company, innovation isn't just a goal — it's a continuous journey
              toward perfection. We redefine standards daily through cutting-edge technology,
              advanced research, and creative craftsmanship.
            </p>
          </div>
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt="Modern Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        {[
          {
            title: "Modern Manufacturing",
            desc: "State-of-the-art manufacturing with modern machinery and digital precision.",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
            ),
          },
          {
            title: "Design Excellence",
            desc: "Enhanced design quality — perfecting texture, tone, surface finish, and strength.",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            ),
          },
          {
            title: "Aesthetic Perfection",
            desc: "Every tile is a masterpiece of refined aesthetics and engineered durability.",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            ),
          },
          {
            title: "Timeless Innovation",
            desc: "Breezo embodies innovation, where technology meets timeless design.",
            icon: (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            ),
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-dashed border-teal-500 flex items-center justify-center group-hover:border-[#3ba17d] transition-colors duration-300">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {feature.icon}
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-serif mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base px-4">
              {feature.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Quality Section */}
      <section className="mx-7 sm:mx-0">
        <p className="text-teal-500 text-base mb-4 font-medium uppercase tracking-wide">
          Crafted With Care
        </p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif mb-6 leading-tight">
              We Promise Quality
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 text-justify">
              Our designers use advanced technology to craft unique designs with natural hues,
              premium textures, and tailored aesthetics — perfectly aligning with your space’s
              theme.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-justify">
              With high-tech materials and precision engineering, we ensure that every Breezo
              product delivers unmatched quality and durability.
            </p>
          </div>
          <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
              alt="Living Room Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
