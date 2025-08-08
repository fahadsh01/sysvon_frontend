import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import up from "../assets/sys.jpg";

const services = [
  {
    slug: "web-developement",
    name: "AI Agents",
    image: up,
    description: "Smart virtual support for businesses.",
  },
  {
    slug: "web-developement",
    name: "Network Router",
    image: up,
    description: "Reliable connectivity for enterprises.",
  },
  {
    slug: "web-developement",
    name: "Web Designing",
    image: up,
    description: "Secure and scalable data storage.",
  },
  {
    slug: "web-developement",
    name: "Shopify",
    image: up,
    description: "Tech-driven wearable monitoring.",
  },
  {
    slug: "web-developement",
    name: "WordPress",
    image: up,
    description: "High performance for professionals.",
  },
  {
    slug: "web-developement",
    name: "Dev Opps",
    image: up,
    description: "Boost productivity with AI automation.",
  },
  {
    slug: "web-developement",
    name: "AI Assistant",
    image: up,
    description: "Smart virtual support for businesses.",
  },
  {
    slug: "web-developement",
    name: "Cloud Hub",
    image: up,
    description: "Secure and scalable data storage.",
  },
  {
    slug: "web-developement",
    name: "Web Development",
    image: up,
    description: "High performance for professionals.",
  },
  {
    slug: "web-developement",
    name: "Automation Tools",
    image: up,
    description: "Boost productivity with AI automation.",
  },
];

const ServicesSlider = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const cardWidth = 270 + 50; // card + margin
  const visibleCount = 4;
  const maxSlide = services.length - visibleCount;

  // Show/hide arrows based on screen size
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (current < maxSlide) setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  return (
    <div className="relative w-full mt-20 bg-white py-16 px-4 md:px-20 overflow-hidden">
      {/* Header and Arrows */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>

        {!isMobile && (
          <div className="flex space-x-5">
            <Link to="/all-services" className="font-bold">
              <button className="px-4 py-2 bg-white text-black border rounded-3xl hover:bg-gray-700 hover:text-white flex items-center">
                All-Services <span className="mx-2 text-lg">→</span>
              </button>
            </Link>

            <button
              onClick={prevSlide}
              disabled={current === 0}
              className={`p-3 rounded-full border border-gray-400 text-gray-700 transition ${
                current === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              disabled={current === maxSlide}
              className={`p-3 rounded-full border border-gray-400 text-gray-700 transition ${
                current === maxSlide
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>

      {/* Slider */}

      <div
        className={`${
          isMobile ? "overflow-x-auto" : "overflow-hidden"
        } scrollbar-hide`}
        ref={sliderRef}
      >
        <div
          className={`flex transition-transform duration-700 ease-in-out ${
            isMobile ? "gap-6" : ""
          }`}
          style={{
            transform: isMobile
              ? "none"
              : `translateX(-${current * cardWidth}px)`,
          }}
        >
          {services.map((service, index) => (
            <Link to={`/services/${service.slug}`} key={index}>
              <div className="relative min-w-[250px] sm:min-w-[270px] h-[400px] bg-white rounded-xl shadow-lg overflow-hidden group mx-4 transition-all duration-700">
                {/* Description */}
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center transition-all duration-700 bg-gray-200 group-hover:bg-white group-hover:translate-y-[-60px]">
                  <p className="text-gray-700 text-base font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Image and Name Section */}
                <div className="absolute bg-black bottom-0 left-6 right-6 h-16 group-hover:h-28 transition-all duration-700 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <h3 className="text-lg font-bold text-white text-center transition duration-700">
                      {service.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
