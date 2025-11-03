import React from "react";
import bg from "../../public/bg.jpg";
import About from "./About";
import Advantage from "../components/Advantage";
import CollectionSection from "./CollectionSection";
import TileSizes from "./TileSizes";
import OurSpecialities from "./OurSpecialities";
import CompanyBanner from "./CompanyBanner";

const Home = () => {
    return (
        <div className="bg-[#0e0e0e] text-white min-h-screen">
            {/* Top Banner Image */}
            <div className="relative">
                <CompanyBanner />
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