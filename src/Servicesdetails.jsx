import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const features = [
  "Custom UI/UX Design",
  "Responsive Layouts",
  "CMS & Admin Panels",
  "E-Commerce Integration",
  "SEO Optimized Code",
  "API Integration",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ServiceDetail() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522199710521-72d69614c702')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Web Development
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl"
          >
            Crafting modern, scalable, and elegant websites tailored to your
            business needs.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Overview</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our web development services are designed to empower your digital
            presence. From frontend design to backend development, we provide
            end-to-end solutions that help your business grow online. Whether
            you're launching a startup or scaling an enterprise, our team
            ensures performance, security, and style.
          </p>
        </motion.div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to="/service">
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="text-blue-600" size={22} />
                    <h3 className="font-semibold text-lg text-gray-800">
                      {feature}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    High-quality and optimized implementation of{" "}
                    {feature.toLowerCase()}.
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
          ;
        </div>
      </div>
    </div>
  );
}
