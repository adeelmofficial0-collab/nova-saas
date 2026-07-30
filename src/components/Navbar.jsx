import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sparkles, Menu, X } from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Features", "Pricing", "Testimonials", "Contact"];

  return (
    <nav className="sticky top-4 z-50 mx-8 md:mx-24 rounded-2xl bg-white/70 dark:bg-[#080E1A]/60 backdrop-blur-md px-6 py-6 transition-colors shadow-[0_8px_30px_-10px_rgba(59,130,246,0.25)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-10 h-10 text-purple-600" />
          <span className="text-gray-900 dark:text-white font-bold text-lg">
            No<span className="text-purple-600 dark:text-purple-400">VA</span>
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
            className={`relative w-12 h-6 rounded-full transition-colors ${darkMode ? "bg-purple-600" : "bg-gray-300"
              }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${darkMode ? "translate-x-6" : "translate-x-0"
                }`}
            />
          </button>

          <a
            href="#contact"
            className="bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-200"
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
      </div >

      {
        menuOpen && (
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

            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>

              <button
                onClick={toggleTheme}
                className={`relative w-12 h-6 rounded-full transition-colors ${darkMode ? "bg-purple-600" : "bg-gray-300"
                  }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${darkMode ? "translate-x-6" : "translate-x-0"
                    }`}
                />
              </button>
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-medium px-5 py-2 rounded-lg text-center hover:opacity-90 transition"
            >
              Get Started
            </a>
          </div>
        )
      }
    </nav >
  );
};

export default Navbar;