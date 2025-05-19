import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-100 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-600">Ronney Lok</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <a href="#about" className="text-gray-700 hover:text-indigo-600">
            About
          </a>
          <a
            href="#experiences"
            className="text-gray-700 hover:text-indigo-600"
          >
            Experience
          </a>
          <a href="#projects" className="text-gray-700 hover:text-indigo-600">
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/ronneylok"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 flex items-center gap-1"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
          <a
            href="https://github.com/ronneylogs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 flex items-center gap-1"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
          <a
            href="mailto:ronneylok@gmail.com"
            className="text-gray-700 hover:text-indigo-600 flex items-center gap-1"
          >
            <FaEnvelope className="text-lg" />
            Email
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium">
          <a
            href="#about"
            className="block text-gray-700 hover:text-indigo-600"
          >
            About
          </a>
          <a
            href="#experiences"
            className="block text-gray-700 hover:text-indigo-600"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block text-gray-700 hover:text-indigo-600"
          >
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/ronneylok"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-indigo-600"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/ronneylogs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-indigo-600"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="mailto:ronneylok@gmail.com"
            className="flex items-center gap-2 text-gray-700 hover:text-indigo-600"
          >
            <FaEnvelope />
            Email
          </a>
        </div>
      )}
    </nav>
  );
}
