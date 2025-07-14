// src/components/Checkout/ThankYouPage.jsx
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4">
      <div className="text-center space-y-6 max-w-xl">
        <h1 className="text-4xl font-bold text-blue-600">🎉 Thank You!</h1>
        <p className="text-lg text-gray-700">
          Your order has been placed successfully. We’ll notify you with shipping updates shortly.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 hover:bg-green-700 text-white px-6 py-3 rounded text-lg font-medium transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
