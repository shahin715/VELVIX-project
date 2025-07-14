import ProductGrid from "../shared/ProductGrid";
import Img1 from '../../assets/images/promotional1.webp';
import Img2 from '../../assets/images/promotional2.png';
import Img3 from '../../assets/images/promotional3.png';
import Img4 from '../../assets/images/promotional4.png';
const allProducts = [
  { id: 1,  title: "CP BUDGET GAMING/WORKSTATION BUNDLE SET DESKTOP COMPUTER",price: "820", image: Img1 },
  { id: 2, title: "Dual Band Tenda U9 11AC USB WiFi Adapter - AC650 Wireless Network Card", price: "22", image: Img2 },
  { id: 3, title: "Galax Vivance-24F Gaming Monitor, 24 FHD Fast IPS Display", price: "110", image: Img3 },
  { id: 4, title: "Plustek OpticSlim 2610 Pro A4 flatbed Scanner 1200 dpi Resolution", price: "52", image: Img4 },
];

export default function PromotionalCampaign() {
  return (
    <div style={{ marginTop: "40px" }}>
       <ProductGrid heading="Promotional Offers" products={allProducts} limit={4} />
    </div>
    
  );
}