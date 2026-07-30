import heroImg from "../assets/hero.png";
import { Link } from "react-router-dom";

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

            <span className="inline-block px-4 py-2 rounded-full bg-pink-500/70 backdrop-blur-sm text-pink-100 font-semibold text-sm mb-5">
              ✨ New Beauty Collection
            </span>

            <h1
  className="text-6xl font-bold"
  style={{ fontFamily: "'Playfair Display', serif" }}
>
  Elevate Your Beauty Routine
</h1>

<p
  className="text-lg"
  style={{ fontFamily: "'Poppins', sans-serif" }}
>
  Discover premium skincare and beauty essentials.
</p>

            <div className="flex flex-wrap gap-4 mt-8">
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
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;