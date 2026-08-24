import LogoSection from "./LogoSection";
import MegaMenu from "./MainNavigation";
import UserActions from "./UserActions";

export default function Header({ cartCount = 0 }) {
  return (
    <header className="border-b bg-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Desktop Header */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <LogoSection />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <MegaMenu />
          </div>

          {/* Cart / Login / Register */}
          <div className="hidden md:block">
            <UserActions cartCount={cartCount} />
          </div>

        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MegaMenu />
        </div>

      </div>

    </header>
  );
}