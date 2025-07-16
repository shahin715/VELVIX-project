// ComponentsPage.jsx
import React from "react";
import ProductListPage from "../../../components/FeaturedCategoriesSection/ProductListPage";
import Img1 from "../../../assets/images/featuredCategories01.png";
import Img2 from "../../../assets/images/featuredCategories02.png";
import Img3 from "../../../assets/images/featuredCategories03.png";

const componentProducts = [
  {
    id: 1,
    title: "ASUS Prime B450M Motherboard",
    slug: "asus-prime-b450m",
    price: 250,
    image: Img1,
  },
  {
    id: 2,
    title: "Intel Core i5 12th Gen Processor",
    slug: "intel-core-i5-12th-gen",
    price: 550,
    image: Img2,
  },
  {
    id: 3,
    title: "Corsair 16GB DDR4 RAM",
    slug: "corsair-16gb-ddr4-ram",
    price: 150,
    image: Img3,
  },
  // Add more...
];

export default function ComponentsPage() {
  return (
    <ProductListPage
      title="Components"
      products={componentProducts}
      basePath="components"
    />
  );
}
