export default function ProductFilter({
  search,
  setSearch,

  minPrice,
  setMinPrice,

  maxPrice,
  setMaxPrice,

  size,
  setSize,

  color,
  setColor,

  onClear,
}) {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["Black", "White", "Blue", "Red"];

  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">

      {/* =========================
          SEARCH
      ========================== */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Search
        </h3>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>


      {/* =========================
          PRICE
      ========================== */}
      <div className="mt-6 border-t pt-6">

        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Price
        </h3>

        <div className="grid grid-cols-2 gap-3">

          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min"
            min="0"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
          />

          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max"
            min="0"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
          />

        </div>

      </div>


      {/* =========================
          SIZE
      ========================== */}
      <div className="mt-6 border-t pt-6">

        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Size
        </h3>

        <div className="flex flex-wrap gap-2">

          {sizes.map((item) => {

            const active = size === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setSize(active ? "" : item)
                }
                className={`rounded-lg border px-3 py-2 text-sm transition ${
                  active
                    ? "border-black bg-black text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-black"
                }`}
              >
                {item}
              </button>
            );
          })}

        </div>

      </div>


      {/* =========================
          COLOR
      ========================== */}
      <div className="mt-6 border-t pt-6">

        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Color
        </h3>

        <div className="space-y-3">

          {colors.map((item) => (

            <label
              key={item}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-600"
            >

              <input
                type="radio"
                name="product-color"
                value={item}
                checked={color === item}
                onChange={() => setColor(item)}
                className="h-4 w-4 accent-black"
              />

              <span>{item}</span>

            </label>

          ))}

        </div>

        {color && (
          <button
            type="button"
            onClick={() => setColor("")}
            className="mt-3 text-xs text-gray-500 underline hover:text-black"
          >
            Clear color
          </button>
        )}

      </div>


      {/* =========================
          CLEAR FILTERS
      ========================== */}
      <div className="mt-6 border-t pt-6">

        <button
          type="button"
          onClick={onClear}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-black hover:bg-gray-50 hover:text-black"
        >
          Clear All Filters
        </button>

      </div>

    </div>
  );
}