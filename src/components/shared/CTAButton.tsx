interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'normal' | 'large';
  className?: string;
}

const CTA_LINK = "https://www.lemonade.com/?utm_medium=cellxpert_38307_1137699&utm_source=dorbrightsync_rent_us&cxd=38307_1137699&utm_campaign=&utm_content=&utm_term=%5Bafp1%5D";

export default function CTAButton({
  children,
  href = CTA_LINK,
  variant = 'primary',
  size = 'normal',
  className = ''
}: CTAButtonProps) {
  const baseStyles = "inline-block font-semibold rounded-full transition-all duration-200 text-center cursor-pointer";

  const variantStyles = {
    primary: "bg-[var(--lemonade-pink)] text-white hover:bg-[var(--lemonade-pink-hover)] hover:shadow-lg",
    secondary: "bg-white text-[var(--lemonade-pink)] border-2 border-[var(--lemonade-pink)] hover:bg-pink-50"
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
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </a>
  );
}

export { CTA_LINK };
