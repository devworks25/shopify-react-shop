import { Link } from "react-router-dom";

export default function LogoSection() {
  return (
    <div className="flex-shrink-0">
      <Link
        to="/"
        className="group flex items-center gap-2"
      >
        {/* Logo Mark */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-xl font-bold text-white transition-transform group-hover:scale-105">
          M
        </div>

        {/* Logo Text */}
        <div className="leading-none">
          <div className="text-xl font-bold tracking-tight text-gray-950">
            My<span className="font-light">Store</span>
          </div>

          <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-gray-400">
            Shop Better
          </div>
        </div>
      </Link>
    </div>
  );
}