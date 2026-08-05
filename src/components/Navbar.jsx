import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sparkles, Menu, X } from "lucide-react";

const navLinks = ["Home", "Features", "Pricing", "Testimonials", "Contact"];

const ThemeToggle = ({ darkMode, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className={`relative w-12 h-6 rounded-full transition-all duration-300 border border-[#7FC0FF]/40 shadow-[0_0_18px_rgba(88,168,255,0.45)] ${darkMode ? "bg-gradient-to-b from-[#5DAEFF] to-[#4290DE]" : "bg-gray-300"
      }`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-0"
        }`}
    />
  </button>
);

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 mx-8 md:mx-24 rounded-2xl bg-white/70 dark:bg-[#080E1A]/60 backdrop-blur-md px-6 py-6 transition-colors shadow-[0_8px_30px_-10px_rgba(59,130,246,0.25)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-10 h-10 text-[#58A8FF] drop-shadow-[0_0_10px_rgba(88,168,255,0.55)]" />

          <span className="text-gray-900 dark:text-white font-bold text-lg">
            No
            <span className="bg-gradient-to-r from-[#5DAEFF] to-[#4290DE] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(88,168,255,0.35)]">
              VA
            </span>
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
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />

          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-6 h-10 rounded-xl text-[16px] font-[500] text-[#111827] bg-[#58A8FF] border border-[#7FC0FF]/40 shadow-[0_0_25px_rgba(88,168,255,0.45)] hover:bg-[#66B3FF] hover:shadow-[0_0_35px_rgba(88,168,255,0.65)] transition-all duration-300"
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

          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>

            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-[#111827] bg-[#58A8FF] border border-[#7FC0FF]/40 shadow-[0_0_25px_rgba(88,168,255,0.45)] hover:bg-[#66B3FF] hover:shadow-[0_0_35px_rgba(88,168,255,0.65)] transition-all duration-300"
          >
            Get Started
          </a >
        </div >
      )}
    </nav >
  );
};

export default Navbar;