import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AnimatedSection from "../Scrollfadein";
export default function Blogs() {
  const [allblogs, setAllblogs] = useState([]);
  useEffect(() => {
    const fetchblogs = async () => {
      try {
        const response = await axios.get(
          "https://sysvonbackend-production.up.railway.app/api/v1/blog/get-blogs",
          {
            withCredentials: true,
          }
        );
        console.log(response.data.data);
        setAllblogs(response.data.data);
        console.log("here is the products ", allblogs);
        console.log(allblogs);
      } catch (error) {
        console.error("Error fetching products:", error);
        setAllblogs([]);
      }
    };

    fetchblogs();
  }, []);
  if (!allblogs)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-800"></div>
      </div>
    );
  console.log("here is the all blogs ", allblogs);
  return (
    <>
      {/* Hero Section */}
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
              This is where you get all of the blogs studies
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
        {allblogs.map((cas, index) => (
          <AnimatedSection type="zoomIn" delay={index * 0.2}>
            <div
              key={cas._id || index}
              className="bg-white min-h-[400px] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition mx-3 w-[350px] flex-shrink-0"
            >
              <img
                src={cas.avatar}
                alt={cas.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{cas.title}</h3>
                <p className="text-gray-600 text-sm">{cas.auther}</p>
                <Link
                  to={`/blog/${cas.slug}`}
                  className="mt-4  inline-block text-indigo-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>{" "}
      <Footer />
    </>
  );
}
