import { motion } from "framer-motion";

import makeupImg from "../assets/m.jpg";
import skincareImg from "../assets/s.jpg";
import fragranceImg from "../assets/f.jpg";
import nailsImg from "../assets/n.png";

const categories = [
  {
    title: "Makeup",
    image: makeupImg,
  },
  {
    title: "Skincare",
    image: skincareImg,
  },
  {
    title: "Fragrance",
    image: fragranceImg,
  },
  {
    title: "Nails & Beauty",
    image: nailsImg,
  },
];

function Category() {
  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Shop By Category
          </h2>

          <p
            className="text-gray-600 mt-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Discover your perfect beauty essentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group relative h-80 overflow-hidden cursor-pointer shadow-md"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-white">
                <h3
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {category.title}
                </h3>

                <button className="mt-3 px-5 py-2 rounded-full bg-white text-pink-600 text-sm font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Shop Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Category;