import { PromoCard } from "./PromoCard"
import { ProductCard } from "./ProductCard"
import { promoBanners, featuredProducts } from "./data"

export default function ComponentsLanding() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <main className="container mx-auto space-y-8">
        {/* Promotional Banners Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promoBanners.map((banner) => (
            <PromoCard
              key={banner.id}
              src={banner.src}
              alt={banner.alt}
              width={banner.width}
              height={banner.height}
            />
          ))}
        </section>

        {/* Featured Products Section */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                productName={product.productName}
                price={product.price}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
