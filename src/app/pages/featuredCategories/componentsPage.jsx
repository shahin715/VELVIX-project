import React from "react";
import ProductListPage from "../../../components/FeaturedCategoriesSection/productListPage";
import componentProducts from "../../pages/FeaturedCategories/componentsData";

export default function ComponentsPage() {
  return (
    <ProductListPage
      title="Components"
      products={componentProducts}
      basePath="components"
    />
  );
}

