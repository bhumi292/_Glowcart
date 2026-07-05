import { useState, useEffect } from "react";
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
          ? "bg-white shadow-md text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center">
          <button className="text-xl hover:text-pink-500 transition">
            <FaSearch />
          </button>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-widest"
        >
          GlowCart
        </Link>

        {/* Right */}
        <div className="hidden md:flex items-center gap-6">

          <button className="text-xl hover:text-pink-500 transition">
            <FaUser />
          </button>

          <button className="text-xl hover:text-pink-500 transition relative">
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
        <ul className="flex justify-center gap-12 py-4 font-medium">

          <li>
            <NavLink
              to="/"
              className="hover:text-pink-500 transition"
            >
              Home
            </NavLink>
          </li>

          <li>
            <button className="flex items-center gap-2 hover:text-pink-500 transition">
              Shop
              <FaChevronDown size={12} />
            </button>
          </li>

          <li>
            <button className="flex items-center gap-2 hover:text-pink-500 transition">
              Categories
              <FaChevronDown size={12} />
            </button>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="hover:text-pink-500 transition"
            >
              Contact
            </NavLink>
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