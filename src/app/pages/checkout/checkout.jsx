import { useCart } from "../../../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ Redirect to Thank You page
    navigate("/thank-you");
  };

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-blue-50 to-white py-12 px-4 flex justify-center items-start overflow-auto">
      <div className="w-full max-w-4xl space-y-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Complete Your Order</h1>
          <p className="text-lg text-gray-600 mt-2">Just a few details and you're all set!</p>
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-lg p-8 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">🧾 Order Summary</h2>
          <ul className="space-y-6 text-lg text-gray-700">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-500">
                    {item.quantity} × ৳{parseFloat(item.price).toFixed(2)}
                  </p>
                </div>
                <div className="font-bold text-gray-800">
                  ৳{(parseFloat(item.price) * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t mt-6 pt-6 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span className="text-blue-600">৳{totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Billing Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg p-8 w-full space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800">📋 Billing Information</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-5 py-4 text-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-5 py-4 text-lg"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-5 py-4 text-lg"
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-gray-300 rounded px-5 py-4 text-lg"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:opacity-90 text-white py-4 text-xl font-bold rounded"
          >
            ✅ Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}



