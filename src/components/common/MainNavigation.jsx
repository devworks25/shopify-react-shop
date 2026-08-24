import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getShopifyMenu } from "../../services/commonServices";

export default function MegaMenu() {
  const [menu, setMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const data = await getShopifyMenu("main-menu");
        setMenu(data);
      } catch (error) {
        console.error("Failed to load Shopify menu:", error);
      }
    };

    loadMenu();
  }, []);

  const toggleMenu = (menuId) => {
    setOpenMenu((current) =>
      current === menuId ? null : menuId
    );
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  if (!menu) {
    return null;
  }

  return (
    <nav className="w-full">

      {/* =================================
          DESKTOP MENU
      ================================= */}
      <div className="hidden items-center justify-center gap-8 md:flex">

        {menu.items?.map((level1) => {

          const hasChildren =
            level1.items?.length > 0;

          {/* LEVEL 1 - NORMAL LINK */}

          if (!hasChildren) {
            return (
              <Link
                key={level1.id}
                to={getRoute(level1.url)}
                className="text-sm text-gray-600 hover:text-black"
              >
                {level1.title}
              </Link>
            );
          }

          {/* LEVEL 1 - MEGA MENU */}

          return (
            <div
              key={level1.id}
              className="relative"
              onMouseEnter={() =>
                setOpenMenu(level1.id)
              }
              onMouseLeave={() =>
                setOpenMenu(null)
              }
            >

              <button
                type="button"
                className="text-sm text-gray-600 hover:text-black"
              >
                {level1.title}
              </button>

              {openMenu === level1.id && (

                <div className="absolute left-1/2 top-full z-50 w-[700px] -translate-x-1/2 pt-5">

                  <div className="grid grid-cols-3 gap-8 rounded-lg border bg-white p-6 shadow-xl">

                    {/* LEVEL 2 */}

                    {level1.items.map((level2) => (

                      <DesktopMenuColumn
                        key={level2.id}
                        item={level2}
                      />

                    ))}

                  </div>

                </div>
              )}

            </div>
          );
        })}

      </div>


      {/* =================================
          MOBILE BUTTON
      ================================= */}

      <div className="flex justify-end md:hidden">

        <button
          type="button"
          onClick={() => {
            setMobileOpen((current) => !current);
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

            {menu.items?.map((level1) => {

              const hasChildren =
                level1.items?.length > 0;

              {/* LEVEL 1 - NORMAL LINK */}

              if (!hasChildren) {
                return (
                  <Link
                    key={level1.id}
                    to={getRoute(level1.url)}
                    onClick={closeMobileMenu}
                    className="block px-4 py-4 text-sm font-medium text-gray-700"
                  >
                    {level1.title}
                  </Link>
                );
              }

              {/* LEVEL 1 - DROPDOWN */}

              return (
                <MobileMenuLevel1
                  key={level1.id}
                  item={level1}
                  openMenu={openMenu}
                  toggleMenu={toggleMenu}
                  closeMenu={closeMobileMenu}
                />
              );
            })}

          </div>

        </div>
      )}

    </nav>
  );
}


/* =================================
   DESKTOP LEVEL 2
================================= */

function DesktopMenuColumn({ item }) {

  const hasChildren =
    item.items?.length > 0;

  return (
    <div>

      {/* LEVEL 2 TITLE */}

      <Link
        to={getRoute(item.url)}
        className="mb-4 block font-semibold text-gray-900 hover:text-black"
      >
        {item.title}
      </Link>


      {/* LEVEL 3 */}

      {hasChildren && (

        <div className="space-y-3">

          {item.items.map((level3) => (

            <Link
              key={level3.id}
              to={getRoute(level3.url)}
              className="block text-sm text-gray-600 hover:text-black"
            >
              {level3.title}
            </Link>

          ))}

        </div>

      )}

    </div>
  );
}


/* =================================
   MOBILE LEVEL 1
================================= */

function MobileMenuLevel1({
  item,
  openMenu,
  toggleMenu,
  closeMenu,
}) {

  const menuId = `mobile-${item.id}`;

  return (
    <div>

      {/* LEVEL 1 */}

      <button
        type="button"
        onClick={() => toggleMenu(menuId)}
        className="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-gray-700"
      >

        <span>
          {item.title}
        </span>

        <span className="text-lg">
          {openMenu === menuId ? "−" : "+"}
        </span>

      </button>


      {/* LEVEL 2 */}

      {openMenu === menuId && (

        <div className="bg-gray-50 px-8 py-3">

          {item.items?.map((level2) => (

            <MobileMenuLevel2
              key={level2.id}
              item={level2}
              closeMenu={closeMenu}
            />

          ))}


          {/* VIEW ALL */}

          {item.url && (

            <Link
              to={getRoute(item.url)}
              onClick={closeMenu}
              className="block py-3 text-sm font-semibold text-black"
            >
              View All {item.title} →
            </Link>

          )}

        </div>
      )}

    </div>
  );
}


/* =================================
   MOBILE LEVEL 2
================================= */

function MobileMenuLevel2({
  item,
  closeMenu,
}) {

  const [open, setOpen] = useState(false);

  const hasChildren =
    item.items?.length > 0;

  {/* LEVEL 2 WITHOUT LEVEL 3 */}

  if (!hasChildren) {
    return (
      <Link
        to={getRoute(item.url)}
        onClick={closeMenu}
        className="block py-2 text-sm text-gray-600 hover:text-black"
      >
        {item.title}
      </Link>
    );
  }


  return (
    <div className="border-b border-gray-200 last:border-0">

      {/* LEVEL 2 */}

      <div className="flex items-center justify-between">

        <Link
          to={getRoute(item.url)}
          onClick={closeMenu}
          className="py-3 text-sm font-medium text-gray-700"
        >
          {item.title}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="px-3 py-2 text-lg text-gray-600"
        >
          {open ? "−" : "+"}
        </button>

      </div>


      {/* LEVEL 3 */}

      {open && (

        <div className="pb-2 pl-4">

          {item.items.map((level3) => (

            <Link
              key={level3.id}
              to={getRoute(level3.url)}
              onClick={closeMenu}
              className="block py-2 text-sm text-gray-500 hover:text-black"
            >
              {level3.title}
            </Link>

          ))}

        </div>

      )}

    </div>
  );
}


/* =================================
   SHOPIFY URL → REACT ROUTE
================================= */

function getRoute(url) {

  if (!url) {
    return "/";
  }

  try {

    const parsedUrl = new URL(url);

    return parsedUrl.pathname + parsedUrl.search;

  } catch {

    return url;

  }
}