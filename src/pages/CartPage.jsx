import { useEffect, useState } from "react";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import {
  getCart,
  removeCartLine,
} from "../services/cartService";

export default function CartPage({ cartId, onCartUpdated }) {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCart() {
      if (!cartId) {
        setLoading(false);
        return;
      }

      const data = await getCart(cartId);

      setCart(data);
      setLoading(false);
    }

    loadCart();
  }, [cartId]);

  const handleRemove = async (lineId) => {
    const updatedCart = await removeCartLine(
      cartId,
      lineId
    );

    setCart(updatedCart);

    onCartUpdated?.(updatedCart);
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading cart...
      </div>
    );
  }

  if (!cart || !cart.totalQuantity) {
    return (
      <div className="py-20 text-center">

        <h1 className="text-2xl font-bold">
          Your cart is empty
        </h1>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <h1 className="mb-8 text-3xl font-bold">
          Shopping Cart
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-xl bg-white px-6 lg:col-span-2">

            {cart.lines.nodes.map((line) => (
              <CartItem
                key={line.id}
                line={line}
                onRemove={handleRemove}
              />
            ))}

          </div>

          <CartSummary cart={cart} />

        </div>

      </div>

    </div>
  );
}