import { FaBrain, FaHeartbeat, FaClipboardCheck } from "react-icons/fa";

interface Props {
  selected: number;
}

function SummaryCard({ selected }: Props) {
  const progress = (selected / 132) * 100;

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sticky top-24">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <div className="bg-blue-100 p-3 rounded-2xl">
          <FaBrain className="text-blue-700 text-2xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            AI Health Summary
          </h2>

          <p className="text-gray-500 text-sm">
            Live assessment overview
          </p>
        </div>

      </div>

      {/* Progress */}
      <div className="mb-8">

        <div className="flex justify-between mb-2 text-sm">

          <span className="font-medium">
            Symptoms Selected
          </span>

          <span className="font-bold text-blue-700">
            {selected}/132
          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">

          <div
            className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Statistics */}

      <div className="space-y-5">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2">

            <FaBrain className="text-blue-600" />

            <span>AI Model</span>

          </div>

          <span className="font-semibold">
            Random Forest
          </span>

        </div>

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2">

            <FaClipboardCheck className="text-green-600" />

            <span>Selected</span>

          </div>

          <span className="font-semibold">
            {selected}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2">

            <FaHeartbeat className="text-red-500" />

            <span>Total Symptoms</span>

          </div>

          <span className="font-semibold">
            132
          </span>

        </div>

      </div>

      {/* AI Status */}

      <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-4">

        <div className="flex items-center justify-between">

          <span className="font-medium">
            AI Status
          </span>

          <span className="text-green-700 font-bold">
            🟢 Online
          </span>

        </div>

      </div>

      {/* Recommendation */}

      <div className="mt-6 bg-blue-50 rounded-2xl p-4">

        <h3 className="font-semibold text-blue-700 mb-2">
          Recommendation
        </h3>

        <p className="text-sm text-gray-600 leading-6">

          Select at least <strong>4–6 symptoms</strong> for more
          reliable AI predictions. More relevant symptoms generally
          improve the model's confidence.

        </p>

      </div>

    </div>
  );
}

export default SummaryCard;