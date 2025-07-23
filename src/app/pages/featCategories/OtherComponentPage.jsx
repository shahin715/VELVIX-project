import React from "react";
import ProductListPage from "../../../components/FeaturedCategoriesSection/productListPage";
import componentProducts from "./data/OtherComponentsData";

export default function componentsPage() {
  return (
    <ProductListPage
      title="Gaming"
      products={componentProducts}
      basePath="components"
    />
  );
}

