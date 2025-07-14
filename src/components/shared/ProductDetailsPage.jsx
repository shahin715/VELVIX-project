// src/pages/ProductDetailsPage.jsx
import React from "react";

export default function ProductDetailsPage({ product }) {
  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-100 rounded-xl overflow-hidden p-6">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {product.title}
          </h1>
          <div className="text-xl font-semibold text-green-700">
            $ {product.price}
          </div>
          <p className="text-gray-600">
            {/* Optional: Add product.description if available */}
            This is one of the best deals available today. Grab it before it's gone!
          </p>
        </div>
      </div>
    </div>
  );
}
