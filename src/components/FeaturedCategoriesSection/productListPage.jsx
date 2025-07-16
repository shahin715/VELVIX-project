import React, { useState } from "react";
import FiltersSidebar from "./filtersSidebar";
import SortDropdown from "./sortDropdown";
import Pagination from "./pagination";
import ProductCard from "./productCard";


export default function productListPage({ title, products = [] }) {
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const sortedProducts = [...products].sort((a, b) => {
    return sortOrder === "lowToHigh"
      ? a.price - b.price
      : b.price - a.price;
  });

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">{title}</h1>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
            <FiltersSidebar />
        </div>
        <div className="col-span-12 md:col-span-9">
          <div className="flex items-center justify-between mb-4">
            <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalItems={products.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}