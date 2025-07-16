import React from "react";

export default function pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-orange-500 text-white" : "bg-white"}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
