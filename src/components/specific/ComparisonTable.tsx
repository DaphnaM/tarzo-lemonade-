interface Feature {
  name: string;
  included: boolean;
}

interface ComparisonTableProps {
  features: Feature[];
}

export default function ComparisonTable({ features }: ComparisonTableProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-[var(--lemonade-light-gray)] px-6 py-3 border-b border-gray-200">
        <div className="flex justify-between font-medium text-[var(--lemonade-dark)]">
          <span>Feature</span>
          <span>Included</span>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {features.map((feature, index) => (
          <div key={index} className="flex justify-between items-center px-6 py-4">
            <span className="text-[var(--lemonade-gray)]">{feature.name}</span>
            <span className={feature.included ? "text-green-500 text-xl" : "text-gray-300 text-xl"}>
              {feature.included ? "✅" : "❌"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
