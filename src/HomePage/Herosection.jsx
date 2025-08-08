import React from "react";
import bgImage from "./assets/up.jpg"; // Replace with your actual image

const ServiceCard = () => {
  return (
    <div className="relative w-[250px] h-[380px] bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-700">
      {/* Description Section */}
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center transition-all duration-700 group-hover:translate-y-[-60px]">
        <p className="text-gray-700 text-base font-medium">
          Automate your business workflows and scale effortlessly.
        </p>
      </div>

      {/* Bottom Expanding Section */}
      <div className="absolute bottom-0 left-6 right-6 h-16 group-hover:h-28 transition-all duration-700 overflow-hidden">
        {/* Background Image Layer — fully visible without blur */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Centered Service Name */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition duration-700 text-center">
            Smart Automation
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
