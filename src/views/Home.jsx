import React from "react";
import bg from "../../public/bg.jpg";
import About from "./About";
import Advantage from "../components/Advantage";
import CollectionSection from "./CollectionSection";
import AvailableTileSizes from "./tile";
import OurSpecialities from "./OurSpecialities";
import CompanyBanner from "./CompanyBanner";

const Home = () => {
    return (
        <div className="bg-(--bg) font-(--head-font) min-h-screen">
            {/* Top Banner Image */}
            <div className="relative">
                <CompanyBanner />
            </div>

            <About />
            <Advantage />
            <CollectionSection />
            <AvailableTileSizes />
            <OurSpecialities />
        </div>
    );
};

export default Home;