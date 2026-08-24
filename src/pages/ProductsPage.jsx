import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductFilter from "../components/products/ProductFilter";
import ProductGrid from "../components/products/ProductGrid";
import Pagination from "../components/common/Pagination";
import {
  getProducts,
  getProductsByCollectionHandle,
} from "../services/productService";

export default function ProductsPage({ onAddToCart }) {
  const { handle } = useParams();

  const [products, setProducts] = useState([]);

  const [collection, setCollection] = useState(null);

  const [search, setSearch] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const [sort, setSort] = useState("featured");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  /*
   * Load products
   */
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        let data;

        /*
         * Collection page
         *
         * /products/men
         * /products/women
         * /products/shoes
         */
        if (handle) {
          data = await getProductsByCollectionHandle(handle);

          setCollection(data);

          setProducts(data.products?.nodes || []);
        } else {
          /*
           * All products page
           *
           * /products
           */
          data = await getProducts({
            first: 20,
            query: search,
          });

          setCollection(null);
          setProducts(data);
        }
      } catch (error) {
        console.error(error);

        setError(error.message || "Unable to load products.");

        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(loadProducts, search ? 300 : 0);

    return () => clearTimeout(timer);
  }, [handle, search]);

  /*
   * Price filtering
   */
  const filteredProducts = products.filter((product) => {
    const price = Number(product.priceRange?.minVariantPrice?.amount || 0);

    if (minPrice && price < Number(minPrice)) {
      return false;
    }

    if (maxPrice && price > Number(maxPrice)) {
      return false;
    }

    if (
      size &&
      !product.variants?.nodes?.some((variant) =>
        variant.selectedOptions?.some(
          (option) =>
            option.name.toLowerCase() === "size" && option.value === size,
        ),
      )
    ) {
      return false;
    }

    if (
      color &&
      !product.variants?.nodes?.some((variant) =>
        variant.selectedOptions?.some(
          (option) =>
            option.name.toLowerCase() === "color" && option.value === color,
        ),
      )
    ) {
      return false;
    }

    return true;
  });
  /*
   * Sorting
   */
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = Number(a.priceRange?.minVariantPrice?.amount || 0);

    const priceB = Number(b.priceRange?.minVariantPrice?.amount || 0);

    switch (sort) {
      case "price-low":
        return priceA - priceB;

      case "price-high":
        return priceB - priceA;

      case "name-az":
        return a.title.localeCompare(b.title);

      case "name-za":
        return b.title.localeCompare(a.title);

      default:
        return 0;
    }
  });

  /*
   * Clear filters
   */
  const clearFilters = () => {
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
    setSize("");
    setColor("");
    setSort("featured");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* =========================================
          PAGE HEADER
      ========================================== */}

      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-gray-400">Home / Products</p>

              <h1 className="mt-2 text-3xl font-bold capitalize text-gray-900">
                {collection?.title || "Products"}
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                {collection?.description ||
                  "Browse our latest products and collections."}
              </p>
            </div>

            {/* Desktop Sort */}
            <div className="hidden sm:block">
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-black"
              >
                <option value="featured">Featured</option>

                <option value="price-low">Price: Low to High</option>

                <option value="price-high">Price: High to Low</option>

                <option value="name-az">Name: A-Z</option>

                <option value="name-za">Name: Z-A</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE FILTER BAR
      ========================================== */}

      <div className="border-b bg-white sm:hidden">
        <div className="grid grid-cols-2">
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="border-r py-4 text-sm font-medium text-gray-700"
          >
            Filters
          </button>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="bg-white px-4 py-4 text-center text-sm font-medium text-gray-700 outline-none"
          >
            <option value="featured">Sort</option>

            <option value="price-low">Price: Low</option>

            <option value="price-high">Price: High</option>

            <option value="name-az">Name: A-Z</option>
          </select>
        </div>
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* =====================================
              DESKTOP FILTER
          ====================================== */}

          <aside className="hidden lg:block">
            <ProductFilter
              search={search}
              setSearch={setSearch}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              size={size}
              setSize={setSize}
              color={color}
              setColor={setColor}
              onClear={clearFilters}
            />
          </aside>

          {/* =====================================
              PRODUCT AREA
          ====================================== */}

          <section className="lg:col-span-3">
            {/* Error */}
            {error && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Result information */}
            {!loading && !error && (
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  {sortedProducts.length}{" "}
                  {sortedProducts.length === 1 ? "product" : "products"}
                </p>

                {/* Active filters */}
                {(search || minPrice || maxPrice) && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-sm font-medium text-gray-700 underline hover:text-black"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}

            {/* Loading */}
            {loading && <ProductSkeleton />}

            {/* Empty */}
            {!loading && !error && sortedProducts.length === 0 && (
              <div className="rounded-xl bg-white px-6 py-20 text-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  No products found
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Try changing your search or filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Products */}
            {!loading && !error && sortedProducts.length > 0 && (
              <ProductGrid
                products={sortedProducts}
                onAddToCart={onAddToCart}
              />
            )}
          </section>
        </div>
      </div>

      {/* =========================================
          MOBILE FILTER DRAWER
      ========================================== */}

      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileFilterOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <h2 className="font-semibold text-gray-900">Filters</h2>

              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="text-2xl text-gray-500"
              >
                ×
              </button>
            </div>

            <div className="p-5">
              <ProductFilter
                search={search}
                setSearch={setSearch}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                size={size}
                setSize={setSize}
                color={color}
                setColor={setColor}
                onClear={clearFilters}
              />

              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="mt-8 w-full rounded-lg bg-black py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================
   PRODUCT SKELETON
========================================= */

function ProductSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index}>
          <div className="aspect-square animate-pulse rounded-xl bg-gray-200" />

          <div className="mt-4 h-4 animate-pulse rounded bg-gray-200" />

          <div className="mt-2 h-4 w-20 animate-pulse rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}
