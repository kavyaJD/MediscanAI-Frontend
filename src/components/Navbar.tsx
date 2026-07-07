import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-700"
        >
          🩺 MediScanAI
        </Link>

        <div className="flex gap-8 font-medium">

          <Link
            to="/"
            className="hover:text-blue-700"
          >
            Home
          </Link>

          <Link
            to="/diagnosis"
            className="hover:text-blue-700"
          >
            Diagnosis
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;