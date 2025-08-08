import React from "react";
import { Link } from "react-router-dom";
import up from "../assets/sys.jpg"; // Shared image for all services
import { motion } from "framer-motion";
import Footer from "./Footer";
import AnimatedSection from "../Scrollfadein";

const allServices = [
  {
    category: "Consulting",
    description:
      "Navigate the complexities of digital technology with our expert consultation. We guide businesses through all digital transformational phases, ensuring your vision aligns with actionable pathways to innovation and growth.",
    services: [
      { slug: "web-developement", name: "Strategy" },
      { slug: "web-developement", name: "Market Research" },
      { slug: "web-developement", name: "Development" },
      { slug: "web-developement", name: "UI/UX" },
      { slug: "web-developement", name: "Innovation Labs" },
      { slug: "web-developement", name: "Digital Audits" },
    ],
  },
  {
    category: "Technology",
    description:
      "Cutting-edge technology solutions including AI, cloud, and DevOps. We design, build, and scale digital platforms that drive innovation and deliver measurable value.",
    services: [
      { slug: "web-developement", name: "AI Agents" },
      { slug: "web-developement", name: "Cloud Integration" },
      { slug: "web-developement", name: "DevOps" },
      { slug: "web-developement", name: "WordPress" },
      { slug: "web-developement", name: "Mobile Development" },
      { slug: "data", name: "Data Engineering" },
    ],
  },
];

export default function AllServices() {
  return (
    <>
      {/* Hero Section with Animation */}
      <div className="overflow-hidden h-[80vh]">
        <div
          className="relative h-[70vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522199710521-72d69614c702')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            {/* Title */}
            <motion.h2
              className="text-white text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Explore Our Services
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-white text-lg md:text-xl max-w-3xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Discover a wide range of solutions designed to empower your
              business.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link to="/contactUS">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 text-white border border-white rounded-2xl transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        {allServices.map((category, idx) => (
          <AnimatedSection key={idx} type="fadeUp" delay={idx * 0.3}>
            <div className="mb-20 flex flex-col md:flex-row md:items-start gap-10">
              {/* Left: Category title + description */}
              <div className="md:w-1/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {category.category}
                </h2>
                <p className="text-base text-gray-600">
                  {category.description}
                </p>
              </div>

              {/* Right: Service Cards */}
              <div className="w-full md:w-2/3 flex flex-wrap gap-6 pl-2 md:pl-12">
                {category.services.map((service, sIdx) => (
                  <AnimatedSection
                    key={service.slug}
                    type="fadeUp"
                    delay={sIdx * 0.1}
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className="relative group min-w-[300px] h-[160px] rounded-xl shadow-lg overflow-hidden transition-all duration-500 flex items-center justify-center"
                    >
                      {/* Default Gray Background */}
                      <div className="absolute inset-0 bg-gray-900 transition-all duration-500" />

                      {/* Hover Image Background */}
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ backgroundImage: `url(${up})` }}
                      />

                      {/* Text Overlay */}
                      <div className="relative z-10 px-4 text-center">
                        <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors duration-500">
                          {service.name}
                        </h3>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>

      <Footer />
    </>
  );
}
