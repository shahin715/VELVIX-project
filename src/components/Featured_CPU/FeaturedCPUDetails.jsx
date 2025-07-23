import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Heart,
  Star,
  ShoppingCart,
  Plus,
  Minus,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { useCart } from "../../context/CartContext";

import Img1 from "../../assets/images/featured1.png";
import Img2 from "../../assets/images/featured2.jpg";
import Img3 from "../../assets/images/featured3.png";
import Img4 from "../../assets/images/featured4.png";
import toast from "react-hot-toast";

const allProducts = [
  {
    id: "1",
    title: "Intel 12th Gen Core i5-12400F LGA 1700 Dual",
    brand: "Intel",
    sku: "I5-12400F",
    price: "820.00",
    image: Img1,
    keyFeatures: [
      { label: "Cores", value: "6" },
      { label: "Threads", value: "12" },
      { label: "Base Clock", value: "2.5 GHz" },
    ],
    mainFeatures: [
      { label: "Boost Clock", value: "4.4 GHz" },
      { label: "Socket", value: "LGA 1700" },
      { label: "TDP", value: "65W" },
      { label: "Warranty", value: "3 Years" },
    ],
    warrantyOptions: [
      { id: "warranty-1", label: "3 years official warranty", value: "free" },
    ],
  },
  {
    id: "2",
    title: "AMD Ryzen 5 7600 Desktop Processor",
    brand: "AMD",
    sku: "RYZEN-7600",
    price: "22.00",
    image: Img2,
    keyFeatures: [
      { label: "Cores", value: "6" },
      { label: "Threads", value: "12" },
      { label: "Base Clock", value: "3.8 GHz" },
    ],
    mainFeatures: [
      { label: "Boost Clock", value: "5.1 GHz" },
      { label: "Socket", value: "AM5" },
      { label: "TDP", value: "65W" },
      { label: "Warranty", value: "3 Years" },
    ],
    warrantyOptions: [
      { id: "warranty-2", label: "3 years official warranty", value: "free" },
    ],
  },
  {
    id: "3",
    title: "Intel Core i9-14900K Tray processor",
    brand: "Intel",
    sku: "I9-14900K",
    price: "110.00",
    image: Img3,
    keyFeatures: [
      { label: "Cores", value: "24 (8P + 16E)" },
      { label: "Threads", value: "32" },
      { label: "Base Clock", value: "3.2 GHz" },
    ],
    mainFeatures: [
      { label: "Boost Clock", value: "6.0 GHz" },
      { label: "Socket", value: "LGA 1700" },
      { label: "TDP", value: "125W" },
      { label: "Warranty", value: "3 Years" },
    ],
    warrantyOptions: [
      { id: "warranty-3", label: "3 years official warranty", value: "free" },
    ],
  },
  {
    id: "4",
    title: "Intel 13th Gen Core i9-13900KF Box Processor",
    brand: "Intel",
    sku: "I9-13900KF",
    price: "52.00",
    image: Img4,
    keyFeatures: [
      { label: "Cores", value: "24 (8P + 16E)" },
      { label: "Threads", value: "32" },
      { label: "Base Clock", value: "3.0 GHz" },
    ],
    mainFeatures: [
      { label: "Boost Clock", value: "5.8 GHz" },
      { label: "Socket", value: "LGA 1700" },
      { label: "TDP", value: "125W" },
      { label: "Warranty", value: "3 Years" },
    ],
    warrantyOptions: [
      { id: "warranty-4", label: "3 years official warranty", value: "free" },
    ],
  },
];

export default function FeaturedCPUDetails() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("specifications");
  const { addToCart } = useCart();

  if (!product)
    return (
      <div className="text-center py-20 text-red-600">Product not found.</div>
    );

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      Math.max(1, type === "increment" ? prev + 1 : prev - 1)
    );
  };

  return (
    <div className="container mx-auto px-4 py-10 container-box min-h-[80vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden p-4">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="mt-4">
            <div className="w-20 h-16 border border-orange-500 rounded-md p-2">
              <img
                src={product.image}
                alt="Thumb"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl sm:text-3xl font-bold text-gray-900">
            {product.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>
              Brand: <strong>{product.brand}</strong>
            </span>
            <span>
              SKU: <strong>{product.sku}</strong>
            </span>
            <span className="ml-auto px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
              IN STOCK
            </span>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="font-semibold text-gray-800">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700">
              {product.keyFeatures.map((f, i) => (
                <li key={i}>
                  <strong>{f.label}:</strong> {f.value}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-3xl font-bold text-orange-600">
            ৳ {product.price}
          </div>
          <p className="text-sm text-gray-500">Inclusive of VAT.</p>

          {/* Ratings */}
          <div className="flex items-center gap-2 text-gray-600">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < 4
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-300 text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm ml-2">0 Review</span>
          </div>

          {/* Wishlist & Share */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <button className="flex items-center gap-1 hover:text-orange-600">
              <Heart className="h-4 w-4" /> Add to Wishlist
            </button>
            <button className="flex items-center gap-1 hover:text-orange-600">
              <Facebook className="h-4 w-4 text-blue-600" />
            </button>
            <button className="flex items-center gap-1 hover:text-orange-600">
              <MessageCircle className="h-4 w-4 text-green-600" />
            </button>
          </div>

          {/* Warranty */}
          <div>
            <h2 className="font-semibold text-gray-800">Warranty</h2>
            {product.warrantyOptions.map((opt) => (
              <label
                key={opt.id}
                className="flex items-center gap-2 text-sm mt-2"
              >
                <input type="radio" name="warranty" defaultChecked />{" "}
                {opt.label}
              </label>
            ))}
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex border rounded-md">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="p-2 hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, +e.target.value))}
                type="number"
                className="w-12 text-center border-x border-gray-200"
              />
              <button
                onClick={() => handleQuantityChange("increment")}
                className="p-2 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded flex items-center gap-2"
              onClick={() => {
                addToCart(product, quantity);
                toast.success(`${product.title} added to cart!`);
              }}
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12">
        <div className="flex border-b text-sm ">
          {["specifications", "description", "review"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium capitalize ${
                activeTab === tab
                  ? "border-b-2 border-orange-500 text-orange-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab === "review" ? "Review (0)" : tab}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeTab === "specifications" && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr>
                    <th className="p-2 bg-gray-100" colSpan={2}>
                      Key Features
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.keyFeatures.map((f, i) => (
                    <tr key={i} className={i % 2 ? "bg-gray-50" : ""}>
                      <td className="p-2 font-medium w-1/3">{f.label}</td>
                      <td className="p-2">{f.value}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="p-2 bg-gray-100" colSpan={2}>
                      Main Features
                    </td>
                  </tr>
                  {product.mainFeatures.map((f, i) => (
                    <tr key={i} className={i % 2 ? "bg-gray-50" : ""}>
                      <td className="p-2 font-medium">{f.label}</td>
                      <td className="p-2">{f.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "description" && (
            <div className="text-gray-700">
              <p>
                This is a high-performance processor: {product.title}. Perfect
                for both gamers and creators.
              </p>
            </div>
          )}

          {activeTab === "review" && (
            <div className="text-gray-700">
              <p>No reviews yet. Be the first to review this product!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
