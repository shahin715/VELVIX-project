import ProductGrid from "../shared/ProductGrid";
import Img1 from "../../assets/images/Deals_today1.jpg";
import Img2 from "../../assets/images/Dealstoday2.png";
import Img3 from "../../assets/images/Deals_today3.png";
import Img4 from "../../assets/images/Deals_today4.png";
import Img5 from "../../assets/images/Deals_today5.webp";
import Img6 from "../../assets/images/Deals_today6.webp";

const allProducts = [
  { id: 1, title: "ZOTAC GAMING GeForce RTX 5060 ", price: "820", image: Img1 },
  { id: 2, title: "ASUS PRIME B760M-A WIFI", price: "22", image: Img2 },
  {
    id: 3,
    title: "ASUS PRIME H610M-A WIFI: LGA 1700 mATX",
    price: "110",
    image: Img3,
  },
  {
    id: 4,
    title: "Lexar ARES RGB DDR5 RAM 32GB Kit",
    price: "52",
    image: Img4,
  },
  {
    id: 5,
    title: "Gigabyte Z790 Eagle AX LGA 1700 ATX ",
    price: "52",
    image: Img5,
  },
  {
    id: 6,
    title: "WD Black 8TB SSD NVMe M.2 SN850X ",
    price: "52",
    image: Img6,
  },
];

export default function DealsToday() {
  return (
    <div style={{ marginTop: "40px" }}>
      <ProductGrid
        heading="Deals Today"
        products={allProducts}
        limit={6}
        columns={6}
        linkTo={(product) => `/deals-today/${product.id}`}
      />
    </div>
  );
}
