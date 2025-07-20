export default function PriceRangeFilter({
  minPrice,
  maxPrice,
  onSliderChange,
  onMinChange,
  onMaxChange,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-medium">Price Range</h3>
      </div>
      <div className="p-4 space-y-4">
        <div className="relative">
          <input
            type="range"
            min="0"
            max="100000"
            step="1000"
            value={minPrice}
            onChange={onSliderChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="0"
            value={minPrice}
            onChange={onMinChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            placeholder="100000"
            value={maxPrice}
            onChange={onMaxChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}
