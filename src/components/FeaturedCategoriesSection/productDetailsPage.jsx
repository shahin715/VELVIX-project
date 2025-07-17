// components/FeaturedCategories/productDetailsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import allProductsData from "../../app/pages/FeaturedCategories/data/allProductsData";

export default function ProductDetailsPage() {
  const { category, slug } = useParams();
  const product = allProductsData[category]?.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-6 text-center text-red-600">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.title} className="w-full max-h-[500px] object-contain" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-orange-600 text-xl font-semibold mb-4">AED {product.price}</p>

          <div className="mb-4">
            <span className="font-semibold">Rating:</span>{" "}
            {"⭐".repeat(product.rating)}{" "}
            {"☆".repeat(5 - product.rating)}
          </div>

          <h2 className="text-lg font-bold mb-2">Specifications:</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {product.specs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

