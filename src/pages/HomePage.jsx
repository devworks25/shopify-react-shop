import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-gray-100">

      <section className="bg-black px-6 py-24 text-white">

        <div className="mx-auto max-w-7xl">

          <h1 className="max-w-3xl text-5xl font-bold">
            Welcome to MyStore
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Discover our latest products and
            collections.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-gray-200"
          >
            Shop Now
          </Link>

        </div>

      </section>

    </div>
  );
}