interface TestimonialCardProps {
  quote: string;
  rating?: number;
}

export default function TestimonialCard({ quote, rating = 5 }: TestimonialCardProps) {
  const stars = '⭐️'.repeat(rating);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="mb-3">{stars}</div>
      <p className="text-[var(--lemonade-gray)] italic">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}
