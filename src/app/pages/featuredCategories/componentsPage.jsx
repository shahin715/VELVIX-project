// ComponentsPage.jsx
import React from "react";
import ProductListPage from "../../../components/FeaturedCategoriesSection/ProductListPage";
import Img1 from "../../../assets/images/components01.webp";
import Img2 from "../../../assets/images/components02.webp";
import Img3 from "../../../assets/images/components03.webp";
import Img4 from "../../../assets/images/components04.webp";
import Img5 from "../../../assets/images/components05.webp";
import Img6 from "../../../assets/images/components06.webp";
import Img7 from "../../../assets/images/components07.png";
import Img8 from "../../../assets/images/components08.png";
import Img9 from "../../../assets/images/components09.png";
import Img10 from "../../../assets/images/components10.png";
import Img11 from "../../../assets/images/components11.png";
import Img12 from "../../../assets/images/components12.png";
import Img13 from "../../../assets/images/components13.png";
import Img14 from "../../../assets/images/components14.jpg";
import Img15 from "../../../assets/images/components15.jpg";
import Img16 from "../../../assets/images/components16.gif";
import Img17 from "../../../assets/images/components17.gif";
import Img18 from "../../../assets/images/components18.png"


const componentProducts = [
  {
    id: 1,
    title: "GIGABYTE X870 Eagle WIFI7 AM5 LGA 1718, ATX DDR5",
    slug: "asus-prime-b450m",
    price: 285,
    image: Img1,
  },
  {
    id: 2,
    title: "GIGABYTE B650 AORUS ELITE AX V2, AM5 Supports Ryzen 7000",
    slug: "intel-core-i5-12th-gen",
    price: 250,
    image: Img2,
  },
  {
    id: 3,
    title: "GIGABYTE B850 GAMING X WIFI6E AM5 ATX Motherboard, AMD B850 ",
    slug: "corsair-16gb-ddr4-ram",
    price: 245,
    image: Img3,
  },
   {
    id: 4,
    title: "Gigabyte Z790 AORUS ELITE LGA1700 ATX Motherboard",
    slug: "corsair-16gb-ddr4-ram",
    price: 285,
    image: Img4,
  },
   {
    id: 5,
    title: "Gigabyte B760M K V2 DDR4 Intel® B760 Motherboard",
    
    slug: "corsair-16gb-ddr4-ram",
    price: 110,
    image: Img5,
  },
   {
    id: 6,
    title: "GIGABYTE B760M H DDR4 Motherboard (Intel B760/LGA 1700)",
    slug: "corsair-16gb-ddr4-ram",
    price: 320,
    image: Img6,
  },
   {
    id: 7,
    title: "ASRock X670E Pro RS AM5 ATX Motherboard, AMD X670 Chipset, 4x Dual",
    slug: "corsair-16gb-ddr4-ram",
    price: 320,
    image: Img7,
  },
   {
    id: 8,
    title: "ASRock Z890 Pro-A WiFi 7 Motherboard Intel Core Ultra ",
    slug: "corsair-16gb-ddr4-ram",
    price: 235,
    image: Img8,
  },
   {
    id: 9,
    title: "ASUS PRIME B760M-A WIFI: LGA 1700 mATX MB with PCIe 4.0, DDR5",
    slug: "corsair-16gb-ddr4-ram",
    price: 175,
    image: Img9,
  },
   {
    id: 10,
    title: "GIGABYTE B760M H DDR4 Motherboard (Intel B760/LGA 1700)",
    slug: "corsair-16gb-ddr4-ram",
    price: 120,
    image: Img10,
  },
   {
    id: 11,
    title: "GIGABYTE B760M H DDR4 Motherboard (Intel B760/LGA 1700)",
    slug: "corsair-16gb-ddr4-ram",
    price: 120,
    image: Img11,
  },
   {
    id: 12,
    title: "GIGABYTE B760M H DDR4 Motherboard (Intel B760/LGA 1700)",
    slug: "corsair-16gb-ddr4-ram",
    price: 120,
    image: Img12,
  },
   {
    id: 13,
    title: "Intel Core i9-13900K 3.0 GHz 13th Gen Processor,24 Cores 32 Threads",
    slug: "corsair-16gb-ddr4-ram",
    price: 670,
    image: Img13,
  },
    {
    id: 14,
    title: "Intel 13th Gen Core i9-13900K Box Processor LGA 1700,24 Cores",
    slug: "corsair-16gb-ddr4-ram",
    price: 675,
    image: Img13,
  },
    {
    id: 15,
    title: "Intel i9 14900K 14th Gen Raptor Lake Refresh Core Up to 6.00GHz ",
    slug: "corsair-16gb-ddr4-ram",
    price: 630,
    image: Img13,
  },
   {
    id: 16,
    title: "Intel 13th Gen Core i9-13900KF Box Processor 3GHz 24-Core LGA 1700",
    slug: "corsair-16gb-ddr4-ram",
    price: 615,
    image: Img13,
  },
    {
    id: 17,
    title: "AMD Ryzen 7 7800X3D AM5 ,AMD Radeon Graphics, 8 Cores ,16 Threads",
    slug: "corsair-16gb-ddr4-ram",
    price: 490,
    image: Img14,
  },
   {
    id: 18,
    title: "AMD Ryzen 5 7600 Desktop Processor (6-core/12-thread, 38MB cache)",
    slug: "corsair-16gb-ddr4-ram",
    price: 215,
    image: Img15,
  },
    {
    id: 19,
    title: "TEAMGROUP TEAM DELTA RGB DDR4 UDIMM 16B Kit (8GBx2) ",
    slug: "corsair-16gb-ddr4-ram",
    price: 55,
    image: Img16,
  },
    {
    id: 20,
    title: "TEAMGROUP TEAM DELTA RGB DDR4 UDIMM 16B Kit (8GBx2)  ",
    slug: "corsair-16gb-ddr4-ram",
    price: 55,
    image: Img17,
  },
     {
    id: 21,
    title: "Transcend 2TB HDD, StoreJet 25M3C, Type C & Type A supported",
    slug: "corsair-16gb-ddr4-ram",
    price: 55,
    image: Img18,
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
