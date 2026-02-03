interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export default function SectionWrapper({
  children,
  className = '',
  background = 'white'
}: SectionWrapperProps) {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-[var(--lemonade-light-gray)]'
  };

  return (
    <section className={`py-16 px-6 ${bgStyles[background]} ${className}`}>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
}
