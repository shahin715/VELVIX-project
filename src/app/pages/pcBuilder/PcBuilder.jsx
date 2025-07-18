import { useState } from "react"
import {
  ShoppingCart,
  Save,
  Printer,
  Scan,
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
} from "lucide-react"
import logo from "../../../assets/images/logo.png"
import LowerNavbar from "../../../components/Header/navbar/lowerNavbar" // ✅ Import your lower navbar

// Component for each PC part item
const ComponentItem = ({ icon: Icon, name }) => {
  return (
    <div className="flex items-center py-3 px-4 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center w-1/3 md:w-1/4">
        <Icon className="w-6 h-6 text-gray-500 mr-4" />
        <span className="text-gray-700 font-medium">{name}</span>
      </div>
      <div className="flex-grow bg-gray-200 h-2 rounded-full mx-4">
        <div className="bg-gray-300 h-full rounded-full w-1/2"></div>
      </div>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
        Choose
      </button>
    </div>
  )
}

export default function PcBuilder() {
  const [hideUnconfigured, setHideUnconfigured] = useState(false)

  const components = [
    { name: "Motherboard", icon: CircuitBoard },
    { name: "Processor (CPU)", icon: Cpu },
    { name: "Memory(Ram)", icon: MemoryStick },
    { name: "SSD (Internal)", icon: HardDrive },
    { name: "Gaming Accessories", icon: Gamepad2 },
    { name: "Gaming Table", icon: Table },
    { name: "Gaming Chair", icon: Armchair },
    { name: "Gaming Mouse", icon: Mouse },
    { name: "Gaming Keyboard", icon: Keyboard },
    { name: "Gaming RGB Cooler", icon: Fan },
    { name: "Gaming PSU", icon: Power },
    { name: "Gaming Chasis", icon: Computer },
    { name: "Graphic Card", icon: Monitor },
    { name: "Gaming Mouse Pad", icon: Mouse },
    { name: "Gaming Headphone", icon: Headphones },
    { name: "Gaming Ram", icon: MemoryStick },
    { name: "Gaming Motherboard", icon: CircuitBoard },
    { name: "Gaming PC", icon: Computer },
  ]

  return (
    

    <div>
         <LowerNavbar />
        <div className="min-h-screen bg-gray-100 font-sans container-box">
      <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="ELVIX Logo" className="h-8 w-auto object-contain" />
            <span className="text-2xl font-bold text-blue-600">ELVIX</span>
          </div>
        </div>
        <nav className="flex items-center space-x-6 text-gray-600 text-sm">
          <div className="flex flex-col items-center cursor-pointer hover:text-gray-900 transition-colors duration-200">
            <ShoppingCart className="w-5 h-5 mb-1" />
            <span>Add to Cart</span>
          </div>
         
        </nav>
      </header>

      <main className="container mx-auto p-6 md:p-8 lg:p-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <h1 className="text-xl font-semibold text-gray-800">PC Builder - Build Your Own Computer - VELVIX</h1>
              <label className="flex items-center mt-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  checked={hideUnconfigured}
                  onChange={() => setHideUnconfigured(!hideUnconfigured)}
                />
                <span className="ml-2 text-sm text-gray-600">Hide Unconfigured Components</span>
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-gray-600 text-sm">Total Amount</p>
                <p className="text-lg font-bold text-gray-800">$ 0.00</p>
                <p className="text-gray-500 text-xs">0 items</p>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-blue-700 transition-colors duration-200">
                $ 0.00
              </button>
            </div>
          </div>

          <div className="bg-green-500 text-white py-3 px-4 rounded-t-lg font-semibold text-lg">Core Components</div>
          <div className="border border-gray-200 rounded-b-lg overflow-hidden">
            {components.map((component, index) => (
              <ComponentItem key={index} icon={component.icon} name={component.name} />
            ))}
          </div>
        </div>
      </main>

      {/* ✅ Lower Navbar only for this page */}
  
    </div>
    </div>
  )
}
