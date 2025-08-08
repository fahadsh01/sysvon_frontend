import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import bgImage from "../assets/up.jpg";
import one from "../assets/bg.jpg";
import two from "../assets/industry.jpg";
import three from "../assets/sys.jpg";

const services = [
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
    slug: "web-designing",
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
];

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function ProHoverCard() {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef(null);
  const width = useWindowWidth();
  const isSmallScreen = width < 768;
  const slug = "case-studies";
  // We'll calculate cardWidth dynamically based on ref or fallback width
  const [cardWidth, setCardWidth] = useState(0);
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + 32); // + gap(8*4)
    }
  }, [width]);

  const visibleCount = 1;
  const maxSlide = services.length - visibleCount;

  const nextSlide = () => {
    if (current < maxSlide) setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  return (
    <div className="relative w-full mt-16 bg-white py-16 px-4 md:px-20 overflow-hidden">
      {/* Header and Arrows */}
      <div className="flex overflow-hidden  justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Success Stories in Spotlight
        </h2>

        {/* Show arrows only on large screens */}
        {!isSmallScreen && (
          <div className="flex overflow-hidden space-x-5">
            <Link to={`/insights/${slug}`}>
              <button className="px-4 p-2 bg-white text-black border rounded-3xl hover:bg-gray-700 hover:text-white">
                All-Case studies<span className="mx-2 text-lg">→</span>
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

      {/* Slider or stacked cards on small screens */}
      {isSmallScreen ? (
        // Stack cards vertically, no hover animation, no slider
        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="cursor-default w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl relative border border-gray-200 bg-white flex-shrink-0"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />
              {/* Content */}
              <div className="relative z-10 h-full w-full flex flex-col justify-end p-8">
                <h2 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                  {service.name}
                </h2>
                <p className="mt-4 text-white text-base leading-relaxed font-medium max-w-[90%]">
                  {service.description}
                </p>
                <div className="flex justify-between text-sm text-white font-semibold mt-4">
                  <span>
                    By <span className="font-bold">SYSVON</span> Team
                  </span>
                  <span className="font-bold">Updated 2025</span>
                </div>
                <Link
                  to={`/case-study/${service.slug}`}
                  className="inline-flex items-center gap-2 border border-gray-800 text-white  hover:bg-gray-800 hover:text-white font-medium py-2 px-5 rounded-full transition-all duration-500 ease-in-out mt-6 w-max"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Slider with hover animation
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * cardWidth}px)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                ref={index === 0 ? cardRef : null}
                className="cursor-pointer w-[50vw] h-[450px] mx-auto rounded-2xl overflow-hidden shadow-2xl group relative border border-white/10 flex-shrink-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out group-hover:scale-105 group-hover:blur-sm group-hover:brightness-50"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />

                {/* Content */}
                <div className="relative z-10 h-full w-full flex flex-col justify-end p-8">
                  {/* Title */}
                  <h2 className="text-white text-2xl font-bold tracking-wide drop-shadow-md transform transition-transform duration-700 ease-out group-hover:-translate-y-3">
                    {service.name}
                  </h2>

                  {/* Hover Content */}
                  <div className="opacity-0 translate-y-6 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[1000px] transition-all duration-1000 ease-in-out delay-150 mt-4 space-y-3">
                    <p className="text-gray-200 text-base leading-relaxed font-medium max-w-[90%] transition duration-1000 ease-in-out">
                      {service.description}
                    </p>

                    <div className="flex justify-between text-sm text-white font-bold sm:font-bold transition duration-1000 ease-in-out">
                      <span>
                        By <span className="text-white font-bold">SYSVON</span>{" "}
                        Team
                      </span>
                      <span className="font-bold">Updated 2025</span>
                    </div>

                    <Link
                      to={`/case-study/${service.slug}`}
                      className="inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-black font-medium py-2 px-5 rounded-full transition-all duration-500 ease-in-out"
                    >
                      Read More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
