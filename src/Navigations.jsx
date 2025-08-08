import React from "react";
import image from "./assets/bg.jpg";

export default function Navdata() {
  return (
    <div className="flex w-full bg-black text-white p-6 space-x-6">
      {/* Left: Title + Image + Description */}
      <div className="w-1/3 space-y-4">
        <h1 className="text-2xl mt-2 font-bold text-white">Services</h1>

        <img
          src={image}
          alt="Service"
          className="w-full mt-8 h-auto rounded-lg shadow"
        />

        <p className="text-gray-300 mt-2 ">
          We provide the best solutions to help your business grow.
        </p>
      </div>

      {/* Middle: Service Links */}
      <div className="w-1/3 p-4">
        <ul className="list-none space-y-2">
          <li>
            <a href="/web-dev" className="hover:text-gray-400">
              Web Development
            </a>
          </li>
          <li>
            <a href="/mobile" className="hover:text-gray-400">
              Mobile Development
            </a>
          </li>
          <li>
            <a href="/uiux" className="hover:text-gray-400">
              UI/UX Design
            </a>
          </li>
          <li>
            <a href="/seo" className="hover:text-gray-400">
              SEO Services
            </a>
          </li>
          <li>
            <a href="/cloud" className="hover:text-gray-400">
              Cloud Services
            </a>
          </li>
          <li>
            <a href="/support" className="hover:text-gray-400">
              Support
            </a>
          </li>
        </ul>
      </div>

      {/* Right: Duplicate or more categories */}
      <div className="w-1/3 p-4">
        <ul className="list-none space-y-2">
          <li>
            <a href="/ecommerce" className="hover:text-gray-400">
              E-commerce
            </a>
          </li>
          <li>
            <a href="/ai" className="hover:text-gray-400">
              AI Solutions
            </a>
          </li>
          <li>
            <a href="/blockchain" className="hover:text-gray-400">
              Blockchain
            </a>
          </li>
          <li>
            <a href="/devops" className="hover:text-gray-400">
              DevOps
            </a>
          </li>
          <li>
            <a href="/analytics" className="hover:text-gray-400">
              Data Analytics
            </a>
          </li>
          <li>
            <a href="/consulting" className="hover:text-gray-400">
              Consulting
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
