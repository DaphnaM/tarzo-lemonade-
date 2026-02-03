interface TrustStripProps {
  items?: string[];
}

export default function TrustStrip({
  items = ["Any licensed vet", "Fast claims", "Plans you control"]
}: TrustStripProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-[var(--lemonade-gray)]">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-green-500">✔</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
