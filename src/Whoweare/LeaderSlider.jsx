import React from "react";

import fahad from "../assets/sys.jpg";
import abd from "../assets/bg.jpg";
import kam from "../assets/industry.jpg";
import kam1 from "../assets/up.jpg";
import AnimatedSection from "../Scrollfadein";

const teamMembers = [
  {
    id: 1,
    image: fahad,
    name: "Fahad Shahzad",
    role: "Web Developer",
  },
  {
    id: 2,
    image: abd,
    name: "Abdullah Nasir",
    role: "WordPress & AI Specialist",
  },
  {
    id: 3,
    image: kam,
    name: "Kamran",
    role: "Shopify Developer",
  },
  {
    id: 4,
    image: kam1,
    name: "Kamran",
    role: "DevOps Engineer",
  },
];
export default function WhoWeAre() {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 text-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <AnimatedSection type="fadeUp">
          {" "}
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-left">
            Our Leadership
          </h2>
        </AnimatedSection>
        <AnimatedSection type="fadeUp" delay={0.1}>
          {" "}
          <p className="text-lg sm:text-2xl lg:text-3xl max-w-4xl text-left leading-relaxed text-gray-200">
            Our commitment goes beyond serving our own business and clients as
            we strive to have a positive impact on people and communities.
          </p>
        </AnimatedSection>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map(({ id, image, name, role }) => (
          <AnimatedSection type="zoomIn" delay={id * 0.2}>
            {" "}
            <div
              key={id}
              className="bg-white/5 rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-300"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-white">
                  {name}
                </h3>
                <p className="text-gray-300 text-sm">{role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
