export default function Corporate() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Corporate Solutions</h1>
          <p className="text-lg text-gray-600 mt-4">
            Empowering businesses with cutting-edge PC building solutions tailored for performance, scale, and productivity.
          </p>
        </div>

        {/* Corporate Services */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bulk PC Orders</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, ex sed placerat viverra,
              metus purus ultricies velit, nec tristique sapien lorem id leo.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enterprise Workstations</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula eu sem sed cursus. 
              Pellentesque habitant morbi tristique senectus et netus et malesuada.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Corporate Partnerships</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur convallis magna, non suscipit
              nunc gravida nec. Fusce laoreet nisi eget nulla luctus, a ultricies elit tincidunt.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Consulting</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus libero a metus tincidunt, 
              sit amet porta ligula sollicitudin.
            </p>
          </div>
        </div>

        {/* Contact Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800">Interested in partnering with us?</h3>
          <p className="text-gray-600 mt-2 mb-6">Contact our corporate sales team to explore tailored PC building solutions.</p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Contact Corporate Sales
          </a>
        </div>
      </div>
    </div>
  )
}
