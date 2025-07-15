import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Heart, Share2 } from "lucide-react";


export default function ProductGrid({
  heading = "Featured Products",
  products = [],
  limit,
  columns = 4,
  linkTo = null, // optional: function(product) => string
}) {
  const displayedProducts = limit ? products.slice(0, limit) : products;

  const getGridClass = (cols) => {
    switch (cols) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      case 5:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
      case 6:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
    }
  };

  return (

      <div className="bg-gray-50 px-3 sm:px-6 py-6">
        <div className="container-box">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8">
            {heading}
          </h2>

          <div
           
            className={`grid ${getGridClass(columns)} gap-4 sm:gap-6`}
          >
            {displayedProducts.map((product) => {
              const content = (
                <>
                  {/* Top Right Icons */}
                  <div className="absolute top-2 right-2 flex gap-2 z-10">
                    <button className="h-8 w-8 bg-white bg-opacity-90 hover:bg-white shadow-sm rounded-md flex items-center justify-center transition">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="h-8 w-8 bg-white bg-opacity-90 hover:bg-white shadow-sm rounded-md flex items-center justify-center transition">
                      <Share2 className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </>
              );

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                >
                  <div className="p-4 sm:p-6">
                    <div className="relative mb-4">
                      {content}
                      {linkTo ? (
                        <Link to={linkTo(product)}>
                          <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.title}
                              className="w-full h-full object-contain p-4"
                            />
                          </div>
                        </Link>
                      ) : (
                        <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            className="w-full h-full object-contain p-4"
                          />
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      {linkTo ? (
                        <Link to={linkTo(product)}>
                          <h3 className="text-sm sm:text-base font-medium text-gray-800 hover:text-orange-600 active:text-blue-700 transition-colors duration-200 leading-snug line-clamp-2 min-h-[3.5rem] cursor-pointer">
                            {product.title}
                          </h3>
                        </Link>
                      ) : (
                        <h3 className="text-sm sm:text-base font-medium text-gray-800 leading-snug min-h-[3.5rem]">
                          {product.title}
                        </h3>
                      )}

                      {linkTo ? (
                        <Link to={linkTo(product)}>
                          <div className="text-base sm:text-lg font-semibold text-gray-900 hover:text-orange-600 active:text-green-700 transition-colors duration-200 cursor-pointer">
                            $ {product.price}
                          </div>
                        </Link>
                      ) : (
                        <div className="text-base sm:text-lg font-semibold text-gray-900">
                          $ {product.price}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
   
  );
}


