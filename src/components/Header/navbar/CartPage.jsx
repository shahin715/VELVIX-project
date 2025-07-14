import { useCart } from "../../../context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, Star, Sparkles } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [loadingItems, setLoadingItems] = useState(new Set());

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const handleQuantityChange = async (itemId, newQuantity) => {
    const quantity = Math.max(1, Math.floor(newQuantity));
    setLoadingItems(prev => new Set(prev).add(itemId));
    try {
      await updateQuantity(itemId, quantity);
    } finally {
      setLoadingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }
  };

  const handleRemoveItem = async (itemId) => {
    setLoadingItems(prev => new Set(prev).add(itemId));
    try {
      await removeFromCart(itemId);
    } finally {
      setLoadingItems(prev => {
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
    <div className="min-h-[80vh] bg-gray-50 px-4 py-10">
      <div className="container-box max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
          <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
          <span className="text-sm text-gray-500">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        <div className="space-y-6">
          {cartItems.map((item) => {
            const isLoading = loadingItems.has(item.id);
            const itemTotal = parseFloat(item.price) * item.quantity;

            return (
              <div
                key={item.id}
                className={`flex flex-col sm:flex-row items-center gap-4 border p-4 rounded-lg bg-white transition-opacity ${
                  isLoading ? 'opacity-50' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-md"
                  loading="lazy"
                />

                <div className="flex-1 w-full">
                  <h2 className="font-semibold text-gray-800 line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    ৳ {parseFloat(item.price).toFixed(2)}
                  </p>

                  <div className="flex items-center mt-2 w-full max-w-xs">
                    <button
                      className="px-2 py-1 border rounded-l hover:bg-gray-100 disabled:opacity-50"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={isLoading || item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="99"
                      className="w-16 text-center border-y focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value) || 1)
                      }
                      disabled={isLoading}
                    />
                    <button
                      className="px-2 py-1 border rounded-r hover:bg-gray-100 disabled:opacity-50"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      disabled={isLoading || item.quantity >= 99}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-right w-full sm:w-auto sm:text-right">
                  <p className="text-gray-800 font-bold">
                    ৳ {itemTotal.toFixed(2)}
                  </p>
                  <button
                    className="text-red-500 hover:text-red-700 mt-2 disabled:opacity-50"
                    onClick={() => handleRemoveItem(item.id)}
                    disabled={isLoading}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t pt-6 gap-4 pb-8">
          <div className="text-right">
            <p className="text-sm text-gray-600">
              Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
            </p>
            <h2 className="text-xl font-bold">৳ {totalPrice.toFixed(2)}</h2>
          </div>

          <div className="relative group">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-orange-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              ✨ Almost there! ✨
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full text-xs text-purple-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap mr-3">
              🎉 Ready to order?
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full text-xs text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ml-3">
              💫 Let's go shopping!
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              🛍️ Complete your purchase 🛍️
            </div>

            <button 
              className="relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 overflow-hidden group"
              disabled={cartItems.length === 0}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" />
                <span>CHECKOUT NOW</span>
                <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-25 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
