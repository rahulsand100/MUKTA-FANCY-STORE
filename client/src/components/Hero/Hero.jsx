import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
  FaTruck,
  FaStar,
  FaMoneyBillWave,
  FaTimes,
} from "react-icons/fa";

import saree1 from "../../assets/hero/saree1.webp";
import saree2 from "../../assets/hero/saree2.webp";
import kurti2 from "../../assets/hero/Kurti2.jpg";

const slides = [
  {
    image: saree1,
    smallTitle: "MUKTA COLLECTION",
    title: "Find Your\nPerfect Style.",
    description:
      "Discover carefully selected fashion, festive wear and everyday essentials made for every occasion.",
  },
  {
    image: saree2,
    smallTitle: "PREMIUM COLLECTION",
    title: "Elegance\nFor Every Occasion.",
    description:
      "Timeless designs, beautiful details and premium styles curated specially for you.",
  },
  {
    image: kurti2,
    smallTitle: "FESTIVE EDIT",
    title: "Celebrate\nIn Style.",
    description:
      "Explore beautiful ethnic wear created for celebrations, traditions and unforgettable moments.",
  },
];

const popularSearches = [
  "Saree",
  "Kurti",
  "Jeans",
  "Shirt",
  "Kids Wear",
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  const goToFeatured = () => {
    document
      .getElementById("featured-products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const handleSearch = (value) => {
    setSearchOpen(false);

    const element = document.getElementById("featured-products");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#fcf8f6] text-[#321820]">

      {/* =====================================
          TOP PREMIUM STRIP
      ===================================== */}

      <div className="bg-[#321820] text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="min-h-[42px] flex items-center justify-center">

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[11px] md:text-xs tracking-[1.5px] uppercase">

              <div className="flex items-center gap-2">
                <FaTruck className="text-[#d8b16a]" />
                <span>
                  Free Shipping on orders ₹999+
                </span>
              </div>

              <span className="hidden md:block text-white/30">
                |
              </span>

              <div className="flex items-center gap-2">
                <FaStar className="text-[#d8b16a]" />
                <span>
                  Premium Quality
                </span>
              </div>

              <span className="hidden md:block text-white/30">
                |
              </span>

              <div className="flex items-center gap-2">
                <FaMoneyBillWave className="text-[#d8b16a]" />
                <span>
                  Cash On Delivery Available
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================
          HERO MAIN
      ===================================== */}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center min-h-[650px] py-12 lg:py-16">

          {/* =================================
              LEFT CONTENT
          ================================= */}

          <div className="order-2 lg:order-1">

            {/* Back Button */}

            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center gap-3 mb-8 text-sm font-medium text-[#6d5b60] hover:text-[#9b1c3f] transition"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full border border-[#d8cacc] bg-white group-hover:border-[#9b1c3f] transition">
                <FaArrowLeft className="text-xs" />
              </span>

              <span>
                BACK
              </span>
            </button>


            {/* Small Heading */}

            <div className="flex items-center gap-4 mb-6">

              <span className="w-10 h-[1px] bg-[#9b1c3f]"></span>

              <p className="text-[#9b1c3f] text-xs md:text-sm font-bold tracking-[4px] uppercase">
                {slide.smallTitle}
              </p>

              <span className="w-10 h-[1px] bg-[#9b1c3f]"></span>

            </div>


            {/* Main Heading */}

            <h1 className="whitespace-pre-line text-[54px] sm:text-[64px] lg:text-[70px] xl:text-[78px] leading-[0.98] font-serif text-[#321820]">
              {slide.title}
            </h1>


            {/* Decorative Line */}

            <div className="flex items-center gap-3 mt-7 mb-7">

              <span className="w-14 h-[2px] bg-[#9b1c3f]"></span>

              <span className="text-[#b78a45] text-lg">
                ✦
              </span>

              <span className="w-14 h-[2px] bg-[#9b1c3f]"></span>

            </div>


            {/* Description */}

            <p className="max-w-lg text-[#6d6265] text-base md:text-lg leading-8">
              {slide.description}
            </p>


            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-9">

              <button
                onClick={goToFeatured}
                className="group inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#9b1c3f] text-white rounded-full font-semibold tracking-wide shadow-[0_15px_35px_rgba(155,28,63,0.25)] hover:bg-[#7f1634] hover:-translate-y-1 transition-all duration-300"
              >
                SHOP COLLECTION

                <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
              </button>


              <button
                onClick={() => setSearchOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#bdaeb0] bg-white text-[#321820] rounded-full font-semibold tracking-wide hover:border-[#9b1c3f] hover:text-[#9b1c3f] hover:-translate-y-1 transition-all duration-300"
              >
                <FaSearch className="text-sm" />

                EXPLORE
              </button>

            </div>


            {/* Trust Badges */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 max-w-xl">

              <div className="flex items-center gap-3 bg-white border border-[#eee4e1] rounded-2xl px-4 py-4 shadow-sm">

                <div className="w-10 h-10 rounded-full bg-[#f8eee9] flex items-center justify-center text-[#9b1c3f]">
                  <FaTruck />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide">
                    Free Shipping
                  </p>

                  <p className="text-[11px] text-gray-500 mt-1">
                    Above ₹999
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-3 bg-white border border-[#eee4e1] rounded-2xl px-4 py-4 shadow-sm">

                <div className="w-10 h-10 rounded-full bg-[#f8eee9] flex items-center justify-center text-[#9b1c3f]">
                  <FaStar />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide">
                    Premium
                  </p>

                  <p className="text-[11px] text-gray-500 mt-1">
                    Quality
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-3 bg-white border border-[#eee4e1] rounded-2xl px-4 py-4 shadow-sm">

                <div className="w-10 h-10 rounded-full bg-[#f8eee9] flex items-center justify-center text-[#9b1c3f]">
                  <FaMoneyBillWave />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide">
                    COD
                  </p>

                  <p className="text-[11px] text-gray-500 mt-1">
                    Available
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* =================================
              RIGHT IMAGE
          ================================= */}

          <div className="order-1 lg:order-2 relative">

            {/* Decorative background */}

            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#9b1c3f]/10 blur-3xl"></div>

            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#c9a56b]/10 blur-3xl"></div>


            <div className="relative">

              {/* Image */}

              <div className="relative overflow-hidden rounded-[35px] shadow-[0_30px_80px_rgba(50,24,32,0.18)]">

                <img
                  src={slide.image}
                  alt="Mukta Fancy Store Collection"
                  className="w-full h-[500px] sm:h-[600px] lg:h-[650px] object-cover transition-all duration-700 hover:scale-[1.03]"
                />

                {/* Image Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#321820]/30 via-transparent to-transparent"></div>


                {/* Premium Badge */}

                <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-[#321820] text-white flex flex-col items-center justify-center shadow-xl border border-[#d8b16a]/50 rotate-6">

                  <span className="text-[9px] tracking-[2px]">
                    MUKTA
                  </span>

                  <span className="font-serif text-sm font-bold">
                    PREMIUM
                  </span>

                  <span className="text-[#d8b16a] text-xs">
                    ✦
                  </span>

                </div>


                {/* Image Bottom Card */}

                <div className="absolute bottom-6 left-6 right-6">

                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-xl">

                    <div className="flex items-center justify-between gap-4">

                      <div>
                        <p className="text-[10px] text-[#9b1c3f] font-bold tracking-[3px] uppercase">
                          Curated For You
                        </p>

                        <h3 className="font-serif text-xl mt-1 text-[#321820]">
                          Premium Fashion Edit
                        </h3>
                      </div>

                      <button
                        onClick={goToFeatured}
                        className="w-11 h-11 shrink-0 rounded-full bg-[#9b1c3f] text-white flex items-center justify-center hover:bg-[#321820] transition"
                      >
                        <FaArrowRight />
                      </button>

                    </div>

                  </div>

                </div>

              </div>


              {/* Slider Controls */}

              <div className="flex items-center justify-center gap-3 mt-6">

                {slides.map((_, index) => (

                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-12 bg-[#9b1c3f]"
                        : "w-3 bg-[#d5c8c9]"
                    }`}
                  />

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            POPULAR SEARCHES
        ===================================== */}

        <div className="pb-12">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-5">

            <div>

              <p className="text-[11px] text-[#9b1c3f] font-bold tracking-[4px] uppercase">
                Explore
              </p>

              <h2 className="font-serif text-2xl md:text-3xl mt-1">
                Popular Searches
              </h2>

            </div>

            <button
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#6d5b60] hover:text-[#9b1c3f] transition"
            >
              <FaSearch />

              Search Everything
            </button>

          </div>


          <div className="flex flex-wrap gap-3">

            {popularSearches.map((item) => (

              <button
                key={item}
                onClick={() => handleSearch(item)}
                className="group flex items-center gap-5 bg-white border border-[#e7dcda] rounded-full px-6 py-3.5 text-sm font-medium hover:border-[#9b1c3f] hover:text-[#9b1c3f] hover:shadow-md transition-all"
              >

                <span>
                  {item}
                </span>

                <FaArrowRight className="text-xs opacity-40 group-hover:translate-x-1 group-hover:opacity-100 transition" />

              </button>

            ))}

          </div>

        </div>


        {/* =====================================
            STATS
        ===================================== */}

        <div className="pb-14">

          <div className="bg-white border border-[#eee4e1] rounded-[28px] shadow-[0_15px_50px_rgba(50,24,32,0.06)] p-6 md:p-8">

            <div className="grid grid-cols-1 md:grid-cols-3">

              <div className="text-center md:text-left px-4 py-4">

                <p className="text-3xl md:text-4xl font-serif text-[#321820]">
                  500+
                </p>

                <p className="text-xs tracking-[2px] uppercase text-[#8b7c80] mt-2">
                  Products
                </p>

              </div>


              <div className="text-center md:text-left px-4 py-4 border-y md:border-y-0 md:border-x border-[#eee4e1]">

                <p className="text-3xl md:text-4xl font-serif text-[#321820]">
                  1000+
                </p>

                <p className="text-xs tracking-[2px] uppercase text-[#8b7c80] mt-2">
                  Happy Customers
                </p>

              </div>


              <div className="text-center md:text-left px-4 py-4">

                <p className="text-3xl md:text-4xl font-serif text-[#321820]">
                  4.9<span className="text-[#b78a45]">★</span>
                </p>

                <p className="text-xs tracking-[2px] uppercase text-[#8b7c80] mt-2">
                  Customer Rating
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================
          SEARCH OVERLAY
      ===================================== */}

      {searchOpen && (

        <div className="fixed inset-0 z-[999] bg-[#321820]/50 backdrop-blur-sm flex items-start justify-center px-4 pt-6 md:pt-12">

          <div className="w-full max-w-3xl bg-[#fcf8f6] rounded-[28px] shadow-2xl overflow-hidden">

            {/* Search Header */}

            <div className="flex items-center gap-4 px-6 md:px-8 py-6 bg-white border-b border-[#eee4e1]">

              <FaSearch className="text-xl text-[#9b1c3f]" />

              <input
                autoFocus
                type="text"
                placeholder="Search sarees, kurtis, jeans..."
                className="flex-1 outline-none bg-transparent text-lg md:text-xl text-[#321820] placeholder:text-[#a79b9d]"
              />

              <button
                onClick={() => setSearchOpen(false)}
                className="w-10 h-10 rounded-full bg-[#f7efed] flex items-center justify-center text-[#6d5b60] hover:bg-[#9b1c3f] hover:text-white transition"
              >
                <FaTimes />
              </button>

            </div>


            {/* Search Content */}

            <div className="p-7 md:p-9">

              <p className="text-[11px] text-[#9b1c3f] font-bold tracking-[4px] uppercase mb-5">
                Popular Searches
              </p>

              <div className="flex flex-wrap gap-3">

                {popularSearches.map((item) => (

                  <button
                    key={item}
                    onClick={() => handleSearch(item)}
                    className="flex items-center gap-3 px-5 py-3 bg-white border border-[#e7dcda] rounded-full text-sm hover:border-[#9b1c3f] hover:text-[#9b1c3f] transition"
                  >
                    {item}

                    <FaArrowRight className="text-xs" />

                  </button>

                ))}

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Hero;