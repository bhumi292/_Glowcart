import { useState, useEffect } from "react";
import logo from "../assets/gt.png"; 
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white shadow-md"
        : "bg-white/90 backdrop-blur-md"
      }`}
    >
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center">
          <button className="text-2xl text-black">
            <FaSearch />
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="GlowCart Logo"
          className="w-36 md:w-50 h-auto object-contain"
        />
        </Link>

        {/* Right */}
        <div className="md:flex items-center gap-6">

          <button className="text-2xl text-black">
            <FaUser />
          </button>

          <button className="text-2xl text-black">
            <FaShoppingCart />
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Bottom Menu */}
      <nav className="hidden md:block border-t border-white/20">
       <ul className="flex justify-center gap-10 py-3 font-medium text-[15px]">

          <li>
            <button className="flex items-center gap-2 text-pink-500">
              Home
              <FaChevronDown size={9} />
            </button>
          </li>

          <li>
            <button className="flex items-center gap-2 text-pink-500">
              Shop
              <FaChevronDown size={9} />
            </button>
          </li>

          <li>
            <button className="flex items-center gap-2 text-pink-500">
              Categories
              <FaChevronDown size={9} />
            </button>
          </li>

          <li>
            <button className="flex items-center gap-2 text-pink-500">
              About
              <FaChevronDown size={9} />
            </button>
          </li>

        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-900 shadow-lg">
          <ul className="flex flex-col items-center gap-5 py-6">

            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/shop" onClick={() => setMenuOpen(false)}>
              Shop
            </NavLink>

            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Categories
            </NavLink>

            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>

            <div className="flex gap-6 pt-3 text-xl">
              <FaUser />
              <FaShoppingCart />
            </div>

          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;