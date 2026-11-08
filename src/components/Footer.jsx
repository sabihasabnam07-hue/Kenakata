import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-12 bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold text-white">Kenakata</h3>
          <p className="mt-3 text-sm leading-relaxed">
            Pochhondo-moto kena-kata, ek jaygay. Shera product, shera dam ar
            druto delivery.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-3 text-base font-medium text-white">Quick links</h4>
          <ul
            className="space-y-2 text-sm
            [&_a]:transition-colors [&_a:hover]:text-amber-400"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="mb-3 text-base font-medium text-white">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Dhaka, Bangladesh</li>
            <li>+880 1234-567890</li>
            <li>support@kenakata.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © 2026 Kenakata. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;