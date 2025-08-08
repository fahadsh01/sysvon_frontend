import React, { useEffect, useState } from "react";
import img from "../assets/up.jpg"; // Your image
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import AnimatedSection from "../Scrollfadein";
const CaseStudies = [
  {
    slug: "ai-agents",
    heading: "Case Study:Ai-agents ",
  },
  {
    slug: "network-router",
    heading: "Case Study:Nerwork-Router ",
  },
];

export default function CaseStudyPage() {
  const [casestudy, setCasestudy] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    const selected = CaseStudies.find((c) => c.slug === slug);
    if (selected) setCasestudy(selected);
  }, [slug]);
  if (!casestudy)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-800"></div>
      </div>
    );

  console.log("here is the case study data", casestudy);

  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <div className="relative mb-10 rounded-bottum-xl h-[80vh] bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 overflow-hidden">
          {/* Metallic Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-30 mix-blend-overlay z-0" />

          {/* Hero Content */}
          <div className="relative  z-10 h-full flex items-center px-6 md:px-24">
            <div className="w-full md:w-1/2">
              <motion.h1
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-extrabold text-white"
              >
                {casestudy.heading}
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-4 text-gray-300 max-w-md"
              >
                Discover how we boosted performance, optimized UX, and increased
                conversions by 60%.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="relative z-20 px-6 md:px-24">
          <div className="w-full h-[50%] -mt-40">
            <motion.img
              src={img}
              alt="Hero Visual"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                rotate: -1,
                transition: { type: "spring", stiffness: 200 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-xl w-[65%] h-[60vh] object-cover shadow-xl"
            />
          </div>
        </div>
        <AnimatedSection type="fadeUp">
          <div className="bg-white text-gray-800 px-6 md:px-24 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="w-full md:w-[65%] space-y-14">
                {/* Overview */}
                <AnimatedSection type="fadeUp" delay={0.1}>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      Project Overview
                    </h2>
                    <p className="text-lg leading-relaxed">
                      XYZ Inc. needed a bold redesign to solve UX issues and
                      reduce bounce rate. The challenge included optimizing for
                      mobile users and increasing checkout performance.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Stats */}
                <AnimatedSection type="fadeUp" delay={0.1}>
                  {" "}
                  <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900">Duration</p>
                      <p>4 Months</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Stack</p>
                      <p>React, TailwindCSS, Node.js</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Budget</p>
                      <p>$45,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Team</p>
                      <p>Designers, Devs, PM, QA</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Challenge */}
                <AnimatedSection type="fadeUp" delay={0.1}>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">
                      The Challenge
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      The existing website was slow and cluttered. Users
                      abandoned carts due to a frustrating checkout and lack of
                      responsive design on mobile. XYZ's branding was also
                      poorly represented.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Solution */}
                <AnimatedSection type="fadeUp" delay={0.1}>
                  {" "}
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">
                      Our Solution
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We restructured the site architecture, redesigned the
                      entire UI with accessibility in mind, and optimized
                      performance using Tailwind and React. The checkout flow
                      was streamlined to reduce friction.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Results */}
                <AnimatedSection type="fadeUp" delay={0.1}>
                  {" "}
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">The Results</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>60% increase in conversions</li>
                      <li>Mobile bounce rate dropped by 45%</li>
                      <li>Checkout speed improved by 2x</li>
                      <li>Brand trust improved significantly</li>
                    </ul>
                  </div>
                </AnimatedSection>

                {/* Visuals */}

                {/* CTA */}
                <AnimatedSection type="fadeUp" delay={0.1}>
                  <div className="pt-10">
                    <Link to={`/insights/${slug}`}>
                      <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg shadow-md">
                        Explore More Case Studies
                      </button>
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>{" "}
        </AnimatedSection>{" "}
      </div>
      <Footer />
    </>
  );
}
