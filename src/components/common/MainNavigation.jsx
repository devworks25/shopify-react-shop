import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getShopifyMenu } from "../../services/commonServices";

export default function MegaMenu() {
  const [menu, setMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    async function loadMenu() {
      try {
        const data = await getShopifyMenu("main-menu");
        setMenu(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadMenu();
  }, []);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  if (!menu) {
    return null;
  }

  return (
    <nav className="w-full">

      {/* DESKTOP */}
      <div className="hidden items-center justify-center gap-8 md:flex">

        {menu.items.map((item) => {
          const hasChildren = item.items?.length > 0;

          if (!hasChildren) {
            return (
              <Link
                key={item.id}
                to={item.url || "/"}
                className="text-sm text-gray-600 hover:text-black"
              >
                {item.title}
              </Link>
            );
          }

          return (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.id)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-black"
              >
                {item.title}
              </button>

              {openMenu === item.id && (
                <div className="absolute left-1/2 top-full z-50 w-[700px] -translate-x-1/2 pt-5">
                  <div className="grid grid-cols-3 gap-8 rounded-lg border bg-white p-6 shadow-xl">

                    {item.items.map((column) => (
                      <MenuColumn
                        key={column.id}
                        item={column}
                      />
                    ))}

                  </div>
                </div>
              )}
            </div>
          );
        })}

      </div>

      {/* MOBILE BUTTON */}
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

      {/* MOBILE */}
      {mobileOpen && (
        <div className="mt-4 border-t bg-white md:hidden">
          <div className="divide-y">

            {menu.items.map((item) => {
              const hasChildren = item.items?.length > 0;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.id}
                    to={item.url || "/"}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-4 text-sm font-medium text-gray-700"
                  >
                    {item.title}
                  </Link>
                );
              }

              return (
                <div key={item.id}>

                  <button
                    type="button"
                    onClick={() => toggleMenu(`mobile-${item.id}`)}
                    className="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-gray-700"
                  >
                    <span>{item.title}</span>

                    <span className="text-lg">
                      {openMenu === `mobile-${item.id}` ? "−" : "+"}
                    </span>
                  </button>

                  {openMenu === `mobile-${item.id}` && (
                    <div className="bg-gray-50 px-8 py-3">

                      {item.items.map((child) => (
                        <div key={child.id}>

                          <Link
                            to={child.url || "/"}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm font-medium text-gray-700"
                          >
                            {child.title}
                          </Link>

                          {child.items?.map((subChild) => (
                            <Link
                              key={subChild.id}
                              to={subChild.url || "/"}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1 pl-4 text-sm text-gray-500"
                            >
                              {subChild.title}
                            </Link>
                          ))}

                        </div>
                      ))}

                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>
      )}

    </nav>
  );
}


/* =================================
   MENU COLUMN
================================= */

function MenuColumn({ item }) {
  return (
    <div>

      <Link
        to={item.url || "/"}
        className="mb-4 block font-semibold text-gray-900"
      >
        {item.title}
      </Link>

      <div className="space-y-3">

        {item.items?.map((child) => (
          <Link
            key={child.id}
            to={child.url || "/"}
            className="block text-sm text-gray-600 hover:text-black"
          >
            {child.title}
          </Link>
        ))}

      </div>

    </div>
  );
}