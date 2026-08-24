import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "New Season Collection",
      description:
        "Discover our latest collection designed for your everyday style.",
      button: "Shop Now",
      link: "/products",
    },
    {
      title: "Special Offers",
      description:
        "Get amazing deals on our most popular products.",
      button: "Shop Sale",
      link: "/sale",
    },
    {
      title: "New Arrivals",
      description:
        "Explore our newest products and latest trends.",
      button: "Explore Now",
      link: "/products",
    },
  ];

  const bestSellers = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: "$29.99",
      image: "https://placehold.co/600x600",
    },
    {
      id: 2,
      name: "Premium Sneakers",
      price: "$89.99",
      image: "https://placehold.co/600x600",
    },
    {
      id: 3,
      name: "Casual Jacket",
      price: "$119.99",
      image: "https://placehold.co/600x600",
    },
    {
      id: 4,
      name: "Classic Watch",
      price: "$149.99",
      image: "https://placehold.co/600x600",
    },
  ];

  const crossSell = [
    {
      id: 1,
      name: "Leather Wallet",
      price: "$39.99",
      image: "https://placehold.co/400x400",
    },
    {
      id: 2,
      name: "Premium Sunglasses",
      price: "$49.99",
      image: "https://placehold.co/400x400",
    },
    {
      id: 3,
      name: "Leather Belt",
      price: "$34.99",
      image: "https://placehold.co/400x400",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      text: "Great products and very fast delivery. I will definitely shop here again.",
    },
    {
      name: "Sarah Wilson",
      text: "The quality was much better than I expected. Really happy with my purchase.",
    },
    {
      name: "David Brown",
      text: "Excellent shopping experience and very helpful customer service.",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "How to Choose the Perfect Outfit",
      category: "Fashion",
    },
    {
      id: 2,
      title: "5 Fashion Trends You Should Know",
      category: "Trends",
    },
    {
      id: 3,
      title: "How to Build Your Everyday Style",
      category: "Lifestyle",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const slide = slides[currentSlide];

  return (
    <main className="bg-white">

      {/* =========================================
          HERO SLIDER
      ========================================== */}
      <section className="bg-black text-white">
        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6">

          <div className="max-w-2xl">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              MyStore
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
              {slide.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              {slide.description}
            </p>

            <Link
              to={slide.link}
              className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              {slide.button}
            </Link>

          </div>

          {/* Previous */}
          <button
            type="button"
            onClick={previousSlide}
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-700 text-xl hover:bg-white hover:text-black"
          >
            ←
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-700 text-xl hover:bg-white hover:text-black"
          >
            →
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition ${
                  currentSlide === index
                    ? "w-6 bg-white"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          SHOP BY CATEGORY
      ========================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Shop by Category
          </h2>

          <p className="mt-2 text-gray-500">
            Explore our most popular categories.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

          {["Men", "Women", "Kids", "Accessories"].map(
            (category) => (
              <Link
                key={category}
                to={`/products/${category.toLowerCase()}`}
                className="group flex h-52 items-end rounded-xl bg-gray-100 p-6 transition hover:bg-gray-200"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category}
                  </h3>

                  <span className="mt-2 block text-sm text-gray-500 group-hover:text-black">
                    Shop Now →
                  </span>
                </div>
              </Link>
            )
          )}

        </div>
      </section>

      {/* =========================================
          BEST SELLERS
      ========================================== */}
      <section className="bg-gray-50">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="mb-8 flex items-end justify-between">

            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Best Sellers
              </h2>

              <p className="mt-2 text-gray-500">
                Our most popular products.
              </p>
            </div>

            <Link
              to="/products"
              className="text-sm font-medium text-gray-700 hover:text-black hover:underline"
            >
              View All →
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

            {bestSellers.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group"
              >

                <div className="overflow-hidden rounded-xl bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 font-medium text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-1 font-semibold text-gray-700">
                  {product.price}
                </p>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================
          CROSS SELL
      ========================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            You May Also Like
          </h2>

          <p className="mt-2 text-gray-500">
            Complete your purchase with these products.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {crossSell.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group flex items-center gap-5 rounded-xl border border-gray-200 p-4 transition hover:shadow-md"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-24 w-24 rounded-lg object-cover"
              />

              <div>
                <h3 className="font-medium text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-2 font-semibold">
                  {product.price}
                </p>

                <span className="mt-2 block text-sm text-gray-500 group-hover:text-black">
                  View Product →
                </span>
              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* =========================================
          TESTIMONIALS
      ========================================== */}
      <section className="bg-gray-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="mx-auto max-w-2xl text-center">

            <h2 className="text-3xl font-bold">
              What Our Customers Say
            </h2>

            <p className="mt-3 text-gray-400">
              Thousands of customers trust MyStore.
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl bg-gray-900 p-6"
              >

                <div className="text-lg tracking-widest">
                  ★★★★★
                </div>

                <p className="mt-5 leading-7 text-gray-300">
                  "{testimonial.text}"
                </p>

                <p className="mt-5 font-semibold text-white">
                  {testimonial.name}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================
          BLOG
      ========================================== */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-8 flex items-end justify-between">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              From Our Blog
            </h2>

            <p className="mt-2 text-gray-500">
              Tips, trends and inspiration.
            </p>
          </div>

          <Link
            to="/blog"
            className="text-sm font-medium hover:underline"
          >
            View All →
          </Link>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="group"
            >

              <div className="overflow-hidden rounded-xl bg-gray-100">
                <img
                  src="https://placehold.co/800x500"
                  alt={blog.title}
                  className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <p className="mt-4 text-sm text-gray-500">
                {blog.category}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                {blog.title}
              </h3>

              <span className="mt-3 block text-sm font-medium text-gray-700 group-hover:text-black">
                Read Article →
              </span>

            </Link>
          ))}

        </div>
      </section>

      {/* =========================================
          FINAL CTA
      ========================================== */}
      <section className="bg-gray-100">

        <div className="mx-auto max-w-7xl px-6 py-20 text-center">

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Ready to Find Something You Love?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Explore our latest collection and discover products
            selected just for you.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-lg bg-black px-8 py-3 font-medium text-white hover:bg-gray-800"
          >
            Start Shopping
          </Link>

        </div>

      </section>

    </main>
  );
}