// data/allProductsData.js
import Img1 from "../../../../assets/images/components02.webp";
import Img2 from "../../../../assets/images/components02.webp";

const allProductsData = {
  components: [
    {
      id: 1,
      title: "GIGABYTE X870 Eagle WIFI7",
      slug: "gigabyte-x870-eagle-wifi7",
      price: 285,
      rating: 4,
      image: Img1,
      specs: ["ATX", "DDR5", "PCIe 5.0", "Wi-Fi 7", "USB4", "EZ-Latch"],
    },
    {
      id: 2,
      title: "GIGABYTE B650 AORUS ELITE AX V2",
      slug: "gigabyte-x870-eagle-wifi7",
      price: 250,
      rating: 5,
      image: Img2,
      specs: ["AM5", "Ryzen 7000", "DDR5", "ATX", "Wi-Fi 6E"],
    },
  ],
};

export default allProductsData;