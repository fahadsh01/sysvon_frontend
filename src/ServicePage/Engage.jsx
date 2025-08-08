import React from "react";
import { FaUsers, FaPlane, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedSection from "../Scrollfadein";

const engage = [
  {
    slug: "dedicated-team",
    title: "Dedicated Team",
    description:
      "Fast-track your projects with our team of technical and management experts through collaborative efforts.",
    btn: "Partner with Specialists",
    icon: <FaUsers />,
  },
  {
    slug: "Offshore",
    title: "Offshore Development Center",
    description:
      "Access to top 2% of technical experts providing stability and scalability of projects with reduced time-to-market.",
    btn: "Engage Our Expert Team",
    icon: <FaPlane />,
  },
  {
    slug: "fixed-price",
    title: "Fixed Price Projects",
    description:
      "Optimize your projects with minimum risks, assuring quality and on-time/on-budget delivery.",
    btn: "Get a Fixed Price Estimate",
    icon: <FaDollarSign />,
  },
];

export default function Engage() {
  return (
    <div className="px-6 py-12 sm:px-8 md:px-12 lg:px-20 mt-12 bg-gray-800 rounded-2xl overflow-hidden">
      <h1 className="text-white font-bold text-2xl sm:text-3xl mb-10">
        How Can We Engage?
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-6">
        {engage.map((e, i) => (
          <div key={i} className="w-full md:w-[32%]">
            <AnimatedSection type="zoomIn" delay={i * 0.2}>
              <div className="group mb-6 bg-gray-700 border border-gray-600 rounded-2xl p-6 h-[400px] flex flex-col justify-between shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full text-white text-xl">
                    {e.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                    {e.title}
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {e.description}
                  </p>
                </div>

                {/* Button */}
                <Link
                  to={`/engage/${e.slug}`}
                  className="flex items-center justify-center w-full h-12 text-center border border-white rounded text-white font-medium py-2 px-4 hover:bg-white hover:text-black transition"
                >
                  {e.btn}
                </Link>
              </div>
            </AnimatedSection>
          </div>
        ))}
      </div>
    </div>
  );
}
