import { useEffect, useState } from "react";

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

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((previousSlide) =>
        previousSlide === slides.length - 1
          ? 0
          : previousSlide + 1
      );
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative bg-[#fff8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[calc(100vh-180px)]">

        <div className="flex items-center px-6 md:px-12 lg:px-10 py-10">
          <div>
            <p className="text-[#8b1e3f] font-semibold tracking-[4px] text-sm mb-5">
              {slides[currentSlide].smallTitle}
            </p>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2d1820] leading-tight">
              {slides[currentSlide].title}
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-xl leading-8">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-[#8b1e3f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6f1732] transition duration-300 shadow-lg">
                Shop Collection
              </button>

              <button className="border border-[#8b1e3f] text-[#8b1e3f] px-8 py-4 rounded-full font-semibold hover:bg-[#8b1e3f] hover:text-white transition duration-300">
                Explore More
              </button>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] lg:h-auto">
          <img
            src={slides[currentSlide].image}
            alt="Mukta Fancy Store Collection"
            className="w-full h-full object-cover transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f5]/20 to-transparent"></div>
        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-10 bg-[#8b1e3f]"
                : "w-2 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;