import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../Scrollfadein";
export default function Sysvonway() {
  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center py-16 px-4 sm:px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
      }}
    >
      <div className="max-w-6xl mx-auto text-white text-center">
        {/* Heading */}
        <AnimatedSection type="fadeUp">
          {" "}
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            The Sysvon Way
          </h2>
        </AnimatedSection>
        {/* Description */}
        <AnimatedSection type="fadeUp" delay={0.1}>
          {" "}
          <p className="text-lg sm:text-xl md:text-2xl font-medium mx-auto leading-relaxed text-justify max-w-4xl">
            As a top IT company, we're uniquely positioned to partner with the
            world’s largest businesses in their transformation journeys.
          </p>
        </AnimatedSection>

        {/* 3-column grid */}
        <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {/* Optimize */}
          <AnimatedSection type="zomeIn">
            {" "}
            <li className="p-6 bg-white/10 rounded-lg shadow-md backdrop-blur-sm">
              <h1 className="text-2xl text-center font-bold mb-2 text-white">
                Optimize
              </h1>
              <p className="text-gray-300 text-sm sm:text-base">
                We leverage customer-centric and cutting-edge talent and
                technology for higher business efficiency.
              </p>
            </li>
          </AnimatedSection>

          {/* Transform */}
          <AnimatedSection type="zomeIn" delay={0.1}>
            <li className="p-6 bg-white/10 rounded-lg shadow-md backdrop-blur-sm">
              <h1 className="text-2xl text-center font-bold mb-2 text-white">
                Transform
              </h1>
              <p className="text-gray-300 text-sm sm:text-base">
                We reimagine processes and systems by offering holistic
                solutions for superior enterprise value.
              </p>
            </li>
          </AnimatedSection>

          {/* Scale */}
          <AnimatedSection type="zomeIn" delay={0.2}>
            {" "}
            <li className="p-6 bg-white/10 rounded-lg shadow-md backdrop-blur-sm">
              <h1 className="text-2xl text-center font-bold mb-2 text-white">
                Scale
              </h1>
              <p className="text-gray-300 text-sm sm:text-base">
                We enable future-ready enterprises with long-term growth in a
                state of perpetual reinvention.
              </p>
            </li>
          </AnimatedSection>
        </ul>
      </div>
    </div>
  );
}
