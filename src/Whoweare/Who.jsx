import React from "react";
import LeadershipSlider from "./LeaderSlider";
import ImageGallery from "./Grid";
import How from "./How";
import OurPhelosphi from "./OurPhelosphi";
import SysvonWay from "./Sysvonway";
import Corevalues from "./Corevalues";
import { motion } from "framer-motion";
import Footer from "./Footer";
export default function WhoWeAre() {
  return (
    <div className="overflow-hidden bg-white text-black">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl text-white font-bold">About Sysvon</h1>
          <p className="mt-4 text-lg max-w-xl mx-auto text-white">
            Empowering businesses with technology, innovation, and purpose.
          </p>
        </motion.div>
      </div>
      <OurPhelosphi />
      <Corevalues />
      <SysvonWay />
      <LeadershipSlider />
      <ImageGallery />
      <How />
      <Footer />
    </div>
  );
}
