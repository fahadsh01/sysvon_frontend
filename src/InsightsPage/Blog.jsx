import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import AnimatedSection from "../Scrollfadein";
export default function BlogDetail() {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const sectionRefs = useRef({});
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `https://sysvonbackend-production.up.railway.app/api/v1/blog/detailed/${slug}`
        );
        setBlogData(res.data.data.blogDetail);
      } catch (err) {
        console.error("Failed to fetch blog", err);
      }
    };

    fetchBlog();
  }, [slug]);

  useEffect(() => {
    if (!blogData) return;

    const handleScroll = () => {
      const sectionIds = blogData.sections.map((s) => s.id);
      for (const id of sectionIds) {
        const el = sectionRefs.current[id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blogData]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!blogData)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-800"></div>
      </div>
    );

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://sysvonbackend-production.up.railway.app/api/v1/subscribe/create-subs",
        { email }
      );

      if (res.status === 201) {
        setMessage(true);
        setEmail("");
      } else {
        console.error("Unexpected response:", res);
      }
    } catch (error) {
      console.error(
        "Subscription failed:",
        error?.response?.data?.message || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <div className="relative mb-10 rounded-b-xl h-[70vh] bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-30 mix-blend-overlay z-0" />
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6 md:px-24">
            <div className="w-full mb-30 md:max-w-2xl">
              <motion.h1
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
              >
                {blogData.title}
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="relative z-20 flex justify-center px-4 -mt-48 md:-mt-60 mb-10">
          <motion.img
            src={blogData.avatar}
            alt="Hero Visual"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-xl w-full sm:w-[90%] md:w-[50%] max-h-[60vh] object-cover shadow-xl"
          />
        </div>
        <AnimatedSection type="fadeUp">
          {" "}
          <div className=" md:hidden overflow-x-auto whitespace-nowrap px-4 mb-6">
            {blogData.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`inline-block px-4 py-2 mr-2 border rounded-full text-sm ${
                  activeId === section.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>{" "}
          <div className="grid grid-cols-1  md:grid-cols-12 gap-6 max-w-7xl mx-auto px-4 md:px-8 pb-20">
            <aside className="md:col-span-2 hidden md:block sticky top-28 h-fit">
              {/* Heading */}
              <h1 className="text-left text-black font-bold mb-4 text-xl">
                Content
              </h1>

              {/* Blog Sections */}
              <div className="space-y-3 text-sm font-medium text-gray-700">
                {blogData.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block transition duration-200 px-2 py-1 rounded hover:bg-gray-400 hover:text-white ${
                      activeId === section.id
                        ? "text-white  font-semibold bg-gray-400"
                        : ""
                    }`}
                  >
                    {section.label}
                  </a>
                ))}
              </div>

              {/* Divider */}
              <hr className="my-6 border-gray-300" />

              {/* Share Section */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-gray-800">
                  Share this blog
                </h2>
                <div className="flex items-center gap-3 text-gray-600">
                  <a
                    href="#"
                    className="hover:text-blue-600 transition"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-sky-500 transition"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="hover:text-blue-700 transition"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(window.location.href)
                    }
                    className="hover:text-gray-900 transition"
                    aria-label="Copy Link"
                  >
                    <LinkIcon size={20} />
                  </button>
                </div>
              </div>
            </aside>
            {/* Content */}
            <div className="md:col-span-7">
              <motion.div
                className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {blogData.sections.map((section) => (
                  <AnimatedSection type="fadeUp" delay={0.1}>
                    <section
                      key={section.id}
                      id={section.id}
                      ref={(el) => (sectionRefs.current[section.id] = el)}
                    >
                      <h2 className="font-bold text-xl">{section.label}</h2>
                      <p>{section.content}</p>
                    </section>{" "}
                  </AnimatedSection>
                ))}
              </motion.div>

              {/* Metadata */}
              <motion.div
                className="mt-12 border-t pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-500 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div>
                  🗓️ Published on:{" "}
                  {blogData.updatedAt
                    ? new Date(blogData.createdAt).toLocaleDateString()
                    : "Unknown"}
                </div>
                <div>✍️ Author: {blogData.auther}</div>
                <div>🏷️ Tags: {blogData.tags}</div>
              </motion.div>
            </div>
            <aside className=" md:col-span-3">
              <div className="sticky top-11  bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-sm mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  Stay Updated
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  Subscribe to get the latest insights, trends, and resources
                  delivered to your inbox weekly.
                </p>
                <form className="space-y-5" onSubmit={handleSubscribe}>
                  {/* Email Input */}
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-300 focus:outline-none"
                    required
                  />
                  <div className="h-10 transition-all duration-300 flex items-center">
                    {message && (
                      <div className="p-3 bg-green-100 text-green-800 rounded-md border border-green-400 text-sm w-full text-center">
                        ✅ You are subscribed successfully!
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto px-8 py-3 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-800 transition flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l5-5-5-5v4a10 10 0 00-10 10h4z"
                          />
                        </svg>
                        Subscribing...
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </button>

                  {/* Message Placeholder */}
                </form>
              </div>
            </aside>{" "}
          </div>{" "}
        </AnimatedSection>
      </div>

      <Footer />
    </>
  );
}
