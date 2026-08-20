import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByHandle } from "../services/productService";

export default function ProductDetailsPage({
  onAddToCart,
}) {
  const { handle } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      const data = await getProductByHandle(handle);

      setProduct(data);

      if (data?.variants?.nodes?.length) {
        setSelectedVariant(data.variants.nodes[0]);
      }

      setLoading(false);
    }

    loadProduct();
  }, [handle]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-20 text-center">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-2">

          <div>
            <img
              src={product.featuredImage?.url}
              alt={product.title}
              className="w-full rounded-xl bg-white object-cover"
            />
          </div>

          <div className="rounded-xl bg-white p-8">

            <h1 className="text-3xl font-bold">
              {product.title}
            </h1>

            <p className="mt-4 text-gray-600">
              {product.description}
            </p>

            <div className="mt-6 text-2xl font-bold">
              {selectedVariant?.price.currencyCode}{" "}
              {selectedVariant?.price.amount}
            </div>

            <div className="mt-8">

              <label className="mb-2 block font-medium">
                Variant
              </label>

              <select
                value={selectedVariant?.id}
                onChange={(e) => {
                  const variant =
                    product.variants.nodes.find(
                      (item) =>
                        item.id === e.target.value
                    );

                  setSelectedVariant(variant);
                }}
                className="w-full rounded-lg border px-4 py-3"
              >
                {product.variants.nodes.map(
                  (variant) => (
                    <option
                      key={variant.id}
                      value={variant.id}
                    >
                      {variant.title}
                    </option>
                  )
                )}
              </select>

            </div>

            <button
              disabled={!selectedVariant?.availableForSale}
              onClick={() =>
                onAddToCart(selectedVariant.id)
              }
              className="mt-8 w-full rounded-lg bg-black px-6 py-4 font-medium text-white hover:bg-gray-800 disabled:bg-gray-300"
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}