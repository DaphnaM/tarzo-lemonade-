import LegalPage from '@/components/legal/LegalPage';
import ContactBody from '@/components/legal/ContactBody';

export const metadata = {
  title: 'Contact Us — Paw Policy',
  description: 'Get in touch with PawPolicy.pro for general inquiries, privacy requests, editorial questions, or partnership opportunities.',
};

export default function Page() {
  return (
    <LegalPage theme="light" phoneFrame homeHref="/mobile-pup" title="Contact Us" effectiveDate="May 3, 2026">
      <ContactBody theme="light" />
    </LegalPage>
  );
}
