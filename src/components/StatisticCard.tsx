interface Props {
  number: string;
  text: string;
}

function StatisticCard({ number, text }: Props) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-600 p-8 text-center">

      <h2 className="text-5xl font-extrabold text-blue-700">
        {number}
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        {text}
      </p>

    </div>
  );
}

export default StatisticCard;