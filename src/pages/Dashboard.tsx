import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SummaryCard from "../components/SummaryCard";
import {
  FaFileMedical,
  FaHeartbeat,
  FaChartLine,
  FaBrain,
  FaArrowRight,
  FaHistory,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Report {
  disease: string;
  confidence: number;
  symptoms: string[];
  date: string;
}

function Dashboard() {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("predictionHistory");

    if (stored) {
      setReports(JSON.parse(stored));
    }
  }, []);

  const latest = reports[0];

  const averageConfidence =
    reports.length > 0
      ? (
          reports.reduce(
            (sum, report) => sum + report.confidence,
            0
          ) / reports.length
        ).toFixed(1)
      : "0";

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10">

        <div className="max-w-7xl mx-auto px-6">

          {/* Welcome */}

          <div className="mb-10">

            <h1 className="text-5xl font-bold text-blue-700">

              👋 Welcome Back

            </h1>

            <p className="text-gray-600 mt-3 text-lg">

              Your AI Health Dashboard

            </p>

          </div>

          {/* Statistics */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <SummaryCard
              selected={reports.length}
            />

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <div className="flex items-center gap-3">

                <FaHeartbeat className="text-red-500 text-3xl" />

                <div>

                  <h2 className="font-semibold">

                    Last Diagnosis

                  </h2>

                  <p className="text-gray-500 text-sm">

                    Latest Prediction

                  </p>

                </div>

              </div>

              <h1 className="text-3xl font-bold mt-6">

                {latest
                  ? latest.disease
                  : "--"}

              </h1>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <div className="flex items-center gap-3">

                <FaChartLine className="text-green-600 text-3xl" />

                <div>

                  <h2 className="font-semibold">

                    Avg Confidence

                  </h2>

                  <p className="text-gray-500 text-sm">

                    AI Accuracy

                  </p>

                </div>

              </div>

              <h1 className="text-3xl font-bold mt-6">

                {averageConfidence}%

              </h1>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <div className="flex items-center gap-3">

                <FaBrain className="text-blue-700 text-3xl" />

                <div>

                  <h2 className="font-semibold">

                    AI Status

                  </h2>

                  <p className="text-gray-500 text-sm">

                    System Health

                  </p>

                </div>

              </div>

              <h1 className="text-3xl font-bold mt-6 text-green-600">

                Online

              </h1>

            </div>

          </div>

                    {/* Quick Actions */}

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <Link
              to="/diagnosis"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-6 shadow-lg transition hover:scale-105"
            >
              <FaHeartbeat className="text-4xl mb-4" />

              <h2 className="text-2xl font-bold">
                New Diagnosis
              </h2>

              <p className="mt-2 text-blue-100">
                Start a new AI health assessment.
              </p>

              <div className="flex justify-end mt-6">
                <FaArrowRight />
              </div>

            </Link>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

              <FaHistory className="text-4xl text-blue-700 mb-4" />

              <h2 className="text-2xl font-bold">

                Reports

              </h2>

              <p className="text-gray-500 mt-2">

                {reports.length} reports available

              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

              <FaFileMedical className="text-4xl text-green-600 mb-4" />

              <h2 className="text-2xl font-bold">

                Health Analytics

              </h2>

              <p className="text-gray-500 mt-2">

                View your prediction statistics

              </p>

            </div>

          </div>


          {/* Recent Reports */}

          <div className="bg-white rounded-2xl shadow-lg mt-10 p-8">

            <h2 className="text-3xl font-bold text-blue-700 mb-6">

              📋 Recent Reports

            </h2>

            {reports.length === 0 ? (

              <div className="text-center py-12">

                <p className="text-gray-500 text-lg">

                  No reports available.

                </p>

                <Link
                  to="/diagnosis"
                  className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
                >
                  Create Your First Report
                </Link>

              </div>

            ) : (

              <div className="space-y-5">

                {reports.slice(0, 5).map((report, index) => (

                  <div
                    key={index}
                    className="border rounded-xl p-5 hover:bg-blue-50 transition"
                  >

                    <div className="flex justify-between items-center">

                      <div>

                        <h3 className="text-xl font-bold">

                          {report.disease}

                        </h3>

                        <p className="text-gray-500">

                          {report.date}

                        </p>

                      </div>

                      <div className="text-right">

                        <p className="text-green-600 font-bold text-xl">

                          {report.confidence}%

                        </p>

                        <p className="text-gray-500 text-sm">

                          Confidence

                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

                  {/* Health Insights */}

          <div className="grid lg:grid-cols-2 gap-8 mt-10">

            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h2 className="text-2xl font-bold text-blue-700 mb-6">

                📊 Health Insights

              </h2>

              <div className="space-y-6">

                <div>

                  <div className="flex justify-between mb-2">

                    <span>Total Reports</span>

                    <span className="font-bold">
                      {reports.length}
                    </span>

                  </div>

                  <div className="w-full bg-gray-200 h-3 rounded-full">

                    <div
                      className="bg-blue-600 h-3 rounded-full"
                      style={{
                        width: `${Math.min(
                          reports.length * 10,
                          100
                        )}%`,
                      }}
                    />

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-2">

                    <span>Average Confidence</span>

                    <span className="font-bold">

                      {averageConfidence}%

                    </span>

                  </div>

                  <div className="w-full bg-gray-200 h-3 rounded-full">

                    <div
                      className="bg-green-500 h-3 rounded-full"
                      style={{
                        width: `${averageConfidence}%`,
                      }}
                    />

                  </div>

                </div>

              </div>

            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">

                🤖 AI Health Assistant

              </h2>

              <p className="leading-8">

                MediScanAI analyzes your selected symptoms using a trained
                Random Forest Machine Learning model to estimate possible
                diseases.

              </p>

              <div className="mt-8 bg-white/20 rounded-xl p-4">

                <p className="font-semibold">

                  💡 Tip

                </p>

                <p className="mt-2 text-sm">

                  Selecting 4–6 relevant symptoms generally produces
                  better prediction confidence.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Dashboard;  