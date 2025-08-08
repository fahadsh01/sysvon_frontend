import React from "react";
import bg1 from "../assets/analatics.webp";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
const stats = [
  { title: 20, suffix: "+", subtitle: "Years of driving growth" },
  { title: 1000, suffix: "+", subtitle: "Forward thinking experts" },
  { title: 200, suffix: "+", subtitle: "Digital Projects Delivered" },
  { title: 10, suffix: "+", subtitle: "Industries we served" },
  { title: 99.9, suffix: "%", subtitle: "Customer Satisfaction" },
];

export default function Analytics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="mx-0 sm:mx-4 md:mx-10">
      <div
        className="relative rounded-none sm:rounded-3xl w-full min-h-screen bg-cover bg-center text-white px-4 sm:px-6 md:px-20 py-16 flex flex-col justify-center overflow-hidden"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        {/* 🔲 Fade Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.15)_70%,_rgba(255,255,255,0.3)_100%)]"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto text-left">
          <p className="text-base sm:text-lg font-semibold max-w-xl">
            So here at Sysvon, we provide the best solutions with cost
            efficiency.
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 max-w-2xl leading-tight">
            Leading your Digital Journey to Success
          </h1>

          <div className="mt-8">
            <Link to="/contactUS">
              {" "}
              <button className="bg-transparent border-1 text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-black transition">
                Let’s Work Together
              </button>
            </Link>
          </div>

          {/* Animated Stats */}
          <div
            ref={ref}
            className="flex flex-wrap items-start justify-start gap-x-6 gap-y-10 mt-12"
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="sm:border-r border-white/30 sm:pr-6 sm:last:border-r-0 min-w-[160px]"
              >
                <h2 className="text-2xl font-bold">
                  {inView ? (
                    <CountUp
                      end={item.title}
                      suffix={item.suffix}
                      duration={3}
                    />
                  ) : (
                    "0" + item.suffix
                  )}
                </h2>
                <p className="text-sm mt-1">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
