import React from "react";
import ProductListPage from "../../../components/FeaturedCategoriesSection/productListPage";
import componentProducts from "./data/OtherComponentsData";

export default function gamingPage() {
  return (
    <ProductListPage
      title="Components"
      products={componentProducts}
      basePath="components"
    />
  );
}