import { useEffect, useState } from "react";
import ProductFilter from "../components/products/ProductFilter";
import ProductGrid from "../components/products/ProductGrid";
import {
  getProducts,
} from "../services/productService";

export default function ProductsPage({
  onAddToCart,
}) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const data = await getProducts({
          first: 20,
          query: search,
        });

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(loadProducts, 300);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Products
          </h1>

          <p className="mt-2 text-gray-500">
            Browse our latest products.
          </p>
        </div>

        <ProductFilter
          search={search}
          setSearch={setSearch}
        />

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {loading ? (
          <div className="py-20 text-center text-gray-500">
            Loading products...
          </div>
        ) : (
          <ProductGrid
            products={products}
            onAddToCart={onAddToCart}
          />
        )}

      </div>

    </div>
  );
}