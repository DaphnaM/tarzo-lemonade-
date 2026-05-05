import LegalPage from '@/components/legal/LegalPage';
import TermsBody from '@/components/legal/TermsBody';

export const metadata = {
  title: 'Terms of Service — Paw Policy',
  description: 'The Terms of Service governing your access to and use of the PawPolicy.pro website.',
};

export default function Page() {
  return (
    <LegalPage theme="accent" phoneFrame homeHref="/mobile-pink" title="Terms of Service" effectiveDate="May 3, 2026">
      <TermsBody theme="accent" />
    </LegalPage>
  );
}
