export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-950 text-gray-300">

      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="text-xl font-semibold text-white">
              Subscribe to our newsletter
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Get the latest products, offers and updates directly in your inbox.
            </p>
          </div>

          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-l-md border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-white"
            />

            <button
              type="submit"
              className="rounded-r-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-5">

        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white">
            MyStore
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
            Discover quality products at great prices. Shop the latest
            collections and enjoy a simple and secure shopping experience.
          </p>

          {/* Social */}
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="hover:text-white"
              aria-label="Facebook"
            >
              Facebook
            </a>

            <a
              href="#"
              className="hover:text-white"
              aria-label="Instagram"
            >
              Instagram
            </a>

            <a
              href="#"
              className="hover:text-white"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold text-white">
            Shop
          </h3>

          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="/products" className="hover:text-white">
                All Products
              </a>
            </li>

            <li>
              <a href="/products/men" className="hover:text-white">
                Men
              </a>
            </li>

            <li>
              <a href="/products/women" className="hover:text-white">
                Women
              </a>
            </li>

            <li>
              <a href="/products/kids" className="hover:text-white">
                Kids
              </a>
            </li>

            <li>
              <a href="/sale" className="hover:text-white">
                Sale
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-white">
            Customer Service
          </h3>

          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>

            <li>
              <a href="/shipping" className="hover:text-white">
                Shipping & Delivery
              </a>
            </li>

            <li>
              <a href="/returns" className="hover:text-white">
                Returns & Refunds
              </a>
            </li>

            <li>
              <a href="/faq" className="hover:text-white">
                FAQ
              </a>
            </li>

            <li>
              <a href="/track-order" className="hover:text-white">
                Track Order
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white">
            Company
          </h3>

          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>

            <li>
              <a href="/careers" className="hover:text-white">
                Careers
              </a>
            </li>

            <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>

            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="/terms" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} MyStore. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span>Secure Payments</span>
            <span>Fast Delivery</span>
            <span>Easy Returns</span>
          </div>

        </div>
      </div>

    </footer>
  );
}