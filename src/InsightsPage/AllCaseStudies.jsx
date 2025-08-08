import React from "react";
import bgImage from "../assets/up.jpg";
import one from "../assets/bg.jpg";
import two from "../assets/industry.jpg";
import three from "../assets/sys.jpg";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AnimatedSection from "../Scrollfadein";
const casestudy = {
  heading: "This is where you get all of the case studies",
  case: [
    {
      slug: "ai-agents",
      name: "AI Agents",
      image: bgImage,
      description:
        "Smart virtual support for businesses improves visibility and performance, putting control in the hands of professionals.",
    },
    {
      slug: "network-router",
      name: "Network Router",
      image: one,
      description:
        "Reliable connectivity for enterprises with enhanced visibility and optimized performance in modern labs.",
    },
    {
      slug: "designe",
      name: "Web Designing",
      image: two,
      description:
        "Secure and scalable web experiences with sleek design, improved performance, and modern UX patterns.",
    },
    {
      slug: "shopify",
      name: "Shopify",
      image: three,
      description:
        "Tech-driven eCommerce solutions designed for maximum growth, visibility, and user engagement.",
    },
  ],
};

export default function AllCaseStudies() {
  return (
    <>
      <div className="h-[80vh]">
        <div
          className="relative h-[70vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522199710521-72d69614c702')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <motion.h2
              className="text-white text-3xl md:text-4xl font-semibold max-w-4xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {casestudy.heading}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-white border border-white rounded-2xl transition-all duration-300 hover:bg-white hover:text-black"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 py-12 px-6 bg-gray-100">
        {casestudy.case.map((cas, index) => (
          <AnimatedSection type="zoomIn" delay={cas.id * 0.2}>
            {" "}
            <div
              key={cas.id}
              className="bg-white min-h-[430px] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition mx-3 w-[350px] flex-shrink-0"
            >
              <img
                src={cas.image}
                alt={cas.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{cas.name}</h3>
                <p className="text-gray-600 text-sm">{cas.description}</p>
                <Link
                  to={`/case-study/${cas.slug}`}
                  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <Footer />
    </>
  );
}
