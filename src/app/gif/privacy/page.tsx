import LegalPage from '@/components/legal/LegalPage';
import PrivacyBody from '@/components/legal/PrivacyBody';

export const metadata = {
  title: 'Privacy Policy — Paw Policy',
  description: 'How PawPolicy.pro collects, uses, and shares information about visitors to our website.',
};

export default function Page() {
  return (
    <LegalPage theme="light" homeHref="/gif" title="Privacy Policy" effectiveDate="May 3, 2026">
      <PrivacyBody theme="light" />
    </LegalPage>
  );
}
