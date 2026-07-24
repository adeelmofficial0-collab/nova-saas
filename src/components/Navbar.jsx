import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sparkles, Menu, X } from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Features", "Pricing", "Testimonials", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#0a0a0f] px-6 py-4 transition-colors border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-10 h-10 text-purple-500" />
          <span className="text-gray-900 dark:text-white font-bold text-lg">
            Nova<span className="text-purple-500 dark:text-purple-400">AI</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white text-sm font-medium transition"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 px-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 text-sm font-medium"
            >
              {link}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="text-left text-gray-600 dark:text-gray-300 text-sm font-medium"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium px-5 py-2 rounded-lg text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </nav >
  );
};

export default Navbar;
