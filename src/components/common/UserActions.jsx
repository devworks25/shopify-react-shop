import { Link } from "react-router-dom";

export default function UserActions({ cartCount = 0 }) {
  return (
    <div className="flex items-center gap-5">

      <Link
        to="/login"
        className="text-sm text-gray-600 hover:text-black"
      >
        Login
      </Link>

      {/* Register */}
      <Link
        to="/register"
        className="text-sm text-gray-600 hover:text-black"
      >
        Register
      </Link>
            {/* Cart */}
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

      {/* Login */}

    </div>
  );
}