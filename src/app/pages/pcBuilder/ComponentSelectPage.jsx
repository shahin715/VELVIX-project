import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePcBuilder } from "../../../context/PcBuilderContext";
import motherboardData from "./data/MotherboardData";
import PriceRangeFilter from "./PriceRangeFilter";
import { ArrowRightLeft, Heart } from "lucide-react";

export default function ComponentSelectPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addPart } = usePcBuilder();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  const itemsPerPage = 4;

  useEffect(() => {
    const loadProducts = () => {
      try {
        setLoading(true);
        setError(null);

        const path = location.pathname.toLowerCase();
        if (path.includes("motherboard")) {
          if (motherboardData && Array.isArray(motherboardData)) {
            setProducts(motherboardData);
            setFilteredProducts(motherboardData);
          } else {
            setError("Failed to load motherboard data");
            setProducts([]);
            setFilteredProducts([]);
          }
        } else {
          setProducts([]);
          setFilteredProducts([]);
        }
        setCurrentPage(1);
      } catch (err) {
        setError("An error occurred while loading products");
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [location.pathname]);

  useEffect(() => {
    let filtered = [...products];
    filtered = filtered.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, minPrice, maxPrice]);

  const handleAddToBuilder = (product) => {
    try {
      const path = location.pathname.toLowerCase();
      if (path.includes("motherboard")) {
        addPart("motherboard", product);
      }
      navigate("/pcbuilder");
    } catch (err) {
      console.error("Error adding part to builder:", err);
    }
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 min-h-[80vh]">
        <h1 className="text-2xl font-semibold mb-6">Motherboard</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">{error}</p>
          <button onClick={() => window.location.reload()} className="mt-2 text-red-700 underline hover:text-red-800">Try again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold mb-6">Motherboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
        <div className="space-y-6">
          <PriceRangeFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
          />
        </div>

        <div className="space-y-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">No products found matching your filters.</p>
              <button onClick={() => { setMinPrice(0); setMaxPrice(100000); }} className="text-blue-600 hover:text-blue-800 underline">Clear all filters</button>
            </div>
          ) : (
            <>
              <div className="grid gap-6">
                {paginatedProducts.map((product) => (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col md:flex-row items-center p-4 gap-4">
                    <div className="flex-shrink-0">
                      <img src={product.image} alt={product.name} className="w-36 h-36 object-contain" />
                    </div>
                    <div className="flex-grow space-y-2 text-center md:text-left">
                      <h3 className="font-semibold text-base md:text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                    </div>
                    <div className="flex flex-col items-center md:items-end space-y-4 md:space-y-2 flex-shrink-0">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                          <ArrowRightLeft className="w-5 h-5" />
                          <span>Add to Compare</span>
                        </div>
                        <div className="flex flex-col items-center text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                          <Heart className="w-5 h-5" />
                          <span>Add to Wishlist</span>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-orange-500">
                        AED {typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                      </div>
                      <button onClick={() => handleAddToBuilder(product)} className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-md font-medium transition-colors duration-200">Add To Pc builder</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Buttons */}
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
  );
}

