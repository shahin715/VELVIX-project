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
import Img1 from "../../assets/images/Deals_today1.jpg";
import Img2 from "../../assets/images/Dealstoday2.png";
import Img3 from "../../assets/images/Deals_today3.png";
import Img4 from "../../assets/images/Deals_today4.png";
import Img5 from "../../assets/images/Deals_today5.webp";
import Img6 from "../../assets/images/Deals_today6.webp";

const allProducts = [
  {
    id: "1",
    title: "ZOTAC GAMING GeForce RTX 5060",
    brand: "ZOTAC",
    sku: "ZOT5060",
    price: "820.00",
    image: Img1,
    keyFeatures: [
      { label: "Memory", value: "8GB GDDR6" },
      { label: "Interface", value: "PCIe 4.0" },
      { label: "Cooling", value: "Dual Fan" },
    ],
    mainFeatures: [
      { label: "Boost Clock", value: "1800 MHz" },
      { label: "Ports", value: "HDMI, DisplayPort" },
      { label: "Power", value: "450W Recommended" },
      { label: "Warranty", value: "3 years" },
    ],
    warrantyOptions: [
      {
        id: "warranty-1",
        label: "3 year manufacturer warranty",
        value: "free",
      },
    ],
  },
  {
    id: "2",
    title: "ASUS PRIME B760M-A WIFI",
    brand: "ASUS",
    sku: "B760M-WIFI",
    price: "120.00",
    image: Img2,
    keyFeatures: [
      { label: "Socket", value: "LGA 1700" },
      { label: "Form Factor", value: "mATX" },
      { label: "WiFi", value: "Yes" },
    ],
    mainFeatures: [
      { label: "RAM Support", value: "DDR5 7200MHz" },
      { label: "M.2 Slots", value: "2x Gen4" },
      { label: "USB", value: "USB 3.2 Gen 2" },
      { label: "Warranty", value: "3 years" },
    ],
    warrantyOptions: [
      {
        id: "warranty-2",
        label: "3 year official warranty",
        value: "free",
      },
    ],
  },
  {
    id: "3",
    title: "ASUS PRIME H610M-A WIFI",
    brand: "ASUS",
    sku: "H610M-A",
    price: "110.00",
    image: Img3,
    keyFeatures: [
      { label: "Chipset", value: "Intel H610" },
      { label: "WiFi", value: "Included" },
      { label: "Form Factor", value: "Micro ATX" },
    ],
    mainFeatures: [
      { label: "RAM", value: "DDR4" },
      { label: "Storage", value: "2x SATA, 1x M.2" },
      { label: "LAN", value: "1 Gb" },
      { label: "Audio", value: "HD Audio" },
    ],
    warrantyOptions: [
      { id: "warranty-3", label: "2 years warranty", value: "free" },
    ],
  },
  {
    id: "4",
    title: "Lexar ARES RGB DDR5 RAM 32GB Kit",
    brand: "Lexar",
    sku: "ARES-DDR5",
    price: "52.00",
    image: Img4,
    keyFeatures: [
      { label: "Capacity", value: "32GB (2x16GB)" },
      { label: "Speed", value: "5200MHz" },
      { label: "RGB", value: "Yes" },
    ],
    mainFeatures: [
      { label: "Type", value: "DDR5" },
      { label: "Voltage", value: "1.25V" },
      { label: "Warranty", value: "Limited Lifetime" },
    ],
    warrantyOptions: [
      { id: "warranty-4", label: "Lifetime warranty", value: "free" },
    ],
  },
  {
    id: "5",
    title: "Gigabyte Z790 Eagle AX LGA 1700 ATX",
    brand: "Gigabyte",
    sku: "Z790-EAGLE",
    price: "299.99",
    image: Img5,
    keyFeatures: [
      { label: "Chipset", value: "Intel Z790" },
      { label: "WiFi", value: "WiFi 6E" },
      { label: "Form Factor", value: "ATX" },
    ],
    mainFeatures: [
      { label: "PCIe", value: "PCIe 5.0 x16" },
      { label: "Memory", value: "DDR5 8000" },
      { label: "Audio", value: "ALC897" },
    ],
    warrantyOptions: [
      { id: "warranty-5", label: "3-year warranty", value: "free" },
    ],
  },
  {
    id: "6",
    title: "WD Black 8TB SSD NVMe M.2 SN850X",
    brand: "Western Digital",
    sku: "SN850X-8TB",
    price: "529.99",
    image: Img6,
    keyFeatures: [
      { label: "Capacity", value: "8TB" },
      { label: "Interface", value: "PCIe Gen4" },
      { label: "Form Factor", value: "M.2 2280" },
    ],
    mainFeatures: [
      { label: "Speed", value: "7300 MB/s Read" },
      { label: "Write", value: "6600 MB/s" },
      { label: "TBW", value: "1200TB" },
    ],
    warrantyOptions: [
      { id: "warranty-6", label: "5 years warranty", value: "free" },
    ],
  },
];

export default function DealsTodayDetails() {
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
    <div className="container mx-auto px-4 py-10 container-box">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
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

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
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

          {/* Compare & Wishlist */}
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

          {/* Quantity and Cart */}
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
              onClick={() => addToCart(product, quantity)}
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
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
