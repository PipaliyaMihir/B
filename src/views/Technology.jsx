import React from "react";
import T1 from "../components/T1";
import T2 from "../components/T2";
import T3 from "../components/T3";
import T4 from "../components/T4";

const Technology = () => {
  const features = [
    {
      title: "Modern Manufacturing",
      desc: "State-of-the-art manufacturing with modern machinery and digital precision.",
      icon: <T1 />,
    },
    {
      title: "Design Excellence",
      desc: "Enhanced design quality — perfecting texture, tone, surface finish, and strength.",
      icon: <T2 />,
    },
    {
      title: "Aesthetic Perfection",
      desc: "Every tile is a masterpiece of refined aesthetics and engineered durability.",
      icon: <T3 />,
    },
    {
      title: "Timeless Innovation",
      desc: "Breezo embodies innovation, where technology meets timeless design.",
      icon: <T4 />,
    },
  ];

  return (
    <div className="bg-(--bg) relative mx-auto w-[74%] 2xl:w-[60%] text-white overflow-hidden"
      style={{ fontFamily: "var(--head-font)" }}>
      {/* --- Top Export Title --- */}
      <div className="relative flex justify-center items-center py-16 sm:py-24">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[150px] text-gray-600 font-bold select-none px-4"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Technology
        </h1>
      </div>

      {/* Innovation Section */}
      <section className="mb-20 sm:mx-0">
        <p className="text-teal-500 text-base font-medium uppercase tracking-wide">
          Innovation
        </p>
        <div className="space-y-10 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif leading-tight">
              We Commit to Innovation
            </h2>
            <p className="text-gray-400 text-xl"
              style={{ fontFamily: "var(--body-font)" }}>
              Seamless Technological Excellence for Unmatched Quality!
            </p>
            <p className="text-gray-400 text-xm leading-relaxed text-justify"
              style={{ fontFamily: "var(--body-font)" }}>
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
      <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-dashed border-red-500 flex items-center justify-center group-hover:border-red-700 transition-colors duration-300">
              {feature.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-serif mb-3">{feature.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base px-4">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Quality Section */}
      <section className="sm:mx-0 mb-20">
        <p className="text-teal-500 text-base mb-4 font-medium uppercase tracking-wide">
          Crafted With Care
        </p>
        <div className="space-y-10 grid md:grid-cols-2 gap-30 items-center">
          <div className="space-y-10">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif leading-tight ">
              We Promise Quality
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-6 text-justify"
              style={{ fontFamily: "var(--body-font)" }}>
              Our designers use advanced technology to craft unique designs with natural hues,
              premium textures, and tailored aesthetics — perfectly aligning with your space’s
              theme.
            </p>
            <p className="text-gray-400 text-xl leading-relaxed text-justify"
              style={{ fontFamily: "var(--body-font)" }}>
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