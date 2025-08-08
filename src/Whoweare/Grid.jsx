import React from "react";
import { motion } from "framer-motion";
import f from "../assets/f.jpeg";
import a from "../assets/6.jpg";
import k from "../assets/2.jpg";
import c from "../assets/3.jpeg";
import s from "../assets/bg.jpg";
import d from "../assets/industry.jpg";
import g from "../assets/up.jpg";
import AnimatedSection from "../Scrollfadein";

const colorGroups = [
  [
    { image: f, height: "h-[200px]" },
    { image: a, height: "h-[130px]" },
  ],
  [{ image: k, height: "h-[220px]" }],
  [{ image: c, height: "h-[180px]" }],
  [{ image: g, height: "h-[210px]" }],
  [
    { image: s, height: "h-[140px]" },
    { image: d, height: "h-[190px]" },
  ],
];

export default function AnimatedColorGrid() {
  return (
    <div className="px-4 py-10 space-y-8">
      {/* Animated Text Paragraph */}
      <AnimatedSection type="fadeUp" delay={0.1}>
        <p className="text-center text-2xl text-black font-semibold max-w-3xl mx-auto">
          Achieving sustainable programs through collaboration, innovation, and
          shared expertise.
        </p>
      </AnimatedSection>

      {/* Image Grid */}
      <ul className="flex flex-wrap justify-center items-end gap-6">
        {colorGroups.map((group, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
            className="flex flex-col gap-4"
          >
            {group.map((box, i) => (
              <div
                key={i}
                style={{
                  backgroundImage: `url(${box.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`w-[180px] ${box.height} rounded-lg shadow-md`}
              />
            ))}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
