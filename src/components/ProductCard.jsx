function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-44 w-full object-cover"
      />

      {/* Details */}
      <div className="p-4">
        <p className="text-xs text-gray-500">{product.category}</p>

        <h3 className="mt-1 text-base font-medium text-gray-900">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-amber-500">★ {product.rating}</p>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-amber-600">
            ৳{product.price.toLocaleString()}
          </span>

          <button className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white transition hover:bg-blue-700">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;