export function PromoCard({ src, alt, width, height }) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        loading="lazy"
      />
    </div>
  )
}
