import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Mneeds = [
  {
    title: "Product Strategy",
    description:
      "Fast-track your projects with our team of technical and management experts through collaborative efforts.",
  },
  {
    title: "UI/UX Design",
    description:
      "Fast-track your projects with our team of technical and management experts through collaborative efforts.",
  },
  {
    title: "Market Research",
    description:
      "Fast-track your projects with our team of technical and management experts through collaborative efforts.",
  },
  {
    title: "Application Development",
    description:
      "Fast-track your projects with our team of technical and management experts through collaborative efforts.",
  },
  {
    title: "Work",
    description:
      "Fast-track your projects with our team of technical and management experts through collaborative efforts.",
  },
];

// Animation variant
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function MordenNeeds() {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const controls = useAnimation();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const visibleCount = windowWidth >= 768 ? 4 : 1;
  const cardWidth = 250;
  const cardGap = 24;
  const totalCardWidth = cardWidth + cardGap;
  const maxSlide = Math.max(Mneeds.length - visibleCount, 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setCurrent(0);
    };

    controls.start("visible");
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [controls]);

  const nextSlide = () => {
    if (current < maxSlide) setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
  };

  return (
    <div className="rounded-none relative w-full bg-gray-800 pb-20 pt-16 pb-4 px-4 md:px-20 overflow-hidden sm:rounded-2xl">
      {/* Header + Arrows */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl">
          Services That Understand Modern Needs
        </h2>
        <div className="hidden md:flex space-x-4">
          <button
            onClick={prevSlide}
            disabled={current === 0}
            aria-label="Previous Slide"
            className={`p-3 rounded-full border border-gray-400 text-white transition ${
              current === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-700"
            }`}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            disabled={current === maxSlide}
            aria-label="Next Slide"
            className={`p-3 rounded-full border border-gray-400 text-white transition ${
              current === maxSlide
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-700"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * totalCardWidth}px)`,
          }}
        >
          {Mneeds.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-gray-700 rounded-2xl shadow-lg overflow-hidden transition mx-3 w-[250px] h-[330px] flex-shrink-0 p-6 flex flex-col"
              initial="hidden"
              animate={controls}
              variants={fadeUpVariant}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-xl font-bold text-white mb-2 z-10">
                {item.title}
              </h4>
              <p className="text-gray-200 mt-auto transition-transform duration-500 transform group-hover:-translate-y-12">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
