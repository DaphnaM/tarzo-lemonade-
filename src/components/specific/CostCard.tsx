interface CostCardProps {
  title: string;
  priceRange: string;
}

export default function CostCard({ title, priceRange }: CostCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
      <h3 className="text-lg font-medium text-[var(--lemonade-dark)] mb-2">{title}</h3>
      <p className="text-[var(--lemonade-pink)] font-bold text-xl">{priceRange}</p>
    </div>
  );
}
