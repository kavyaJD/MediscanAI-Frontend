import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaStethoscope,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-blue-700 font-bold border-b-2 border-blue-700 pb-1"
      : "text-gray-600 hover:text-blue-700 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md border-b">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="bg-blue-700 text-white w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg">

            🩺

          </div>

          <div>

            <h1 className="text-2xl font-bold text-blue-700">

              MediScanAI

            </h1>

            <p className="text-xs text-gray-500">

              AI Healthcare Assistant

            </p>

          </div>

        </Link>

        {/* Navigation */}

        <div className="flex items-center gap-8 text-lg">

          <Link
            to="/"
            className={isActive("/")}
          >
            <div className="flex items-center gap-2">

              <FaHome />

              Home

            </div>

          </Link>

          <Link
            to="/dashboard"
            className={isActive("/dashboard")}
          >
            <div className="flex items-center gap-2">

              <FaChartLine />

              Dashboard

            </div>

          </Link>

          <Link
            to="/diagnosis"
            className={isActive("/diagnosis")}
          >
            <div className="flex items-center gap-2">

              <FaStethoscope />

              Diagnosis

            </div>

          </Link>

          <Link
            to="/analysis"
            className={isActive("/analysis")}
          >
            <div className="flex items-center gap-2">

              <FaBrain />

              AI Analysis

            </div>

          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;