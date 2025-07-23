export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          About Us
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to VELVIX PC Builder – your one-stop destination for crafting custom gaming and workstation PCs with ease.
          Whether you're a gamer, creator, or professional, we help you build your dream machine with top-tier components.
        </p>
        <div className="text-left bg-white shadow rounded-lg p-6 mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec justo nec nulla ullamcorper facilisis.
            Quisque dapibus, massa non consectetur pretium, justo risus pharetra sapien, vitae cursus velit quam non sapien.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Sed hendrerit massa eget nisl facilisis, ac tempor lorem ultricies.
          </p>
        </div>
        <div className="text-left bg-white shadow rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Custom PC Builder interface that's easy and intuitive</li>
            <li>Top-quality components from trusted brands</li>
            <li>Expert recommendations and compatibility checks</li>
            <li>Secure checkout and dedicated support</li>
            <li>Constant updates with latest generation hardware</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
