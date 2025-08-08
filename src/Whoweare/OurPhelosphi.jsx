import React from "react";
import img from "../assets/nimg.jpeg";
import AnimatedSection from "../Scrollfadein";
import { motion } from "framer-motion";
export default function OurPhelosphi() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-10 py-10 bg-gray-50">
      {/* Left Side - Text Content */}
      <div className="mx-10 lg:w-1/2">
        <AnimatedSection type="slideLeft" delay={0.1}>
          {" "}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Philosophy
          </h2>
        </AnimatedSection>
        <AnimatedSection type="slideLeft" delay={0.2}>
          {" "}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            As a leading contributor to driving change, we understand the
            importance of continued self-reinvention. We accomplish this by
            investing in next-generation capabilities that enhance our
            differentiation in key growth areas and by investing in talent to
            ensure we have specialized skills to resolve business problems.
            Backed by our expertise and diverse global workforce, our ultimate
            goal is to offer sustainable and meaningful value across all
            directions.
          </p>
        </AnimatedSection>
      </div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className=" rounded-xl relative lg:w-1/2 h-[400px] w-full overflow-hidden shadow-xl bg-cover bg-center hover:scale-105 transition-transform duration-300"
        style={{ backgroundImage: `url(${img})` }}
      />
    </div>
  );
}
