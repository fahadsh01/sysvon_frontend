import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import BlogSlider from "./BlogSlider";
import { FaBullseye } from "react-icons/fa";
import ProHoverCard from "./CaseStudy";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import AnimatedSection from "../Scrollfadein";
const servicesdata = [
  {
    slug: "fixed-price",
    heading:
      "Building Bridges to Global Success with Offshore Development Center",
    title: "Fixed Price Project Advantages",
    details: [
      {
        heading:
          "AI Software Development is The Key to Overcoming Modern Business Challenges",
      },
      {
        title: "Scalability Challenges",
        description:
          "AI-powered solutions like auto-scaling algorithms and cloud-based architectures enable businesses to scale operations seamlessly without increasing resource overhead.",
      },
      {
        title: "Data Overload",
        description:
          "Harness massive datasets with intelligent processing pipelines and actionable insights through AI-driven analytics.",
      },
      {
        title: "Customer Personalization",
        description:
          "Use AI to deliver tailored customer experiences by analyzing preferences and behaviors in real time.",
      },
      {
        title: "Scalability Challenges",
        description:
          "AI-powered solutions like auto-scaling algorithms and cloud-based architectures enable businesses to scale operations seamlessly without increasing resource overhead.",
      },
      {
        title: "Data Overload",
        description:
          "Harness massive datasets with intelligent processing pipelines and actionable insights through AI-driven analytics.",
      },
      {
        title: "Customer Personalization",
        description:
          "Use AI to deliver tailored customer experiences by analyzing preferences and behaviors in real time.",
      },
    ],
    steps: [
      {
        heading:
          "Methodical development from start to finish ensures your product stands out",
      },
      {
        cardtitle: "UI/UX Design process",
        carddescription: "From Blueprint to Breakthrough",
      },
      {
        title: "Strategy & Planning",
        description:
          "Aligning design goals with user expectations through structured research and architecture planning.",
      },
      {
        title: "Prototyping & Wireframes",
        description:
          "Creating visual guides and clickable prototypes to streamline UI flows and user interactions.",
      },
      {
        title: "High-Fidelity Designs",
        description:
          "Building pixel-perfect UI components backed by design systems and brand consistency.",
      },
      {
        title: "User Testing & Feedback",
        description:
          "Iterating based on real user feedback to optimize usability and engagement.",
      },
      {
        title: "Final Delivery & Handoff",
        description:
          "Providing developers with organized assets and guidelines for seamless implementation.",
      },
      {
        title: "User Testing & Feedback",
        description:
          "Iterating based on real user feedback to optimize usability and engagement.",
      },
      {
        title: "Final Delivery & Handoff",
        description:
          "Providing developers with organized assets and guidelines for seamless implementation.",
      },
    ],
    cards: [
      {
        title: "Budget Certainty",
        description:
          "Description for Budget Certainty.l;kl;k;l fkldfk orioik asfkl;fk lofidfk kl;kdlfk lkfsdl; ld;fksdl;fkalfks9oeiroeik jdfjdi injklgrijovb n jkl;df oodf iojjklfj dkfdkljirojr jrj;gj fiogri",
      },
      {
        title: "Risk Reduction",
        description: "Description for Risk Reduction.",
      },
      {
        title: "Clear Objectives and Scope",
        description: "Description for Clear Objectives.",
      },
      {
        title: "Simplified Project Management",
        description: "Description for Project Management.",
      },
      {
        title: "Motivation for Efficiency",
        description: "Description for Motivation.",
      },
    ],
  },
  {
    slug: "Offshore",
    heading:
      "Building Bridges to Global Success with Offshore Development Center",
    title: "Offshore Development Center",
    details: [
      {
        heading:
          "AI Software Development is The Key to Overcoming Modern Business Challenges",
      },
      {
        title: "Scalability Challenges",
        description:
          "AI-powered solutions like auto-scaling algorithms and cloud-based architectures enable businesses to scale operations seamlessly without increasing resource overhead.",
      },
      {
        title: "Data Overload",
        description:
          "Harness massive datasets with intelligent processing pipelines and actionable insights through AI-driven analytics.",
      },
      {
        title: "Customer Personalization",
        description:
          "Use AI to deliver tailored customer experiences by analyzing preferences and behaviors in real time.",
      },
      {
        title: "Scalability Challenges",
        description:
          "AI-powered solutions like auto-scaling algorithms and cloud-based architectures enable businesses to scale operations seamlessly without increasing resource overhead.",
      },
      {
        title: "Data Overload",
        description:
          "Harness massive datasets with intelligent processing pipelines and actionable insights through AI-driven analytics.",
      },
      {
        title: "Customer Personalization",
        description:
          "Use AI to deliver tailored customer experiences by analyzing preferences and behaviors in real time.",
      },
    ],
    steps: [
      {
        heading:
          "Methodical development from start to finish ensures your product stands out",
      },
      {
        cardtitle: "UI/UX Design process",
        carddescription: "From Blueprint to Breakthrough",
      },
      {
        title: "Strategy & Planning",
        description:
          "Aligning design goals with user expectations through structured research and architecture planning.",
      },
      {
        title: "Prototyping & Wireframes",
        description:
          "Creating visual guides and clickable prototypes to streamline UI flows and user interactions.",
      },
      {
        title: "High-Fidelity Designs",
        description:
          "Building pixel-perfect UI components backed by design systems and brand consistency.",
      },
      {
        title: "User Testing & Feedback",
        description:
          "Iterating based on real user feedback to optimize usability and engagement.",
      },
      {
        title: "Final Delivery & Handoff",
        description:
          "Providing developers with organized assets and guidelines for seamless implementation.",
      },
      {
        title: "User Testing & Feedback",
        description:
          "Iterating based on real user feedback to optimize usability and engagement.",
      },
      {
        title: "Final Delivery & Handoff",
        description:
          "Providing developers with organized assets and guidelines for seamless implementation.",
      },
    ],
    cards: [
      {
        title: "Budget Certainty",
        description: "Description for Budget Certainty.",
      },
      {
        title: "Risk Reduction",
        description: "Description for Risk Reduction.",
      },
      {
        title: "Clear Objectives and Scope",
        description: "Description for Clear Objectives.",
      },
      {
        title: "Simplified Project Management",
        description: "Description for Project Management.",
      },
      {
        title: "Motivation for Efficiency",
        description: "Description for Motivation.",
      },
    ],
  },
  {
    slug: "dedicated-team",
    heading: "you are at sysvon enofou",
    title: "Dedicated Team",

    details: [
      {
        heading:
          "AI Software Development is The Key to Overcoming Modern Business Challenges",
      },
      {
        title: "Scalability Challenges",
        description:
          "AI-powered solutions like auto-scaling algorithms and cloud-based architectures enable businesses to scale operations seamlessly without increasing resource overhead.",
      },
      {
        title: "Data Overload",
        description:
          "Harness massive datasets with intelligent processing pipelines and actionable insights through AI-driven analytics.",
      },
      {
        title: "Customer Personalization",
        description:
          "Use AI to deliver tailored customer experiences by analyzing preferences and behaviors in real time.",
      },
      {
        title: "Scalability Challenges",
        description:
          "AI-powered solutions like auto-scaling algorithms and cloud-based architectures enable businesses to scale operations seamlessly without increasing resource overhead.",
      },
      {
        title: "Data Overload",
        description:
          "Harness massive datasets with intelligent processing pipelines and actionable insights through AI-driven analytics.",
      },
      {
        title: "Customer Personalization",
        description:
          "Use AI to deliver tailored customer experiences by analyzing preferences and behaviors in real time.",
      },
    ],
    steps: [
      {
        heading:
          "Methodical development from start to finish ensures your product stands out",
      },
      {
        cardtitle: "UI/UX Design process",
        carddescription: "From Blueprint to Breakthrough",
      },
      {
        title: "Strategy & Planning",
        description:
          "Aligning design goals with user expectations through structured research and architecture planning.",
      },
      {
        title: "Prototyping & Wireframes",
        description:
          "Creating visual guides and clickable prototypes to streamline UI flows and user interactions.",
      },
      {
        title: "High-Fidelity Designs",
        description:
          "Building pixel-perfect UI components backed by design systems and brand consistency.",
      },
      {
        title: "User Testing & Feedback",
        description:
          "Iterating based on real user feedback to optimize usability and engagement.",
      },
      {
        title: "Final Delivery & Handoff",
        description:
          "Providing developers with organized assets and guidelines for seamless implementation.",
      },
      {
        title: "User Testing & Feedback",
        description:
          "Iterating based on real user feedback to optimize usability and engagement.",
      },
      {
        title: "Final Delivery & Handoff",
        description:
          "Providing developers with organized assets and guidelines for seamless implementation.",
      },
    ],
    cards: [
      {
        title: "Dedicated Team",
        description: "Description for Dedicated Team.",
      },
      {
        title: "Risk Reduction",
        description: "Description for Risk Reduction.",
      },
      {
        title: "Clear Objectives and Scope",
        description: "Description for Clear Objectives.",
      },
      {
        title: "Simplified Project Management",
        description: "Description for Project Management.",
      },
      {
        title: "Motivation for Efficiency",
        description: "Description for Motivation.",
      },
    ],
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

function DetailCards({ heading, cards }) {
  return (
    <div className="mx-4 md:mx-10 my-10 rounded-xl bg-gray-100 p-6 md:p-20">
      {heading && (
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          {heading}
        </h2>
      )}

      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((item, index) => (
          <div key={index} className="w-full sm:w-[47%] lg:w-[30%]">
            <AnimatedSection type="zoomIn" delay={index * 0.2}>
              <div className="bg-white transition-transform duration-300 transform hover:scale-105 hover:bg-gray-200 rounded-lg shadow p-6 h-[300px]">
                <div className="text-xl text-gray-300 mb-4">
                  <FaBullseye />
                </div>
                <div className="transition-transform duration-300 transform hover:scale-110">
                  <h3 className="text-2xl mt-5 font-bold mb-2 text-gray-600">
                    {item.title}
                  </h3>
                  <p className="text-sm mt-5 font-bold text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepSection({ heading, processCard, steps }) {
  return (
    <div className="bg-gray-100 rounded-xl mx-4 md:mx-10 my-10 p-6 md:p-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        {heading}
      </h2>

      <div className="flex flex-col md:flex-col lg:flex-row gap-6">
        {/* Left Side Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="animated-metallic-bg h-[250px] p-6 rounded-xl shadow-md w-full lg:w-1/2"
        >
          <h3 className="text-xl border-white rounded font-bold text-white mb-2">
            {processCard.cardtitle}
          </h3>
          <p className="mt-10 font-bold text-white">
            {processCard.carddescription}
          </p>

          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <div className="w-full h-1 bg-white relative">
              <div
                className="absolute right-0 -top-2 w-0 h-0 
                border-t-[10px] border-b-[10px] border-l-[14px] 
                border-t-transparent border-b-transparent border-l-white"
              ></div>
            </div>
          </motion.div>
        </motion.div>
        <div className="w-full grid grid-cols-1 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white w-full h-[150px] p-5 rounded-lg shadow relative"
            >
              <div className="absolute -top-4 left-4 bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1 mt-4 ml-2">
                {step.title}
              </h3>
              <p className="text-sm mt-2 ml-2 text-gray-600 font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function EngageDetailPage() {
  const { slug } = useParams();
  const width = useWindowWidth();
  const isSmallScreen = width < 768;

  const [service, setService] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const selected = servicesdata.find((s) => s.slug === slug);
    if (selected) setService(selected);
  }, [slug]);

  if (!service) return <div className="p-10 text-center">Loading...</div>;

  const [firstDetail, ...otherDetails] = service.details;
  const [firstStep, secondStep, ...otherSteps] = service.steps;

  // For slider logic only on large screens
  const visibleCount = isSmallScreen ? 1 : 3;
  const cardWidth = isSmallScreen ? window.innerWidth * 0.9 : 320 + 24;
  const maxSlide = Math.max(service.cards.length - visibleCount, 0);

  const nextSlide = () => {
    if (current < maxSlide) setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="overflow-hidden bg-white text-black">
        {/* Hero Section */}
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
              <motion.h2
                className="text-white text-3xl md:text-4xl font-semibold max-w-4xl leading-tight flex flex-wrap justify-center text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {service.heading.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-8"
              >
                <Link to="/contactUS">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white border border-white rounded-2xl transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Detail Cards Section */}
        <DetailCards heading={firstDetail.heading} cards={otherDetails} />

        {/* Cards Slider or simple list on small devices */}
        <div className="relative w-full px-4 sm:px-10 md:px-20 mt-16 bg-gray-900 py-10 overflow-hidden rounded-xl shadow-inner">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {service.title}
            </h2>

            {!isSmallScreen && (
              <div className="flex space-x-4">
                <button
                  onClick={prevSlide}
                  disabled={current === 0}
                  className={`p-3 rounded-full border border-gray-600 text-gray-300 transition-all duration-300 ${
                    current === 0
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-gray-700 hover:border-gray-400"
                  }`}
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={current === maxSlide}
                  className={`p-3 rounded-full border border-gray-600 text-gray-300 transition-all duration-300 ${
                    current === maxSlide
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-gray-700 hover:border-gray-400"
                  }`}
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>

          {/* Cards Container */}
          {isSmallScreen ? (
            // Simple stacked cards without slider and no hover animation on small screens
            <div className="flex flex-col gap-6">
              {service.cards.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-700 rounded-xl w-full p-6 cursor-default"
                >
                  <h2 className="text-xl font-bold text-white">{item.title}</h2>
                  <p className="mt-2 text-white">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            // Slider with hover animations on larger screens
            <div className="overflow-hidden">
              <div
                className="flex gap-x-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * cardWidth}px)` }}
              >
                {service.cards.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-700 rounded-xl flex-shrink-0 w-[320px] group hover:w-[448px] transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    <div className="relative h-[70vh] w-full shadow-lg overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full p-6">
                        <h2 className="text-xl font-bold text-white transition-colors duration-300">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-white transform translate-y-4 opacity-0 max-h-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out overflow-hidden">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <StepSection
          heading={firstStep.heading}
          processCard={secondStep}
          steps={otherSteps}
        />
        <AnimatedSection type="slideLeft">
          <div className="mt-12">
            <ProHoverCard />
          </div>
        </AnimatedSection>
        <AnimatedSection type="slideRight" delay={0.1}>
          <div className="mt-12">
            <BlogSlider />
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </>
  );
}
