import { useState } from "react";
import { Link } from "react-router-dom";

export default function MegaMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="w-full">

      {/* =================================
          DESKTOP MENU
      ================================= */}
      <div className="hidden items-center justify-center gap-8 md:flex">

        <Link
          to="/"
          className="text-sm text-gray-600 hover:text-black"
        >
          Home
        </Link>

        {/* Men */}
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu("men")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <button
            type="button"
            className="text-sm text-gray-600 hover:text-black"
          >
            Men
          </button>

          {openMenu === "men" && (
            <div className="absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-5">
              <div className="grid grid-cols-3 gap-8 rounded-lg border bg-white p-6 shadow-xl">

                <MenuColumn
                  title="Clothing"
                  links={[
                    ["Shirts", "/products/men/shirts"],
                    ["Jeans", "/products/men/jeans"],
                    ["T-Shirts", "/products/men/tshirts"],
                  ]}
                />

                <MenuColumn
                  title="Footwear"
                  links={[
                    ["Shoes", "/products/men/shoes"],
                    ["Sneakers", "/products/men/sneakers"],
                    ["Boots", "/products/men/boots"],
                  ]}
                />

                <MenuColumn
                  title="Accessories"
                  links={[
                    ["Watches", "/products/men/watches"],
                    ["Belts", "/products/men/belts"],
                    ["Wallets", "/products/men/wallets"],
                  ]}
                />

              </div>
            </div>
          )}
        </div>

        {/* Women */}
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu("women")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <button
            type="button"
            className="text-sm text-gray-600 hover:text-black"
          >
            Women
          </button>

          {openMenu === "women" && (
            <div className="absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-5">
              <div className="grid grid-cols-3 gap-8 rounded-lg border bg-white p-6 shadow-xl">

                <MenuColumn
                  title="Clothing"
                  links={[
                    ["Dresses", "/products/women/dresses"],
                    ["Tops", "/products/women/tops"],
                    ["Jeans", "/products/women/jeans"],
                  ]}
                />

                <MenuColumn
                  title="Footwear"
                  links={[
                    ["Shoes", "/products/women/shoes"],
                    ["Heels", "/products/women/heels"],
                    ["Sneakers", "/products/women/sneakers"],
                  ]}
                />

                <MenuColumn
                  title="Accessories"
                  links={[
                    ["Bags", "/products/women/bags"],
                    ["Jewellery", "/products/women/jewellery"],
                    ["Watches", "/products/women/watches"],
                  ]}
                />

              </div>
            </div>
          )}
        </div>

        <Link
          to="/sale"
          className="text-sm text-gray-600 hover:text-black"
        >
          Sales
        </Link>

        <Link
          to="/blog"
          className="text-sm text-gray-600 hover:text-black"
        >
          Blog
        </Link>

      </div>


      {/* =================================
          MOBILE BUTTON
      ================================= */}
      <div className="flex justify-end md:hidden">

        <button
          type="button"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setOpenMenu(null);
          }}
          className="rounded-md border border-gray-300 px-3 py-2 text-xl text-gray-700"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* =================================
          MOBILE MENU
      ================================= */}
      {mobileOpen && (
        <div className="mt-4 border-t bg-white md:hidden">

          <div className="divide-y">

            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-4 text-sm font-medium text-gray-700"
            >
              Home
            </Link>


            {/* Men */}
            <div>

              <button
                type="button"
                onClick={() => toggleMenu("mobile-men")}
                className="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-gray-700"
              >
                <span>Men</span>

                <span className="text-lg">
                  {openMenu === "mobile-men" ? "−" : "+"}
                </span>
              </button>

              {openMenu === "mobile-men" && (
                <div className="bg-gray-50 px-8 py-3">

                  <Link
                    to="/products/men/shirts"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-gray-600"
                  >
                    Shirts
                  </Link>

                  <Link
                    to="/products/men/jeans"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-gray-600"
                  >
                    Jeans
                  </Link>

                  <Link
                    to="/products/men/shoes"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-gray-600"
                  >
                    Shoes
                  </Link>

                  <Link
                    to="/products/men"
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-semibold text-black"
                  >
                    View All Men →
                  </Link>

                </div>
              )}

            </div>


            {/* Women */}
            <div>

              <button
                type="button"
                onClick={() => toggleMenu("mobile-women")}
                className="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-gray-700"
              >
                <span>Women</span>

                <span className="text-lg">
                  {openMenu === "mobile-women" ? "−" : "+"}
                </span>
              </button>

              {openMenu === "mobile-women" && (
                <div className="bg-gray-50 px-8 py-3">

                  <Link
                    to="/products/women/dresses"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-gray-600"
                  >
                    Dresses
                  </Link>

                  <Link
                    to="/products/women/tops"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-gray-600"
                  >
                    Tops
                  </Link>

                  <Link
                    to="/products/women/shoes"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-gray-600"
                  >
                    Shoes
                  </Link>

                  <Link
                    to="/products/women"
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-semibold text-black"
                  >
                    View All Women →
                  </Link>

                </div>
              )}

            </div>


            {/* Sales */}
            <Link
              to="/sale"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-4 text-sm font-medium text-gray-700"
            >
              Sales
            </Link>


            {/* Blog */}
            <Link
              to="/blog"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-4 text-sm font-medium text-gray-700"
            >
              Blog
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}


/* =================================
   MENU COLUMN
================================= */

function MenuColumn({ title, links }) {
  return (
    <div>

      <h3 className="mb-4 font-semibold text-gray-900">
        {title}
      </h3>

      <div className="space-y-3">

        {links.map(([name, url]) => (
          <Link
            key={url}
            to={url}
            className="block text-sm text-gray-600 hover:text-black"
          >
            {name}
          </Link>
        ))}

      </div>

    </div>
  );
}