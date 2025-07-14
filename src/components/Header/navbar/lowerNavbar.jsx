"use client"

import { useState, useEffect } from "react"
import { Menu, X, Grid3X3, User, Monitor, ChevronRight } from "lucide-react"


const defaultNavItems = [
  { label: "GAMING", href: "/gaming" },
  { label: "ABOUT US", href: "/about" },
  { label: "CORPORATE", href: "/corporate" },
  { label: "BRANDS", href: "/brands" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT US", href: "/contact" },
]

export function DynamicNavbar({ 
  navItems = defaultNavItems, 
  onCategoriesClick, 
  onLoginClick, 
  onPcBuilderClick,
  activeRoute = null 
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(activeRoute)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  // Handle keyboard navigation
  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      action()
    }
  }

  const handleNavClick = (href, label) => {
    setActiveItem(label)
    setIsMobileMenuOpen(false)
    
    // Handle navigation
    if (typeof window !== 'undefined') {
      console.log(`Navigating to: ${href}`)
      // You can add your navigation logic here
      // For example: router.push(href) if using Next.js
    }
  }

  const handleCategoriesClick = () => {
    if (onCategoriesClick) {
      onCategoriesClick()
    } else {
      console.log("Categories clicked")
    }
  }

  const handleLoginClick = () => {
    if (onLoginClick) {
      onLoginClick()
    } else {
      console.log("Login clicked")
    }
    setIsMobileMenuOpen(false)
  }

  const handlePcBuilderClick = () => {
    if (onPcBuilderClick) {
      onPcBuilderClick()
    } else {
      console.log("PC Builder clicked")
    }
    setIsMobileMenuOpen(false)
  }

  return (
       
    <nav style={{  marginTop: "10px", }} className="w-full bg-gradient-to-r  from-blue-500 via-blue-600 to-blue-700 shadow-lg relative z-50 container-box">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14">
          {/* Categories Section */}
          <div className="flex-shrink-0">
            <button
              onClick={handleCategoriesClick}
              onKeyDown={(e) => handleKeyDown(e, handleCategoriesClick)}
              aria-label="Open categories menu"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 h-14 flex items-center space-x-2 transition-all duration-200 hover:shadow-lg group focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <Grid3X3 className="w-5 h-5" />
              <span className="font-semibold text-sm">Categories</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.label)}
                onKeyDown={(e) => handleKeyDown(e, () => handleNavClick(item.href, item.label))}
                aria-label={`Navigate to ${item.label}`}
                className={`text-white font-medium text-sm px-3 py-2 rounded transition-all duration-200 hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  activeItem === item.label || item.isActive ? "bg-white/20 shadow-md" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={handleLoginClick}
              onKeyDown={(e) => handleKeyDown(e, handleLoginClick)}
              aria-label="Login to your account"
              className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-3 h-14 flex items-center space-x-2 transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            >
              <User className="w-4 h-4" />
              <span className="font-medium text-sm">Login</span>
            </button>
            <button
              onClick={handlePcBuilderClick}
              onKeyDown={(e) => handleKeyDown(e, handlePcBuilderClick)}
              aria-label="Open PC Builder tool"
              className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 h-14 flex items-center space-x-2 transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            >
              <Monitor className="w-4 h-4" />
              <span className="font-medium text-sm">PC Builder</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onKeyDown={(e) => handleKeyDown(e, () => setIsMobileMenuOpen(!isMobileMenuOpen))}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-800 border-t border-blue-600 absolute top-full left-0 right-0 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.label)}
                  onKeyDown={(e) => handleKeyDown(e, () => handleNavClick(item.href, item.label))}
                  aria-label={`Navigate to ${item.label}`}
                  className={`block w-full text-left text-white font-medium px-3 py-2 rounded transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                    activeItem === item.label || item.isActive ? "bg-white/20" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-blue-600 pt-2 mt-2 space-y-1">
                <button
                  onClick={handleLoginClick}
                  onKeyDown={(e) => handleKeyDown(e, handleLoginClick)}
                  aria-label="Login to your account"
                  className="flex items-center space-x-2 w-full text-left text-white font-medium px-3 py-2 rounded transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
                <button
                  onClick={handlePcBuilderClick}
                  onKeyDown={(e) => handleKeyDown(e, handlePcBuilderClick)}
                  aria-label="Open PC Builder tool"
                  className="flex items-center space-x-2 w-full text-left text-white font-medium px-3 py-2 rounded transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <Monitor className="w-4 h-4" />
                  <span>PC Builder</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>

  )
}

// Demo component to show the navbar in action
export default function App() {
  const [showCategories, setShowCategories] = useState(false)
  
  const handleCategoriesClick = () => {
    setShowCategories(!showCategories)
    console.log("Categories toggled!")
  }

  const handleLoginClick = () => {
    alert("Login functionality would go here!")
  }

  const handlePcBuilderClick = () => {
    alert("PC Builder would open here!")
  }

  return (
    <div className="">
      <DynamicNavbar 
        onCategoriesClick={handleCategoriesClick}
        onLoginClick={handleLoginClick}
        onPcBuilderClick={handlePcBuilderClick}
        activeRoute="GAMING"
      />
      
      <div className="max-w-7xl mx-auto p-8">
        {showCategories && (
          <div className="mt-8 p-4 bg-orange-100 rounded-lg">
            <h2 className="text-xl font-semibold text-orange-800">Categories Menu</h2>
            <p className="text-orange-700">This is where your categories would appear!</p>
          </div>
        )}
      </div>
    </div>
  )
}