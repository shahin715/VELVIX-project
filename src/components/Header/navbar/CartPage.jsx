import { useCart } from "../../../context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [loadingItems, setLoadingItems] = useState(new Set());
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const handleQuantityChange = async (itemId, newQuantity, category) => {
    const quantity = Math.max(1, Math.floor(newQuantity));
    setLoadingItems((prev) => new Set(prev).add(itemId));
    try {
      await updateQuantity(itemId, quantity, category);
    } finally {
      setLoadingItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }
  };

  const handleRemoveItem = async (itemId, category) => {
    setLoadingItems((prev) => new Set(prev).add(itemId));
    try {
      await removeFromCart(itemId, category);
    } finally {
      setLoadingItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center">
        <div className="text-center py-20 text-gray-600">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-500">Add some items to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-gray-50 flex justify-center py-16">
      <div className="container mx-auto px-4 max-w-6xl space-y-6">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
          <span className="text-sm text-gray-500">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
          </span>
        </div>

        {cartItems.map((item) => {
          const isLoading = loadingItems.has(item.id);
          const itemTotal = parseFloat(item.price) * item.quantity;

          return (
            <div
              key={item.id}
              className={`bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row justify-between gap-4 transition-opacity ${
                isLoading ? "opacity-50" : ""
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain rounded-md self-center sm:self-start"
              />

              {/* Middle: Title & Quantity */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                </div>

                <div className="flex items-center mt-3 max-w-[160px]">
                  <button
                    className="px-2 py-1 border rounded-l hover:bg-gray-100 disabled:opacity-50"
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.quantity - 1,
                        item.category
                      )
                    }
                    disabled={isLoading || item.quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="99"
                    className="w-14 text-center border-y border-gray-300"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.id,
                        parseInt(e.target.value) || 1,
                        item.category
                      )
                    }
                    disabled={isLoading}
                  />
                  <button
                    className="px-2 py-1 border rounded-r hover:bg-gray-100 disabled:opacity-50"
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.quantity + 1,
                        item.category
                      )
                    }
                    disabled={isLoading || item.quantity >= 99}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Total Price & Delete */}
              <div className="flex flex-col justify-between items-end text-right min-w-[100px]">
                <p className="font-bold text-gray-900 text-lg">
                  ৳ {itemTotal.toFixed(2)}
                </p>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveItem(item.id, item.category)}
                  disabled={isLoading}
                >
                  <Trash2 className="w-5 h-5 inline" />
                </button>
              </div>
            </div>
          );
        })}

        {/* Subtotal and Checkout */}
        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-right">
          <div>
            <p className="text-sm text-gray-600">
              Subtotal (
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
            </p>
            <h2 className="text-xl font-bold">৳ {totalPrice.toFixed(2)}</h2>
          </div>

          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 transition text-lg"
            onClick={() => navigate("/checkout")}
            disabled={cartItems.length === 0}
          >
            <ShoppingBag className="w-6 h-6" />
            Checkout Now
            <Sparkles className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
