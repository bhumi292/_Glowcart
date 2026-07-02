import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/h2.webp";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-rose-100 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">

        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-pink-600 font-semibold uppercase tracking-widest mb-4">
              New Collection 2026
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Glow Naturally
              <br />
              Every Day
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              Discover premium skincare and beauty products
              designed to keep your skin healthy,
              fresh and naturally beautiful.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/shop"
                className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/shop"
                className="border border-pink-600 text-pink-600 px-8 py-3 rounded-lg hover:bg-pink-100 transition"
              >
                Explore Products
              </Link>

            </div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={heroImage}
              alt="Beauty Products"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;