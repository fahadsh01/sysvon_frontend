import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogSlider() {
  const [allblogs, setAllblogs] = useState([]);
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const controls = useAnimation();
  const slug = "blogs";
  const cardWidth = 350;
  const cardGap = 24;
  const totalCardWidth = cardWidth + cardGap;
  const maxSlide = Math.max(allblogs.length - visibleCount, 0);

  useEffect(() => {
    const fetchblogs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/blog/get-blogs",
          {
            withCredentials: true,
          }
        );
        setAllblogs(res.data.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setAllblogs([]);
      }
    };
    fetchblogs();
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);
  useEffect(() => {
    if (current > maxSlide) setCurrent(maxSlide);
  }, [visibleCount, allblogs]);

  useEffect(() => {
    controls.start("visible");
  }, [controls, allblogs]);

  const nextSlide = () => {
    if (current < maxSlide) setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  return (
    <div className="relative w-full bg-white pt-16 pb-4 px-4 md:px-20 overflow-hidden">
      {/* Header + Arrows */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-3xl">
          Insights & Knowledge From The Digital Domain
        </h2>
        <div className="flex space-x-4">
          <Link to={`/insights/${slug}`}>
            <button className="px-4 p-2 bg-white text-black border rounded-3xl hover:bg-gray-700 hover:text-white">
              All-Blogs<span className="mx-2 text-lg">→</span>
            </button>
          </Link>
          <button
            onClick={prevSlide}
            disabled={current === 0}
            aria-label="Previous Slide"
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
            aria-label="Next Slide"
            className={`p-3 rounded-full border border-gray-400 text-gray-700 transition ${
              current === maxSlide
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * totalCardWidth}px)`,
          }}
        >
          {allblogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition mx-3 w-[350px] flex-shrink-0"
              initial="hidden"
              animate={controls}
              variants={fadeUpVariant}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={blog.avatar || "/default.jpg"}
                alt={blog.title || "Blog Image"}
                onError={(e) => (e.currentTarget.src = "/default.jpg")}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-1">
                  {blog.auther}
                </p>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
