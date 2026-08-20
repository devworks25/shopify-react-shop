export default function CartItem({ line, onRemove }) {
  const merchandise = line.merchandise;

  return (
    <div className="flex gap-4 border-b py-5">

      <img
        src={merchandise.product.featuredImage?.url}
        alt={merchandise.product.title}
        className="h-24 w-24 rounded-lg object-cover"
      />

      <div className="flex flex-1 justify-between">

        <div>
          <h3 className="font-medium">
            {merchandise.product.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {merchandise.title}
          </p>

          <p className="mt-2 text-sm">
            Quantity: {line.quantity}
          </p>
        </div>

        <div className="text-right">

          <p className="font-semibold">
            {merchandise.price.currencyCode}{" "}
            {merchandise.price.amount}
          </p>

          <button
            onClick={() => onRemove(line.id)}
            className="mt-3 text-sm text-red-600 hover:text-red-800"
          >
            Remove
          </button>

        </div>

      </div>
    </div>
  );
}