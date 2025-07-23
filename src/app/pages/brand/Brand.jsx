export default function Brand() {
  const brands = [
    { name: "Intel", color: "bg-blue-600 text-white" },
    { name: "AMD", color: "bg-red-600 text-white" },
    { name: "NVIDIA", color: "bg-green-600 text-white" },
    { name: "ASUS", color: "bg-purple-700 text-white" },
    { name: "MSI", color: "bg-gray-800 text-white" },
    { name: "Gigabyte", color: "bg-orange-500 text-white" },
    { name: "ZOTAC", color: "bg-yellow-500 text-black" },
    { name: "Corsair", color: "bg-black text-yellow-300" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Our Trusted Brands</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We collaborate with industry-leading brands to provide premium quality components for every custom PC build.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`rounded-lg p-6 text-xl font-semibold text-center shadow-md hover:shadow-lg transition ${brand.color}`}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
