import React from "react";

export default function filtersSidebar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="text-lg font-semibold mb-4">Price Range</h4>
      <input type="range" min={0} max={100000} className="w-full" />

      <h4 className="text-lg font-semibold mt-6 mb-2">Availability</h4>
      <div className="space-y-2">
        <label className="block"><input type="checkbox" className="mr-2" />In Stock</label>
        <label className="block"><input type="checkbox" className="mr-2" />Pre-Order</label>
        <label className="block"><input type="checkbox" className="mr-2" />Up Coming</label>
      </div>
    </div>
  );
}
