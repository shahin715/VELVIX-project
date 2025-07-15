import Img1 from "../../assets/images/featuredCategories01.png";
import Img2 from "../../assets/images/featuredCategories02.png";
import Img3 from "../../assets/images/featuredCategories03.png";
import Img4 from "../../assets/images/featuredCategories04.png";
import Img5 from "../../assets/images/featuredCategories05.png";
import Img6 from "../../assets/images/featuredCategories06.jpg";
import Img7 from "../../assets/images/featuredCategories07.png";
import Img8 from "../../assets/images/featuredCategories08.png";
import Img9 from "../../assets/images/featuredCategories09.png";
import Img10 from "../../assets/images/featuredCategories10.png";
import Img11 from "../../assets/images/featuredCategories10.png";
import Img12 from "../../assets/images/featuredCategories12.png";
import Img13 from "../../assets/images/featuredCategories13.png";
import Img14 from "../../assets/images/featuredCategories14.png";
import Img15 from "../../assets/images/featuredCategories15.png";
import Img16 from "../../assets/images/featuredCategories16.png";

const categories = [
  { name: "Components", icon: Img1, href: "/categories/components" },
  { name: "Gaming", icon: Img2, href: "/categories/gaming" },
  { name: "Networking", icon: Img3, href: "/categories/networking" },
  { name: "Monitor", icon: Img4, href: "/categories/monitor" },
  { name: "Scanner", icon: Img5, href: "/categories/scanner" },
  {
    name: "Custom Gaming PC",
    icon: Img6,
    href: "/categories/custom-gaming-pc",
  },
  { name: "Gaming PC", icon: Img7, href: "/categories/gaming-pc" },
  {
    name: "Gaming Motherboard",
    icon: Img8,
    href: "/categories/gaming-motherboard",
  },
  { name: "Processor (CPU)", icon: Img9, href: "/categories/processor-cpu" },
  { name: "Memory(Ram)", icon: Img10, href: "/categories/memory-ram" },
  { name: "Gaming Ram", icon: Img11, href: "/categories/gaming-ram" },
  { name: "Graphic Card", icon: Img12, href: "/categories/graphic-card" },
  { name: "Motherboard", icon: Img13, href: "/categories/motherboard" },
  { name: "Gaming Chassis", icon: Img14, href: "/categories/gaming-chassis" },
  { name: "SSD (Internal)", icon: Img15, href: "/categories/ssd-internal" },
  { name: "Gaming Keyboard", icon: Img16, href: "/categories/gaming-keyboard" },
];

export default function FeaturedCategories() {
  return (
    <section className="w-full py-12 md:py-2 lg:py-6 bg-gray-50 ">
      {/* Heading Section */}
      <div className="flex flex-col items-start px-4 md:px-6 mb-8 container-box">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-800">
            Featured Categories
          </h2>
          <p className="text-base md:text-lg text-gray-500">
            Select Your Desired Product From Your Featured Category!
          </p>
        </div>
      </div>
      {/* Categories Grid */}
      <div className="px-4 md:px-6 bg-gradient-to-b from-green-50 to-white ">
        <div className="mx-auto grid max-w-7xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group">
              <div className="flex flex-col items-center justify-center p-6 space-y-3 rounded-lg shadow-sm transition-all hover:shadow-md hover:scale-105 bg-white border border-gray-200">
                <img
                  src={category.icon || "/placeholder.svg"}
                  alt={category.name}
                  width="64"
                  height="64"
                  className="h-16 w-16 text-gray-600 group-hover:text-gray-900 transition-colors"
                />
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {category.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
