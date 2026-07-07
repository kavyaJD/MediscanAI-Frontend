import type { IconType } from "react-icons";
interface Props {
  icon: IconType;
  title: string;
  description: string;
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-3xl">

        <Icon />

      </div>

      <h2 className="mt-6 text-2xl font-bold">

        {title}

      </h2>

      <p className="mt-3 text-gray-600">

        {description}

      </p>

    </div>
  );
}

export default FeatureCard;