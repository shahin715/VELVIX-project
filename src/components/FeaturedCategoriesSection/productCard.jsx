import React from "react";

export default function productCard({ product }) {
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
        {product.title}
      </h3>
      <p className="text-base font-semibold text-orange-600">AED {product.price}</p>
    </div>
  );
}