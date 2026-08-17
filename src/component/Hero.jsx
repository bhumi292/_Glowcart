import heroImg from "../assets/hero.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
          <div className="max-w-2xl">

            {/* Badge - Top to Bottom */}
            <motion.span
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-2 rounded-full bg-pink-500/70 backdrop-blur-sm text-pink-100 font-semibold text-sm mb-5"
            >
              ✨ New Beauty Collection
            </motion.span>

            {/* Main Title - Zoom Out + Top */}
          <motion.h1
  className="text-6xl font-bold"
  style={{ fontFamily: "'Playfair Display', serif" }}
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }}
>
  {"Look Gorgeous".split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
          },
        },
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  ))}
</motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="text-lg"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Discover premium skincare and beauty essentials.
            </motion.p>

            {/* Buttons */}
            <motion.div
  initial={{ opacity: 0, rotateX: 90, y: 20 }}
  animate={{ opacity: 1, rotateX: 0, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 1.2,
    ease: "easeOut",
  }}
  className="flex flex-wrap gap-4 mt-8"
>
  <Link
    to="/products"
    className="px-8 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
  >
    Shop Now
  </Link>

  <Link
    to="/products"
    className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition"
  >
    Explore Collection
  </Link>
</motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;