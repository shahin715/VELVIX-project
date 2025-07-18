import React from "react";
import { useParams } from "react-router-dom";
import componentProducts from "./data/componentsData";
import ProductDetails from "../../../components/FeaturedCategoriesSection/ProductDetails"; // Reusable UI component

export default function ComponentProductDetails() {
  const { slug } = useParams();
  const product = componentProducts.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-10 text-red-600 text-center text-xl">Product Not Found</div>;
  }

  return <ProductDetails product={product} />;
}
