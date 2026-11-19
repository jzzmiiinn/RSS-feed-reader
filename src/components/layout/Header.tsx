import { useState } from "react";
import { Search, Plus, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Feed", path: "/feed" },
  { name: "Digest", path: "/digest" },
  { name: "Discover", path: "/discover" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-orange-600" : "text-gray-600 hover:text-gray-950"
    }`;

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3">
        <div className="flex flex-1 items-center gap-8">
          <NavLink
            to="/feed"
            className="shrink-0 text-2xl font-bold tracking-tight text-gray-900"
          >
            Frontpage<span className="text-orange-500">.</span>
          </NavLink>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={getLinkClass}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-auto rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 md:hidden"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <div className="order-3 flex w-full items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 transition-colors focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100 sm:order-none sm:w-auto sm:flex-1 sm:max-w-xs">
          <Search size={18} className="shrink-0 text-gray-400" />

          <input
            type="search"
            placeholder="Search articles..."
            aria-label="Search articles"
            className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />

          <kbd className="hidden rounded border border-gray-200 bg-white px-2 py-0.5 text-xs text-gray-400 sm:inline">
            /
          </kbd>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Add feed"
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add Feed</span>
          </button>

          <button
            type="button"
            aria-label="Open profile"
            className="flex size-9 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200"
          >
            Y
          </button>
        </div>

        {isMenuOpen && (
          <nav className="order-4 flex w-full flex-col gap-1 border-t border-gray-100 pt-3 md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-950"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
