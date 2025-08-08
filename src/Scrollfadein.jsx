// components/AnimatedSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  fadeUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  zoomIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  slideLeft: { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  slideRight: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function AnimatedSection({
  children,
  type = "fadeUp",
  delay = 0,
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants[type]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
