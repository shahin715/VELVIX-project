import logo from "../../../assets/images/logo.png";
import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <header className="w-full sticky top-0 z-30 bg-white shadow-sm container-box">
      <div className="w-full max-w-7xl mx-auto px-4 py-3 flex flex-row items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 object-contain rounded-full shrink-0"
          />
          <span className="text-lg font-bold text-blue-600 truncate">
            ELVIX
          </span>
        </div>

        {/* Cart Icon */}
        <button
          onClick={() => navigate("/cart")}
          className="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-md text-xl shrink-0"
        >
          <FontAwesomeIcon icon={faShoppingBag} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}





