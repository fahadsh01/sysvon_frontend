import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import BlogSlider from "./BlogSlider";
import { FaBullseye } from "react-icons/fa";
import ProHoverCard from "./CaseStudy";
import img from "../assets/nimg.jpeg";
import How from "./How";
import Footer from "./Footer";
import AnimatedSection from "../Scrollfadein";
const servicesdata = [
  {
    slug: "commiunication",
    heading:
      "Building Bridges to Global Success with Communication Development Center",
    image: img,
    description: "the discription of the insight page ",
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
    slug: "health",
    heading:
      "Building Bridges to Global Success with health Development Center",
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
    slug: "Dedicated-Team",
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
function DetailCards({ heading, cards }) {
  return (
    <div className="mx-10 my-10  rounded-xl bg-gray-100 p-20 ">
      {heading && (
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          {heading}
        </h2>
      )}

      <div className="flex   flex-wrap gap-6 justify-center">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white transition-transform duration-600 transform hover:scale-110 hover:bg-gray-200 rounded-lg shadow p-6 w-[31%] h-[300px] "
          >
            <div className="text-xl text-gray-300 mb-4">
              <FaBullseye />
            </div>
            <div className="transition-transform duration-400 transform hover:scale-110 ">
              <h3 className="text-2xl mt-5   font-bold mb-2 text-gray-600">
                {item.title}
              </h3>
              <p className="text-sm   mt-5 font-bold text-gray-400">
                {item.description}
              </p>
            </div>
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
              <div className="absolute right-0 -top-2 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[14px] border-t-transparent border-b-transparent border-l-white" />
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
export default function Industries() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const cardWidth = 320 + 32;

  useEffect(() => {
    const selected = servicesdata.find((s) => s.slug === slug);
    if (selected) setService(selected);
  }, [slug]);

  if (!service)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-800"></div>
      </div>
    );

  const [firstDetail, ...otherDetails] = service.details;
  const [firstStep, secondStep, ...otherSteps] = service.steps;
  const maxSlide = service.cards.length - visibleCount;

  const nextSlide = () => {
    if (current < maxSlide) setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  return (
    <>
      <div className="overflow-hidden bg-white text-black">
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
                className="text-white text-3xl md:text-3xl font-semibold max-w-4xl leading-tight flex flex-wrap justify-center"
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {service.heading}
              </motion.h2>

              {/* Button Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 text-white border border-white rounded-2xl transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-10 py-10 bg-gray-50">
          {/* Left Side - Text Content */}
          <div className="mx-10 lg:w-1/2">
            <motion.h2
              initial={{ x: "-15%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              What We Offer
            </motion.h2>
            <motion.p
              initial={{ x: "-15%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              {service.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative lg:w-1/2 h-[400px] w-full transition-transform duration-300 transform hover:scale-105 overflow-hidden shadow-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            {/* Optional dark overlay */}
          </motion.div>
        </div>
        <StepSection
          heading={firstStep.heading}
          processCard={secondStep}
          steps={otherSteps}
        />{" "}
        <AnimatedSection type="slideLeft">
          <ProHoverCard />
        </AnimatedSection>
        <AnimatedSection type="slideRight">
          <BlogSlider />
        </AnimatedSection>
        <AnimatedSection type="zoomIn">
          <div className="mt-12">
            <How />
          </div>
        </AnimatedSection>
      </div>
      <Footer />
    </>
  );
}
