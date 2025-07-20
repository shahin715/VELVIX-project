import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePcBuilder } from "../../../context/PcBuilderContext";
import PriceRangeFilter from "./PriceRangeFilter";
import { ArrowRightLeft, Heart } from "lucide-react";

export default function ComponentSelectPage({ title, categoryKey, products }) {
  const navigate = useNavigate();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  const itemsPerPage = 4;

  useEffect(() => {
    if (products && Array.isArray(products)) {
      const filtered = products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
    setCurrentPage(1);
  }, [products, minPrice, maxPrice]);

  const handleAddToBuilder = (product) => {
    addPart(categoryKey, product);
    navigate("/pcbuilder");
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const { addPart, removePart, selectedParts } = usePcBuilder();

  return (
    <div className="min-h-[80vh] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold mb-6">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <PriceRangeFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              onMinChange={(e) => setMinPrice(Number(e.target.value))}
              onMaxChange={(e) => setMaxPrice(Number(e.target.value))}
              onSliderChange={(e) => setMinPrice(Number(e.target.value))}
            />
          </div>

          {/* Product Grid */}
          <div className="space-y-6">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setMinPrice(0);
                    setMaxPrice(100000);
                  }}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                {/* Products */}
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
                        <div className="text-xl font-bold text-orange-500">
                          $ {product.price.toFixed(2)}
                        </div>
                        {selectedParts[categoryKey]?.id === product.id ? (
                          <button
                            onClick={() => removePart(categoryKey)}
                            className="bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded-md font-medium transition-colors duration-200"
                          >
                            Remove from PC Builder
                          </button>
                        ) : (
                          <div className="w-[200px]">
                            {selectedParts[categoryKey]?.id === product.id ? (
                              <button
                                onClick={() => removePart(categoryKey)}
                                className="w-full bg-red-100 text-red-700 hover:bg-red-200 px-4 py-2 rounded-md font-medium transition-colors duration-200"
                              >
                                Remove from PC Builder
                              </button>
                            ) : (
                              <button
                                onClick={() => handleAddToBuilder(product)}
                                className="w-full bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-md font-medium transition-colors duration-200"
                              >
                                Add To PC Builder
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-4 py-2 border rounded-md ${
                          currentPage === i + 1
                            ? "bg-blue-500 text-white"
                            : "bg-white text-blue-500 border-blue-500"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
