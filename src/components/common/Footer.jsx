export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
}