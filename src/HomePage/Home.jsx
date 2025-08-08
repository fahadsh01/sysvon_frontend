import React from "react";
import HeroSectionCarousel from "./Carosul";
import ProductSlider from "./Prouctsider";
import Analytics from "./Analatics";
import HoverCard from "./CaseStudy";
import BlogSlider from "./BlogSlider";
import Footer from "./Footer";
import AnimatedSection from "../Scrollfadein";

export default function Home() {
  return (
    <>
      <HeroSectionCarousel />
      <div className="overflow-hidden ">
        {" "}
        <AnimatedSection type="fadeUp">
          <ProductSlider />
        </AnimatedSection>
        <Analytics />
        <AnimatedSection type="slideLeft">
          <HoverCard />
        </AnimatedSection>
        <AnimatedSection type="slideRight">
          <BlogSlider />
        </AnimatedSection>
        <Footer />
      </div>
    </>
  );
}
