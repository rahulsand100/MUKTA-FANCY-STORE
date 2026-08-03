import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import saree1 from "../../assets/hero/saree1.webp";
import saree2 from "../../assets/hero/saree2.webp";
import kurti2 from "../../assets/hero/Kurti2.jpg";

const slides = [
  {
    image: saree1,
    smallTitle: "MUKTA EXCLUSIVE",
    title: "Elegance Woven Into Every Thread",
    description:
      "Discover timeless sarees crafted for celebrations, traditions and unforgettable moments.",
  },
  {
    image: saree2,
    smallTitle: "PREMIUM COLLECTION",
    title: "Tradition Meets Modern Luxury",
    description:
      "Explore our premium saree collection designed for the modern Indian woman.",
  },
  {
    image: kurti2,
    smallTitle: "FESTIVE EDIT",
    title: "Celebrate Every Moment In Style",
    description:
      "Beautiful ethnic wear curated to make every celebration extraordinary.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fff8f5]">

      {/* Background Decoration */}

      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#9b1c3f]/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#321820]/10 blur-3xl"></div>

     <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[92vh] items-center">

        {/* LEFT */}

        <div className="flex items-center px-8 lg:px-10 py-20">

          <div>

            <p className="tracking-[5px] text-[#9b1c3f] font-bold text-sm uppercase mb-5">
              {slides[currentSlide].smallTitle}
            </p>

           <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif font-bold text-[#321820] leading-[1.05] tracking-tight">
              {slides[currentSlide].title}
            </h1>

            <p className="mt-7 text-gray-600 text-lg leading-9 max-w-xl">
              {slides[currentSlide].description}
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <button
                onClick={() =>
                  document
                    .getElementById("featured-products")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="px-9 py-4 rounded-full bg-[#9b1c3f] text-white font-semibold shadow-xl hover:scale-105 transition"
              >
                Shop Collection
              </button>
              <div className="flex flex-wrap gap-6 mt-10 text-sm">

  <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow">
    🚚
    <span>Free Shipping</span>
  </div>

  <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow">
    ⭐
    <span>Premium Quality</span>
  </div>

  <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow">
    🔒
    <span>Secure Checkout</span>
  </div>

</div>

              <button
              
                onClick={() => navigate("/")}
                className="px-9 py-4 rounded-full border-2 border-[#9b1c3f] text-[#9b1c3f] hover:bg-[#9b1c3f] hover:text-white transition"
              >
                Explore More
              </button>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h2 className="text-3xl font-bold text-[#321820]">
                  500+
                </h2>

                <p className="text-gray-500">
                  Products
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#321820]">
                  1000+
                </h2>

                <p className="text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#321820]">
                  4.9★
                </h2>

                <p className="text-gray-500">
                  Google Rating
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex items-center justify-center p-8">

          <div className="relative overflow-hidden rounded-[35px] shadow-2xl">

            <img
              src={slides[currentSlide].image}
              alt=""
              className="w-full h-[720px] object-cover duration-700 hover:scale-110 transition-transform"
            />

            {/* Gradient */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent"></div>

            {/* Floating Card */}

            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-lg rounded-2xl p-5 shadow-xl">

              <p className="text-[#9b1c3f] font-bold">
                🔥 Durga Puja Collection
              </p>

              <h3 className="text-[#321820] font-semibold mt-1">
                Flat 20% OFF
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                Premium Ethnic Wear
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Slider */}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all rounded-full ${
              currentSlide === index
                ? "w-12 h-3 bg-[#9b1c3f]"
                : "w-3 h-3 bg-gray-400"
            }`}
          />
        ))}

      </div>

    </section>
  );
}

export default Hero;