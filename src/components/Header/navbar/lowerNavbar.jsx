import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Grid3X3,
  User,
  Monitor,
  ChevronRight,
  LogOut,
} from "lucide-react";

// ✅ Default static nav items
const defaultNavItems = [
  { label: "GAMING", href: "/gaming" },
  { label: "ABOUT US", href: "/about" },
  { label: "CORPORATE", href: "/corporate" },
  { label: "BRANDS", href: "/brands" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact" },
];

export default function DynamicNavbar({
  navItems = defaultNavItems, // uses default if not passed
  onCategoriesClick,
  onPcBuilderClick,
  activeRoute = null,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(activeRoute);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto container-box">
        <div className="flex items-center justify-between h-14">
          {/* Categories */}
          <button
            onClick={onCategoriesClick}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 h-14 flex items-center gap-2 hover:from-orange-600 hover:to-red-600"
          >
            <Grid3X3 className="w-5 h-5" />
            <span className="text-sm font-semibold">Categories</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8 justify-center flex-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setActiveItem(item.label);
                  navigate(item.href);
                }}
                className={`text-white text-sm px-3 py-2 rounded hover:bg-white/10 ${
                  activeItem === item.label ? "bg-white/20 shadow" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side - Login/Logout & PC Builder */}
          <div className="hidden md:flex items-center gap-2.5">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-700 hover:bg-red-800 text-white px-4 py-3 h-14 flex items-center gap-2 rounded"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-3 h-14 flex items-center gap-2 rounded"
              >
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">Login</span>
              </button>
            )}

            <button
              onClick={onPcBuilderClick}
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 h-14 flex items-center gap-2 rounded"
            >
              <Monitor className="w-4 h-4" />
              <span className="text-sm font-medium">PC Builder</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-800 px-4 pb-4 pt-2 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsMobileMenuOpen(false);
                  navigate(item.href);
                }}
                className="block w-full text-left text-white px-3 py-2 rounded hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Login/Logout */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="w-full text-left text-white px-3 py-2 rounded hover:bg-white/10"
              >
                <LogOut className="inline w-4 h-4 mr-2" />
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full text-left text-white px-3 py-2 rounded hover:bg-white/10"
              >
                <User className="inline w-4 h-4 mr-2" />
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

