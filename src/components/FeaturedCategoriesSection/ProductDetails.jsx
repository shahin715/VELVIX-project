import React, { useState } from "react";
import { useCart } from "../../context/CartContext";


export default function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <img src={selectedImage} alt={product.title} className="w-full h-[400px] object-contain border rounded-lg" />
          <div className="flex gap-2 mt-4">
            {[product.image, ...(product.gallery || [])].map((img, i) => (
              <img key={i} src={img} alt={`thumb-${i}`} onClick={() => setSelectedImage(img)}
                   className="w-20 h-20 object-contain border rounded cursor-pointer hover:ring-2 ring-orange-500" />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
          <p className="text-sm text-gray-500 mb-1">Brand: {product.brand}</p>
          <p className="text-xl font-semibold text-orange-600 mb-3">৳ {product.price}</p>
          <p className="text-green-600 mb-4 font-medium">In Stock</p>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Warranty:</label>
            <select className="border rounded px-3 py-2 w-full max-w-xs">
              <option>1 Year Manufacturer Warranty</option>
            </select>
          </div>
          <div className="flex gap-4 mb-6">
            <button
  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
  onClick={() =>
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1, // default initial quantity
    })
  }
>
  Add to Cart
</button>

            <button className="border px-4 py-2 rounded hover:bg-gray-100">Wishlist</button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">Compare</button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="border-b mb-4">
          <ul className="flex gap-6 font-semibold text-sm text-gray-700">
            <li className="border-b-2 border-orange-500 pb-2 cursor-pointer">Specifications</li>
            <li className="hover:text-orange-500 cursor-pointer">Description</li>
            <li className="hover:text-orange-500 cursor-pointer">Review (0)</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <h4 className="text-lg font-bold mb-4">Key Features</h4>
          <ul className="list-disc space-y-2 list-inside text-sm text-gray-700">
            {product.features.map((item, index) => (
              <li key={index}><strong>{item.label}:</strong> {item.value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

