import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  onAddToCart,
}) {
  if (!products.length) {
    return (
      <div className="rounded-xl bg-white p-10 text-center">
        <p className="text-gray-500">
          No products found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}