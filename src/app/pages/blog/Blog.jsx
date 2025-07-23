export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Best Processor for Gaming",
      date: "July 23, 2025",
      author: "Tech Editor",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Learn how to pick the right CPU for high performance and gaming value.",
    },
    {
      id: 2,
      title: "Top 5 Graphics Cards for 4K Gaming in 2025",
      date: "July 20, 2025",
      author: "BuildMaster",
      summary: "From RTX 4090 to mid-range beasts, we break down the top GPUs dominating the 4K scene this year.",
    },
    {
      id: 3,
      title: "Does RAM Speed Really Matter? A Deep Dive",
      date: "July 15, 2025",
      author: "Velvix Team",
      summary: "We test and analyze RAM speeds and their real-world impact on gaming, multitasking, and productivity.",
    },
    {
      id: 4,
      title: "How to Build a Budget PC Under $800",
      date: "July 10, 2025",
      author: "DIY Builder",
      summary: "Step-by-step guide to assemble a solid gaming or workstation PC without breaking the bank.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Tech Blog</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Read the latest PC building tips, hardware reviews, and performance guides from our team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{post.date} · {post.author}</p>
              <p className="text-gray-700 text-sm mb-4">{post.summary}</p>
              <button className="text-blue-600 font-medium hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
