export default function CartSummary({ cart }) {
  if (!cart) {
    return null;
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      <h2 className="text-xl font-semibold">
        Order Summary
      </h2>

      <div className="mt-6 flex justify-between border-b pb-4">
        <span className="text-gray-500">
          Items
        </span>

        <span>
          {cart.totalQuantity}
        </span>
      </div>

      <div className="mt-4 flex justify-between">
        <span className="font-medium">
          Total
        </span>

        <span className="text-xl font-bold">
          {cart.cost.totalAmount.currencyCode}{" "}
          {cart.cost.totalAmount.amount}
        </span>
      </div>

      <a
        href={cart.checkoutUrl}
        className="mt-6 block rounded-lg bg-black px-5 py-3 text-center font-medium text-white hover:bg-gray-800"
      >
        Checkout
      </a>

    </div>
  );
}