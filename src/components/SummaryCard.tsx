interface Props {
  selected: number;
}

function SummaryCard({ selected }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        AI Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">

          <span>🧠 Model</span>

          <span className="font-semibold">
            Random Forest
          </span>

        </div>

        <div className="flex justify-between">

          <span>📋 Selected</span>

          <span className="font-semibold">

            {selected}

          </span>

        </div>

        <div className="flex justify-between">

          <span>🩺 Total Symptoms</span>

          <span className="font-semibold">

            132

          </span>

        </div>

      </div>

    </div>
  );
}

export default SummaryCard;