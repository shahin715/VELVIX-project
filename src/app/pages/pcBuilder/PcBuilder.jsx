import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  CircuitBoard,
  Cpu,
  MemoryStick,
  HardDrive,
  Gamepad2,
  Table,
  Armchair,
  Mouse,
  Keyboard,
  Fan,
  Power,
  Computer,
  Monitor,
  Headphones,
} from "lucide-react";
import logo from "../../../assets/images/logo.png";
import LowerNavbar from "../../../components/Header/navbar/lowerNavbar";
import { usePcBuilder } from "../../../context/PcBuilderContext";
import { useCart } from "../../../context/CartContext";
import routePaths from "../../../constants/routePaths.constant";

const componentRouteMap = {
  motherboard: routePaths.ROUTE_MOTHERBOARD,
  processor: routePaths.ROUTE_PROCESSOR,
  gpu: routePaths.ROUTE_GPU,
  memory: "/pcbuilder/memory",
  ssd: "/pcbuilder/ssd",
  accessories: "/pcbuilder/accessories",
};

export default function PcBuilder() {
  const [hideUnconfigured, setHideUnconfigured] = useState(false);
  const { selectedParts } = usePcBuilder();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const components = [
    { key: "motherboard", name: "Motherboard", icon: CircuitBoard },
    { key: "processor", name: "Processor (CPU)", icon: Cpu },
    { key: "memory", name: "Memory (RAM)", icon: MemoryStick },
    { key: "ssd", name: "SSD (Internal)", icon: HardDrive },
    { key: "accessories", name: "Gaming Accessories", icon: Gamepad2 },
    { key: "table", name: "Gaming Table", icon: Table },
    { key: "chair", name: "Gaming Chair", icon: Armchair },
    { key: "mouse", name: "Gaming Mouse", icon: Mouse },
    { key: "keyboard", name: "Gaming Keyboard", icon: Keyboard },
    { key: "cooler", name: "Gaming RGB Cooler", icon: Fan },
    { key: "psu", name: "Gaming PSU", icon: Power },
    { key: "chasis", name: "Gaming Chassis", icon: Computer },
    { key: "gpu", name: "Graphic Card", icon: Monitor },
    { key: "mousepad", name: "Gaming Mouse Pad", icon: Mouse },
    { key: "headphone", name: "Gaming Headphone", icon: Headphones },
    { key: "gamingram", name: "Gaming RAM", icon: MemoryStick },
    { key: "gamingmobo", name: "Gaming Motherboard", icon: CircuitBoard },
    { key: "gamingpc", name: "Gaming PC", icon: Computer },
  ];

  const selectedComponents = components.filter(
    (component) => !hideUnconfigured || selectedParts[component.key]
  );

  const handleAddToCart = () => {
    Object.values(selectedParts).forEach((part) => {
      if (part) addToCart(part);
    });
    navigate("/cart");
  };

  return (
    <div>
      <LowerNavbar />
      <div className="min-h-screen bg-gray-100 font-sans container-box">
        <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="ELVIX Logo" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-blue-600">ELVIX</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-600"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </header>

        <main className="container mx-auto p-6 md:p-8 lg:p-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-xl font-semibold text-gray-800">
                  PC Builder - Build Your Own Computer - VELVIX
                </h1>
                <label className="flex items-center mt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    checked={hideUnconfigured}
                    onChange={() => setHideUnconfigured(!hideUnconfigured)}
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Hide Unconfigured Components
                  </span>
                </label>
              </div>
              <div className="text-right">
                <p className="text-gray-600 text-sm">Total Amount</p>
                <p className="text-lg font-bold text-gray-800">
                  AED {Object.values(selectedParts).reduce((acc, item) => acc + (item?.price || 0), 0)}
                </p>
                <p className="text-gray-500 text-xs">
                  {Object.values(selectedParts).filter(Boolean).length} items
                </p>
              </div>
            </div>

            <div className="bg-green-500 text-white py-3 px-4 rounded-t-lg font-semibold text-lg">
              Core Components
            </div>

            <div className="border border-gray-200 rounded-b-lg overflow-hidden">
              {selectedComponents.map((component, index) => {
                const selected = selectedParts[component.key];
                return (
                  <div
                    key={index}
                    className="flex items-center py-3 px-4 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="flex items-center w-1/3 md:w-1/4">
                      <component.icon className="w-6 h-6 text-gray-500 mr-4" />
                      <span className="text-gray-700 font-medium">
                        {component.name}
                      </span>
                    </div>
                    <div className="flex-grow text-sm text-gray-600">
                      {selected ? (
                        <div className="flex items-center gap-4">
                          <img
                            src={selected.image}
                            alt={selected.name}
                            className="w-12 h-12 object-contain"
                          />
                          <div>
                            <p className="font-medium">{selected.name}</p>
                            <p className="text-gray-500">AED {selected.price}</p>
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-400 italic">Not Selected</span>
                      )}
                    </div>
                    <button
                      onClick={() =>
                        navigate(componentRouteMap[component.key] || "/pcbuilder")
                      }
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 text-sm"
                    >
                      {selected ? "Change" : "Choose"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

