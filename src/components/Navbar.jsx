import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold text-blue-600">
          Kenakata
        </Link>

        {/* Mobile menu toggle */}
        <input type="checkbox" id="menu-toggle" className="peer hidden" />
        <label
          htmlFor="menu-toggle"
          aria-label="Menu"
          className="cursor-pointer text-3xl text-gray-900 md:hidden"
        >
          ☰
        </label>

        {/* Links */}
        <ul
          className="absolute left-0 right-0 top-full hidden flex-col border-b border-gray-200 bg-white peer-checked:flex md:static md:flex md:flex-row md:gap-6 md:border-0 md:bg-transparent
          [&_a]:border-b-2 [&_a]:border-transparent [&_a]:pb-1 [&_a]:text-[15px] [&_a]:text-gray-700 [&_a]:transition-colors
          [&_a:hover]:text-blue-600
          [&_a.active]:border-blue-600 [&_a.active]:text-blue-600"
        >
          <li className="px-5 py-3 md:p-0">
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li className="px-5 py-3 md:p-0">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="px-5 py-3 md:p-0">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="px-5 py-3 md:p-0">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;