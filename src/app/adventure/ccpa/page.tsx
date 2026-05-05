import LegalPage from '@/components/legal/LegalPage';
import CcpaBody from '@/components/legal/CcpaBody';

export const metadata = {
  title: 'CCPA Privacy Notice — Paw Policy',
  description: 'California Consumer Privacy Act notice for visitors and users who reside in California.',
};

export default function Page() {
  return (
    <LegalPage theme="light" homeHref="/adventure" title="CCPA Privacy Notice" effectiveDate="May 3, 2026">
      <CcpaBody theme="light" />
    </LegalPage>
  );
}
