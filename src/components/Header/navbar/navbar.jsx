import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../../assets/images/logo.png";
import { Search, User, Heart, Maximize2, ShoppingBag } from "lucide-react";
import { useCart } from "../../../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="w-full bg-white border-b border-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between container-box">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoImage}
            alt="Elvix Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold text-blue-600">ELVIX</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8 hidden sm:block">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search Products"
              className="flex-1 h-12 px-4 text-gray-600 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-r-md transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action Icons (right aligned) */}
        <div className="flex items-center gap-2 ml-auto">
          <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <User className="w-5 h-5" />
            <span className="sr-only">Account</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <Heart className="w-5 h-5" />
            <span className="sr-only">Favorites</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
            <Maximize2 className="w-5 h-5" />
            <span className="sr-only">Expand</span>
          </button>

          <Link
            to="/cart"
            className="relative w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="sr-only">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -left-1 bg-orange-500 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
