interface Report {
  disease: string;
  confidence: number;
  date: string;
}

function PredictionHistory() {
  const reports: Report[] = JSON.parse(
    localStorage.getItem("predictionHistory") || "[]"
  );

  if (reports.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          📜 Prediction History
        </h2>

        <p className="text-gray-500">
          No previous reports available.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        📜 Prediction History
      </h2>

      <div className="space-y-4">

        {reports.map((report, index) => (

          <div
            key={index}
            className="border rounded-xl p-5 flex justify-between items-center hover:shadow transition"
          >

            <div>

              <h3 className="font-bold text-lg">
                {report.disease}
              </h3>

              <p className="text-gray-500 text-sm">
                {report.date}
              </p>

            </div>

            <div className="text-right">

              <p className="text-blue-700 font-bold text-xl">
                {report.confidence}%
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PredictionHistory;