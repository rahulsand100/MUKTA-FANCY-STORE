import { useNavigate } from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import Search from "../Search/Search";

function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();

  const navigate = useNavigate();

  const openCategory = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    
    
  <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-[#f3e7e9]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="bg-[#321820] text-white text-center text-sm py-2 tracking-wide">
  ✨ Free Shipping on Orders Above ₹999 | Easy WhatsApp Ordering | Mukta Fancy Store
</div>

        {/* TOP NAVBAR */}

        <div className="flex items-center justify-between gap-6">

          {/* LOGO */}

          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo.png"
              alt="Mukta Fancy Store"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h1 className="text-3xl font-serif font-bold text-[#321820] tracking-wide">
  Mukta Fancy Store
</h1>

<p className="text-sm text-[#9b1c3f] tracking-[3px] uppercase">
  Premium Fashion Collection
</p>
            </div>
          </div>

          {/* SEARCH */}

          <div className="hidden lg:block flex-1 max-w-[420px]">
            <Search />
          </div>

          {/* ICONS */}

         <div className="flex items-center gap-6 text-xl">

            <FaHeart className="cursor-pointer hover:text-red-500 hover:scale-110 transition duration-300" />

<FaUser className="cursor-pointer hover:text-[#9b1c3f] hover:scale-110 transition duration-300" />

            {/* CART */}

            <div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
             <FaShoppingCart className="text-2xl hover:text-[#9b1c3f] hover:scale-110 transition duration-300" />

              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-gradient-to-r from-[#9b1c3f] to-[#d4af37] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>

            <FaUser className="cursor-pointer transition hover:text-amber-700" />

          </div>
        </div>

        {/* NAVIGATION */}

        <ul className="hidden md:flex items-center justify-center gap-10 mt-5 font-medium text-gray-700">

          <li
            className="cursor-pointer relative transition duration-300 hover:text-[#9b1c3f] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#9b1c3f] after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => navigate("/")}
          >
            Home
          </li>

          <li
            className="cursor-pointer hover:text-[#9b1c3f]"
            onClick={() => openCategory("women")}
          >
            Women
          </li>

          <li
            className="cursor-pointer hover:text-[#9b1c3f]"
            onClick={() => openCategory("men")}
          >
            Men
          </li>

          <li
            className="cursor-pointer hover:text-[#9b1c3f]"
            onClick={() => openCategory("kids")}
          >
            Kids
          </li>

          <li
            className="cursor-pointer hover:text-[#9b1c3f]"
            onClick={() => openCategory("gift")}
          >
            Gift Items
          </li>

          <li
            className="cursor-pointer hover:text-[#9b1c3f]"
          >
            Contact
          </li>

        </ul>

        {/* MOBILE SEARCH */}

        {/* MOBILE SEARCH */}

<div className="lg:hidden mt-4">
  <Search />
</div>
      </div>
    </nav>
  );
}

export default Navbar;