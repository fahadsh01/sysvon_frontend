import { useEffect, useState } from "react";
import MegaDropdown from "./MegaDropdown";
import dropdownData from "./Dropdown";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownClick = (key) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(null);
      setTimeout(() => {
        setActiveDropdown(key);
      }, 10);
    }
  };

  const navItems = ["services", "insights", "industries", "company"];

  return (
    <>
      <header
        className={`overflow-x-hidden overflow-y-auto fixed top-0 left-0 w-full z-50 border-b border-white/20 transition-all duration-300 ${
          scrolled
            ? "bg-white backdrop-blur-md shadow-md text-black"
            : "bg-transparent backdrop-blur-sm text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo and Nav */}
          <div className="flex items-center space-x-10">
            <Link to="/">
              <h1 className="text-2xl font-mono font-bold">Sysvon</h1>
            </Link>

            <nav className="hidden md:flex items-center space-x-10 relative">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleDropdownClick(item)}
                  className="font-light font-mono hover:text-gray-400 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                  <span className="text-[10px]">▼</span>
                </button>
              ))}
              <Link to="/contactUS">
                <button className="font-light font-mono hover:text-gray-400 transition">
                  Contact Us
                </button>
              </Link>
            </nav>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white text-black backdrop-blur-md shadow-md py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setMenuOpen(false);
                  handleDropdownClick(item);
                }}
                className="block w-full text-left font-mono font-light"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <Link to="/contactUS">
              <button className="block w-full text-left font-mono font-light hover:text-gray-300 transition">
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </header>

      {/* Mega Dropdown */}
      {activeDropdown && (
        <div onMouseLeave={() => setActiveDropdown(null)}>
          <MegaDropdown
            {...dropdownData[activeDropdown]}
            closeDropdown={() => setActiveDropdown(null)}
          />
        </div>
      )}
    </>
  );
}
