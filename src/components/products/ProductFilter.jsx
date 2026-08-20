export default function ProductFilter({
  search,
  setSearch,
}) {
  return (
    <div className="mb-8 rounded-xl bg-white p-4 shadow-sm">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black"
      />
    </div>
  );
}