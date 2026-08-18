import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import Search from "../Search/Search";

function Navbar() {
  const navigate = useNavigate();

  const { cartCount, setIsCartOpen } = useCart();

  const {
    wishlistCount,
    setIsWishlistOpen,
  } = useWishlist();

  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ================================
     SCROLL EFFECT
  ================================= */

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 40);

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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================================
     NAVIGATION
  ================================= */

  const goHome = () => {
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const openCategory = (category) => {
    setIsMobileMenuOpen(false);
    navigate(`/category/${category}`);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  /* ================================
     LOCK BODY WHEN MOBILE MENU OPEN
  ================================= */

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* ================================
     NAV ITEMS
  ================================= */

  const navItems = [
    {
      label: "Home",
      action: goHome,
    },
    {
      label: "Women",
      action: () => openCategory("women"),
    },
    {
      label: "Men",
      action: () => openCategory("men"),
    },
    {
      label: "Kids",
      action: () => openCategory("kids"),
    },
    {
      label: "Gift Items",
      action: () => openCategory("gift"),
    },
  ];

  return (
    <>
      {/* ==========================================
          MAIN NAVBAR
      ========================================== */}

      <nav
        className={`
          fixed
          top-0
          left-0
          w-full
          z-[100]
          bg-white
          transition-all
          duration-300
          ease-out
          ${
            showNavbar
              ? "translate-y-0"
              : "-translate-y-full"
          }
          ${
            isScrolled
              ? "shadow-[0_8px_30px_rgba(50,24,32,0.10)]"
              : "shadow-[0_2px_15px_rgba(50,24,32,0.06)]"
          }
        `}
      >

        {/* ==========================================
            ANNOUNCEMENT BAR
        ========================================== */}

        <div
          className="
            bg-[#321820]
            text-white
            overflow-hidden
          "
        >
          <div
            className="
              max-w-7xl
              mx-auto
              px-4
              sm:px-6
              h-8
              sm:h-9
              flex
              items-center
              justify-center
              text-[10px]
              sm:text-xs
              md:text-sm
              font-medium
              tracking-wide
              text-center
              whitespace-nowrap
            "
          >
            ✨ Premium Fashion
            <span className="mx-2 opacity-50">•</span>
            Free Shipping Above ₹1099
            <span className="mx-2 opacity-50">•</span>
            WhatsApp Ordering Available
          </div>
        </div>

        {/* ==========================================
            MAIN HEADER
        ========================================== */}

        <div
          className={`
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            transition-all
            duration-300
            ${
              isScrolled
                ? "py-2"
                : "py-3 sm:py-4"
            }
          `}
        >

          <div
            className="
              flex
              items-center
              justify-between
              gap-3
            "
          >

            {/* ======================================
                MOBILE MENU BUTTON
            ====================================== */}

            <button
              type="button"
              onClick={() =>
                setIsMobileMenuOpen(true)
              }
              className="
                lg:hidden
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                text-[#321820]
                hover:bg-[#f8f1f2]
                transition
              "
              aria-label="Open menu"
            >
              <FaBars className="text-lg" />
            </button>


            {/* ======================================
                LOGO
            ====================================== */}

            <div
              onClick={goHome}
              className="
                flex
                items-center
                gap-2
                sm:gap-3
                cursor-pointer
                min-w-0
              "
            >

              <img
                src="/logo.png"
                alt="Mukta Fancy Store"
                className={`
                  rounded-full
                  object-cover
                  flex-shrink-0
                  transition-all
                  duration-300
                  ${
                    isScrolled
                      ? "w-9 h-9 sm:w-10 sm:h-10"
                      : "w-10 h-10 sm:w-12 sm:h-12"
                  }
                `}
              />

              <div className="min-w-0">

                <h1
                  className={`
                    font-serif
                    font-semibold
                    text-[#321820]
                    leading-none
                    whitespace-nowrap
                    transition-all
                    duration-300
                    ${
                      isScrolled
                        ? "text-base sm:text-lg md:text-xl"
                        : "text-lg sm:text-xl md:text-2xl"
                    }
                  `}
                >
                  Mukta Fancy Store
                </h1>

                <p
                  className="
                    hidden
                    sm:block
                    mt-1
                    text-[8px]
                    md:text-[9px]
                    tracking-[2.5px]
                    uppercase
                    text-[#9b1c3f]
                    whitespace-nowrap
                  "
                >
                  Premium Fashion Collection
                </p>

              </div>

            </div>


            {/* ======================================
                DESKTOP SEARCH
            ====================================== */}

            <button
              type="button"
              onClick={openSearch}
              className="
                hidden
                lg:flex
                flex-1
                max-w-[430px]
                h-11
                items-center
                gap-3
                px-5
                rounded-full
                border
                border-[#eadfe1]
                bg-[#faf8f8]
                text-[#8c7d80]
                hover:bg-white
                hover:border-[#9b1c3f]
                hover:shadow-sm
                transition-all
                duration-300
                text-sm
              "
            >

              <FaSearch
                className="
                  text-[#9b1c3f]
                  text-base
                  flex-shrink-0
                "
              />

              <span className="text-left flex-1">
                Search sarees, kurtis, jeans...
              </span>

              <kbd
                className="
                  hidden
                  xl:block
                  px-2
                  py-1
                  rounded
                  border
                  border-[#ddd2d5]
                  bg-white
                  text-[10px]
                  text-[#9a8d90]
                "
              >
                /
              </kbd>

            </button>


            {/* ======================================
                RIGHT ICONS
            ====================================== */}

            <div
              className="
                flex
                items-center
                gap-1
                sm:gap-2
                md:gap-3
              "
            >

              {/* SEARCH MOBILE */}

              <button
                type="button"
                onClick={openSearch}
                className="
                  lg:hidden
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-full
                  text-[#321820]
                  hover:bg-[#f8f1f2]
                  transition
                "
                aria-label="Search"
              >
                <FaSearch className="text-lg" />
              </button>


              {/* WISHLIST */}

              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="
                  relative
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-full
                  text-[#321820]
                  hover:bg-[#f8f1f2]
                  transition
                "
                aria-label="Wishlist"
              >

                <FaHeart className="text-lg sm:text-xl" />

                {wishlistCount > 0 && (
                  <span
                    className="
                      absolute
                      top-0
                      right-0
                      min-w-[17px]
                      h-[17px]
                      px-1
                      rounded-full
                      bg-[#9b1c3f]
                      text-white
                      flex
                      items-center
                      justify-center
                      text-[9px]
                      font-bold
                    "
                  >
                    {wishlistCount}
                  </span>
                )}

              </button>


              {/* USER */}

              <button
                type="button"
                className="
                  hidden
                  sm:flex
                  w-10
                  h-10
                  items-center
                  justify-center
                  rounded-full
                  text-[#321820]
                  hover:bg-[#f8f1f2]
                  transition
                "
                aria-label="Account"
              >
                <FaUser className="text-lg" />
              </button>


              {/* CART */}

              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="
                  relative
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-full
                  text-[#321820]
                  hover:bg-[#f8f1f2]
                  transition
                "
                aria-label="Shopping cart"
              >

                <FaShoppingCart className="text-lg sm:text-xl" />

                {cartCount > 0 && (
                  <span
                    className="
                      absolute
                      top-0
                      right-0
                      min-w-[17px]
                      h-[17px]
                      px-1
                      rounded-full
                      bg-[#9b1c3f]
                      text-white
                      flex
                      items-center
                      justify-center
                      text-[9px]
                      font-bold
                    "
                  >
                    {cartCount}
                  </span>
                )}

              </button>

            </div>

          </div>


          {/* ==========================================
              DESKTOP NAVIGATION
          ========================================== */}

          <div
            className="
              hidden
              lg:flex
              items-center
              justify-center
              mt-3
            "
          >

            <div
              className="
                flex
                items-center
                gap-10
                border-t
                border-[#f0e7e9]
                pt-3
              "
            >

              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={item.action}
                  className="
                    relative
                    text-[13px]
                    font-medium
                    tracking-wide
                    text-[#321820]
                    hover:text-[#9b1c3f]
                    transition-colors
                    duration-200
                    group
                  "
                >

                  {item.label}

                  <span
                    className="
                      absolute
                      -bottom-1
                      left-0
                      w-0
                      h-[1px]
                      bg-[#9b1c3f]
                      group-hover:w-full
                      transition-all
                      duration-300
                    "
                  />

                </button>
              ))}

              <button
                type="button"
                onClick={() => {
                  const element =
                    document.getElementById(
                      "contact"
                    );

                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="
                  relative
                  text-[13px]
                  font-medium
                  tracking-wide
                  text-[#321820]
                  hover:text-[#9b1c3f]
                  transition-colors
                  duration-200
                  group
                "
              >
                Contact

                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    w-0
                    h-[1px]
                    bg-[#9b1c3f]
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />

              </button>

            </div>

          </div>


          {/* ==========================================
              MOBILE SEARCH PREVIEW
          ========================================== */}

          <button
            type="button"
            onClick={openSearch}
            className="
              lg:hidden
              mt-3
              w-full
              h-11
              flex
              items-center
              gap-3
              px-4
              rounded-full
              border
              border-[#eadfe1]
              bg-[#faf8f8]
              text-[#8c7d80]
              text-sm
              hover:bg-white
              transition
            "
          >

            <FaSearch className="text-[#9b1c3f]" />

            <span>
              Search products...
            </span>

          </button>

        </div>

      </nav>


      {/* ==========================================
          MOBILE MENU OVERLAY
      ========================================== */}

      {isMobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-[200]
            bg-[#321820]/40
            backdrop-blur-sm
            lg:hidden
          "
          onClick={() =>
            setIsMobileMenuOpen(false)
          }
        >

          <aside
            className="
              absolute
              top-0
              left-0
              h-full
              w-[82%]
              max-w-[360px]
              bg-white
              shadow-2xl
              animate-[slideIn_.3s_ease-out]
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* MOBILE MENU HEADER */}

            <div
              className="
                px-5
                py-5
                border-b
                border-[#eee5e7]
                flex
                items-center
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[10px]
                    tracking-[3px]
                    uppercase
                    text-[#9b1c3f]
                    font-semibold
                  "
                >
                  MUKTA
                </p>

                <h2
                  className="
                    font-serif
                    text-xl
                    text-[#321820]
                  "
                >
                  Fancy Store
                </h2>

              </div>

              <button
                type="button"
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
                className="
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-[#f8f1f2]
                  text-[#321820]
                "
                aria-label="Close menu"
              >
                <FaTimes />
              </button>

            </div>


            {/* MOBILE MENU SEARCH */}

            <div className="px-5 pt-5">

              <button
                type="button"
                onClick={openSearch}
                className="
                  w-full
                  h-11
                  flex
                  items-center
                  gap-3
                  px-4
                  rounded-full
                  bg-[#faf7f8]
                  border
                  border-[#eadfe1]
                  text-[#8c7d80]
                  text-sm
                "
              >
                <FaSearch className="text-[#9b1c3f]" />
                Search products
              </button>

            </div>


            {/* MOBILE NAVIGATION */}

            <div className="px-5 py-5">

              <p
                className="
                  text-[10px]
                  tracking-[3px]
                  uppercase
                  text-[#9b1c3f]
                  font-semibold
                  mb-3
                "
              >
                SHOP
              </p>

              <div className="space-y-1">

                {navItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={item.action}
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      py-4
                      border-b
                      border-[#f0e7e9]
                      text-left
                      text-[#321820]
                      text-base
                      font-medium
                    "
                  >

                    {item.label}

                    <FaChevronRight
                      className="
                        text-xs
                        text-[#9b1c3f]
                      "
                    />

                  </button>
                ))}

              </div>


              {/* MOBILE ACTIONS */}

              <div
                className="
                  mt-7
                  grid
                  grid-cols-2
                  gap-3
                "
              >

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsWishlistOpen(true);
                  }}
                  className="
                    p-4
                    rounded-xl
                    bg-[#faf7f8]
                    border
                    border-[#eee3e5]
                    text-[#321820]
                    text-sm
                    font-medium
                  "
                >
                  ♡ Wishlist
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="
                    p-4
                    rounded-xl
                    bg-[#faf7f8]
                    border
                    border-[#eee3e5]
                    text-[#321820]
                    text-sm
                    font-medium
                  "
                >
                  🛒 Cart
                </button>

              </div>


              {/* MOBILE BRAND MESSAGE */}

              <div
                className="
                  mt-8
                  p-5
                  rounded-2xl
                  bg-[#321820]
                  text-white
                "
              >

                <p
                  className="
                    text-[10px]
                    tracking-[3px]
                    uppercase
                    text-[#e8cfd4]
                    mb-2
                  "
                >
                  MUKTA COLLECTION
                </p>

                <h3
                  className="
                    font-serif
                    text-2xl
                    leading-tight
                  "
                >
                  Style made
                  <br />
                  for every moment.
                </h3>

              </div>

            </div>

          </aside>

        </div>
      )}


      {/* ==========================================
          SEARCH OVERLAY
      ========================================== */}

      {isSearchOpen && (
        <Search onClose={closeSearch} />
      )}
    </>
  );
}

export default Navbar;