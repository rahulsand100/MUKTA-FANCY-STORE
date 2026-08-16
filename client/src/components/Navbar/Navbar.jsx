import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useWishlist } from "../../context/WishlistContext";
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import Search from "../Search/Search";

function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();

  const {
    wishlistCount,
    setIsWishlistOpen,
  } = useWishlist();

  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // SEARCH STATE
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  /* ==========================================
     SCROLL EFFECT
  ========================================== */

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 50);

      if (
        currentScroll > lastScroll &&
        currentScroll > 120
      ) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* ==========================================
     CATEGORY
  ========================================== */

  const openCategory = (category) => {
    navigate(`/category/${category}`);
  };

  /* ==========================================
     OPEN SEARCH
  ========================================== */

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  /* ==========================================
     CLOSE SEARCH
  ========================================== */

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      {/* ==========================================
          NAVBAR
      ========================================== */}

      <nav
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-300
          ease-in-out

          ${
            showNavbar
              ? "translate-y-0"
              : "-translate-y-full"
          }

          ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-xl py-2"
              : "bg-white shadow-lg py-4"
          }
        `}
      >

        {/* ==========================================
            ANNOUNCEMENT BAR
        ========================================== */}

        <div
          className="
            bg-gradient-to-r
            from-[#321820]
            via-[#9b1c3f]
            to-[#321820]
            text-white
            text-center
            text-sm
            py-2
            font-medium
            tracking-wide
          "
        >
          ✨ Welcome to Mukta Fancy Store • Premium
          Fashion • Free Shipping Above ₹1099 •
          WhatsApp Ordering Available
        </div>

        <div className="max-w-7xl mx-auto px-6">

          {/* ==========================================
              TOP SECTION
          ========================================== */}

          <div className="flex items-center justify-between gap-6">

            {/* ========================================
                LOGO
            ======================================== */}

            <div
              className="
                flex
                items-center
                gap-3
                cursor-pointer
              "
              onClick={() => navigate("/")}
            >

              <img
                src="/logo.png"
                alt="Mukta Fancy Store"
                className={`
                  rounded-full
                  object-cover
                  transition-all
                  duration-300

                  ${
                    isScrolled
                      ? "w-10 h-10"
                      : "w-14 h-14"
                  }
                `}
              />

              <div>

                <h1
                  className={`
                    font-serif
                    font-bold
                    text-[#321820]
                    transition-all
                    duration-300

                    ${
                      isScrolled
                        ? "text-2xl"
                        : "text-3xl"
                    }
                  `}
                >
                  Mukta Fancy Store
                </h1>

                <p
                  className="
                    text-sm
                    tracking-[3px]
                    uppercase
                    text-[#9b1c3f]
                  "
                >
                  Premium Fashion Collection
                </p>

              </div>

            </div>

            {/* ========================================
                DESKTOP SEARCH BUTTON
            ======================================== */}

            <button
              type="button"
              onClick={openSearch}
              className="
                hidden
                lg:flex
                flex-1
                max-w-[450px]
                h-12
                items-center
                gap-4
                px-5
                rounded-full
                border
                border-gray-200
                bg-gray-50
                text-gray-500
                hover:border-[#9b1c3f]
                hover:bg-white
                transition-all
                duration-300
                cursor-text
              "
            >

              <FaSearch
                className="
                  text-[#9b1c3f]
                "
              />

              <span>
                Search sarees, kurtis, jeans...
              </span>

              <span
                className="
                  ml-auto
                  px-2
                  py-1
                  text-xs
                  border
                  border-gray-300
                  rounded
                  text-gray-400
                "
              >
                /
              </span>

            </button>

            {/* ========================================
                ICONS
            ======================================== */}

            <div
              className="
                flex
                items-center
                gap-6
              "
            >

              {/* WISHLIST */}

              <div
                className="
                  relative
                  cursor-pointer
                "
                onClick={() => {
                  console.log(
                    "❤️ Heart clicked"
                  );

                  setIsWishlistOpen(true);
                }}
              >

                <FaHeart
                  className="
                    text-2xl
                    hover:text-red-500
                    hover:scale-110
                    transition
                  "
                />

                {wishlistCount > 0 && (
                  <span
                    className="
                      absolute
                      -top-2
                      -right-2
                      bg-red-500
                      text-white
                      w-5
                      h-5
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-xs
                    "
                  >
                    {wishlistCount}
                  </span>
                )}

              </div>

              {/* USER */}

              <FaUser
                className="
                  text-2xl
                  p-2
                  rounded-full
                  hover:bg-[#9b1c3f]
                  hover:text-white
                  transition-all
                  duration-300
                  cursor-pointer
                "
              />

              {/* CART */}

              <div
                className="
                  relative
                  cursor-pointer
                "
                onClick={() => {
                  console.log(
                    "🛒 Cart clicked"
                  );

                  setIsCartOpen(true);
                }}
              >

                <FaShoppingCart
                  className="
                    text-2xl
                    hover:text-[#9b1c3f]
                    hover:scale-110
                    transition
                  "
                />

                {cartCount > 0 && (
                  <span
                    className="
                      absolute
                      -top-2
                      -right-2
                      bg-[#9b1c3f]
                      text-white
                      w-5
                      h-5
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-xs
                    "
                  >
                    {cartCount}
                  </span>
                )}

              </div>

            </div>

          </div>

          {/* ==========================================
              DESKTOP MENU
          ========================================== */}

          <ul
            className="
              hidden
              md:flex
              justify-center
              gap-10
              mt-5
              font-medium
            "
          >

            <li
              onClick={() => navigate("/")}
              className="
                cursor-pointer
                transition-all
                duration-300
                hover:text-[#9b1c3f]
                hover:-translate-y-1
              "
            >
              Home
            </li>

            <li
              onClick={() =>
                openCategory("women")
              }
              className="
                cursor-pointer
                hover:text-[#9b1c3f]
              "
            >
              Women
            </li>

            <li
              onClick={() =>
                openCategory("men")
              }
              className="
                cursor-pointer
                hover:text-[#9b1c3f]
              "
            >
              Men
            </li>

            <li
              onClick={() =>
                openCategory("kids")
              }
              className="
                cursor-pointer
                hover:text-[#9b1c3f]
              "
            >
              Kids
            </li>

            <li
              onClick={() =>
                openCategory("gift")
              }
              className="
                cursor-pointer
                hover:text-[#9b1c3f]
              "
            >
              Gift Items
            </li>

            <li
              className="
                cursor-pointer
                hover:text-[#9b1c3f]
              "
            >
              Contact
            </li>

          </ul>

          {/* ==========================================
              MOBILE SEARCH
          ========================================== */}

          <button
            type="button"
            onClick={openSearch}
            className="
              lg:hidden
              mt-4
              w-full
              h-12
              flex
              items-center
              gap-3
              px-5
              rounded-full
              border
              border-gray-200
              bg-gray-50
              text-gray-500
              hover:border-[#9b1c3f]
              transition
            "
          >

            <FaSearch
              className="text-[#9b1c3f]"
            />

            <span>
              Search products...
            </span>

          </button>

        </div>

      </nav>

      {/* ==========================================
          SEARCH OVERLAY
      ========================================== */}

      {isSearchOpen && (
        <Search
          onClose={closeSearch}
        />
      )}

    </>
  );
}

export default Navbar;