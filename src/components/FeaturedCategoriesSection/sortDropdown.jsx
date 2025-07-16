import React from "react";

export default function sortDropdown({ sortOrder, setSortOrder }) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium">Sort By:</label>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="lowToHigh">Price Low to High</option>
        <option value="highToLow">Price High to Low</option>
      </select>
    </div>
  );
}