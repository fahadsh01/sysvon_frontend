import React, { useState, useEffect } from "react";
import first from "../assets/bg.jpg";
import second from "../assets/industry.jpg";
import third from "../assets/insight.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../Scrollfadein";

const images = [
  {
    src: first,
    title: "Empowering Innovation",
    text: "Join the future of technology with Sysvon.",
  },
  {
    src: second,
    title: "Industry Solutions",
    text: "Custom software tailored to your business.",
  },
  {
    src: third,
    title: "Insights & Growth",
    text: "Turn data into powerful decisions.",
  },
];

const HeroSectionCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4200);
    return () => clearInterval(interval);
  }, [total]);

  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-screen flex-shrink-0 relative">
            <img
              src={img.src}
              className="w-full h-full object-cover"
              alt={img.title}
            />{" "}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-6 md:px-20 w-full md:w-1/2 text-left">
              <AnimatedSection type="zoomIn">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                  {img.title}
                </h1>
                <h2>{img.text}</h2>

                <Link to="/contactUS">
                  <button className="bg-white text-black text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 rounded hover:bg-gray-300 transition mt-5">
                    Get in Touch
                  </button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 text-white text-2xl p-3 rounded-full hover:bg-white/40 z-20"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 text-white text-2xl p-3 rounded-full hover:bg-white/40 z-20"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === i ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSectionCarousel;
