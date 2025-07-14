"use client"

import { useState } from "react"
import MarginX10 from "../shared/MarginX10"

const brands = [
  { name: "Optical", color: "text-blue-600" },
  { name: "Plustek", color: "text-orange-500" },
  { name: "SanDisk", color: "text-red-500" },
  { name: "Honeywell", color: "text-red-600" },
  { name: "Creative", color: "text-black" },
  { name: "Brother", color: "text-blue-500" },
  { name: "Samsung", color: "text-blue-700" },
  { name: "Microsoft", color: "text-blue-600" },
  { name: "Apple", color: "text-gray-800" },
  { name: "Google", color: "text-blue-500" },
  { name: "Amazon", color: "text-orange-400" },
  { name: "Netflix", color: "text-red-600" },
  { name: "Adobe", color: "text-red-500" },
  { name: "Intel", color: "text-blue-600" },
  { name: "NVIDIA", color: "text-green-500" },
  { name: "Tesla", color: "text-red-500" },
  { name: "Meta", color: "text-blue-600" },
  { name: "Spotify", color: "text-green-500" },
  { name: "Uber", color: "text-black" },
  { name: "Airbnb", color: "text-red-500" },
]

export default function BrandSlider() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands]

  return (
  <div>
      
    <h2    style={{   marginTop: "40px", marginBottom: "20px" }} className="text-xl sm:text-2xl font-semibold container-box">
      Featured Brands
    </h2>
 
 <div className="w-full bg-gray-50 py-12 overflow-hidden container-box">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="flex overflow-hidden">
            <div
              className={`flex animate-scroll ${isPaused ? "pause-animation" : ""}`}
              style={{
                width: `${duplicatedBrands.length * 200}px`,
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group hover:scale-105"
                >
                  <span
                    className={`text-xl md:text-2xl font-bold ${brand.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${brands.length * 200}px);
          }
        }
        
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        
        .pause-animation {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }
        
        @media (max-width: 480px) {
          .animate-scroll {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  </div>
   
  )
}


