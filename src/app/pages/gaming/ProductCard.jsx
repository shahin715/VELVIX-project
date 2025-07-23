import { Heart, RefreshCw } from "lucide-react"
import { useCart } from "../../../context/CartContext"
import toast from "react-hot-toast"

export function ProductCard({ imageSrc, imageAlt, productName, price }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    const product = {
      id: productName, // ideally a unique ID
      title: productName,
      image: imageSrc,
      price: price.replace("AED", "").trim(),
      category: "components",
    }
    addToCart(product)
    toast.success("Added to cart!")
  }

  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white">
      <div className="relative h-48 bg-gray-50 flex items-center justify-center">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          className="object-contain max-h-full max-w-full h-full"
        />
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-300">
            <RefreshCw className="w-4 h-4 text-gray-600" />
          </button>
          <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-300">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-gray-700 min-h-[60px]">{productName}</p>
        <div className="mt-2 text-lg font-bold text-orange-600">{price}</div>
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
