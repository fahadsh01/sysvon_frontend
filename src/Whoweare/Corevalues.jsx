import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../Scrollfadein";
export default function Corevalues() {
  return (
    <AnimatedSection type="fadeUp" delay={0.1}>
      {" "}
      <section className="w-full py-20 bg-gray-900 px-4 sm:px-10">
        <div>
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white text-center sm:text-left">
            Our Core Values
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-2xl lg:text-4xl text-gray-200 mb-12 max-w-5xl text-justify mx-auto sm:mx-0">
            We dedicatedly master the power of technology in bespoke ways for
            our customers, guided by three core values:
          </p>

          {/* Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection type="zoomIn" delay={0.1}>
              <li className="p-6 rounded-xl backdrop-blur border border-white/10 bg-white/5">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Integrity
                </h3>
                <p className="text-gray-300">
                  We are honest, transparent, and committed to doing what’s best
                  for our clients.
                </p>
              </li>
            </AnimatedSection>
            <AnimatedSection type="zoomIn" delay={0.2}>
              {" "}
              <li className="p-6 rounded-xl backdrop-blur border border-white/10 bg-white/5">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Innovation
                </h3>
                <p className="text-gray-300">
                  We embrace change and continuously strive to improve through
                  creative solutions.
                </p>
              </li>
            </AnimatedSection>
            <AnimatedSection type="zoomIn" delay={0.3}>
              {" "}
              <li className="p-6 rounded-xl backdrop-blur border border-white/10 bg-white/5">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Excellence
                </h3>
                <p className="text-gray-300">
                  We deliver with quality, consistency, and high standards
                  across all touchpoints.
                </p>
              </li>
            </AnimatedSection>
          </ul>
        </div>
      </section>
    </AnimatedSection>
  );
}
