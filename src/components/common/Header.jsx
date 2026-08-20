import { Link } from "react-router-dom";

export default function Header({ cartCount = 0 }) {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="text-2xl font-bold text-gray-900"
        >
          MyStore
        </Link>

        <nav className="flex items-center gap-6">

          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-sm text-gray-600 hover:text-black"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="relative text-sm font-medium text-gray-900"
          >
            Cart

            {cartCount > 0 && (
              <span className="ml-2 rounded-full bg-black px-2 py-1 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

        </nav>

      </div>
    </header>
  );
}