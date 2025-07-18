import React from "react";
import ProductListPage from "../../../components/FeaturedCategoriesSection/productListPage";
import componentProducts from "./data/componentsData";

export default function ComponentsPage() {
  return (
    <ProductListPage
      title="Components"
      products={componentProducts}
      basePath="components"
    />
  );
}