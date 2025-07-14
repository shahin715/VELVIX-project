import ProductGrid from "../shared/ProductGrid";
import Img1 from '../../assets/images/featured1.png';
import Img2 from '../../assets/images/featured2.jpg';
import Img3 from '../../assets/images/featured3.png';
import Img4 from '../../assets/images/featured4.png';


const allProducts = [
  { id: 1,  title: "Intel 12th Gen Core i5-12400F LGA 1700 Dual  ", price: "820", image: Img1 },
  { id: 2, title: "AMD Ryzen 5 7600 Desktop Processor ", price: "22", image: Img2 },
  { id: 3, title: "Intel Core i9-14900K Tray processor ", price: "110", image: Img3 },
  { id: 4, title: "Intel 13th Gen Core i9-13900KF Box Processor ", price: "52", image: Img4 },
  
];

export default function FeaturedCPU() {
  return (
    <div style={{ marginTop: "40px" }}>
      <ProductGrid 
        heading="Featured CPU" 
        products={allProducts} 
        limit={4} 
        columns={6} // ✅ This sets 6 cards per row
      />
    </div>
  );
}
