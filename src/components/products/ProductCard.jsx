import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  const variant = product.variants?.nodes?.[0];

  const price = product.priceRange.minVariantPrice;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <Link to={`/products/${product.handle}`}>
        {product.featuredImage ? (
          <img
            src={product.featuredImage.url}
            alt={
              product.featuredImage.altText ||
              product.title
            }
            className="h-64 w-full object-cover"
          />
        ) : (
          <div className="flex h-64 items-center justify-center bg-gray-100 text-gray-400">
            No Image
          </div>
        )}
      </Link>

      <div className="p-5">

        <Link to={`/products/${product.handle}`}>
          <h2 className="font-semibold text-gray-900 hover:text-blue-600">
            {product.title}
          </h2>
        </Link>

        <p className="mt-3 text-lg font-bold text-gray-900">
          {price.currencyCode} {price.amount}
        </p>

        <button
          onClick={() => onAddToCart(variant.id)}
          disabled={!variant.availableForSale}
          className="mt-4 w-full rounded-lg bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {variant.availableForSale
            ? "Add to Cart"
            : "Sold Out"}
        </button>

      </div>
    </div>
  );
}