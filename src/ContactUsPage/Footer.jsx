import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Sysvon</h2>
          <p className="text-sm leading-relaxed">
            Empowering innovation with next-gen software solutions. We help
            businesses thrive in the digital era.
          </p>
          <div className="flex space-x-4 mt-6 text-lg">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Discovery Workshop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Market Research
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Product Strategy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Digital Transformation
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Application Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cloud Migration
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AI Software Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Machine Learning
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Quality Assurance
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Card */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-3">Subscribe</h3>
          <p className="text-sm mb-4 leading-relaxed">
            Get exclusive insights, curated resources and expert guidance.
          </p>
          <div className="flex flex-col  items-center gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full  px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-2">
          <a href="#" className="hover:underline">
            Customers
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sysvon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
