import React from "react";
import { Link } from "react-router-dom";

const MegaDropdown = ({
  closeDropdown,
  title,
  image,
  description,
  links1,
  links2,
}) => (
  <div className="fixed top-[68px] left-0 z-40 w-full bg-white text-black shadow-2xl animate-fade-down flex flex-col md:flex-row h-screen md:h-auto overflow-hidden px-4 py-6">
    {/* Scrollable content for sm devices */}
    <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 overflow-y-auto md:overflow-visible md:h-auto pb-28 md:pb-0 scroll-smooth">
      {/* IMAGE SECTION */}
      {title !== "Company" && image && (
        <div className="w-full md:w-1/3 bg-gray-200 p-4 flex flex-col shrink-0 rounded-md">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">{title}</h1>
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain rounded shadow-lg mb-4"
          />
          <p className="text-sm sm:text-base text-black">{description}</p>
        </div>
      )}

      {/* LINKS */}
      <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <ul className="space-y-3 ml-2 mt-4 md:mt-0">
            {links1.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/${title}/${item.slug}`}
                  onClick={closeDropdown}
                  className="text-black hover:text-gray-600 text-sm sm:text-base transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="space-y-3 ml-2 mt-4 md:mt-0">
            {links2.map((item) => (
              <li key={item.slug}>
                <Link
                  to={`/${title}/${item.slug}`}
                  onClick={closeDropdown}
                  className="text-black hover:text-gray-600 text-sm sm:text-base transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Close Button (non-overlapping & full-width) */}
      <div className="block md:hidden mt-10 px-4">
        <button
          onClick={closeDropdown}
          className="w-full px-4 py-3 bg-red-800 text-white rounded-md font-semibold hover:bg-red-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default MegaDropdown;
