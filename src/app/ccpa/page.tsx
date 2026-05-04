import Footer from '@/components/shared/Footer';

export const metadata = {
  title: 'CCPA Privacy Notice — Paw Policy',
  description: 'California Consumer Privacy Act notice for visitors and users who reside in California.',
};

export default function CcpaPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-12 text-[#4A4A4A]">
        <p className="text-sm text-[var(--lemonade-gray)] mb-2">PawPolicy.pro</p>
        <h1 className="text-3xl font-bold mb-2">CCPA Privacy Notice</h1>
        <p className="text-sm text-[var(--lemonade-gray)] mb-8">Effective Date: May 3, 2026</p>

        <p className="mb-4 leading-relaxed">
          This California Consumer Privacy Act (&quot;CCPA&quot;) Privacy Notice supplements the PawPolicy.pro Privacy Policy and applies solely to visitors, users, and others who reside in the State of California (&quot;consumers&quot; or &quot;you&quot;). We adopt this notice to comply with the California Consumer Privacy Act of 2018 (CCPA) and its amendments under the California Privacy Rights Act (CPRA). Any terms defined in the CCPA have the same meaning when used in this notice.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
        <p className="mb-2 leading-relaxed">
          We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device. We have collected the following categories of personal information from consumers within the last twelve (12) months:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Identifiers: Such as name, email address, IP address, or other similar identifiers</li>
          <li>Internet or Other Similar Network Activity: Including browsing history, search history, and information regarding a consumer&apos;s interaction with our website</li>
          <li>Geolocation Data: General location based on IP address</li>
          <li>Inferences: Drawn from other personal information to create a profile about a consumer reflecting their preferences, characteristics, and behavior</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          We do not collect the following categories: biometric information, financial information, medical or health information, or information about children.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Use of Personal Information</h2>
        <p className="mb-2 leading-relaxed">
          We may use or disclose the personal information we collect for one or more of the following business purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>To fulfill or meet the reason for which the information is provided</li>
          <li>To provide you with information, products, or services that you request from us</li>
          <li>To provide you with email alerts and other notices concerning our products or services</li>
          <li>To carry out our obligations and enforce our rights arising from any contracts</li>
          <li>To improve our website and present its contents to you</li>
          <li>For testing, research, analysis, and product development</li>
          <li>To respond to law enforcement requests as required by applicable law, court order, or governmental regulations</li>
          <li>As described to you when collecting your personal information or as otherwise set forth in the CCPA</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Sharing Personal Information</h2>
        <p className="mb-4 leading-relaxed">
          We may disclose your personal information to a third party for a business purpose. When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to keep that personal information confidential and not use it for any purpose except performing the contract.
        </p>
        <p className="mb-2 leading-relaxed">
          In the preceding twelve (12) months, we have disclosed the following categories of personal information for business purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Identifiers</li>
          <li>Internet or other similar network activity</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          We do not sell your personal information, as that term is defined under the CCPA.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Your Rights Under the CCPA</h2>
        <p className="mb-4 leading-relaxed">
          The CCPA provides California consumers with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.
        </p>
        <p className="mb-2 leading-relaxed font-semibold">Right to Know:</p>
        <p className="mb-4 leading-relaxed">
          You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months, including: the categories and specific pieces of personal information we have collected; the categories of sources; our business or commercial purpose for collecting; and the categories of third parties with whom we share it.
        </p>
        <p className="mb-2 leading-relaxed font-semibold">Right to Delete:</p>
        <p className="mb-4 leading-relaxed">
          You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions.
        </p>
        <p className="mb-2 leading-relaxed font-semibold">Right to Correct:</p>
        <p className="mb-4 leading-relaxed">
          You have the right to request that we correct inaccurate personal information that we maintain about you.
        </p>
        <p className="mb-2 leading-relaxed font-semibold">Right to Opt-Out of Sale or Sharing:</p>
        <p className="mb-4 leading-relaxed">
          You have the right to direct us to not sell or share your personal information. We do not sell personal information as defined by the CCPA.
        </p>
        <p className="mb-2 leading-relaxed font-semibold">Right to Non-Discrimination:</p>
        <p className="mb-4 leading-relaxed">
          We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not: deny you goods or services; charge you different prices; provide a different level of service; or suggest that you may receive a different price or service level.
        </p>
        <p className="mb-2 leading-relaxed font-semibold">Right to Limit Use of Sensitive Personal Information:</p>
        <p className="mb-4 leading-relaxed">
          You have the right to limit our use and disclosure of your sensitive personal information to what is necessary to provide the services you request.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. How to Exercise Your Rights</h2>
        <p className="mb-2 leading-relaxed">
          To exercise the access, data portability, deletion, or correction rights described above, please submit a verifiable consumer request to us by:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Emailing us at: <a className="text-[var(--accent)] hover:underline" href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a></li>
          <li>Visiting our website: https://pawpolicy.pro/contact</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.
        </p>
        <p className="mb-4 leading-relaxed">
          You may make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must provide sufficient information to allow us to reasonably verify you are the person about whom we collected personal information, and must describe your request with sufficient detail to allow us to properly understand, evaluate, and respond to it.
        </p>
        <p className="mb-4 leading-relaxed">
          We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Response Timing and Format</h2>
        <p className="mb-4 leading-relaxed">
          We endeavor to respond to a verifiable consumer request within forty-five (45) days of its receipt. If we require more time (up to 90 days), we will inform you of the reason and extension period in writing. Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request&apos;s receipt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Contact Information</h2>
        <p className="mb-2 leading-relaxed">
          If you have any questions or comments about this notice, the ways in which we collect and use your information, your choices and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at:
        </p>
        <p className="mb-1 leading-relaxed">
          Email: <a className="text-[var(--accent)] hover:underline" href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
        </p>
        <p className="mb-4 leading-relaxed">Website: https://pawpolicy.pro</p>

        <p className="text-sm text-[var(--lemonade-gray)] mt-12">Last Updated: May 3, 2026</p>
      </article>
      <Footer />
    </main>
  );
}
