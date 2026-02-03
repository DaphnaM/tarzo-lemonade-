interface ProofStripProps {
  rating?: string;
  highlights?: string[];
}

export default function ProofStrip({
  rating = "⭐️⭐️⭐️⭐️⭐️",
  highlights = ["Rated highly by pet parents", "Fast setup", "Flexible plans"]
}: ProofStripProps) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-sm text-[var(--lemonade-gray)] bg-[var(--lemonade-light-gray)] py-3 px-4 rounded-lg">
      <span>{rating}</span>
      {highlights.map((highlight, index) => (
        <span key={index} className="flex items-center">
          {index > 0 || rating ? <span className="mx-2 text-gray-300">•</span> : null}
          {highlight}
        </span>
      ))}
    </div>
  );
}
