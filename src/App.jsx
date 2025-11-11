import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Company from "./views/Company";
import Services from "./views/Services";
import Contact from "./views/Contact";
import About from "./views/About";
import Usabout from "./views/Usabout";
import Technology from "./views/Technology";
import SocialBar from "./components/SocialBar";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";
import Export from "./views/Export";
import CatalogueGrid from "./views/CatalogueGrid";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      {/* Full background wrapper */}
      <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh", scrollBehavior: "smooth" }}
      className="pt-19" >
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/catalogue" element={<CatalogueGrid />} />
          <Route path="/export" element={<Export />} />
          <Route path="/about" element={<About />} />
          <Route path="/usabout" element={<Usabout />} />
          <Route path="/tec" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>

      <SocialBar />
    </>
  );
};

export default App;
