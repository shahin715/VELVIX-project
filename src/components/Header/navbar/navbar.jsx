import { useState, useEffect } from "react"
import { Menu, X, User, Heart, Maximize2, ShoppingBag, Search } from "lucide-react"
import logo from "../../../assets/images/logo.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [categories, setCategories] = useState([])

  // 🔁 Simulate fetching categories from API
  useEffect(() => {
    const fakeCategories = [
      "Home Decor",
      "Garden Plants",
      "Office Plants",
      "Flower Arrangements",
      "Seasonal"
    ]
    setCategories(fakeCategories)
  }, [])

  return (
    <div>
      <header className="w-full    sticky top-0 z-30 container-box">
        <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          {/* Logo and Menu */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-8 h-8 object-contain rounded-full" />
              <span className="text-lg font-bold text-blue-600">ELVIX</span>
            </div>
          </div>

          {/* Search */}
          <div className="hidden sm:flex flex-1 max-w-2xl mx-4">
            <div className="relative flex w-full">
              <input
                type="text"
                placeholder="Search Products..."
                className="flex-1 h-10 px-4 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-orange-500"
              />
              <button className="h-10 px-4 bg-orange-500 text-white rounded-r-md flex items-center justify-center">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex w-10 h-10 justify-center items-center text-gray-600 hover:bg-gray-100 rounded-md">
              <User />
            </button>
            <button className="hidden md:flex w-10 h-10 justify-center items-center text-gray-600 hover:bg-gray-100 rounded-md">
              <Heart />
            </button>
            <button className="hidden md:flex w-10 h-10 justify-center items-center text-gray-600 hover:bg-gray-100 rounded-md">
              <Maximize2 />
            </button>
            <button className="w-10 h-10 justify-center items-center text-gray-600 hover:bg-gray-100 rounded-md relative">
              <ShoppingBag />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden px-4 pb-3">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search Products..."
              className="flex-1 h-10 px-3 border border-gray-300 rounded-l-md"
            />
            <button className="h-10 px-4 bg-orange-500 text-white rounded-r-md flex items-center justify-center">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Side Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="text-lg font-bold text-blue-600">ELVIX</span>
          </div>
          <button
            className="w-8 h-8 flex items-center justify-center text-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <X />
          </button>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md">
              <User /> <span>My Account</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md">
              <Heart /> <span>Favorites</span>
              <span className="ml-auto bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">5</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md">
              <Maximize2 /> <span>Expand View</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md">
              <ShoppingBag /> <span>Shopping Cart</span>
              <span className="ml-auto bg-orange-500 text-white text-xs px-2 py-1 rounded-full">3</span>
            </button>
          </div>

          {/* ✅ Dynamic Categories Section */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Categories</h3>
            <div className="space-y-1">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
