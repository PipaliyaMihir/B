import React from "react";
import bg from "../../public/bg.jpg";
import About from "./About";
import Advantage from "../components/Advantage";
import CollectionSection from "./CollectionSection";
import TileSizes from "./TileSizes";
import OurSpecialities from "./OurSpecialities";

const Home = () => {
    return (
        <div className="bg-[#0e0e0e] text-white min-h-screen">
            {/* Top Banner Image */}
            <div className="relative">
                <img
                    src={bg}
                    alt="Company Banner"
                    className="w-full h-[600px] object-cover"
                />

            </div>

            <About />
            <Advantage />
            <CollectionSection />
            <TileSizes />
            <OurSpecialities />
        </div>
    );
};

export default Home;