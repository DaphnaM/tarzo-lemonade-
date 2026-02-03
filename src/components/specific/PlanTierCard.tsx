import CTAButton from '../shared/CTAButton';

interface PlanTierCardProps {
  name: string;
  description: string;
  highlight?: boolean;
}

export default function PlanTierCard({ name, description, highlight = false }: PlanTierCardProps) {
  return (
    <div className={`p-6 rounded-xl border-2 transition-all ${
      highlight
        ? 'border-[var(--lemonade-pink)] bg-pink-50 shadow-md'
        : 'border-gray-200 bg-white hover:border-gray-300'
    }`}>
      {highlight && (
        <span className="inline-block mb-3 text-xs font-semibold text-[var(--lemonade-pink)] bg-white px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold text-[var(--lemonade-dark)] mb-2">{name}</h3>
      <p className="text-[var(--lemonade-gray)] mb-4">{description}</p>
      <CTAButton variant={highlight ? 'primary' : 'secondary'} size="normal">
        Choose Plan
      </CTAButton>
    </div>
  );
}
