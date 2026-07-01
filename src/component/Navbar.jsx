import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-pink-600"
        >
          GlowCart
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600"
                  : "hover:text-pink-600 transition"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600"
                  : "hover:text-pink-600 transition"
              }
            >
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-600"
                  : "hover:text-pink-600 transition"
              }
            >
              <FaShoppingCart className="text-xl" />
            </NavLink>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center py-4 gap-4">

            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                onClick={() => setMenuOpen(false)}
              >
                Cart
              </NavLink>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;