'use client';

declare function conv(): void;

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'normal' | 'large';
  className?: string;
}

const CTA_LINK = "https://mecondstutiolin.com/click";

export default function CTAButton({
  children,
  href = CTA_LINK,
  variant = 'primary',
  size = 'normal',
  className = ''
}: CTAButtonProps) {
  const baseStyles = "inline-block font-semibold rounded-full transition-all duration-200 text-center cursor-pointer";

  const variantStyles = {
    primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] hover:shadow-lg",
    secondary: "bg-white text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-blue-50"
  };

  const sizeStyles = {
    normal: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => { if (typeof conv === 'function') conv(); }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      suppressHydrationWarning
    >
      {children}
    </a>
  );
}

export { CTA_LINK };
