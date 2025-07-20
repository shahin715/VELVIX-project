import { useState } from "react";
import { ArrowRightLeft, Heart } from "lucide-react";
import Pagination from "./Pagination";
import { usePcBuilder } from "../../../context/PcBuilderContext";

export default function ProductListPage({ title, products }) {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    setMinPrice(value);
    setPriceRange([value, priceRange[1]]);
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    setMaxPrice(value);
    setPriceRange([priceRange[0], value]);
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange([value, priceRange[1]]);
    setMinPrice(value);
  };

  const filteredProducts = products.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const { addPart } = usePcBuilder();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 min-h-[80vh]">
      <h1 className="text-2xl font-semibold mb-6">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
        {/* Sidebar - Price Filter */}
        <div className="space-y-6">
          <div className="bg-white border rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">Price Range</h3>
            </div>
            <div className="p-4 space-y-4">
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={priceRange[0]}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={minPrice}
                  onChange={handleMinChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={handleMaxChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="grid gap-6">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg shadow-sm flex flex-col md:flex-row items-center p-4 gap-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-36 h-36 object-contain"
              />
              <div className="flex-grow space-y-2 text-center md:text-left">
                <h3 className="font-semibold text-base md:text-lg">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                    <ArrowRightLeft className="w-5 h-5" />
                    <span>Compare</span>
                  </div>
                  <div className="flex flex-col items-center text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                    <Heart className="w-5 h-5" />
                    <span>Wishlist</span>
                  </div>
                </div>
                <div className="text-xl font-bold text-orange-500">
                  $ {product.price.toFixed(2)}
                </div>
                <button
                  className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-md"
                  onClick={() => addPart("Motherboard", product)}
                >
                  Add To PC Builder
                </button>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
