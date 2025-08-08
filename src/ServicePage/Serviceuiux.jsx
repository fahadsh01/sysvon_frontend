import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Analytics from "./Analatics";
import BlogSlider from "./BlogSlider";
import img from "../assets/nimg.jpeg";
import img1 from "../assets/6.jpg";
import { useParams } from "react-router-dom";
import ProHoverCard from "./CaseStudy";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AnimatedSection from "../Scrollfadein";

import {
  FaSearch,
  FaClipboardCheck,
  FaBullseye,
  FaChartLine,
  FaDollarSign,
  FaWallet,
  FaCode,
  FaCogs,
  FaUserAlt,
  FaPaintBrush,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import Engage from "./Engage";
import MordenNeeds from "./MordenNeeds";
const servicesdata = [
  {
    slug: "ui-ux-design",
    field: "UI/UX Design",
    title: "Intuitive User Experience Design",
    image: img,
    description:
      "At Sysvon, we specialize in delivering end-to-end product development services, from UI/UX design to modernization, cloud integration, and DevOps, ensuring secure, scalable, and innovative solutions tailored to your business needs.",
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
    usingTech: [
      "Tailwind",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "MongoDB",
      "Node.js",
      "HTML",
      "CSS",
      "React.js",
    ],
  },
  {
    slug: "web-developement",
    field: "Web Developement",
    title: "A dynamic approach to digital ecommerce",
    image: img1,
    description:
      "At Sysvon, we specialize in delivering end-to-end product development services, from UI/UX design to modernization, cloud integration, and DevOps, ensuring secure, scalable, and innovative solutions tailored to your business needs In today's competitive digital marketing place, companies must innovate rapidly. Businesses are accountable for all customer-facing information about their products, across all channels and locations. Through holistic and agile business models .",
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
        cardtitle: "Web Developement process",
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
    usingTech: [
      "Tailwind",
      "Bootstrap",
      "JavaScript",
      "Figma",
      "MongoDB",
      "Node.js",
      "HTML",
      "CSS",
      "React.js",
    ],
  },
];
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

        {/* Right Side Step Cards */}
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

export default function ServiceDetailUIUX() {
  const [service, setService] = useState(null);
  const { slug } = useParams();

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

  return (
    <>
      <div className="overflow-hidden bg-white text-black">
        <div
          className="overflow-hidden relative h-[70vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522199710521-72d69614c702')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
            {/* Field (Animated) */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2"
            >
              <span className="elegant-metallic-text">{service.field}</span>
            </motion.h1>

            {/* Title (Typing Style Animation) */}
            <motion.h2
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-4xl leading-tight flex flex-wrap justify-center"
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
              {service.title.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h2>

            {/* Button (Animated) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-10 py-10 bg-gray-50">
          <div className="mx-10 lg:w-1/2">
            <AnimatedSection type="slideLeft" delay={0.1}>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What We Offer
              </h2>
            </AnimatedSection>

            <AnimatedSection type="slideLeft" delay={0.2}>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </AnimatedSection>
          </div>
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className=" rounded-xl relative lg:w-1/2 h-[400px] w-full overflow-hidden shadow-xl bg-cover bg-center hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${service.image})` }}
          />
        </div>

        <DetailCards heading={firstDetail.heading} cards={otherDetails} />
        <Analytics />

        <StepSection
          heading={firstStep.heading}
          processCard={secondStep}
          steps={otherSteps}
        />
        <AnimatedSection type="slideLeft">
          <MordenNeeds />
        </AnimatedSection>

        <AnimatedSection type="slideRight">
          {" "}
          <ProHoverCard />
        </AnimatedSection>

        <AnimatedSection type="slideLeft">
          {" "}
          <div className="bg-white ml-10 py-12 px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Technologies We Use
            </h2>
            <div className="grid mx-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {service.usingTech.map((tech, i) => (
                <motion.div
                  key={tech}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-sm bg-white text-gray-500 font-bold hover:bg-gray-400 hover:text-white px-4 py-2 rounded-full shadow-sm transition"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <Engage />
        <AnimatedSection type="slideRight">
          {" "}
          <div className="mt-12">
            <BlogSlider />
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </>
  );
}
