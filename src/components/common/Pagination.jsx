export default function Pagination({
  hasNextPage,
  hasPreviousPage,
  onNext,
  onPrevious,
  loading = false,
}) {
  if (!hasNextPage && !hasPreviousPage) {
    return null;
  }

  return (
    <div className="mt-10 flex items-center justify-center gap-3">

      <button
        type="button"
        onClick={onPrevious}
        disabled={!hasPreviousPage || loading}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-black hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Previous
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={!hasNextPage || loading}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-black hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next →
      </button>

    </div>
  );
}