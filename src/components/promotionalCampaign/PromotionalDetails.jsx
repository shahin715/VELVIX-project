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
import Img1 from "../../assets/images/promotional1.webp";
import Img2 from "../../assets/images/promotional2.png";
import Img3 from "../../assets/images/promotional3.png";
import Img4 from "../../assets/images/promotional4.png";
import toast from "react-hot-toast";
const allProducts = [
  {
    id: "1",
    title: "CP BUDGET GAMING/WORKSTATION BUNDLE SET DESKTOP COMPUTER",
    brand: "VELVIX",
    sku: "BUNDLE-CP01",
    price: "820.00",
    image: Img1,
    keyFeatures: [
      { label: "CPU", value: "Core i5 12400F" },
      { label: "Graphics", value: "RTX 3050 8GB" },
      { label: "Storage", value: "1TB NVMe" },
    ],
    mainFeatures: [
      { label: "RAM", value: "16GB DDR4" },
      { label: "Connectivity", value: "WiFi Ready" },
      { label: "OS", value: "Windows 11" },
      { label: "Warranty", value: "1 Year" },
    ],
    warrantyOptions: [
      {
        id: "warranty-01",
        label: "1 year warranty from manufacturer",
        value: "free",
      },
    ],
  },
  {
    id: "2",
    title: "Dual Band Tenda U9 11AC USB WiFi Adapter",
    brand: "Tenda",
    sku: "U9-AC650",
    price: "22.00",
    image: Img2,
    keyFeatures: [
      { label: "Speed", value: "Up to 650Mbps" },
      { label: "Bands", value: "Dual Band 2.4GHz + 5GHz" },
      { label: "Port", value: "USB 2.0" },
    ],
    mainFeatures: [
      { label: "OS Support", value: "Windows 11/10/8.1/8/7" },
      { label: "Installation", value: "Plug & Play" },
      { label: "Warranty", value: "1 Year" },
    ],
    warrantyOptions: [
      {
        id: "warranty-02",
        label: "1 year replacement warranty",
        value: "free",
      },
    ],
  },
  {
    id: "3",
    title: "Galax Vivance-24F Gaming Monitor",
    brand: "Galax",
    sku: "VIVANCE-24F",
    price: "110.00",
    image: Img3,
    keyFeatures: [
      { label: "Display", value: '24" FHD IPS' },
      { label: "Refresh Rate", value: "165Hz" },
      { label: "Ports", value: "HDMI, DisplayPort" },
    ],
    mainFeatures: [
      { label: "Panel", value: "Fast IPS" },
      { label: "Response Time", value: "1ms" },
      { label: "Adaptive Sync", value: "Yes" },
      { label: "Warranty", value: "2 Years" },
    ],
    warrantyOptions: [
      {
        id: "warranty-03",
        label: "2-year official warranty",
        value: "free",
      },
    ],
  },
  {
    id: "4",
    title: "Plustek OpticSlim 2610 Pro A4 Scanner",
    brand: "Plustek",
    sku: "OPTIC2610",
    price: "52.00",
    image: Img4,
    keyFeatures: [
      { label: "Resolution", value: "1200 dpi" },
      { label: "Scan Type", value: "Flatbed A4" },
      { label: "Connectivity", value: "USB" },
    ],
    mainFeatures: [
      { label: "Scan Speed", value: "15s per page" },
      { label: "Software", value: "Included" },
      { label: "Warranty", value: "1 Year" },
    ],
    warrantyOptions: [
      {
        id: "warranty-04",
        label: "1 year manufacturer warranty",
        value: "free",
      },
    ],
  },
];

export default function PromotionalDetails() {
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
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden p-4">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
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

          <div className="flex items-center gap-2 text-gray-600">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < 3
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-300 text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm ml-2">0 Review</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <button className="flex items-center gap-1 hover:text-orange-600">
              <Heart className="h-4 w-4" /> Wishlist
            </button>
            <button className="flex items-center gap-1 hover:text-orange-600">
              <Facebook className="h-4 w-4 text-blue-600" />
            </button>
            <button className="flex items-center gap-1 hover:text-orange-600">
              <MessageCircle className="h-4 w-4 text-green-600" />
            </button>
          </div>

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

      <div className="mt-12">
        <div className="flex border-b text-sm">
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
                This is a placeholder description for {product.title}. Add full
                product details here.
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
